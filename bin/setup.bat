@echo off
:: Seed builder
:: AUTO_GENERATED (Read only)

echo == Configuring docker .env
set /A REACTJS_PORT=3003

IF NOT "%~1" == "" set REACTJS_PORT=%1

del .\bin\docker\.env
del .\bin\docker\.env-port
del .\.env
echo # DOCKER PORTS > .\bin\docker\.env
echo ### MODIFY WITH WITH $ bin/setup.bat REACTJS_PORT ### >> .\bin\docker\.env
echo _ >> .\bin\docker\.env
echo REACTJS_PORT=%REACTJS_PORT% >> .\bin\docker\.env

echo %REACTJS_PORT% > .\bin\docker\.env-port

echo ### MODIFY WITH WITH $ bin/setup.sh REACTJS_PORT ### > .\.env
echo PORT=%REACTJS_PORT% >> .\.env

echo == Deleting previous containers
docker-compose -f bin/docker/docker-compose.dev.yml down

echo == Building project
docker-compose -f bin/docker/docker-compose.dev.yml build

echo == Setting execute permissions to bin
docker-compose -f bin/docker/docker-compose.dev.yml run reactjs /bin/sh -c "chmod +x bin/*;chmod +x bin/docker/*"

echo == Starting services
docker-compose -f bin/docker/docker-compose.dev.yml up -d

echo == Executing custom setup scripts
docker-compose -f bin/docker/docker-compose.dev.yml exec reactjs /bin/sh -c "cp bin/docker/custom-setup.sh bin/docker/win-custom-setup.sh"
docker-compose -f bin/docker/docker-compose.dev.yml exec reactjs /bin/sh -c "sed -i 's/\r$//g' bin/docker/win-custom-setup.sh"
docker-compose -f bin/docker/docker-compose.dev.yml exec reactjs /bin/sh -c "bin/docker/win-custom-setup.sh"

echo == Generating docs
docker-compose -f bin/docker/docker-compose.dev.yml exec reactjs /bin/sh -c "npm run-script build-docs"

echo == Installing local dependencies
npm install

echo == Cleaning setup
docker-compose -f bin/docker/docker-compose.dev.yml exec reactjs /bin/sh -c "rm bin/docker/win-custom-setup.sh"

echo == Cleaning services
docker-compose -f bin/docker/docker-compose.dev.yml stop

echo.
echo == Setup completed (Start server with bin/start.bat)
echo.