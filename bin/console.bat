@echo off
:: Seed builder
:: AUTO_GENERATED (Read only)
:: Use $ bin/console.bat

for /f "delims=" %%i in ('docker compose ps --services --filter "status=running"') do set RUNNING=%%i
IF "%RUNNING%" == "" echo ERROR: Before executing bin/console.bat, start server with bin/start.bat
IF "%RUNNING%" == "" exit 1

echo == Opening console
docker compose exec reactjs /bin/bash