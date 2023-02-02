## AWS Code Deploy

### Create role IAM

In order to connect repositories with Code Deploy, is necessary create two roles, for this
-   Go to IAM >> Roles pane
-   Create new Role with trusted entity AWS Service for CodeDeploy
    -   Select AWSCodeDeployRole (default)
-   Create new Role with trusted entity AWS Service for EC2
    -   Select AmazonS3ReadOnlyAccess in policies

Add EC2-S3 role to the instance (EC2 pane >> Actions >> Instance settings >> Attach/Replace IAM role)
Once this roles were created, you can use it if any policy specific is not required

### Install AWS Agent CodeDeploy in server

-   Install dependencies

```bash
sudo apt update
sudo apt install ruby-full
sudo apt install wget
```

-   Install agent (get bucket-name and region identifier from [https://docs.aws.amazon.com/codedeploy/latest/userguide/resource-kit.html#resource-kit-bucket-names](https://docs.aws.amazon.com/codedeploy/latest/userguide/resource-kit.html#resource-kit-bucket-names))

```bash
wget https://<bucket-name>.s3.<region-identifier>.amazonaws.com/latest/install
chmod +x ./install
sudo ./install auto > /tmp/logfile
```

-   Check agent status `sudo service codedeploy-agent status`
-   Start agent `sudo service codedeploy-agent start`

### Create CodeDeploy Implementation

-   Open aws console in [aws.amazon.com](https://aws.amazon.com),
-   Go to Code Deploy pane

-   Create a new aplication
    -   Select EC2 platform

-   Create a new deployment group
    -   Select CodeDeploy-EC2 service role created
    -   Select deployment type In-place (default)
    -   Select EC2 instances environment and add it
    -   Select never install AWS Agent CD
    -   Select implementation config CodeDeployDefault.AllAtOnce (default)
    -   Disable load balance

### Create CodePipeline

-   Go to CodePipeline pane
-   Create a new pipeline
    -   Select new service role (default)
    -   Select Github Version 2 in source provider
        -   Create a new GitHub connection
        -   Select repository and branch
        -   Check start the pipeline on source code change and output artifact format as CodePipeline default
    -   Skip build stage
    -   Select AWS CodeDeploy as deploy provider and same region of EC2 instance
    -   Select the application and deployment group created

### Configure files

-   Copy seed/docs/assets/aws-code-deploy/appspec.yml to root project and modify it as you need.
	-	version: current version of the spec file
	-	os: environment operating system
	-	files: location of the project (this will be join with hooks location param)
	-	permissions: specification of file access
	-	hooks: execution of scripts before each lifecycle stage of codedeploy, these are
		-	BeforeInstall
		-	AfterInstall
		-	ApplicationStart
		-	ApplicationStop
		Note: inside these stages you can specify the location of script, timeout and user who run it.

	For more specification, you can visit the reference below.

### References

-   CodeDeploy [https://docs.aws.amazon.com/codedeploy/latest/userguide/welcome.html](https://docs.aws.amazon.com/codedeploy/latest/userguide/welcome.html)
-   AIM roles [https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html)
-   Appspec file [https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file.html](https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file.html)