@echo off
docker-compose -f bin/docker/docker-compose.dev.yml logs --follow --tail 100