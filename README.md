# DataHive LN1

## Branches

The `main` branch will represent the `staging` environment. When a commit is made to this branch, the CI/CD pipeline will deploy to the staging environment.

`releases/*` production with version.

`production` production

## Developements

### Requirements

- VSCode
- NodeJS (`v20.17.0`)
- pnpm (`v9.10.0`)

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

Or `cd` to `view` and run: `pnpm start`

### Server

Copy `.env.example` at `services` and use it to create `.env` at `services`

At root `LN1`

```bash
pnpm start:services
pnpm run:services start
```

Or `cd` to `services` and run: `pnpm start`

## Deployment

`.github`

