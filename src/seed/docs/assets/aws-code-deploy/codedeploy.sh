source .aws.env

if [ "$1" == "--config" ]; then

    STATUS=$(aws ec2 describe-instances --instance-ids $INSTANCE_ID --output text --query 'Reservations[*].Instances[*].State.Name')

    if [ "$EXISTS" != "\"InstanceId\": \"$INSTANCE_ID\"," ]; then
        if [ "$STATUS" == "running" ] || [ "$STATUS" == "stoppped" ]; then

            echo Creating role
            ROLE_INFO=$(aws iam create-role --role-name role_$PROJECT_NAME --assume-role-policy-document file://seed/docs/assets/aws-code-deploy/trust_policy.json)
            ATTACH_INFO=$(aws iam attach-role-policy --role-name role_$PROJECT_NAME --policy-arn arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess)

            echo Attaching to IAM
            IAM_CINFO=$(aws iam create-instance-profile --instance-profile-name insp_$PROJECT_NAME)
            IAM_AINFO=$(aws iam add-role-to-instance-profile --role-name role_$PROJECT_NAME --instance-profile-name insp_$PROJECT_NAME)

            sleep 15
            echo Associating role
            EC2_INFO=$(aws ec2 associate-iam-instance-profile --instance-id $INSTANCE_ID --iam-instance-profile Name=insp_$PROJECT_NAME)

        else
            echo Cannot access to instance, run the command again in few seconds
        fi

    else

        echo Instance not exists

    fi

    exit

fi

if [ "$1" == "--install" ]; then

    if ["$2" == "22"]; then
        
        sudo apt-get install ruby-full ruby-webrick wget -y
        mkdir /tmp && cd /tmp
        wget https://$BUCKET_NAME.s3.$REGION.amazonaws.com/releases/codedeploy-agent_1.3.2-1902_all.deb

        mkdir codedeploy-agent_1.3.2-1902_ubuntu22
        dpkg-deb -R codedeploy-agent_1.3.2-1902_all.deb codedeploy-agent_1.3.2-1902_ubuntu22
        sed 's/Depends:.*/Depends:ruby3.0/' -i ./codedeploy-agent_1.3.2-1902_ubuntu22/DEBIAN/control
        dpkg-deb -b codedeploy-agent_1.3.2-1902_ubuntu22/
        sudo dpkg -i codedeploy-agent_1.3.2-1902_ubuntu22.deb

        sudo systemctl list-units --type=service | grep codedeploy
        sudo service codedeploy-agent status

        cd .. && rm -rf /tmp
        exit

    fi

    if ["$2" == "20"]; then
        
        echo Creating script file

        echo sudo apt update -y > .aws.agent_installer.sh
        echo sudo apt install ruby-full -y >> .aws.agent_installer.sh
        echo sudo apt install wget  >> .aws.agent_installer.sh

        echo wget https://$BUCKET_NAME.s3.$REGION.amazonaws.com/latest/install >> .aws.agent_installer.sh
        echo chmod +x ./install >> .aws.agent_installer.sh
        echo "sudo ./install auto > /tmp/logfile" >> .aws.agent_installer.sh
        echo sudo service codedeploy-agent status >> .aws.agent_installer.sh

        sudo chmod +x .aws.agent_installer.sh
        source .aws.agent_installer.sh

        sudo service codedeploy-agent status

        rm ./install
        cp seed/docs/assets/aws-code-deploy/appspec.yml ./appspec.yml
        exit
        
    fi

    echo "Unkonwn Ubuntu version, available options are: 22, 20"    
    exit

fi

if [ "$1" == "--create-app" ]; then

    INFO=$(aws deploy create-application --application-name app_$PROJECT_NAME)
    CDAPP_NAME=$(echo "$INFO" | grep -oP '"applicationId": "\K[^"]+')
    CDAPP_NAME=app_$PROJECT_NAME

    echo "# AWS" > .aws.env
    echo BUCKET_NAME=$BUCKET_NAME >> .aws.env
    echo REGION=$REGION >> .aws.env
    echo OUTPUT=$OUTPUT >> .aws.env
    echo AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID >> .aws.env
    echo AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY >> .aws.env
    echo "" >> .aws.env

    echo "# Github" >> .aws.env
    echo ARN_CONNECTION=$ARN_CONNECTION >> .aws.env
    echo REPOSITORY=$REPOSITORY >> .aws.env
    echo "" >> .aws.env

    echo "# Globals" >> .aws.env
    echo PROJECT_NAME=$PROJECT_NAME >> .aws.env
    echo "" >> .aws.env

    echo "# Instance" >> .aws.env
    echo INSTANCE_ID=$INSTANCE_ID >> .aws.env
    echo INSTANCE_NAME=$INSTANCE_NAME >> .aws.env
    echo "" >> .aws.env

    echo "# CodeDeploy" >> .aws.env
    echo CDAPP_NAME=$CDAPP_NAME >> .aws.env
    echo CDDG_NAME=$CDDG_NAME >> .aws.env
    echo ARN_ROLE_CD=$ARN_ROLE_CD >> .aws.env
    echo "" >> .aws.env

    echo "# CodePipeline" >> .aws.env
    echo ARN_ROLE_PL=$ARN_ROLE_PL >> .aws.env
    echo ARTIFACT_BUCKET=$ARTIFACT_BUCKET >> .aws.env
    echo CDPL_NAME=$CDPL_NAME >> .aws.env

    exit

fi

if [ "$1" == "--create-dg" ]; then

    INFO=$(aws deploy create-deployment-group --application-name $CDAPP_NAME --deployment-config-name CodeDeployDefault.AllAtOnce --deployment-group-name dg_$PROJECT_NAME \
    --ec2-tag-filters Key=Name,Value=$INSTANCE_NAME,Type=KEY_AND_VALUE --service-role-arn $ARN_ROLE_CD)
    CDDG_NAME=$(echo "$INFO" | grep -oP '"deploymentGroupId": "\K[^"]+')
    CDDG_NAME=dg_$PROJECT_NAME

    echo "# AWS" > .aws.env
    echo BUCKET_NAME=$BUCKET_NAME >> .aws.env
    echo REGION=$REGION >> .aws.env
    echo OUTPUT=$OUTPUT >> .aws.env
    echo AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID >> .aws.env
    echo AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY >> .aws.env
    echo "" >> .aws.env

    echo "# Github" >> .aws.env
    echo ARN_CONNECTION=$ARN_CONNECTION >> .aws.env
    echo REPOSITORY=$REPOSITORY >> .aws.env
    echo "" >> .aws.env

    echo "# Globals" >> .aws.env
    echo PROJECT_NAME=$PROJECT_NAME >> .aws.env
    echo "" >> .aws.env

    echo "# Instance" >> .aws.env
    echo INSTANCE_ID=$INSTANCE_ID >> .aws.env
    echo INSTANCE_NAME=$INSTANCE_NAME >> .aws.env
    echo "" >> .aws.env

    echo "# CodeDeploy" >> .aws.env
    echo CDAPP_NAME=$CDAPP_NAME >> .aws.env
    echo CDDG_NAME=$CDDG_NAME >> .aws.env
    echo ARN_ROLE_CD=$ARN_ROLE_CD >> .aws.env
    echo "" >> .aws.env

    echo "# CodePipeline" >> .aws.env
    echo ARN_ROLE_PL=$ARN_ROLE_PL >> .aws.env
    echo ARTIFACT_BUCKET=$ARTIFACT_BUCKET >> .aws.env
    echo CDPL_NAME=$CDPL_NAME >> .aws.env

    exit

fi

if [ "$1" == "--create-pl" ]; then

    echo Creating json file

    PIPELINE="
        {
            \"pipeline\": {
                \"name\": \"$PROJECT_NAME\",
                \"roleArn\": \"$ARN_ROLE_PL\",
                \"artifactStore\": {
                    \"type\": \"S3\",
                    \"location\": \"$ARTIFACT_BUCKET\"
                },
                \"stages\": [
                    {
                        \"name\": \"Source\",
                        \"actions\": [
                            {
                                \"name\": \"Source\",
                                \"actionTypeId\": {
                                    \"category\": \"Source\",
                                    \"owner\": \"AWS\",
                                    \"provider\": \"CodeStarSourceConnection\",
                                    \"version\": \"1\"
                                },
                                \"runOrder\": 1,
                                \"configuration\": {
                                    \"BranchName\": \"main\",
                                    \"ConnectionArn\": \"$ARN_CONNECTION\",
                                    \"FullRepositoryId\": \"$REPOSITORY\",
                                    \"OutputArtifactFormat\": \"CODE_ZIP\"
                                },
                                \"outputArtifacts\": [
                                    {
                                        \"name\": \"SourceArtifact\"
                                    }
                                ],
                                \"inputArtifacts\": [],
                                \"region\": \"us-west-1\",
                                \"namespace\": \"SourceVariables\"
                            }
                        ]
                    },
                    {
                        \"name\": \"Deploy\",
                        \"actions\": [
                            {
                                \"name\": \"Deploy\",
                                \"actionTypeId\": {
                                    \"category\": \"Deploy\",
                                    \"owner\": \"AWS\",
                                    \"provider\": \"CodeDeploy\",
                                    \"version\": \"1\"
                                },
                                \"runOrder\": 1,
                                \"configuration\": {
                                    \"ApplicationName\": \"app_$PROJECT_NAME\",
                                    \"DeploymentGroupName\": \"dg_$PROJECT_NAME\"
                                },
                                \"outputArtifacts\": [],
                                \"inputArtifacts\": [
                                    {
                                        \"name\": \"SourceArtifact\"
                                    }
                                ],
                                \"region\": \"$REGION\",
                                \"namespace\": \"DeployVariables\"
                            }
                        ]
                    }
                ],
                \"version\": 1
            }
        }
    "

    echo $PIPELINE > .aws.pipeline.json

    echo Creating pipeline
    INFO=$(aws codepipeline create-pipeline --cli-input-json file://.aws.pipeline.json)

    exit

fi

echo Unknown command, available options are: --config, --install, --create-app, --create-dg, --create-pl