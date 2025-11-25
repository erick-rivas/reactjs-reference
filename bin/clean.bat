@echo off
:: Seed builder
:: AUTO_GENERATED (Read only)
:: Use $ bin/clean.bat

echo == Cleaning unused docker resources
docker image prune --force
docker volume prune --force

echo == NOTICE: Run with administrative permissions
powershell -Command "& {Optimize-VHD -Path %LOCALAPPDATA%\Docker\wsl\data\ext4.vhdx -Mode Full}"