@echo off
:: Seed builder
:: AUTO_GENERATED (Read only)

set /p PORT= < bin/docker/.port
echo == Running server (http://localhost:%PORT%)
docker compose -f bin/docker/docker-compose.yml up