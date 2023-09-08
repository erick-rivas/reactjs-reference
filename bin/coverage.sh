#!/bin/bash
# Seed builder
# AUTO_GENERATED (Read only)

RUNNING=$(sudo docker compose ps --services --filter "status=running")
if [ $RUNNING -z ]; then
  echo "ERROR: Before executing bin/coverage.sh, start server with bin/start.sh"
  exit 1
fi

echo "== Analyzing code coverage"
sudo docker compose exec reactjs /bin/sh -c "npm run-script coverage -- --testPathIgnorePatterns=src/seed/examples --coveragePathIgnorePatterns=src/seed"