@echo off
:: Seed builder
:: AUTO_GENERATED (Read only)

for /f "delims=" %%i in ('docker compose -f bin/docker/docker-compose.yml ps --services --filter "status=running"') do set RUNNING=%%i
IF "%RUNNING%" == "" echo ERROR: Before executing bin/update.bat, start server with bin/start.bat
IF "%RUNNING%" == "" exit 1

echo == Opening terminal
docker compose -f bin/docker/docker-compose.yml exec reactjs /bin/sh