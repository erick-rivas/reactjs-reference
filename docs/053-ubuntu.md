# Ubuntu Server - 18.04

This file contains guides to deploy project to a (Ubuntu Server)

## Server installation

### Dependencies

- Connect to server

```bash
ssh <USER@SERVER_URL>
```

- Install general dependencies
```bash 
sudo apt update
sudo apt install curl git nodejs build-essential nginx
```

### Project installation

-   Clone repository and follow installation steps in [general docs](./010-general.md)


### PM2 configuration

-   Install pm2
```bash
sudo npm install pm2@latest -g
```

-   Copy `bin/config/ubuntu/ecosystem.config` to root folder

-   Start pm2
```bash
pm2 start
```

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

-  Check nginx status
``` bash
sudo nginx -t
```

-  Restart nginx
``` bash
sudo systemctl restart nginx
```

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
sudo certbot --nginx
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

    ssl_certificate /etc/letsencrypt/live/#SERVER_NAME#/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/#SERVER_NAME#/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location / {
        include proxy_params;
        proxy_pass http://unix:/run/gunicorn.sock;
    }
}
server {
    listen 80;
    server_name #SERVER_NAME#;
    return 301 https://#SERVER_NAME#$request_uri;
}
```

-  Restart nginx
``` bash
sudo systemctl restart nginx
```

## Deployment

- Connect to server
```bash
ssh #USER@SERVER_URL#
```

-   Paste `bin/config/ubuntu/deploy.sh` in `bin` folder

-   Run deployment script
```bash
./bin/deploy.sh
```

## References

-   PM2-nginx tutorial [https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-18-04#step-3-%E2%80%94-installing-pm2](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-18-04#step-3-%E2%80%94-installing-pm2)