# ReactJS Web - Deployment Ubuntu

This file contains guides to deploy project to a Debian Server (Ubuntu Server)

### Server installation

-   To install server dependencies, see [deployment-server.md](./deployment-server.md).

### Update & install 

- Connect to server
```bash
ssh #USER@SERVER_URL#
```

-   Update project
```bash
cd #PROJECT_WEB_PATH#
sudo git pull origin dev
sudo npm run-script build
rm -rf #PROJECT_API_PATH#/build
cp -R build #PROJECT_API_PATH#
cd
cd #PROJECT_API_PATH#
rm -rf reactjs
mv build reactjs
python3 manage.py collectstatic
```
>   In case of chuck bug, set react-script to 2.1.2 then $npm install and return to latest version

-   Restart server
```bash
sudo systemctl restart gunicorn
sudo systemctl restart nginx
```
-   For easly deployment paste [config.deploy.sh](./config/deploy.sh) in server root