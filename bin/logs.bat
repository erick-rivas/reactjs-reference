@echo off
:: Seed builder
:: AUTO_GENERATED (Read only)

docker-compose -f bin/docker/docker-compose-dev.yml logs --follow --tail 100