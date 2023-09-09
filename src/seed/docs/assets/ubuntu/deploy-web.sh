#!/bin/sh

GIT_PATH="origin"
if [ $# -ge 1 ]; then GIT_PATH=$1; fi

WEB_DIR="###"
API_DIR="###"
# Update project
cd $WEB_DIR
sudo git pull $GIT_PATH dev
sudo npm install --legacy-peer-deps
sudo npm run-script build

# Optional (Uncomment for Django integration)
# cd $API_DIR
## shellcheck disable=SC1090
#. "$(pwd)"/.venv/bin/activate
# sudo rm -rf  $API_DIR/reactjs
# sudo mv $WEB_DIR/build $API_DIR/reactjs
# python3 manage.py collectstatic --noinput

# Restart server
pm2 restart app
sudo systemctl restart nginx