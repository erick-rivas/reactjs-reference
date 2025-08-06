@echo off
:: Seed builder
:: AUTO_GENERATED (Read only)
:: Use $ bin/start.bat

echo == Starting server
FOR /F "eol=# tokens=*" %%i IN (.env) DO SET %%i
docker compose start
echo.
echo == Server is running in background (http://localhost:%COMPOSE_REACTJS_PORT%)
echo     - To show logs execute bin/logs.bat
echo     - To stop server execute bin/stop.bat
echo.