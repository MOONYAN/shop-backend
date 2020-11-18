# Shop-Backend

As a backend for frontend APP [Shop](https://moonyan.github.io/shop)

[DEMO](https://owen-shop-backend.herokuapp.com/)

## API

- POST /auth/signup
- POST /auth/login

- GET /auto
- POST /auto
- DELETE /auto/:id

- GET /pocket +jwt
- POST /pocket/auto +jwt
- DELETE /pocket/auto/:id +jwt

- GET /api/docs/

## Skill

- [nestjs-cli](https://nestjs.com/) version 7.5
- jwt
- bcrypt
- TypeOrm
- [docker image postgres](https://hub.docker.com/_/postgres) version 12.5

## Installation

- node 12.18

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production
$ yarn start:prod
```

## Running the app in Docker

```bash
$ yarn build
$ docker-compose up
```