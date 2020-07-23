# ReactJS Web - Deployment AWS

This file contains guides to deploy project to aws elastic beanstalk

## Elastic beanstalk instance

-   Open aws console in [aws.amazon.com](https://aws.amazon.com)
-   Go to elastic beanstalk pane
-   Create a new application
-   Create a new environment
    -   Select nodejs platform
    >   For development(sandbox)  use preferably a t3a.nano instance
   
## EB CLI

-   Install eb terminal [Documentation](https://docs.aws.amazon.com/es_es/elasticbeanstalk/latest/dg/eb-cli3-install.html).
-   Create credentials [Documentation](https://docs.aws.amazon.com/es_es/general/latest/gr/managing-aws-access-keys.html).


## Deploy

-   Create a /.ebextension folder in root and move [config/nodecommand.config](./config/nodecommand.config)
-   Move [config/.ebignore](./config/.ebignore) to root folder

-   Run script
```bash
npm run-script build
eb deploy
```
   >   In case of chuck bug, set react-script to 2.1.2 then $npm install and return to latest version

## Security settings

-   To enable security protocols, see [deployment-security.md](./deployment-security.md).