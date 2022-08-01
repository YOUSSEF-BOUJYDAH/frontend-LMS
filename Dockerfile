FROM node:alpine3.15 AS build
RUN mkdir -p /app


WORKDIR /app



COPY package.json /app/
RUN  npm install

COPY . /app/
RUN npm run build --prod

