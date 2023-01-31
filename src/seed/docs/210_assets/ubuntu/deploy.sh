#!/bin/sh

# Update project
cd <WEB_DIR>
sudo npm install
sudo npm run-script build

# Restart server
pm2 restart app
sudo systemctl restart nginx