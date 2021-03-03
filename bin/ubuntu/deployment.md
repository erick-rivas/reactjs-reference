# ReactJS Web - Deployment Ubuntu

This file contains guides to deploy project to a Debian Server (Ubuntu Server)

### Server installation

-   To install server dependencies, see [deployment-server.md](./deployment-server.md).
-   To install ssl support, see [deployment-ssl.md](./deployment-ssl.md).


### Project installation

- Connect to server
```bash
ssh #USER@SERVER_URL#
```

-   To install project see [README#installation](../../README.md#installation)

### Project update

- Connect to server
```bash
ssh #USER@SERVER_URL#
```

-   Update project
```bash
cd #PROJECT_WEB_PATH#
sudo git pull origin dev
sudo npm run-script build
npm install
```
>   In case of chuck bug, set react-script to 2.1.2 then $npm install and return to latest version

-   Restart server
```bash
pm2 restart 
sudo systemctl restart nginx
```
-   For easly deployment paste [config.deploy.sh](./config/deploy.sh) in server root