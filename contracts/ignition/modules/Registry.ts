import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const Registry = buildModule("Registry", (m) => {
  const registry = m.contract("Registry");

  return { registry };
});

export default Registry;
