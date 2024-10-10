import "@nomicfoundation/hardhat-chai-matchers";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-ignition-ethers";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";
import dotenv from "dotenv";
import "hardhat-abi-exporter";
import type { HardhatUserConfig } from "hardhat/config";

dotenv.config({ path: `${__dirname}/.env` });

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.27",
        settings: {
          evmVersion: "paris",
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    opSepolia: {
      url: "https://sepolia.optimism.io",
      accounts: [process.env.PRIVATE_KEY as string],
      timeout: 2_147_483_647,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
      accounts: ["0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"],
      timeout: 2_147_483_647,
    },
  },
  abiExporter: {
    path: "abi",
    clear: true,
    flat: true,
    only: [],
    spacing: 2,
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY as string,
  },
};

export default config;
