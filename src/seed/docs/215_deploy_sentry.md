## Sentry Integration ##

This file contains instructions to integrate Sentry with the project you are working on.

### Create project and DSN

-   Go to the following URL: [https://sentry.io/auth/login]
-   Enter the correct credentials.
-   In the left menu, select the "Projects" option.
-   Create a new project with the necessary Framework and change the configuration as you need.

### Integrate support into the project

-   Modify dsn in src/settings.js
-   if necessary overwrite sentry settings in app/index.js:
    -   You may want to change it to 100% while in development and then sample at a lower rate in production.
    -   If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.