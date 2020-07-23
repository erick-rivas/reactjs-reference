# ReactJS Web - Security

This file contains guides to enable security practices (hardware & deployment) for reactJS web

## Https

To enable a https connection:

### Configure aws/dns settings

-   Create an elastic beanstalk instance for reactjs support (see [deployment.md](./deployment.md))   

-   Enable 443 port in ec2 settings
    -   Go to ec2 pane 
    -   Press instance name
    -   Open first security groups
    -   Go to inbound
    -   Enable 443 port

-   Set proxy server to apache
    -   Open elastic beanstalk panel
    -   Go to Configuration > Software
    -   Select apache as proxy server

### Configure server

-   Install eb terminal and init project (see [deployment.md](./deployment.md))
-   Enable & execute ssh

```bash
eb ssh --setup
eb ssh
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

-   Install and configure certbot
```bash
sudo wget https://dl.eff.org/certbot-auto
sudo chmod a+x ./certbot-auto
sudo ./certbot-auto certonly --debug
# Select 1. apache
```

-   Copy [config/https-instance.config](.config/https-instance.config) to .ebextensions folder
-   Replace #HTTPS_DOMAIN# to server name