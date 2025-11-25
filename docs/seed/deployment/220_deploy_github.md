## Github Actions - Deployment

This file contains the guides to deploy the project automatically using Github actions.

### Description

Internally Github actions execute the following steps to deploy the project:
-   When a commit/pull-request is sent to master/main branch it triggers a workflow
-   The workflow connect to the server via ssh connection
-   Then read repository secret variables to authenticate with the server
-   Finally, it executes the deploy-api.sh to run deployment task in the server
  - For more information check [Ubuntu deployment docs](210_deploy_ubuntu.md)

### Github repository setup

-   Before start, setup deploy-web.sh in server [Ubuntu deployment docs](210_deploy_ubuntu.md#deployment)

-   Open the following route in the browser `https://github.com/<OWNER_NAME>/<REPOSITORY_NAME>/settings/secrets/actions`
    - Example: `https://github.com/erick-rivas/reactjs-reference/settings/secrets/actions`
-   Now in the **Secrets** section in the top navigation bar, you can create or edit the following required variables
    -   **ENABLE_DEPLOY**: Set <i>TRUE</i> to enable the deployment
    -   **SERVER_PEM**: Refers to the PEM file that will be created with the raw string of the .pem file.
    -   **SERVER_NAME**: Refers to the server that will be connected to execute the deployment (e.g. datagrid.mx)
    -   **SERVER_USER**: Refers to the user that will be connected to execute the deployment (e.g. ubuntu)
    -   **GIT_PATH**: Refers to the github path of the repo `https://<USER_TOKEN>@github.com/<OWNER_NAME>/<REPOSITORY_NAME>.git`
        - Example: `https://<USER_TOKEN>@github.com/erick-rivas/reactjs-reference.git`