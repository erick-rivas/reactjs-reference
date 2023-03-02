source .aws.env

mkdir -p ~/.aws

echo [default] > ~/.aws/config
echo region = $REGION >> ~/.aws/config
echo output = $OUTPUT >> ~/.aws/config

echo [default] > ~/.aws/credentials
echo aws_access_key_id = $AWS_ACCESS_KEY_ID >> ~/.aws/credentials
echo aws_secret_access_key = $AWS_SECRET_ACCESS_KEY >> ~/.aws/credentials