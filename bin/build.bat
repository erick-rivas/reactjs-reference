@echo off
:: Seed builder
:: AUTO_GENERATED (Read only)
:: Use $ bin/build.bat

echo == Creating production build
docker compose run --rm reactjs /bin/sh -c "npm run-script build"

echo.
echo == Check build result in ./build folder
echo.