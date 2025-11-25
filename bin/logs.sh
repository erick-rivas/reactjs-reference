#!/bin/bash
# Seed builder
# AUTO_GENERATED (Read only)
# Use $ bin/logs.sh <max_lines> <only_latest>

MAX_LINES=250
ONLY_LATEST=false

if [ $# -ge 1 ]; then MAX_LINES=$1; fi
if [ $# -ge 2 ]; then ONLY_LATEST=$2; fi

if [ "$ONLY_LATEST" = true ]; then
    sudo docker compose logs --follow --since 0m --tail "$MAX_LINES" reactjs
else
    sudo docker compose logs --follow --tail "$MAX_LINES" reactjs
fi