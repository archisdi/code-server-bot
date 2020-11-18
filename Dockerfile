FROM node:12 AS build
COPY . .
RUN npm ci --only=production

FROM node:12-alpine
WORKDIR /usr/src/app
COPY --from=build /server.js /usr/src/app/
COPY --from=build /.env /usr/src/app/
COPY --from=build /src /usr/src/app/src
COPY --from=build /node_modules /usr/src/app/node_modules

EXPOSE 8080
CMD [ "node", "server.js" ]