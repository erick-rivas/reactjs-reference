#!/bin/bash
# Seed builder
# AUTO_GENERATED (Read only)

echo "== Configuring docker .env"
REACTJS_PORT=3003

if [ $# -ge 1 ]; then REACTJS_PORT=$1; fi

echo "== Creating docker .envs"
sudo rm bin/docker/.env
echo "# DOCKER PORTS" > "bin/docker/.env"
echo "### MODIFY WITH WITH $ bin/setup.sh REACTJS_PORT IS_PROD ###" >> "bin/docker/.env"
echo "" >> "bin/docker/.env"
echo "REACTJS_PORT=$REACTJS_PORT" >> "bin/docker/.env"

echo "### MODIFY WITH WITH $ bin/setup.sh REACTJS_PORT ###" >> "bin/docker/.port"
sudo rm bin/docker/.port
echo "$REACTJS_PORT" > "bin/docker/.port"

echo "### MODIFY WITH WITH $ bin/setup.sh REACTJS_PORT ###" > ".env"
sudo rm .env
echo "PORT=$REACTJS_PORT" >> ".env"

echo "== Deleting previous containers"
sudo docker-compose -f bin/docker/docker-compose.yml down

echo "== Building project"
sudo docker-compose -f bin/docker/docker-compose.yml build

echo "== Setting execute permissions to bin"
sudo docker-compose -f bin/docker/docker-compose.yml run reactjs_reference_reactjs /bin/sh -c "chmod +x bin/*.sh;chmod +x bin/docker/*.sh"

echo "== Starting services"
sudo docker-compose -f bin/docker/docker-compose.yml up -d

echo "== Generating docs"
sudo docker-compose -f bin/docker/docker-compose.yml exec reactjs_reference_reactjs /bin/sh -c "jsdoc ./src -c ./bin/config/docs/config.json --readme README.md -t /node_modules/docdash"

echo "== Removing root permissions"
sudo chown -R $(whoami) .

echo "== Installing local dependencies"
npm install

echo "== Cleaning services"
sudo docker-compose -f bin/docker/docker-compose.yml stop

echo ""
echo "== Setup completed (Start server with bin/start.sh)"
echo ""