# AWS-EB single-instance

## Elastic beanstalk instance

-   Open aws console in [aws.amazon.com](https://aws.amazon.com)
-   Go to Elastic Beanstalk pane
-   Create a new application
-   Create a new environment (Web server environment)
    -   Select python platform **Amazon Linux**
    -   Press *Configure more options* 
        -   Go to Software and verify that Apache is set as server proxy
            >   *If there are not options aws set it by default*
        -   Go to Database and create a new postgresql db
        -   Go to Capacity and select the server capacity
            >   *For development(sandbox) use preferably a t3a.nano instance*
   
## EB command line interface

-   Install eb cli [See documentation](https://docs.aws.amazon.com/es_es/elasticbeanstalk/latest/dg/eb-cli3-install.html)
-   Configure AMI credentials [See documentation](https://docs.aws.amazon.com/es_es/general/latest/gr/managing-aws-access-keys.html)

## Pre-configuration

-   Create and configure *src/settings.js* file
-   Create a `.ebextensions` folder in project root and copy inside
    -   `bin/config/aws-eb/nodecommand.config`
-   Copy `bin/config/aws-eb/.ebignore` in project root folder
-   Copy `bin/config/aws-eb/deploy.sh` in `/bin` folder

## SSL

To enable a https connection

### Open 443 port 

-   Enable 443 port in ec2 settings
    -   Go to ec2 pane 
    -   Press instance name
    -   Open first security groups
    -   Go to inbound
    -   Enable 443 port

### Configure server

-   Access the server by ssh
```bash
eb ssh
```
>   *In case of error, configure keys with eb ssh --setup command*

-   Delete preconfigure files
```bash
sudo rm /etc/httpd/conf.d/ssl.conf
sudo rm /etc/httpd/conf.d/ssl_rewrite.conf
sudo rm /opt/elasticbeanstalk/tasks/taillogs.d/letsencrypt.conf
```

-   Setup apache settings
```bash
sudo vim /etc/httpd/conf.d/temp.conf
```
-   Set config content (Change #HTTPS_DOMAIN# to host domain)
```
<VirtualHost *:80 *:443>
	ServerName #HTTPS_DOMAIN#
	DocumentRoot /var/www/html
</VirtualHost>
```
-   Exit and deploy the server removing .ebextensions/https-instance.config if it appears
-   Connect again and configure certbot
```bash
sudo wget https://dl.eff.org/certbot-auto
sudo chmod a+x ./certbot-auto
sudo ./certbot-auto certonly --debug
# Select 1. apache
```
-    **Important:** Copy the certificate and private key paths for later
-    Remove /etc/httpd/conf.d/temp.conf and exit server
-    Copy `bin/config/aws-eb/single-instance/https-instance.config` into `.ebextensions folder
-    Configure the *SSLCertificateFile* and *SSLCertificateKeyFile* keys with the files created by certbot
-    Deploy again "eb deploy"


## Deployment

-   Run script
```bash
.bin/deploy.sh
```

## References
-   AWS reference [https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_nodejs.html](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_nodejs.html)