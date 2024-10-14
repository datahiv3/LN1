# Deploy

## With Ignition (Deprecated)

```bash
pnpm deploy:local ./ignition/modules/DataHiveToken.ts
pnpm deploy:local ./ignition/modules/Registry.ts
pnpm deploy:local ./ignition/modules/SignatureVerification.ts
pnpm deploy:local ./ignition/modules/TestnetFaucet.ts

# DataHiveToken#DataHiveToken - 0x5FbDB2315678afecb367f032d93F642f64180aa3
# SignatureVerification#SignatureVerification - 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
# TestnetFaucet#TestnetFaucet - 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0
# Registry#Registry - 0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9

pnpm deploy:local ./ignition/modules/setRegistry.ts
```

## With Hardhat Run

### Localhost

```bash
pnpm run:local script/group-1.ts
```

```bash
deployer address: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
┌────────────────────────────┬──────────────────────────────────────────────┐
│ (index)                    │ Values                                       │
├────────────────────────────┼──────────────────────────────────────────────┤
│ token                      │ '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512' │
│ registry                   │ '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9' │
│ sign                       │ '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707' │
│ faucet                     │ '0xa513E6E4b8f2a923D98304ec87F64353C4D5C853' │
│ whitelisted                │ '0x8A791620dd6260079BF849Dc5567aDC3F2FdC318' │
│ nodeFeeManager             │ '0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e' │
│ nodeStaking                │ '0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82' │
│ stakingRewardsDistribution │ '0x0B306BF915C4d645ff596e518fAf3F9669b97016' │
└────────────────────────────┴──────────────────────────────────────────────┘
```

## Staging

```bash
pnpm run:local script/group-1-staging.ts
```

```bash
deployer address: 0xB20E2539706BD724A1F17E85A2D2fE0Ff7359514
┌────────────────────────────┬──────────────────────────────────────────────┐
│ (index)                    │ Values                                       │
├────────────────────────────┼──────────────────────────────────────────────┤
│ token                      │ '0x91fB42BF01519468bd93D0B06D324D01243CF959' │
│ registry                   │ '0xb48e7948a00aE2F8E1D1E58724f40012BcfcAEDC' │
│ sign                       │ '0x6c5fD19b95DA2103f287d6032aB22fF57176e551' │
│ faucet                     │ '0x2DaA4af4c4b53457443bfcCEE21daa319df359Bd' │
│ whitelisted                │ '0x10E0fd5cd2FC69CE0ccD3c7fdB76a5bE86b6F267' │
│ nodeFeeManager             │ '0xE0c9D392598C11c7Cb6791A2a7ebA0e3Ddc5E406' │
│ nodeStaking                │ '0xE5B34D6DA17E206b7db46daC57539C2d09261581' │
│ stakingRewardsDistribution │ '0xbd261C9602e4DbF3F61Eae36c9a3085D37f2c727' │
└────────────────────────────┴──────────────────────────────────────────────┘
┌───────────────────────────────────────┬──────────────────────────────────────────────┐
│ (index)                               │ Values                                       │
├───────────────────────────────────────┼──────────────────────────────────────────────┤
│ registryGetToken                      │ '0x91fB42BF01519468bd93D0B06D324D01243CF959' │
│ registryGetSign                       │ '0x6c5fD19b95DA2103f287d6032aB22fF57176e551' │
│ registryGetFaucet                     │ '0x2DaA4af4c4b53457443bfcCEE21daa319df359Bd' │
│ registryGetWhitelisted                │ '0x10E0fd5cd2FC69CE0ccD3c7fdB76a5bE86b6F267' │
│ registryGetNodeFeeManager             │ '0xE0c9D392598C11c7Cb6791A2a7ebA0e3Ddc5E406' │
│ registryGetNodeStaking                │ '0xE5B34D6DA17E206b7db46daC57539C2d09261581' │
│ registryGetStakingRewardsDistribution │ '0xbd261C9602e4DbF3F61Eae36c9a3085D37f2c727' │
└───────────────────────────────────────┴──────────────────────────────────────────────┘
```
