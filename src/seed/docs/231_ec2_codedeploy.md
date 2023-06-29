## AWS EC2 CodeDeploy

### Before start

Complete [AWS EC2 setup](230_ec2.md)

### Create GitHub connection (admin only)

Go to CodeDeploy panel and in sidenav click on Settings >> Connections. Then click on Create connection and select GitHub. Then follow the steps to create a connection.

### Create S3 bucket (admin only)

Go to S3 panel and click on Create bucket. Then follow the default steps to create a bucket.

### Configure CodeDeploy

Request to admin arn connection and s3 bucket name, and modify next variables in .aws.env located at root project:
-   ARN_CONNECTION # CodeStar GitHub connection
-   REPOSITORY # Repository id (user/repository_name), example: `erick-rivas/django-reference`

Follow next steps:
-   Create and associate roles: `src/seed/docs/assets/aws-code-deploy/codedeploy.sh config`
-   Install AWS Agent: `src/seed/docs/assets/aws-code-deploy/codedeploy.sh install-<version>` (ubuntu version, availables are 20 and 22). Note, to check status use `sudo service codedeploy-agent status`
-   Create CodeDeploy application: `src/seed/docs/assets/aws-code-deploy/codedeploy.sh create-app`
-   Create a Deployment Group: `src/seed/docs/assets/aws-code-deploy/codedeploy.sh create-dg`
-   Create new pipeline: `src/seed/docs/assets/aws-code-deploy/codedeploy.sh create-pl`

### Configure file (optional)

-   Modify appspec.yml in root project as you need.
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
		
	For more specification, you can visit [https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file.html](https://docs.aws.amazon.com/codedeploy/latest/userguide/reference-appspec-file.html)