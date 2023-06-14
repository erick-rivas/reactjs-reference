@echo off
:: Seed builder
:: AUTO_GENERATED (Read only)

set /A MAX_LINES=250
IF NOT "%~1" == "" set /A MAX_LINES=%1

docker compose -f bin/docker/docker-compose.yml logs --follow --tail %MAX_LINES% reactjs