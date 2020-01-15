# ReactJS Web - Deployment

This file contains guides to deploy project to aws elastic beanstalk

### Elastic beanstalk instance

-   Open aws console in [aws.amazon.com](https://aws.amazon.com)
-   Go to elastic beanstalk pane
-   Create a new application (if required)
-   Create a new environment
    -   Select nodejs platform
    >   For development(sandbox)  use preferably a t3a.nano instance
   
### EB CLI

-   Install eb terminal [Documentation](https://docs.aws.amazon.com/es_es/elasticbeanstalk/latest/dg/eb-cli3-install.html).
-   Create credentials [Documentation](https://docs.aws.amazon.com/es_es/general/latest/gr/managing-aws-access-keys.html).

### Security settings

-   To enable security protocols, see [deployment-security.md](./deployment-security.md).

### Production settings

-   Move bin/eb/.ebextensions & bin/eb/.ebignore to root folder

### Deploy

-   Run script
```bash
$ ./bin/deploy
```
    >   In case of chuck bug, set react-script to 2.1.2 then $npm install and return to latest version