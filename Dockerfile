FROM node:11.13
WORKDIR /app
COPY . /app
RUN npm install
CMD npm start --production
EXPOSE 3000