#!/bin/sh

# Update project
cd <APP_DIR>
sudo git pull origin dev
sudo npm install
sudo npm run-script build

# Restart server
pm2 restart app
sudo systemctl restart nginx