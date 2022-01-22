#!/bin/bash
# Seed builder
# AUTO_GENERATED (Read only)

RUNNING=$(sudo docker-compose -f bin/docker/docker-compose-dev.yml ps --services --filter "status=running")
if [ $RUNNING -z ]; then
  echo "ERROR: Before executing bin/deploy.sh, start server with bin/start.sh"
  exit 1
fi

KEY=0
HOST="dev.seed-project.com.mx"

if [ $# -ge 1 ]; then
  KEY=$1;
else
  echo "ERROR: Include deploy port-key e.g $ bin/deploy.sh 7120"
  exit 1
fi
if [ $KEY -lt 7000 ] || [ $KEY -gt 7999 ]; then
    echo "ERROR: Invalid port-key, valid range [7000-7999]"
    exit 1
fi

if [ $# -ge 2 ]; then HOST=$2; fi

echo "== Configuring variables"
GIT_URL=$(git config --get remote.origin.url)
GIT_BRANCH=$(git branch --show-current)

echo "== NOTE: BEFORE START paste .dev.pem in root dir"
sudo docker-compose -f bin/docker/docker-compose-dev.yml exec reactjs_reference_reactjs /bin/sh -c "bin/docker/deploy-dev.sh $KEY $HOST $GIT_URL $GIT_BRANCH"