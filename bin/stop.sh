#!/bin/bash
echo "== Stopping server"
sudo docker-compose -f bin/docker/docker-compose.dev.yml stop