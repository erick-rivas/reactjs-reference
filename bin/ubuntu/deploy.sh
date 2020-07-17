# Connect to server

ssh <SERVER_URL>

# Update project

cd <PROJECT_WEB_PATH>
sudo git pull origin dev
sudo npm run-script build
rm -rf <PROJECT_API_PATH>/build
cp -R build <PROJECT_API_PATH>
cd
cd <PROJECT_API_PATH>
rm -rf reactjs
mv build reactjs
python3 manage.py collectstatic

# Restart server

sudo systemctl restart gunicorn
sudo systemctl restart nginx
