# Deployment - SSL

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
>   In case of error, configure keys with eb ssh --setup command

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
-   Exit and deploy server removing .ebextensions/https-instance.config if it appears
-   Connect again and configure certbot
```bash
sudo wget https://dl.eff.org/certbot-auto
sudo chmod a+x ./certbot-auto
sudo ./certbot-auto certonly --debug
# Select 1. apache
```
-    **Important:** Copy the certificate and private key paths for later
-    Remove /etc/httpd/conf.d/temp.conf and exit server
-    Copy [bin/aws-eb/single-instance/config/https-instance.config](./config/https-instance.config) into .ebextensions folder
-    Configure the *SSLCertificateFile* and *SSLCertificateKeyFile* keys with the files created by certbot
-    Deploy again "eb deploy"