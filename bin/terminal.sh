#!/bin/bash
# Seed builder
# AUTO_GENERATED (Read only)

RUNNING=$(sudo docker compose -f bin/docker/docker-compose.yml ps --services --filter "status=running")
if [ $RUNNING -z ]; then
  echo "ERROR: Before executing bin/update.sh, start server with bin/start.sh"
  exit 1
fi

echo "== Opening terminal"
sudo docker compose -f bin/docker/docker-compose.yml exec reactjs /bin/sh