@echo off
echo == Starting server
set /p PORT= < bin/docker/.env-port
docker-compose -f bin/docker/docker-compose.dev.yml start
echo.
echo == Server is running in background (http://localhost:%PORT%)
echo     - To show logs execute bin/logs.bat
echo     - To stop server execute bin/stop.bat
echo.