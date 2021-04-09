@echo off
echo == Executing test cases
for /f "delims=" %%i in ('docker-compose -f bin/docker/docker-compose.dev.yml ps --services --filter "status=running"') do set RUNNING=%%i
IF "%RUNNING%" == "" echo "ERROR: Before executing bin/test.bat, start server with bin/start.bat"
IF "%RUNNING%" == "" exit 1
docker-compose -f bin/docker/docker-compose.dev.yml exec reactjs /bin/sh -c "npm test"