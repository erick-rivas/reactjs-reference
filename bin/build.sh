#!/bin/bash
# Seed builder
# AUTO_GENERATED (Read only)

echo "== Creating production build"
echo "WARNING: In case of error remove any call to seed/example components (e.g. Examples.js)"
sudo docker compose run --rm reactjs /bin/sh -c "rm -rf build_temp"
sudo docker compose run --rm reactjs /bin/sh -c "mv src/seed/examples build_temp"
sudo docker compose run --rm reactjs /bin/sh -c "npm run-script build"
sudo docker compose run --rm reactjs /bin/sh -c "mv build_temp src/seed/examples"

echo ""
echo "== Check build result in ./build folder"
echo ""