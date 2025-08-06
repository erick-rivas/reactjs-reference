#!/bin/bash
# Seed builder
# AUTO_GENERATED (Read only)
# Use $ bin/start.sh

echo "== Starting server"
source .env
sudo docker compose start
echo ""
echo "== Server is running in background (http://localhost:$COMPOSE_REACTJS_PORT)"
echo "    - To show logs execute bin/logs.sh"
echo "    - To stop server execute bin/stop.sh"
echo ""