# Ubuntu Server - 20.04

This file contains guides to deploy project to a (Ubuntu Server)

## Server installation

### Dependencies

- Install general dependencies
>   Recommended version node 14
```bash 
sudo apt update
sudo apt purge nodejs libnode72:amd64
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt update
sudo apt install curl git nodejs build-essential nginx nginx-extras
```

### Project installation

-   Clone repository
-   Install dependencies `npm install`
-   Adjust server settings in src/settings.js

*** FOR SINGLE SERVER IMPLEMENTATION (app and api) omit next steps and check API Documentation**
[API docs](https://github.com/erick-rivas/django-reference/blob/master/seed/docs/220_ubuntu.md)

### PM2 configuration

-   Install pm2 `sudo npm install pm2@latest -g`

-   Copy `src/seed/docs/assets/ubuntu/ecosystem.config` in the root directory of the project

-   Start pm2 `pm2 start`

### Nginx configuration

-   Modify /etc/nginx/sites-available/app with the following structure
```
server {
    listen 80;
    server_name #SERVER_NAME#;
    client_max_body_size 75M;
    fastcgi_read_timeout 3000;
    proxy_read_timeout 3000;

    location / {
        include proxy_params;
        proxy_pass http://localhost:3003;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

-   Create a link to sites-enabled
``` bash
sudo ln -s /etc/nginx/sites-available/app /etc/nginx/sites-enabled
```

-   Check nginx status `sudo nginx -t`

-   Restart nginx `sudo systemctl restart nginx`

## SSL

To enable a https connection

### Configure certbot

-   Install certbot
```bash
sudo apt update
sudo snap install core; sudo snap refresh core
sudo snap install --classic certbot
sudo ln -s /snap/bin/certbot /usr/bin/certbot
```

-   Request a certificate
```bash
sudo certbot certonly --nginx
```

### Configure nginx

-  Modify /etc/nginx/sites-available/app with the following structure
```
server {
    listen 443 ssl default_server;
    server_name #SERVER_NAME#;
    client_max_body_size 75M;
    fastcgi_read_timeout 3000;
    proxy_read_timeout 3000;
    more_clear_headers Server;
    server_tokens off;

    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_certificate /etc/letsencrypt/live/#SERVER_NAME#/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/#SERVER_NAME#/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location / {
        include proxy_params;
        proxy_pass http://localhost:3003;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
server {
    listen 80;
    server_name #SERVER_NAME#;
    return 301 https://#SERVER_NAME#$request_uri;
}
```

-   Restart nginx `sudo systemctl restart nginx`

## Deployment

-   Run deployment script `deploy.sh`
    > For automatic deployment check [AW Code Deploy documentation](230_eb_single_instance.md)

#### Server logs

-   To watch server logs `tail -f /var/log/nginx/error.log`

## References

-   PM2-nginx tutorial [https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-18-04#step-3-%E2%80%94-installing-pm2](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-18-04#step-3-%E2%80%94-installing-pm2)

## See also

-   [AWS Code Deploy](221_code_deploy.md)