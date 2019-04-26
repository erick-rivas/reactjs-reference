# React.js Web

This repository holds the source code of a **reference** for the development of a **React.js web** written mainly in javascript.

## Before start ##

## Architecture design

The reference uses a architecure based on [Flux architecture](https://facebook.github.io/flux/docs/in-depth-overview.html) and a Generic Model View Controller pattern.

### Overview 

![alt architecture](./public/dev/architecture.jpg)

### Description

The architecture uses the following structure:

  - /actions: Handle data operations such as CRUD actions
    > This component is the responsible of manage connection to REST APIs, websockets, etc.
  - /components: Handle DOM rendering and event definition.
  - /containers: Handle the connection between actions and components (data & views).
    > All containers must have a component, but components don’t necessarily require a container.
  - /reducers: Represents the link between actions and containers through updates of states (data & states).
  - /styles: Handle DOM styling (e.g. colors, dimensions, etc.).


### To start coding and build:

 * Clone this repository.
 * Install dependencies.
 ```bash
 $ npm install
 ```
 * Run server.
 ```bash
 $ npm start
 ```

  ### Examples

  * Example requests. 
 ```bash
 GET http://localhost:3000
 ```

## Deploy to aws eb

### Configure aws/dns console

* Open aws elastic beanstalk console and create an environment 
> Important: Configure apache as proxy server and enable 443 port in security groups

* Configure DNS settings in domain provider, e.g *godaddy*

### Configure server

* Install eb and configure credentials, See ([install](https://docs.aws.amazon.com/es_es/elasticbeanstalk/latest/dg/eb-cli3-install.html) & [credentials](https://docs.aws.amazon.com/es_es/general/latest/gr/managing-aws-access-keys.html))

* Init eb project
```bash
$ eb init
 ```

* Enable ssh
```bash
$ eb ssh --setup
 ```

* Execute ssh and setup apache settings
```bash
$ sudo vim /etc/httpd/conf.d/temp.conf
# Listen 80
# <VirtualHost *:80 *:443>
# 	ServerName <HTTPS_DOMAIN>
# 	DocumentRoot /var/www/html
# </VirtualHost>
```

* Install tricky dependencies
```bash
$ sudo sh
PATH=/opt/elasticbeanstalk/node-install/node-v<node_version>-linux-x64/bin:"$PATH"
npm install -g --unsafe-perm <dependencies>
 ```
 > Note: Default node version 10.15.3

* Install and configure certbot
```bash
$ sudo wget https://dl.eff.org/certbot-auto
$ sudo chmod a+x ./certbot-auto
$ sudo ./certbot-auto certonly --debug --webroot
# root: /var/www/html
$ sudo ./certbot-auto certonly --debug
```
* Set HTTPS_DOMAIN in .ebextensions/nodecommands.config

### Deploy

* Set .env variable IS_DEBUG to false

 * Deploy to aws
```bash
$ eb deploy
 ```