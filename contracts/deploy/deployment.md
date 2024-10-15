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
│ token                      │ '0x063D9e366Ac8e1Cd0b5c12161b9a4065a7Ae814E' │
│ registry                   │ '0x4C5F08597295f696880C8eE01123FE805735ed03' │
│ sign                       │ '0x22E33bA02BEB546c2cF722C6E72a83EE3c8Fee98' │
│ faucet                     │ '0xd76D14Ea60a6d981F70A0c87bc7F5aeE0B0339Ba' │
│ whitelisted                │ '0xE74E02Cb6a1fc40fd376dDD8a8BF32D3dabc171A' │
│ nodeFeeManager             │ '0x203cA8a6fb98C7252409F5474c64CB828024ECEB' │
│ nodeStaking                │ '0x680a14F40b3E7F6f62668c5DFaf6d0d1eF08500A' │
│ stakingRewardsDistribution │ '0xeE0D60375Fe5B33d7B5785f3BF9BD7Db2f2322C4' │
└────────────────────────────┴──────────────────────────────────────────────┘
┌───────────────────────────────────────┬──────────────────────────────────────────────┐
│ (index)                               │ Values                                       │
├───────────────────────────────────────┼──────────────────────────────────────────────┤
│ registryGetToken                      │ '0x063D9e366Ac8e1Cd0b5c12161b9a4065a7Ae814E' │
│ registryGetSign                       │ '0x22E33bA02BEB546c2cF722C6E72a83EE3c8Fee98' │
│ registryGetFaucet                     │ '0xd76D14Ea60a6d981F70A0c87bc7F5aeE0B0339Ba' │
│ registryGetWhitelisted                │ '0xE74E02Cb6a1fc40fd376dDD8a8BF32D3dabc171A' │
│ registryGetNodeFeeManager             │ '0x203cA8a6fb98C7252409F5474c64CB828024ECEB' │
│ registryGetNodeStaking                │ '0x680a14F40b3E7F6f62668c5DFaf6d0d1eF08500A' │
│ registryGetStakingRewardsDistribution │ '0xeE0D60375Fe5B33d7B5785f3BF9BD7Db2f2322C4' │
└───────────────────────────────────────┴──────────────────────────────────────────────┘
```
