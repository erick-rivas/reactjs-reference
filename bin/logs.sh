#!/bin/bash
# Seed builder
# AUTO_GENERATED (Read only)

ONLY_LATEST=false
MAX_LINES=250

if [ $# -ge 1 ]; then ONLY_LATEST=$1; fi
if [ $# -ge 2 ]; then MAX_LINES=$2; fi

if [ $ONLY_LATEST = true ]; then
    sudo docker compose logs --follow --since 0m --tail $MAX_LINES reactjs
else
    sudo docker compose logs --follow --tail $MAX_LINES reactjs
fi