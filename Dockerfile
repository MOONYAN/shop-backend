FROM node:12.18-alpine

WORKDIR /app

COPY package.json yarn.lock ./

COPY dist ./dist

RUN yarn