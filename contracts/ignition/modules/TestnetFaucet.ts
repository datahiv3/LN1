import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const TestnetFaucet = buildModule("TestnetFaucet", (m) => {
  const testnetFaucet = m.contract("TestnetFaucet");

  return { testnetFaucet };
});

export default TestnetFaucet;
