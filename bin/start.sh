#!/bin/bash
# Seed builder
# AUTO_GENERATED (Read only)

echo "== Starting server"
PORT=$(cat bin/docker/.env-port)
sudo docker-compose -f bin/docker/docker-compose-dev.yml start
echo ""
echo "== Server is running in background (http://localhost:$PORT)"
echo "    - To show logs execute bin/logs.sh"
echo "    - To stop server execute bin/stop.sh"
echo ""