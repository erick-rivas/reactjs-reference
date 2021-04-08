@echo off

echo == Configuring docker .env
set /A REACTJS_PORT=3003

IF NOT "%~1" == "" set REACTJS_PORT=%1

del .\bin\docker\.env
echo # DOCKER PORTS > .\bin\docker\.env
echo ### MODIFY WITH WITH $ bin/setup.bat REACTJS_PORT ### >> .\bin\docker\.env
echo _ >> .\bin\docker\.env
echo REACTJS_PORT=%REACTJS_PORT% >> .\bin\docker\.env

echo == Deleting previous containers
docker-compose -f bin/docker/docker-compose.dev.yml down

echo == Building project
docker-compose -f bin/docker/docker-compose.dev.yml build

echo == Setting execute permissions to bin
docker-compose -f bin/docker/docker-compose.dev.yml run reactjs /bin/sh -c "chmod +x bin/*;chmod +x bin/docker/*"

echo == Generating docs
docker-compose -f bin/docker/docker-compose.dev.yml run reactjs /bin/sh -c "npm run-script build-docs"