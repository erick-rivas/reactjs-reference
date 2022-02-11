@echo off
:: Seed builder
:: AUTO_GENERATED (Read only)

echo == Starting server
set /p PORT= < bin/docker/.port
docker-compose -f bin/docker/docker-compose-dev.yml up