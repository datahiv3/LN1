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
┌────────────────┬──────────────────────────────────────────────┐
│ (index)        │ Values                                       │
├────────────────┼──────────────────────────────────────────────┤
│ token          │ '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512' │
│ registry       │ '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9' │
│ sign           │ '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707' │
│ faucet         │ '0xa513E6E4b8f2a923D98304ec87F64353C4D5C853' │
│ nodeFeeManager │ '0x8A791620dd6260079BF849Dc5567aDC3F2FdC318' │
│ nodeStaking    │ '0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e' │
└────────────────┴──────────────────────────────────────────────┘
┌───────────────────────────┬──────────────────────────────────────────────┐
│ (index)                   │ Values                                       │
├───────────────────────────┼──────────────────────────────────────────────┤
│ registryGetToken          │ '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512' │
│ registryGetSign           │ '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707' │
│ registryGetFaucet         │ '0xa513E6E4b8f2a923D98304ec87F64353C4D5C853' │
│ registryGetNodeFeeManager │ '0x8A791620dd6260079BF849Dc5567aDC3F2FdC318' │
│ registryGetNodeStaking    │ '0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e' │
└───────────────────────────┴──────────────────────────────────────────────┘
```

## Staging

```bash
pnpm run:local script/group-1-staging.ts
```

```bash
deployer address: 0xB20E2539706BD724A1F17E85A2D2fE0Ff7359514
┌────────────────┬──────────────────────────────────────────────┐
│ (index)        │ Values                                       │
├────────────────┼──────────────────────────────────────────────┤
│ token          │ '0xBdb411a25535cFf4e7dba09dFebed3A88fb08613' │
│ registry       │ '0x2CfAcBd186F2B24EeD255aDa4213BFa83B2bCe38' │
│ sign           │ '0xc3027C1E531b0dC2d403927EC6A7eAC171a2ECB9' │
│ faucet         │ '0xC6c6c61004e710B94f38f2e9183F8Ed4190901b5' │
│ nodeFeeManager │ '0x3e047D123Cb91A3D76CA9fB7014Ce7f0ef3C1CDf' │
│ nodeStaking    │ '0x87999bed3ca61614569822F1fA53a9d5E894CA94' │
└────────────────┴──────────────────────────────────────────────┘
┌───────────────────────────┬──────────────────────────────────────────────┐
│ (index)                   │ Values                                       │
├───────────────────────────┼──────────────────────────────────────────────┤
│ registryGetToken          │ '0xBdb411a25535cFf4e7dba09dFebed3A88fb08613' │
│ registryGetSign           │ '0xc3027C1E531b0dC2d403927EC6A7eAC171a2ECB9' │
│ registryGetFaucet         │ '0xC6c6c61004e710B94f38f2e9183F8Ed4190901b5' │
│ registryGetNodeFeeManager │ '0x3e047D123Cb91A3D76CA9fB7014Ce7f0ef3C1CDf' │
│ registryGetNodeStaking    │ '0x87999bed3ca61614569822F1fA53a9d5E894CA94' │
└───────────────────────────┴──────────────────────────────────────────────┘
```


## Production

```bash
deployer address: 0xB20E2539706BD724A1F17E85A2D2fE0Ff7359514
┌────────────────────────────┬──────────────────────────────────────────────┐
│ (index)                    │ Values                                       │
├────────────────────────────┼──────────────────────────────────────────────┤
│ token                      │ '0xf8BE3f58e65574F66968BA262C81798623B5589e' │
│ registry                   │ '0x438E4Db78bB4334E436A3571e85b79EFF05AeE06' │
│ sign                       │ '0x330093832a058452aB5f9141b77916274b587B1D' │
│ faucet                     │ '0x845CdcCF86e8996876258941341a49aA76E822ac' │
│ whitelisted                │ '0x9471FCf5e9dc973B78afd7484287A1091ee5B44F' │
│ nodeFeeManager             │ '0x3ae098B54a2E1004FDF3A06bA401E136043b4A66' │
│ nodeStaking                │ '0xE54779771Fe36a4bD7287Fa07603d31632f41574' │
│ stakingRewardsDistribution │ '0x2f6e334fB8afC3E3DEC73b03B2DF22a284ACa3b0' │
└────────────────────────────┴──────────────────────────────────────────────┘
┌───────────────────────────────────────┬──────────────────────────────────────────────┐
│ (index)                               │ Values                                       │
├───────────────────────────────────────┼──────────────────────────────────────────────┤
│ registryGetToken                      │ '0xf8BE3f58e65574F66968BA262C81798623B5589e' │
│ registryGetSign                       │ '0x330093832a058452aB5f9141b77916274b587B1D' │
│ registryGetFaucet                     │ '0x845CdcCF86e8996876258941341a49aA76E822ac' │
│ registryGetWhitelisted                │ '0x9471FCf5e9dc973B78afd7484287A1091ee5B44F' │
│ registryGetNodeFeeManager             │ '0x3ae098B54a2E1004FDF3A06bA401E136043b4A66' │
│ registryGetNodeStaking                │ '0xE54779771Fe36a4bD7287Fa07603d31632f41574' │
│ registryGetStakingRewardsDistribution │ '0x2f6e334fB8afC3E3DEC73b03B2DF22a284ACa3b0' │
└───────────────────────────────────────┴──────────────────────────────────────────────┘
```