@echo off
echo == Executing test cases
docker-compose -f bin/docker/docker-compose.dev.yml run reactjs /bin/sh -c "npm test"