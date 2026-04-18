#!/bin/bash
### __Seed builder__
##  AUTO_GENERATED (Read only)
##  Use $ bin/clean.sh

echo "== Cleaning unused docker resources"
sudo docker image prune --force
sudo docker volume prune --force