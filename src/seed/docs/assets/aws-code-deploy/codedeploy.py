import os
import sys
import subprocess
import json
import random
from time import sleep

class CodeDeploy:

    def __init__(self, cdapp_name, cddg_name, cdpl_name, artifact_bucket):
        self.cdapp_name = cdapp_name
        self.cddg_name = cddg_name
        self.cdpl_name = cdpl_name
        self.artifact_bucket = artifact_bucket

    def __str__(self):
        return self.instance_id
    
    def config(self, instance_id, project_name):

        if instance_id == "":
            print("Instance is not in .aws.env file")
            return
        
        instance_status = subprocess.check_output(f"aws ec2 describe-instances --instance-ids {instance_id} --output text --query 'Reservations[*].Instances[*].State.Name'", shell=True)
        instance_status = instance_status.decode("utf-8").strip()
        
        if instance_status != "running" and instance_status != "stoppped":
            print("Instance is not running or stopped")
            return
        
        print("Creating role")
        subprocess.check_output(f"aws iam create-role --role-name role_{project_name} --assume-role-policy-document file://src/seed/docs/assets/aws-code-deploy/policies/ec2_trust_policy.json", shell=True)
        subprocess.check_output(f"aws iam attach-role-policy --role-name role_{project_name} --policy-arn arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess", shell=True)

        print("Attaching to IAM")
        subprocess.check_output(f"aws iam create-instance-profile --instance-profile-name insp_{project_name}", shell=True)
        subprocess.check_output(f"aws iam add-role-to-instance-profile --role-name role_{project_name} --instance-profile-name insp_{project_name}", shell=True)

        sleep(15)

        print("Attaching role")
        subprocess.check_output(f"aws ec2 associate-iam-instance-profile --instance-id {instance_id} --iam-instance-profile Name=insp_{project_name}", shell=True)

    def install22(self, bucket_name, region):

        print("Installing CodeDeploy")

        subprocess.check_output(f"sudo apt-get install ruby-full ruby-webrick wget -y", shell=True)
        subprocess.check_output(f"mkdir ./tmp && cd .//tmp", shell=True)
        subprocess.check_output(f"wget https://{bucket_name}.s3.{region}.amazonaws.com/releases/codedeploy-agent_1.3.2-1902_all.deb", shell=True)
        subprocess.check_output(f"mkdir codedeploy-agent_1.3.2-1902_ubuntu22", shell=True)
        subprocess.check_output(f"dpkg-deb -R codedeploy-agent_1.3.2-1902_all.deb codedeploy-agent_1.3.2-1902_ubuntu22", shell=True)
        subprocess.check_output(f"sed 's/Depends:.*/Depends:ruby3.0/' -i ./codedeploy-agent_1.3.2-1902_ubuntu22/DEBIAN/control", shell=True)
        subprocess.check_output(f"dpkg-deb -b codedeploy-agent_1.3.2-1902_ubuntu22/", shell=True)
        subprocess.check_output(f"sudo dpkg -i codedeploy-agent_1.3.2-1902_ubuntu22.deb", shell=True)
        subprocess.check_output(f"sudo systemctl list-units --type=service | grep codedeploy", shell=True)
        subprocess.check_output(f"sudo service codedeploy-agent status", shell=True)
        subprocess.check_output(f"cd .. && rm -rf ./tmp", shell=True)

        print("CodeDeploy installed")

    def install20(self, bucket_name, region):

        print("Installing CodeDeploy")

        subprocess.check_output(f"sudo apt update -y", shell=True)
        subprocess.check_output(f"sudo apt install ruby-full -y", shell=True)
        subprocess.check_output(f"sudo apt install wget -y", shell=True)
        subprocess.check_output(f"wget https://{bucket_name}.s3.{region}.amazonaws.com/latest/install", shell=True)
        subprocess.check_output(f"chmod +x ./install", shell=True)
        subprocess.check_output(f"sudo ./install auto > /tmp/logfile", shell=True)
        subprocess.check_output(f"sudo service codedeploy-agent status", shell=True)
        subprocess.check_output(f"rm ./install", shell=True)
        subprocess.check_output(f"cp src/seed/docs/assets/aws-code-deploy/appspec.yml ./appspec.yml", shell=True)

        print("CodeDeploy installed")

    def create_app(self, project_name):
        print("Creating CD application")
        info_result = subprocess.check_output(f"aws deploy create-application --application-name app_{project_name}", shell=True)
        info_result = json.loads(info_result)
        app_id = info_result["applicationId"]
        self.cdapp_name = f"app_{project_name}"

    def create_dg(self, instance_name, project_name):

        print("Creating CD role")
        result = subprocess.check_output(f"aws iam create-role --role-name cd_role_{project_name} --assume-role-policy-document file://src/seed/docs/assets/aws-code-deploy/policies/cd_trust_policy.json", shell=True)
        result = json.loads(result)
        arn_role_cd = result["Role"]["Arn"]

        print("Attaching policies to CD role")
        subprocess.check_output(f"aws iam attach-role-policy --role-name cd_role_{project_name} --policy-arn arn:aws:iam::aws:policy/service-role/AWSCodeDeployRole", shell=True)

        print("Creating deployment group")
        sleep(30)
        info_result = subprocess.check_output(
            f"aws deploy create-deployment-group --application-name {self.cdapp_name} --deployment-config-name CodeDeployDefault.AllAtOnce --deployment-group-name dg_{project_name} " +
            f"--ec2-tag-filters Key=Name,Value={instance_name},Type=KEY_AND_VALUE --service-role-arn {arn_role_cd}",
            shell=True
        )
        info_result = json.loads(info_result)
        self.cddg_name = f"dg_{project_name}"
   
    def create_pl(self, region, project_name, arn_connection, repository):

        print("Creating S3 bucket")
        s3_name = f"{project_name}-seed-{random.randint(100000, 999999)}"
        s3_result = subprocess.check_output(f"aws s3api create-bucket --bucket {s3_name} --region {region} --create-bucket-configuration LocationConstraint={region}", shell=True)
        self.artifact_bucket = s3_name

        sleep(20)

        print("Creating CodePipeline role")
        result = subprocess.check_output(f"aws iam create-role --role-name cp_role_{project_name} --assume-role-policy-document file://src/seed/docs/assets/aws-code-deploy/policies/cp_trust_policy.json", shell=True)
        result = json.loads(result)
        arn_role_pl = result["Role"]["Arn"]

        print("Attaching policies to CodePipeline role")
        subprocess.check_output(f"aws iam put-role-policy --role-name cp_role_{project_name} --policy-name policy_{project_name} --policy-document file://src/seed/docs/assets/aws-code-deploy/policies/cp_policy.json", shell=True)     
        
        pipeline_json = {
            "pipeline": {
                "name": project_name,
                "roleArn": arn_role_pl,
                "artifactStore": {
                    "type": "S3",
                    "location": s3_name
                },
                "stages": [
                    {
                        "name": "Source",
                        "actions": [
                            {
                                "name": "Source",
                                "actionTypeId": {
                                    "category": "Source",
                                    "owner": "AWS",
                                    "provider": "CodeStarSourceConnection",
                                    "version": "1"
                                },
                                "runOrder": 1,
                                "configuration": {
                                    "BranchName": "main",
                                    "ConnectionArn": arn_connection,
                                    "FullRepositoryId": repository,
                                    "OutputArtifactFormat": "CODE_ZIP"
                                },
                                "outputArtifacts": [
                                    {
                                        "name": "SourceArtifact"
                                    }
                                ],
                                "inputArtifacts": [],
                                "region": "us-west-1",
                                "namespace": "SourceVariables"
                            }
                        ]
                    },
                    {
                        "name": "Deploy",
                        "actions": [
                            {
                                "name": "Deploy",
                                "actionTypeId": {
                                    "category": "Deploy",
                                    "owner": "AWS",
                                    "provider": "CodeDeploy",
                                    "version": "1"
                                },
                                "runOrder": 1,
                                "configuration": {
                                    "ApplicationName": self.cdapp_name,
                                    "DeploymentGroupName": self.cddg_name
                                },
                                "outputArtifacts": [],
                                "inputArtifacts": [
                                    {
                                        "name": "SourceArtifact"
                                    }
                                ],
                                "region": region,
                                "namespace": "DeployVariables"
                            }
                        ]
                    }
                ],
                "version": 1
            }
        } 

        with open(".aws.pipeline.json", "w") as pipeline_file:
            json.dump(pipeline_json, pipeline_file, indent=4)

        sleep(15)

        print("Creating CodePipeline")
        pl_result = subprocess.check_output(f"aws codepipeline create-pipeline --cli-input-json file://.aws.pipeline.json", shell=True)
        pl_result = json.loads(pl_result)
        self.pl_name = pl_result["pipeline"]["name"]

    def get_env(self):
        return {
            "CDAPP_NAME": self.cdapp_name,
            "CDDG_NAME": self.cddg_name,
            "CDPL_NAME": self.cdpl_name,
            "ARTIFACT_BUCKET": self.artifact_bucket
        }
    
