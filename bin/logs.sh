#!/bin/bash
# Seed builder
# AUTO_GENERATED (Read only)

MAX_LINES=250
if [ $# -ge 1 ]; then MAX_LINES=$1; fi

sudo docker compose -f bin/docker/docker-compose.yml logs --follow --tail $MAX_LINES reactjs