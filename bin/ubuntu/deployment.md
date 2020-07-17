# ReactJS Web - Deployment Ubuntu

This file contains guides to deploy project to a Debian Server (Ubuntu Server)

### Server installation

-   To install server dependencies, see [deployment-server.md](./deployment-server.md).


### Update & install 

-   Adjust [deploy.sh](./deploy.sh). settings and run script

- Connect to server
```bash
ssh <USER@SERVER_URL>
```

-   Run script
```bash
$ ./bin/ubuntu/deploy.sh
```
    >   In case of chuck bug, set react-script to 2.1.2 then $npm install and return to latest version