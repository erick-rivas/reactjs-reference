#!/bin/bash
# Seed builder
# AUTO_GENERATED (Read only)
# Use $ bin/build.sh

echo "== Creating production build"
sudo docker compose run --rm reactjs /bin/sh -c "npm run-script build"

echo ""
echo "== Check build result in ./build folder"
echo ""