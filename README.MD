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

```
└── cypress
│   └── fixtures
│   └── integration
│   └── plugins
│   └── support
└── src
│   └── assets
│   └── axios
│   └── components
│   └── containers
│   └── scss
│   └── ui
│   └── util
│   └── hooks
└── .gitignore
└── .eslintrc.json
└── cypress.json
└── package.json
└── yarn-lock.json
└── README.MD
```

### Architecture and Deploy

For deploy the app im using [Serverless Framework](https://www.serverless.com/) with [Serverless Next.js Component](https://github.com/serverless-nextjs/serverless-next.js)

![](https://github.com/serverless-nextjs/serverless-next.js/blob/master/img/arch_no_grid.png?raw=true)

The projects are ready to deploy to AWS ! 🌈

You can deploy the project with [Serverless Framework](https://www.serverless.com/) using [Serverless Componentes](https://www.serverless.com/components/), you will need have an account with the correct credentials (API and SECRET KEY) in the file `~/.aws/credentials` or set your AWS credentials as environment variables:

```bash
AWS_ACCESS_KEY_ID=accesskey
AWS_SECRET_ACCESS_KEY=sshhh
```

Then install the latest version of Serverless that supports components

```sh
npm install -g serverless
```

And simply deploy

```sh
serverless
```

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

First start the app and in other console run cypress

```sh
yarn start
```

```sh
yarn cypress
```

Click in the `app.spect.js` to start running the tests

### Do you wana try it ?

Clone this repo and install all packages and dependencies required for this project:

    yarn

Start the development environment (then, navigate to http://localhost:8080):

    yarn dev

Building files can be done as follows:

    yarn build

### Pull Request

Feel free to make a fork and send me a pull request with improvements, i am always willing to improve my way of writing code and thanks.

### License (MIT)

Code released under the [MIT License](LICENSE.MD).

### Thanks 🙌

- Franco Meriles
