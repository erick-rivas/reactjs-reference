#!/bin/bash
# Seed builder
# AUTO_GENERATED (Read only)

PORT=$(cat bin/docker/.port)
echo "== Running server (http://localhost:$PORT)"
sudo docker compose -f bin/docker/docker-compose.yml up