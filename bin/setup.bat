@echo off
:: Seed builder
:: AUTO_GENERATED (Read only)

echo == Configuring docker .env
set /A REACTJS_PORT=3003

IF NOT "%~1" == "" set /A REACTJS_PORT=%1

echo "== Creating docker .envs"
del .\bin\docker\.env
echo # DOCKER PORTS > .\bin\docker\.env
echo ### MODIFY WITH WITH $ bin/setup.bat REACTJS_PORT ### >> .\bin\docker\.env
echo _ >> .\bin\docker\.env
echo REACTJS_PORT=%REACTJS_PORT% >> .\bin\docker\.env

echo ### MODIFY WITH WITH $ bin/setup.bat REACTJS_PORT ### >> .\bin\docker\.port
del .\bin\docker\.port
echo %REACTJS_PORT% > .\bin\docker\.port

echo ### MODIFY WITH WITH $ bin/setup.sh REACTJS_PORT ### > .\.env
del .\.env
echo PORT=%REACTJS_PORT% >> .\.env

echo == Deleting previous containers
docker-compose -f bin/docker/docker-compose.yml down

echo == Building project
docker-compose -f bin/docker/docker-compose.yml build

echo == Setting execute permissions to bin
docker-compose -f bin/docker/docker-compose.yml run reactjs_reference_reactjs /bin/sh -c "chmod +x bin/docker/*.sh"

echo == Starting services
docker-compose -f bin/docker/docker-compose.yml up -d

echo == Generating docs
docker-compose -f bin/docker/docker-compose.yml exec reactjs_reference_reactjs /bin/sh -c "jsdoc ./src -c ./bin/config/docs/config.json --readme README.md -t /node_modules/docdash"

echo == Installing local dependencies
call npm install

echo == Cleaning services
docker-compose -f bin/docker/docker-compose.yml stop

echo.
echo == Setup completed (Start server with bin/start.bat)
echo.