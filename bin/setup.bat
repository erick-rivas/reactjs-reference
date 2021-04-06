# Configure docker .env
@echo off
del bin/docker/.env
del .env
echo "# DOCKER PORTS" > "bin/docker/.env"
echo "### DON'T MODIFY ###" >> "bin/docker/.env"
echo "" >> "bin/docker/.env"
echo "REACTJS_PORT=3003" >> "bin/docker/.env"
echo "### DON'T MODIFY ###" >> ".env"
echo "PORT=3003" >> ".env"

# Delete previous containers
docker-compose -f bin/docker/docker-compose.dev.yml down

# Build project
docker-compose -f bin/docker/docker-compose.dev.yml build

# Set execute permissions to bin
docker-compose -f bin/docker/docker-compose.dev.yml run reactjs chmod +x bin/*;chmod +x bin/docker/*

# Generate docs
docker-compose -f bin/docker/docker-compose.dev.yml run reactjs npm run-script build-docs