# Deployment - Server installation

This file contains guides to deploy project to a Debian Server (Ubuntu Server)

## Dependencies

- Connect to server

```bash
ssh <USER@SERVER_URL>
```

- Install general dependencies
```bash 
sudo apt update
sudo apt install curl git nodejs build-essential nginx
```

## PM2 configuration

-   Install pm2
```bash
sudo npm install pm2@latest -g
```

-   Copy [bin/ubuntu/config/ecosystem.config](./config/ecosystem.config) to root folder

-   Start pm2
```bash
pm2 start
```

## Nginx configuration

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

## References
-   PM2-nginx tutorial [https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-18-04#step-3-%E2%80%94-installing-pm2](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-18-04#step-3-%E2%80%94-installing-pm2)