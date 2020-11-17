FROM node:12

WORKDIR /usr/src/app

COPY . .
COPY .env ./.env

RUN npm ci --only=production

EXPOSE 8080
CMD [ "node", "server.js" ]