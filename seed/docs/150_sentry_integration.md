## Sentry Integration ##

This file contains instructions to integrate Sentry with the project you are working on.

### Create project and DSN

-   Go to the following URL: [https://sentry.io/auth/login]
-   Enter the correct credentials.
-   In the left menu, select the "Projects" option.
-   Create a new project with the necessary Framework and change the configuration as you need.


### Integrate support into the project

-   Request the dsn.
-   In the [index](https://github.com/erick-rivas/reactjs-reference/blob/master/src/index.js) file, change the dsn to the one indicated and url if project is in production.
-   Change the parameters as you need:
    -   You may want to change it to 100% while in development and then sample at a lower rate in production.
    -   If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.