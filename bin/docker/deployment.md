# ReactJS Web - Deployment Docker

This file contains guides to run and deploy this application with Docker.

Commands shall be ran as administrator or superuser to avoid permission issues. 

## Run project for development

-   Build the image and fire up the container:

```
docker-compose up -d --build
```

-   To bring down the container, run

```
docker stop web-dev
```

## Run project for production

-   Build the image and fire up the container from the production `docker-compose` file

```
docker-compose -f docker-compose.prod.yml up -d --build
```

-   Bring down the production container

```
docker stop web-prod
```