#!/bin/bash
# Seed builder
# AUTO_GENERATED (Read only)

KEY=0
HOST=dev.seed-project.com.mx

if [ $# -ge 1 ]; then
  KEY=$1;
else
  echo "ERROR: Include deploy port-key e.g $ bin/deploy.sh 7120"
  exit 1
fi
if [ $# -ge 2 ]; then HOST=$2; fi

echo "== Configuring variables"
git_url=$(git config --get remote.origin.url)
git_branch=$(git branch --show-current)
reactjs_port=$(python3 -c "print($KEY + 0)")
django_port=$(python3 -c "print($KEY + 1)")
client_url="http:\/\/$HOST:$reactjs_port"
server_url="http:\/\/$HOST:$django_port"

echo "== NOTE: BEFORE START paste .dev.pem in root dir"
sudo chmod 400 .dev.pem

echo "== Updating project"
ssh -t -i .dev.pem ubuntu@$HOST "git clone $git_url $KEY/app"
ssh -t -i .dev.pem ubuntu@$HOST "cd $KEY/app;git reset --hard"
ssh -t -i .dev.pem ubuntu@$HOST "cd $KEY/app;git clean -f -d"
ssh -t -i .dev.pem ubuntu@$HOST "cd $KEY/app;git checkout $git_branch"
ssh -t -i .dev.pem ubuntu@$HOST "cd $KEY/app;git pull"

echo "== Configuring docker"
ssh -t -i .dev.pem ubuntu@$HOST "cd $KEY/app;sed -i \"s/run reactjs/run reactjs-$KEY/\" \"bin/setup.sh\""
ssh -t -i .dev.pem ubuntu@$HOST "cd $KEY/app;sed -i \"s/exec reactjs/exec reactjs-$KEY/\" \"bin/setup.sh\""
ssh -t -i .dev.pem ubuntu@$HOST "cd $KEY/app;sed -i \"s/ reactjs:/ reactjs-$KEY:/\" \"bin/docker/docker-compose.dev.yml\""

echo "== Configuring settings"
ssh -t -i .dev.pem ubuntu@$HOST "cd $KEY/app;sed -i \"s/http:\/\/localhost:8008/$server_url/\" \"src/settings.js\""
ssh -t -i .dev.pem ubuntu@$HOST "cd $KEY/app;sed -i \"s/http:\/\/localhost:3003/$client_url/\" \"src/settings.js\""

echo "== Updating reactjs server"
ssh -t -i .dev.pem ubuntu@$HOST "cd $KEY/app;bin/setup.sh $reactjs_port"
ssh -t -i .dev.pem ubuntu@$HOST "cd $KEY/app;bin/start.sh"

echo ""
echo "== Deployment completed (http://$HOST:$reactjs_port)"
echo ""