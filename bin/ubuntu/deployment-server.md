# ReactJS Web - Server installation

This file contains guides to deploy project to a Debian Server (Ubuntu Server)

### Dependencies

- Connect to server

```bash
ssh <USER@SERVER_URL>
```

- Install general dependencies
```bash
sudo apt-get update
sudo apt-get install curl git-core zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev software-properties-common libffi-dev nodejs yarn
```

-   Install python and django
```bash
sudo apt update
sudo apt install python3-pip python3-dev libpq-dev postgresql postgresql-contrib nginx curl
```

### Postgresql

- Install dependencies
```bash
sudo apt-get install wget ca-certificates
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ `lsb_release -cs`-pgdg main" >> /etc/apt/sources.list.d/pgdg.list'

sudo apt-get update
sudo apt-get install postgresql postgresql-contrib libpq-dev
```

-  Create user and database
```bash
sudo -u postgres psql
postgres=# create user admin with encrypted password 'password';
postgres=# ALTER ROLE admin WITH SUPERUSER;
```

### Nginx and gunicorn

- Follow this [link] (https://www.digitalocean.com/community/tutorials/how-to-set-up-django-with-postgres-nginx-and-gunicorn-on-ubuntu-18-04)


### Security & Custom adjustments

- To customize certificate, timeout, body size modify /etc/nginx/sites-available/app with the following structure
```
server {
    listen 80;
    server_name #SERVER_NAME#;
    return 301 https://#SERVER_NAME#$request_uri;
}
server {
    listen 80;
    server_name #SERVER_IP#;
}
server {
    listen 443 ssl default_server;
    server_name smp.#SERVER_NAME#;
    client_max_body_size 75M;
    fastcgi_read_timeout 3000;
    proxy_read_timeout 3000;   

    ssl on;
    ssl_certificate #CERTIFICATE_CRT_FILE#
    ssl_certificate_key #CERTIFICATE_RSA_FILE#

    location = /favicon.ico { access_log off; log_not_found off; }
    
    location /static/ {
        root <PROJECT_PATH>;
    }

    location / {
        include proxy_params;
        proxy_pass http://unix:/run/gunicorn.sock;
    }
}
```