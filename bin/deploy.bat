@echo off
:: Seed builder
:: AUTO_GENERATED (Read only)

for /f "delims=" %%i in ('docker-compose -f bin/docker/docker-compose-dev.yml ps --services --filter "status=running"') do set RUNNING=%%i
IF "%RUNNING%" == "" echo "ERROR: Before executing bin/deploy.bat, start server with bin/start.bat"
IF "%RUNNING%" == "" exit 1

set /A KEY=0
set /A HOST=dev.seed-project.com.mx

IF NOT "%~1" == "" set KEY=%1
IF "%~1" == "" echo ERROR: Include deploy port-key e.g $ bin/deploy.sh 7120
IF "%~1" == "" exit 1
IF NOT "%~2" == "" set HOST=%2
if %KEY% lss 7000 echo ERROR: Invalid port-key, valid range [7000-7999]
if %KEY% lss 7000 exit 1
if %KEY% gtr 7999 exit ERROR: Invalid port-key, valid range [7000-7999]
if %KEY% gtr 7999 exit 1

echo == Configuring variables
for /f "delims=" %%i in ('git config --get remote.origin.url') do set GIT_URL=%%i
for /f "delims=" %%i in ('git branch --show-current') do set GIT_BRANCH=%%i

echo == NOTE: BEFORE START paste .dev.pem in root dir
docker-compose -f bin/docker/docker-compose-dev.yml exec reactjs_reference_reactjs /bin/sh -c "cp bin/docker/deploy-dev.sh bin/docker/win-deploy-dev.sh"
docker-compose -f bin/docker/docker-compose-dev.yml exec reactjs_reference_reactjs /bin/sh -c "sed -i 's/\r$//g' bin/docker/win-deploy-dev.sh"
docker-compose -f bin/docker/docker-compose-dev.yml exec reactjs_reference_reactjs /bin/sh -c "bin/docker/win-deploy-dev.sh %KEY% %HOST% %GIT_URL% %GIT_BRANCH%"
docker-compose -f bin/docker/docker-compose-dev.yml exec reactjs_reference_reactjs /bin/sh -c "rm bin/docker/win-deploy-dev.sh"