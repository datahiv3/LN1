# DataHive LN1

## Branches

The `main` branch will represent the `staging` environment. When a commit is made to this branch, the CI/CD pipeline will deploy to the staging environment.

The `releases/*` branches represent the production environment, with each branch corresponding to a specific version.

The `production` branch represents the `live` production environment for final deployment and will be merged from a specific `releases/*` branch.


## Developements

### Requirements

- VSCode
- NodeJS (`v20.17.0`)
- pnpm (`v9.12.0`)

### Dependencies

```bash
pnpm install
```

## Start

### Contracts

cd to `contracts`

#### Build Contracts

```bash
pnpm compile
```

### Test Contracts

```bash
pnpm test
```

### UI

Copy `.env.example` at `view` and use it to create `.env` at `view`

At root `LN1`

```bash
pnpm start:view
pnpm run:view start
```

Or `cd` to `view` and run

```
pnpm start
```

### Server

Copy `.env.example` at `services` and use it to create `.env` at `services`

At root `LN1`

```bash
pnpm start:services
pnpm run:services start
```

Or `cd` to `services` and run

```
pnpm start
```

## Deployment

`.github`

