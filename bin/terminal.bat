@echo off
:: Seed builder
:: AUTO_GENERATED (Read only)

for /f "delims=" %%i in ('docker compose ps --services --filter "status=running"') do set RUNNING=%%i
IF "%RUNNING%" == "" echo ERROR: Before executing bin/update.bat, start server with bin/start.bat
IF "%RUNNING%" == "" exit 1

echo == Opening terminal
docker compose exec reactjs /bin/sh