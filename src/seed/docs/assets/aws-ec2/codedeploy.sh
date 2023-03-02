source .aws.env

if [ "$1" == "--start" ]; then

    INFO=$(aws ec2 start-instances --instance-ids $INSTANCE_ID)
    echo Instance started successfully

    echo Waiting for running
    aws ec2 wait instance-running --instance-ids $INSTANCE_ID

    exit

fi

if [ "$1" == "--stop" ]; then

    INFO=$(aws ec2 stop-instances --instance-ids $INSTANCE_ID)
    echo Instance stopped successfully
    exit

fi

if [ "$1" == "--restart" ]; then

    INFO=$(aws ec2 reboot-instances --instance-ids $INSTANCE_ID)
    echo Instance restarted successfully

    echo Waiting for running
    aws ec2 wait instance-running --instance-ids $INSTANCE_ID

    exit

fi

echo Unknown command, available options are: --start, --stop, --restart