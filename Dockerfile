FROM node:14.19.0-alpine
WORKDIR /
COPY package.json .
RUN apk update && apk add openssh-client
RUN npm install --silent
ENV PATH /node_modules/.bin:$PATH
WORKDIR /app
COPY . .