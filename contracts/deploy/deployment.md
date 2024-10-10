# Deploy

## With Ignition ()

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