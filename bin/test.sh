#!/bin/bash
echo "== Executing test cases"
RUNNING=$(docker-compose -f bin/docker/docker-compose.dev.yml ps --services --filter "status=running")
if [ $RUNNING -z ]; then
  echo "ERROR: Before executing test, start server with bin/start.sh"
  exit 1
fi
docker-compose -f bin/docker/docker-compose.dev.yml exec reactjs /bin/sh -c "npm test"