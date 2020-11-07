# Django API - SSL

To enable a https connection

### Open 443 port 

-   Create an elastic beanstalk instance for reactjs support (see [README.md](../../README.md))   

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
-   Set config content
```
<VirtualHost *:80 *:443>
	ServerName #HTTPS_DOMAIN#
	DocumentRoot /var/www/html
</VirtualHost>
```

-   Exit and run "eb deploy" without .ebextensions/https-instance.config
-   Connect again and configure certbot
```bash
sudo wget https://dl.eff.org/certbot-auto
sudo chmod a+x ./certbot-auto
sudo ./certbot-auto certonly --debug
# Select 1. apache
```
-    Finally remove temp.config and deploy again with .ebextensions/https-instance.config file