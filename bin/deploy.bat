@echo off
# Seed builder
# AUTO_GENERATED (Read only)

set /A KEY=0
set /A HOST="dev.seed-project.com.mx"

IF NOT "%~1" == "" set KEY=%1
IF "%~1" == "" echo ERROR: Include deploy port-key e.g $ bin/deploy.sh 7120
IF "%~1" == "" exit 1
IF NOT "%~2" == "" set HOST=%2
if %KEY lss 7000 OR $KEY gtr 7999 echo ERROR: Invalid port-key, valid range [7000-7999]
if %KEY lss 7000 OR $KEY gtr 7999 exit 1

echo "== Configuring variables"
for /f "delims=" %%i in ('git config --get remote.origin.url') do set git_url=%%i
for /f "delims=" %%i in ('git branch --show-current') do set git_branch=%%i
for /f "delims=" %%i in ('python -c "print(%KEY% + 0)"') do set reactjs_port=%%i
for /f "delims=" %%i in ('python -c "print(%KEY% + 1)"') do set django_port=%%i
set /A client_url="http://%HOST%:%reactjs_port%"
set /A server_url="http://%HOST%:%django_port%"

echo == NOTE: BEFORE START paste .dev.pem in root dir

echo == Updating project
ssh -t -i .dev.pem ubuntu@%HOST% "git clone %git_url% %KEY%/app"
ssh -t -i .dev.pem ubuntu@%HOST% "cd %KEY%/app;git reset --hard"
ssh -t -i .dev.pem ubuntu@%HOST% "cd %KEY%/app;git clean -f -d"
ssh -t -i .dev.pem ubuntu@%HOST% "cd %KEY%/app;git checkout %git_branch%"
ssh -t -i .dev.pem ubuntu@%HOST% "cd %KEY%/app;git pull"

echo == Configuring docker
ssh -t -i .dev.pem ubuntu@%HOST% "cd %KEY%/app;sed -i \"s/run reactjs/run reactjs-%KEY%/\" \"bin/setup.sh\""
ssh -t -i .dev.pem ubuntu@%HOST% "cd %KEY%/app;sed -i \"s/exec reactjs/exec reactjs-%KEY%/\" \"bin/setup.sh\""
ssh -t -i .dev.pem ubuntu@%HOST% "cd %KEY%/app;sed -i \"s/ reactjs:/ reactjs-%KEY%:/\" \"bin/docker/docker-compose.dev.yml\""

echo == Updating reactjs server
ssh -t -i .dev.pem ubuntu@%HOST% "cd %KEY%/app;bin/setup.sh %reactjs_port%"
ssh -t -i .dev.pem ubuntu@%HOST% "cd %KEY%/app;bin/start.sh"

echo.
echo == Deployment completed (http://%HOST%:%reactjs_port%)
echo.