## Github Actions - Deployment

### Description

This workflow will execute a deployment using an ssh connection with a server, then it will execute a deploy.sh file, it must be located in the <i>/home/ubuntu</i> path. This file must have the necessary steps to deploy the web application.

### Configure secrets in your repository

-   Open github and go to your repository
-   Search the **Settings** section located on the top navigation bar
-   Go to **Secrets and variables** in the **Security** section located on the left-side navigation bar
-   Select the **Actions** option
-   Now in the **Secrets** section in the top navigation bar, you can create or edit the following required variables
    -   **ENABLE_DEPLOY** must be <i>True</i> if you want to enable the deployment, otherwise, it can be anything, for example <i>False</i>.
    -   **PEM** refers to the PEM file that will be created with the raw string of the file.
    -   **SERVER** refers to the server that will be connected to execute the deployment.
    -   **USER** refers to the user that will be connected to execute the deployment.
    -   **GIT_PATH** refers to the github path of the repo (e.g https://<USER_TOKEN>@github.com/<USERNAME>/<REPO_NAME>.git)

-   If you have problems trouble finding the **Secrets** section, you can go to (https://github.com/&lt;user>/&lt;repository>/settings/secrets/actions), remember to change &lt;user> for your github username and &lt;repository> for your repository name.