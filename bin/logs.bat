@echo off
:: Seed builder
:: AUTO_GENERATED (Read only)

set ONLY_LATEST=false
set /A MAX_LINES=250

IF NOT "%~1" == "" set ONLY_LATEST=%1
IF NOT "%~2" == "" set /A MAX_LINES=%2

IF "%ONLY_LATEST%" == "true" (
    docker compose -f bin/docker/docker-compose.yml logs --follow --since 0m --tail %MAX_LINES% reactjs
) ELSE (
    docker compose -f bin/docker/docker-compose.yml logs --follow --tail %MAX_LINES% reactjs
)