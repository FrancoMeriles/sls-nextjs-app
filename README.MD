# Meli Clone - Serverless NextJS

This project is a meli clon app, using [NextJS](https://nextjs.org/) and deployin it using [Serverless Framework](https://www.serverless.com/).

[Live Preview](https://francomeriles.github.io/)

## Stack

In this project im using:

- NextJS
- Typescript
- Scss Modules
- React Context
- ChakraUI
- React Testing Library
- Jest
- Cypress
- EsLint
- Prettier
- Serverless Framework
- Serverless Component

### Structure

```sh
|-- LICENSE.MD
|-- README.MD
|-- cypress
|   |-- fixtures
|   |-- integration
|   |-- plugins
|   `-- support
|-- cypress.json
|-- jest.config.js
|-- mocks
|-- next-env.d.ts
|-- next.config.js
|-- package.json
|-- public
|-- serverless.yml
|-- src
|   |-- components
|   |-- contexts
|   |   |-- Favorite.tsx
|   |   |-- ZipCode.tsx
|   |   `-- actions
|   |-- icons
|   |-- pages
|   |   |-- 500.tsx
|   |   |-- _app.tsx
|   |   |-- api
|   |   |   |-- categories
|   |   |   |-- product
|   |   |   |-- products
|   |   |   `-- zipcode
|   |   |-- categorie
|   |   |-- favorites
|   |   |-- index.tsx
|   |   |-- product
|   |   `-- products
|   |-- service
|   |-- styles
|   |-- types
|   `-- utils
|-- test
|   |-- components
|   |-- mock
|   |-- pages
|   `-- setupTests.js
|-- tsconfig.json
`-- yarn.lock

```

### Architecture and Deploy

For deploy the app im using [Serverless Framework](https://www.serverless.com/) with [Serverless Next.js Component](https://github.com/serverless-nextjs/serverless-next.js)

![](https://github.com/serverless-nextjs/serverless-next.js/blob/master/img/arch_no_grid.png?raw=true)

Basically what [Serverless Next.js Component](https://github.com/serverless-nextjs/serverless-next.js) does is create a cloudfront distribution with many resources, a function lambda with the content of your app (SSR) and another lambda with the internal api of nextjs both edge
Also it will create multiple buckets in s3 with different contents, static files, assets

### Deploy

The project are ready to deploy to AWS ! 🌈

You can deploy the project with [Serverless Framework](https://www.serverless.com/) using [Serverless Componentes](https://www.serverless.com/components/), you will need have an account with the correct credentials (API and SECRET KEY) in the file `~/.aws/credentials` or set your AWS credentials as environment variables:

```bash
AWS_ACCESS_KEY_ID=accesskey
AWS_SECRET_ACCESS_KEY=sshhh
```

Then install the latest version of Serverless that supports components

```sh
npm install -g serverless
```

Simply deploy

```sh
serverless
```

### Run localy

Clone this repo and install all packages and dependencies required for this project:

    yarn

Create **.env.local** file, create an account in [abstracapi](https://www.abstractapi.com/ip-geolocation-api) and get a api key (is free!)

```bash
NEXT_PUBLIC_PRODUCTION_API_HOST="http://localhost:3000/api"
NEXT_PUBLIC_PRODUCTION_API_ZIPCODE="__MY_API_KEY__"
```

Create **.env.production.local** file, after the first deploy, complete de HOST with the url provided by serverless

```bash
NEXT_PUBLIC_PRODUCTION_API_HOST="__MY_CLOUDFRONT_URL__"
```

Start the development environment (then, navigate to http://localhost:3000):

    yarn dev

Building files can be done as follows:

    yarn build

### Linter

In this project i used [eslint](https://eslint.org/) with the specification of [Airbnb](https://github.com/airbnb/javascript), you can run the linter with the following command

```sh
yarn lint
```

### Unit - Component Testing

In this project i used [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for testing, you can run this tests with the following command

Run unit test

```sh
yarn test
```

### e2e Test

In this project i used [Cypress](https://www.cypress.io/) for e2e testing, you can run this tests with the following command

Run the tests in the terminal

```sh
yarn cy:run
```

Run the tests using the UI

```sh
yarn cy:open
```

Click in the `app.spect.js` to start running the tests

### Pull Request

Feel free to make a fork and send me a pull request with improvements, i am always willing to improve my way of writing code.

### License (MIT)

Code released under the [MIT License](LICENSE.MD).

### Thanks 🙌

- Franco Meriles
