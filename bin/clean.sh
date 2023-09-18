#!/bin/bash
# Seed builder
# AUTO_GENERATED (Read only)

echo "== Cleaning unused docker resources"
sudo docker image prune --force
sudo docker volume prune --force