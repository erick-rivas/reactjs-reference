#!/bin/sh
KEY=$1
HOST=$2
GIT_URL=$3
GIT_BRANCH=$4
REACTJS_PORT=$(node -e "console.log($KEY + 0)")
DJANGO_PORT=$(node -e "console.log($KEY + 1)")
CLIENT_URL="http:\/\/$HOST:$REACTJS_PORT"
SERVER_URL="http:\/\/$HOST:$DJANGO_PORT"

chmod 400 .dev.pem
echo "== Updating project"
ssh -t -i .dev.pem ubuntu@$HOST "git clone $GIT_URL $KEY/app"
ssh -t -i .dev.pem ubuntu@$HOST "cd $KEY/app;git reset --hard"
ssh -t -i .dev.pem ubuntu@$HOST "cd $KEY/app;git clean -f -d"
ssh -t -i .dev.pem ubuntu@$HOST "cd $KEY/app;git checkout $GIT_BRANCH"
ssh -t -i .dev.pem ubuntu@$HOST "cd $KEY/app;git pull"

echo "== Configuring docker"
ssh -t -i .dev.pem ubuntu@$HOST "cd $KEY/app;sed -i \"s/run reactjs_reference_reactjs/run reactjs_reference_reactjs_$KEY/\" \"bin/setup.sh\""
ssh -t -i .dev.pem ubuntu@$HOST "cd $KEY/app;sed -i \"s/exec reactjs_reference_reactjs/exec reactjs_reference_reactjs_$KEY/\" \"bin/setup.sh\""
ssh -t -i .dev.pem ubuntu@$HOST "cd $KEY/app;sed -i \"s/reactjs_reference_reactjs/reactjs_reference_reactjs_$KEY/\" \"bin/docker/docker-compose-dev.yml\""

echo "== Configuring settings"
ssh -t -i .dev.pem ubuntu@$HOST "cd $KEY/app;sed -i \"s/http:\/\/localhost:8008/$SERVER_URL/\" \"src/settings.js\""
ssh -t -i .dev.pem ubuntu@$HOST "cd $KEY/app;sed -i \"s/http:\/\/localhost:3003/$CLIENT_URL/\" \"src/settings.js\""

echo "== Updating reactjs server"
ssh -t -i .dev.pem ubuntu@$HOST "cd $KEY/app;sudo bin/setup.sh $REACTJS_PORT"
ssh -t -i .dev.pem ubuntu@$HOST "cd $KEY/app;sudo bin/start.sh"

echo ""
echo "== Deployment completed (http://$HOST:$REACTJS_PORT)"
echo ""