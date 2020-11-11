# ReactJS Reference

This repository holds the source code of the **seed-reference** for the development of a **React.js web** written mainly in javascript.

## Table of content

-   [Overview](#overview)
-   [Pre-requisites](#pre-requisites)
-   [Installation](#installation)
-   [Examples](#examples)
-   [Seed-Builder](#seed-builder)
-   [Deployment](#deployment)


## Overview

The reference uses an architecture based on [Flux architecture](https://facebook.github.io/flux/docs/in-depth-overview.html) and a Generic Model View Controller pattern.

The architecture uses the following structure:

-   **/components**: Handle DOM rendering.
    -   *.js: Component definition.
    -   *.module.sass: Style files.
-   **/resources**: Stores images, assets and global styles.
-   **/settings**: Configuration files.
    -   Config.js: Applications attributes.
-   /seed: Autogenerated files produced by seed-builder: It includes server connection management, cache handling and redux flux
    >   These files are *read-only*, modifiable only through seed-builder [Details](#seed-builder)


## Pre-requisites

-   Download & install [NodeJS](https://nodejs.dev/learn/how-to-install-nodejs).
>   To facilitate development it is recommended to run the project on debian distribution (Eg. ubuntu)

## Installation

-   Clone this repository.
-   Configure src/settings/Config.js attributes.
-   Install dependencies.
```bash
npm install
```

-   Run server.
```bash
npm start
```

## Examples

-   Request example. 
```bash
GET http://localhost:3000
```

## Seed-Builder

>   Seed-builder is a code generator library to reduce *boilerplate code* required by the application (Eg. server connections, model definitions, cache handling) 

To create or update seed-builder autogenerated files.

-   Create or update SeedManifest.json file using StarUML extension [See documentation](https://github.com/erick-rivas/seed-staruml/blob/master/README.md).
-   Install builder.
```bash
npm install -g seed-builder
``` 
-   Run builder.
```bash
seed-builder
``` 
>   It automatically detect the project settings described in SeedManifest.json and update or create the required files

## Deployment

### AWS - Elastic Beanstalk

To deploy application to aws-eb see [Deployment guide](./bin/aws-eb/deployment.md).

### Ubuntu Server (Debian)

To deploy application to a Ubuntu Server (Debian) see [Deployment guide](./bin/ubuntu/deployment.md).

### Docker

To deploy application using docker see [Deployment guide](./bin/docker/deployment.md).