env = {}

if len(sys.argv) < 2:
    print("Invalid arguments")
    print("Usage: python codedeploy.py [command]")
    print("Example: python codedeploy.py create-app")
    exit()

command = sys.argv[1]

def load_env_file():
    with open(".aws.env", "r") as f:
        for line in f:
            if line.startswith("#") or line == "" or line == "\n": continue
            key, value = line.split("=")
            env[key] = value.strip()

def save_env_file():

    print("Saving .aws.env file...")
    
    env_content = ""
    env_content += "# AWS\n"
    env_content += "BUCKET_NAME=" + env["BUCKET_NAME"] + "\n"
    env_content += "REGION=" + env["REGION"] + "\n"
    env_content += "OUTPUT=" + env["OUTPUT"] + "\n"
    env_content += "AWS_ACCESS_KEY_ID=" + env["AWS_ACCESS_KEY_ID"] + "\n"
    env_content += "AWS_SECRET_ACCESS_KEY=" + env["AWS_SECRET_ACCESS_KEY"] + "\n"
    env_content += "\n"

    env_content += "# Github\n"
    env_content += "ARN_CONNECTION=" + env["ARN_CONNECTION"] + "\n"
    env_content += "REPOSITORY=" + env["REPOSITORY"] + "\n"
    env_content += "\n"

    env_content += "# Globals\n"
    env_content += "PROJECT_NAME=" + env["PROJECT_NAME"] + "\n"
    env_content += "\n"

    env_content += "# Instance\n"
    env_content += "INSTANCE_ID=" + env["INSTANCE_ID"] + "\n"
    env_content += "INSTANCE_NAME=" + env["INSTANCE_NAME"] + "\n"
    env_content += "\n"

    env_content += "# CodeDeploy\n"
    env_content += "CDAPP_NAME=" + env["CDAPP_NAME"] + "\n"
    env_content += "CDDG_NAME=" + env["CDDG_NAME"] + "\n"
    env_content += "\n"

    env_content += "# CodePipeline\n"
    env_content += "ARTIFACT_BUCKET=" + env["ARTIFACT_BUCKET"] + "\n"
    env_content += "CDPL_NAME=" + env["CDPL_NAME"] + "\n"
    env_content += "\n"

    env_content += "# Route53\n"
    env_content += "ELASTIC_IP=" + env["ELASTIC_IP"] + "\n"
    env_content += "ELASTIC_ID=" + env["ELASTIC_ID"] + "\n"
    env_content += "HOSTED_ZONE_ID=" + env["HOSTED_ZONE_ID"] + "\n"
    env_content += "DOMAIN=" + env["DOMAIN"] + "\n"

    with open(".aws.env", "w") as f: f.write(env_content)

def replace_env(data):
    for key in data:
        env[key] = data[key]

load_env_file()
codedeploy_instance = CodeDeploy(env["CDAPP_NAME"], env["CDDG_NAME"], env["CDPL_NAME"], env["ARTIFACT_BUCKET"])

if command == "config": codedeploy_instance.config(env["INSTANCE_ID"], env["PROJECT_NAME"])
elif command == "install-22": codedeploy_instance.install22(env["BUCKET_NAME"], env["REGION"])
elif command == "install-20": codedeploy_instance.install20(env["BUCKET_NAME"], env["REGION"])
elif command == "create-app": codedeploy_instance.create_app(env["PROJECT_NAME"])
elif command == "create-dg": codedeploy_instance.create_dg(env["INSTANCE_NAME"], env["PROJECT_NAME"])
elif command == "create-pl": codedeploy_instance.create_pl(env["REGION"], env["PROJECT_NAME"], env["ARN_CONNECTION"], env["REPOSITORY"])
else: print("Invalid command, available commands: config, install-22, install-20, create-app, create-dg, create-pl")

replace_env(codedeploy_instance.get_env())
save_env_file()