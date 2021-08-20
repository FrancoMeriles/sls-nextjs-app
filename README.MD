# Serverless NextJS App

This project is a simple app using [Mercado Libre - API](https://developers.mercadolibre.com.ar/es_ar/api-docs-es), [NextJS](https://nextjs.org/) and deploying using [Serverless Framework](https://www.serverless.com/) with [Serverless Component](https://www.serverless.com/components/).

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
|   |-- contexts
|   |-- icons
|   |-- pages
|   |-- service
|   |-- utils
|   `-- setupTests.js
|-- tsconfig.json
`-- yarn.lock

```

### Architecture

For deploy the app im using [Serverless Framework](https://www.serverless.com/) with [Serverless Next.js Component](https://github.com/serverless-nextjs/serverless-next.js)

![](https://github.com/serverless-nextjs/serverless-next.js/blob/master/img/arch_no_grid.png?raw=true)

Basically what [Serverless Next.js Component](https://github.com/serverless-nextjs/serverless-next.js) does is create a cloudfront distribution with many resources, a function lambda with the content of your app (SSR) and another lambda with the internal api of nextjs both Lambda@Edge
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

Create **.env.production.local** file, after the first deploy, complete the API HOST with the url provided by serverless

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

Run test with coverage

```sh
yarn test:coverage
```

100% of coverage 🚀

```
-----------------------------------|---------|----------|---------|---------|-------------------
File                               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------------------------------|---------|----------|---------|---------|-------------------
All files                          |     100 |    82.81 |     100 |     100 |                   
 components/Card                   |     100 |      100 |     100 |     100 |                   
  Card.tsx                         |     100 |      100 |     100 |     100 |                   
 components/CategorieCard          |     100 |      100 |     100 |     100 |                   
  CategorieCard.tsx                |     100 |      100 |     100 |     100 |                   
 components/CategorieHeader        |     100 |      100 |     100 |     100 |                   
  CategorieHeader.tsx              |     100 |      100 |     100 |     100 |                   
 components/ContentHeaderSubtitle  |     100 |      100 |     100 |     100 |                   
  ContentHeaderSubtitle.tsx        |     100 |      100 |     100 |     100 |                   
 components/ContentOptions         |     100 |      100 |     100 |     100 |                   
  ContentOptions.tsx               |     100 |      100 |     100 |     100 |                   
 components/ContentPrice           |     100 |      100 |     100 |     100 |                   
  ContentPrice.tsx                 |     100 |      100 |     100 |     100 |                   
 components/ContentShippingOptions |     100 |       50 |     100 |     100 |                   
  BestShippingOption.tsx           |     100 |       50 |     100 |     100 | 70-139            
  ContentShippingOptions.tsx       |     100 |      100 |     100 |     100 |                   
  DevolutionsShippingOptions.tsx   |     100 |      100 |     100 |     100 |                   
 components/Footer                 |     100 |      100 |     100 |     100 |                   
  Footer.tsx                       |     100 |      100 |     100 |     100 |                   
 components/Header                 |     100 |       50 |     100 |     100 |                   
  Header.tsx                       |     100 |       50 |     100 |     100 | 36                
 components/Pager                  |     100 |      100 |     100 |     100 |                   
  Pager.tsx                        |     100 |      100 |     100 |     100 |                   
 components/ProductActions         |     100 |       75 |     100 |     100 |                   
  ProductActions.tsx               |     100 |       75 |     100 |     100 | 30                
 components/ProductDescription     |     100 |      100 |     100 |     100 |                   
  ProductDescription.tsx           |     100 |      100 |     100 |     100 |                   
 components/ProductFeatures        |     100 |      100 |     100 |     100 |                   
  ProductFeatures.tsx              |     100 |      100 |     100 |     100 |                   
 components/RatedProduct           |     100 |       50 |     100 |     100 |                   
  RatedProduct.tsx                 |     100 |       50 |     100 |     100 | 13                
 components/RatedStar              |     100 |      100 |     100 |     100 |                   
  RatedStar.tsx                    |     100 |      100 |     100 |     100 |                   
 components/ReviewProduct          |     100 |       50 |     100 |     100 |                   
  ReviewProduct.tsx                |     100 |       50 |     100 |     100 | 40                
 components/ReviewProductHeader    |     100 |      100 |     100 |     100 |                   
  ReviewProductHeader.tsx          |     100 |      100 |     100 |     100 |                   
 components/ReviewProductItem      |     100 |      100 |     100 |     100 |                   
  ReviewProductItem.tsx            |     100 |      100 |     100 |     100 |                   
 components/Search                 |     100 |       50 |     100 |     100 |                   
  Search.tsx                       |     100 |       50 |     100 |     100 | 23                
 contexts                          |     100 |    91.67 |     100 |     100 |                   
  Favorite.tsx                     |     100 |      100 |     100 |     100 |                   
  ZipCode.tsx                      |     100 |    83.33 |     100 |     100 | 29                
 contexts/actions                  |     100 |      100 |     100 |     100 |                   
  actionTypes.ts                   |     100 |      100 |     100 |     100 |                   
  favorites.ts                     |     100 |      100 |     100 |     100 |                   
  zipCode.ts                       |     100 |      100 |     100 |     100 |                   
 icons                             |     100 |      100 |     100 |     100 |                   
  Calendar.tsx                     |     100 |      100 |     100 |     100 |                   
  Check.tsx                        |     100 |      100 |     100 |     100 |                   
  Devolutions.tsx                  |     100 |      100 |     100 |     100 |                   
  HeartFull.tsx                    |     100 |      100 |     100 |     100 |                   
  HeartOutline.tsx                 |     100 |      100 |     100 |     100 |                   
  Money.tsx                        |     100 |      100 |     100 |     100 |                   
  Position.tsx                     |     100 |      100 |     100 |     100 |                   
  Shield.tsx                       |     100 |      100 |     100 |     100 |                   
  Star.tsx                         |     100 |      100 |     100 |     100 |                   
  Thumbs.tsx                       |     100 |      100 |     100 |     100 |                   
  Truck.tsx                        |     100 |      100 |     100 |     100 |                   
  Warranty.tsx                     |     100 |      100 |     100 |     100 |                   
 pages                             |     100 |      100 |     100 |     100 |                   
  index.tsx                        |     100 |      100 |     100 |     100 |                   
 pages/products                    |     100 |      100 |     100 |     100 |                   
  index.tsx                        |     100 |      100 |     100 |     100 |                   
 service                           |     100 |      100 |     100 |     100 |                   
  apiClient.ts                     |     100 |      100 |     100 |     100 |                   
  local.service.ts                 |     100 |      100 |     100 |     100 |                   
  zipcode.service.ts               |     100 |      100 |     100 |     100 |                   
 utils                             |     100 |    83.33 |     100 |     100 |                   
  index.ts                         |     100 |    83.33 |     100 |     100 | 29                
-----------------------------------|---------|----------|---------|---------|-------------------
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
