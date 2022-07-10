@echo off
:: Seed builder
:: AUTO_GENERATED (Read only)

echo == Stopping server
docker compose -f bin/docker/docker-compose.yml stop

echo == Starting server
set /p PORT= < bin/docker/.port
docker compose -f bin/docker/docker-compose.yml start
echo.
echo == Server is running in background (http://localhost:%PORT%)
echo     - To show logs execute bin/logs.bat
echo     - To stop server execute bin/stop.bat
echo.