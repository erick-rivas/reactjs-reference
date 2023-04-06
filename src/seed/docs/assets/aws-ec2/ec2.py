import sys
import subprocess
import json
from time import sleep

class Instance:

    def __init__(self, instance_id, instance_name, elastic_ip, elastic_id, hosted_zone_id, domain):
        self.instance_id = instance_id
        self.instance_name = instance_name
        self.elastic_ip = elastic_ip
        self.elastic_id = elastic_id
        self.hosted_zone_id = hosted_zone_id
        self.domain = domain

    def __str__(self):
        return self.instance_id + " - " + self.instance_name + " - " + self.hosted_zone_id + " - " + self.record_set_name
    
    def start(self):

        if self.instance_id == "":
            print("Instance is not in .aws.env file")
            return
        
        subprocess.check_output(f"aws ec2 start-instances --instance-ids {self.instance_id}", shell=True)
        print("Instance started successfully")

        print("Waiting for running")
        subprocess.check_output(f"aws ec2 wait instance-running --instance-ids {self.instance_id}", shell=True)

    def stop(self):

        if self.instance_id == "":
            print("Instance is not in .aws.env file")
            return

        subprocess.check_output(f"aws ec2 stop-instances --instance-ids {self.instance_id}", shell=True)
        print("Instance stopped successfully")

        print("Waiting for stopped")
        subprocess.check_output(f"aws ec2 wait instance-stopped --instance-ids {self.instance_id}", shell=True)

    def restart(self):

        if self.instance_id == "":
            print("Instance is not in .aws.env file")
            return

        subprocess.check_output(f"aws ec2 reboot-instances --instance-ids {self.instance_id}", shell=True)
        print("Instance restarted successfully")

        print("Waiting for running")
        subprocess.check_output(f"aws ec2 wait instance-running --instance-ids {self.instance_id}", shell=True)

    def allocate_ip(self):

        if self.instance_id == "":
            print("Instance is not in .aws.env file")
            return

        elastic_ip_result = subprocess.check_output("aws ec2 allocate-address", shell=True)
        elastic_ip_result = json.loads(elastic_ip_result)
        elastic_ip = elastic_ip_result["PublicIp"].replace("\n", "").strip()
        elastic_id = elastic_ip_result["AllocationId"].replace("\n", "").strip()
        print(f"Elastic IP {elastic_ip} allocated successfully")
        
        print("Waiting for ip to be available")
        sleep(5)

        subprocess.check_output(f"aws ec2 associate-address --instance-id {self.instance_id} --allocation-id " + elastic_id, shell=True)
        print("Elastic IP associated successfully")
        
        self.elastic_ip = elastic_ip
        self.elastic_id = elastic_id

    def create_subdomain(self, project_name):

        if self.elastic_ip == "":
            print("Elastic IP is not in .aws.env file")
            return
        
        if self.hosted_zone_id == "":
            print("Hosted zone is not in .aws.env file")
            return
        
        if self.domain == "":
            print("Domain is not in .aws.env file")
            return
        
        subdomain_json = {
            "Comment": f"Create {project_name} subdomain",
            "Changes": [
                {
                    "Action": "CREATE",
                    "ResourceRecordSet": {
                        "Name": f"{project_name}.{self.domain}",
                        "Type": "A",
                        "TTL": 300,
                        "ResourceRecords": [{ "Value": self.elastic_ip}]
                    }
                }
            ]
        }

        with open(".aws.subdomain.json", "w") as subdomain_file:
            json.dump(subdomain_json, subdomain_file, indent=4)

        subprocess.check_output(f"aws route53 change-resource-record-sets --hosted-zone-id {self.hosted_zone_id} --change-batch file://.aws.subdomain.json", shell=True)
        print("Subdomain created successfully")

    def get_env(self):
        return {
            "INSTANCE_ID": self.instance_id,
            "INSTANCE_NAME": self.instance_name,
            "ELASTIC_IP": self.elastic_ip,
            "ELASTIC_ID": self.elastic_id,
            "HOSTED_ZONE_ID": self.hosted_zone_id,
            "DOMAIN": self.domain
        }
    
env = {}

if len(sys.argv) < 2:
    print("Invalid arguments")
    print("Usage: python ec2.py [command]")
    print("Example: python ec2.py start")
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
aws_instance = Instance(env["INSTANCE_ID"], env["INSTANCE_NAME"], env["ELASTIC_IP"], env["ELASTIC_ID"], env["HOSTED_ZONE_ID"], env["DOMAIN"])

if command == "start": aws_instance.start()
elif command == "stop": aws_instance.stop()
elif command == "restart": aws_instance.restart()
elif command == "allocate-ip": aws_instance.allocate_ip()
elif command == "create-subdomain": aws_instance.create_subdomain(env["PROJECT_NAME"])
else: print("Invalid command, available commands: start, stop, restart, allocate-ip")

replace_env(aws_instance.get_env())
save_env_file()