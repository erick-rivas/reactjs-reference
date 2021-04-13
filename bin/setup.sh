#!/bin/bash

echo "== Configuring docker .env"
REACTJS_PORT=3003
if [ $# -ge 1 ]; then
  REACTJS_PORT=$1
fi
sudo rm bin/docker/.env
sudo rm bin/docker/.env-port
sudo rm .env
echo "# DOCKER PORTS" > "bin/docker/.env"
echo "### MODIFY WITH WITH $ bin/setup.sh REACTJS_PORT ###" >> "bin/docker/.env"
echo "" >> "bin/docker/.env"
echo "REACTJS_PORT=$REACTJS_PORT" >> "bin/docker/.env"

echo "$REACTJS_PORT" > "bin/docker/.env-port"

echo "### MODIFY WITH WITH $ bin/setup.sh REACTJS_PORT ###" > ".env"
echo "PORT=$REACTJS_PORT" >> ".env"

echo "== Deleting previous containers"
docker-compose -f bin/docker/docker-compose.dev.yml down

echo "== Building project"
docker-compose -f bin/docker/docker-compose.dev.yml build

echo "== Setting execute permissions to bin"
docker-compose -f bin/docker/docker-compose.dev.yml run reactjs /bin/sh -c "chmod +x bin/*;chmod +x bin/docker/*"

echo "== Starting services"
docker-compose -f bin/docker/docker-compose.dev.yml up -d

echo "== Generating docs"
docker-compose -f bin/docker/docker-compose.dev.yml exec reactjs /bin/sh -c "jsdoc ./src -c ./bin/config/docs/config.json --readme README.md -t /node_modules/docdash"

echo "== Stopping services"
docker-compose -f bin/docker/docker-compose.dev.yml stop

echo ""
echo "== Setup completed (Start server with bin/start.sh)"
echo ""