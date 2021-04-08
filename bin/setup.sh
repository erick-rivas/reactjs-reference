#!/bin/bash

echo "== Configuring docker .env"
REACTJS_PORT=3003
if [ $# -ge 1 ]; then
  REACTJS_PORT=$1
fi
sudo rm bin/docker/.env
sudo rm .env
echo "# DOCKER PORTS" >> "bin/docker/.env"
echo "### MODIFY WITH WITH $ bin/setup <REACTJS_PORT> ###" >> "bin/docker/.env"
echo "" >> "bin/docker/.env"
echo "REACTJS_PORT=${REACTJS_PORT}" >> "bin/docker/.env"
echo "### MODIFY WITH WITH $ bin/setup <REACTJS_PORT> ###" >> ".env"
echo "PORT=${REACTJS_PORT}" >> ".env"

echo "== Deleting previous containers"
docker-compose -f bin/docker/docker-compose.dev.yml down

echo "== Building project"
docker-compose -f bin/docker/docker-compose.dev.yml build

echo "== Setting execute permissions to bin"
docker-compose -f bin/docker/docker-compose.dev.yml run reactjs /bin/sh -c "chmod +x bin/*;chmod +x bin/docker/*"

echo "== Generating docs"
docker-compose -f bin/docker/docker-compose.dev.yml run reactjs /bin/sh -c "npm run-script build-docs"