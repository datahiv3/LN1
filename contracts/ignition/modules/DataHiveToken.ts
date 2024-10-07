import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DataHiveToken = buildModule("DataHiveToken", (m) => {
  const token = m.contract("DataHiveToken");

  return { token };
});

export default DataHiveToken;
