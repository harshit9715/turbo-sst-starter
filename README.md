# Turborepo SST starter

This is an unofficial starter Turborepo with SST (Serverless Stack Toolkit both CDK and ION) with multiple Next.js apps.

## Getting Started

Run the following command:

```sh
yarn install
yarn dev
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@repo/backend`: a [Serverless Stack Toolkit CDK](https://docs.sst.dev/) app
- `@repo/ion`: a [Serverless Stack Toolkit ION](https://ion.sst.dev/docs/) app

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
yarn build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm dev
```
