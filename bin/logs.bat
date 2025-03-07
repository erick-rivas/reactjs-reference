@echo off
:: Seed builder
:: AUTO_GENERATED (Read only)

set /A MAX_LINES=250
set ONLY_LATEST=false

IF NOT "%~1" == "" set /A MAX_LINES=%1
IF NOT "%~2" == "" set ONLY_LATEST=%2

IF "%ONLY_LATEST%" == "true" (
    docker compose logs --follow --since 0m --tail %MAX_LINES% reactjs
) ELSE (
    docker compose logs --follow --tail %MAX_LINES% reactjs
)