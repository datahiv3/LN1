import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("setRegistry", (m) => {
  const token = m.contractAt("DataHiveToken", "0x5FbDB2315678afecb367f032d93F642f64180aa3");
  const sign = m.contractAt("SignatureVerification", "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512");
  const registry = m.contractAt("Registry", "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9");
  const faucet = m.contractAt("TestnetFaucet", "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0");

  m.call(registry, "setDataHiveToken", [token.address]);
  m.call(registry, "setSignatureVerification", [sign.address]);
  m.call(registry, "setTestnetFaucet", [faucet.address]);

  return { token, registry, sign, faucet };
});
