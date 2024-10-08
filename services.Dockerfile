FROM node:18-alpine

WORKDIR /app

COPY services/package.json package.json
COPY services/node_modules node_modules
COPY services/dist dist

CMD [ "node","--trace-warnings", "--es-module-specifier-resolution=node", "/app/dist/main.js" ]
