@echo off
echo == Starting server
docker-compose -f bin/docker/docker-compose.dev.yml start
echo.
echo == Server is running in background
echo     - To show logs execute bin/logs.bat
echo     - To stop server execute bin/stop.bat
echo.