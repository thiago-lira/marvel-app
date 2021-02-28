# Marvel Search Heroes

[![Build Status](https://travis-ci.com/thiago-lira/marvel-app.svg?branch=master)](https://travis-ci.com/thiago-lira/marvel-app)

A simple application for Marvel characters fetching.

http://marvelsearchheroes.surge.sh/

## Summary
1. [Getting Started](#getting-started)
2. [Running Tests](#running-tests)
3. [Hooks](#hooks)
4. [Deployment](#deployment)
5. [Built With](#built-with)

## Getting Started

### running local
Node.js is required in your machine in order to run on local.

### Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

## Running Tests
### Run unit tests and E2E tests
```
yarn test
````

### Run your unit tests
```
yarn test:unit
```
### Run your unit tests with coverage report
```
yarn test:unit --coverage
```
### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

## Hooks

There are some git hooks in this project:

* **Pre push**: before to push, runs unit and E2E test and checks the coverage rate (< 80% it fails).
* **Pre commit**: before to commit, runs lint.

## Deployment
This project uses Travis CI. Just commit on master branch and it will deploy if the build pass.  
Check the build progress [right here](https://travis-ci.com/github/thiago-lira/marvel-app/builds/218463479).

## Built with
* Node.js
* Vue.js
* Axios
* Jest
* Cypress
* Husky
