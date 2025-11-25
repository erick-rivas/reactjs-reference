@echo off
:: Seed builder
:: AUTO_GENERATED (Read only)
:: Use $ bin/test.bat

for /f "delims=" %%i in ('docker compose ps --services --filter "status=running"') do set RUNNING=%%i
IF "%RUNNING%" == "" echo "ERROR: Before executing bin/test.bat, start server with bin/start.bat"
IF "%RUNNING%" == "" exit 1

echo == Executing test cases
docker compose exec reactjs /bin/sh -c "npm test -- --testPathIgnorePatterns=src/seed/examples"