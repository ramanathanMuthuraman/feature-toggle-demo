# Getting started with feature flags

This is a sample project to introduce how to use feature flags using [Unleash](https://unleash.github.io/) 

## Setting up Unleash
To set up Unleash, we need three things:

- Postgres, which is where Unleash saves the feature flags status
- unleash-server, which provides a UI and endpoint to query for the status of the flags
- unleash-client-node, a library to connect to Unleash server and know the status of the flag


## Make it run

- Clone the repository
- One way to have Postgres is to execute it with Docker `docker run --name unleash-postgres -e POSTGRES_PASSWORD=pass -d -p 5432:5432 postgres`
- In the terminal install the dependencies with `npm install`
- Run `npm run unleash-server`
- Run `npm run server-debug`

## Reference

https://blog.logrocket.com/using-feature-flags-with-unleash-and-node-js/
