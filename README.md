# monorepo-problem

:hotsprings: Repo with three packages where two has the same dependency.

## Develop each package individually :crystal_ball:

```bash
yarn workspace @app/package-a dev
yarn workspace @app/package-b dev
```

## Build a production version of packages :tada:

> Required to build production version of whole app

```bash
yarn workspace @app/package-a build:prod
yarn workspace @app/package-b build:prod
yarn workspace @app/main build:prod
```

## Where is the problem? :warning:

Bundle file: `packages/main/dist/index.js` contains **duplicated** `moment.js`.

## How to achieve this goals? :star2:

- `package-a`
  - in development version of bundle: `moment.js` is included
  - in production version of bundle: `moment.js` is not included
- `package-b`
  - in development version of bundle: `moment.js` is included
  - in production version of bundle: `moment.js` is not included
- `main`
  - in development version of bundle: `moment.js` is included (could be `vendor.js`)
  - in production version of bundle: `moment.js` is included (could be `vendor.js`)
