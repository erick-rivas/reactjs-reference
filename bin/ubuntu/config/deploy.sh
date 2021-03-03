# Update project

cd <PROJECT_WEB_PATH>
sudo git pull origin dev
sudo npm run-script build
npm install

# Restart server

pm2 restart app
sudo systemctl restart nginx