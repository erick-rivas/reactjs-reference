#!/bin/bash
# Seed builder
# AUTO_GENERATED (Read only)

echo "== Starting server"
PORT=$(cat bin/docker/.port)
sudo docker-compose -f bin/docker/docker-compose-dev.yml up