# ReactJS Web - Deployment AWS

This file contains guides to deploy project to aws elastic beanstalk

## Elastic beanstalk instance

-   Open aws console in [aws.amazon.com](https://aws.amazon.com)
-   Go to Elastic Beanstalk pane.
-   Create a new application.
-   Create a new environment (Web server environment)
    -   Select nodejs platform **Amazon Linux**
    -   Press *Configure more options* 
        -   Go to Software and verify that Apache is set as server proxy
            >   If there are not options it is set by default
        -   Go to Capacity and select the server capacity
            >   For development(sandbox) use preferably a t3a.nano instance
   
## EB CLI

-   Install eb terminal [Documentation](https://docs.aws.amazon.com/es_es/elasticbeanstalk/latest/dg/eb-cli3-install.html).
-   Create credentials [Documentation](https://docs.aws.amazon.com/es_es/general/latest/gr/managing-aws-access-keys.html).


## Pre-configuration

-   Create and configure *src/settings/Config.js* file.
-   Create a *.ebextensions* folder in root and copy inside
    -   [bin/aws-eb/single-instance/config/nodecommand.config](./config/nodecommand.config)
-   Copy [bin/aws-eb/single-instance/config/.ebignore](./config/.ebignore) to root folder

## Deploy

-   Run script
```bash
npm run-script build
eb deploy
```
   >   In case of chuck bug, set react-script to 2.1.2 then $npm install and return to latest version

## SSL settings

-   To enable ssl protocols (https) see [deployment-ssl.md](deployment-ssl.md).

## References

-   AWS reference [https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_nodejs.html](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/create_deploy_nodejs.html)