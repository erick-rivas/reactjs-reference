FROM node:13.12.0-alpine
WORKDIR /
COPY package.json .
RUN npm install --silent
ENV PATH /node_modules/.bin:$PATH
WORKDIR /app
COPY . .