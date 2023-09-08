#!/bin/bash
# Seed builder
# AUTO_GENERATED (Read only)

echo "== Starting server"
source .env
sudo docker compose start
echo ""
echo "== Server is running in background (http://localhost:$REACTJS_PORT)"
echo "    - To show logs execute bin/logs.sh"
echo "    - To stop server execute bin/stop.sh"
echo ""