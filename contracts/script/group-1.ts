import { ethers, upgrades } from "hardhat";
import { DataHiveToken, Registry, SignatureVerification, TestnetFaucet } from "../typechain-types";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("deployer address:", deployer.address);

  const DataHiveTokenContract = await ethers.getContractFactory("DataHiveToken", deployer);
  const RegistryContract = await ethers.getContractFactory("Registry", deployer);
  const SignatureVerificationContract = await ethers.getContractFactory("SignatureVerification", deployer);
  const TestnetFaucetContract = await ethers.getContractFactory("TestnetFaucet", deployer);

  const deployToken = await upgrades.deployProxy(DataHiveTokenContract, [], { kind: "uups", initializer: "initialize" });
  const deployRegistry = await upgrades.deployProxy(RegistryContract, [], { kind: "uups", initializer: "initialize" });
  const deploySign = await upgrades.deployProxy(SignatureVerificationContract, [], { kind: "uups", initializer: "initialize" });
  const deployFaucet = await upgrades.deployProxy(TestnetFaucetContract, [], { kind: "uups", initializer: "initialize" });

  await deployToken.waitForDeployment();
  await deployRegistry.waitForDeployment();
  await deploySign.waitForDeployment();
  await deployFaucet.waitForDeployment();

  const token = deployToken as unknown as DataHiveToken;
  const registry = deployRegistry as unknown as Registry;
  const sign = deploySign as unknown as SignatureVerification;
  const faucet = deployFaucet as unknown as TestnetFaucet;

  const tokenAddress = await token.getAddress();
  const registryAddress = await registry.getAddress();
  const signAddress = await sign.getAddress();
  const faucetAddress = await faucet.getAddress();

  const setDataHiveToken = await registry.connect(deployer).setDataHiveToken(tokenAddress);
  await setDataHiveToken.wait();

  const setSignatureVerification = await registry.connect(deployer).setSignatureVerification(signAddress);
  await setSignatureVerification.wait();

  const setTestnetFaucet = await registry.connect(deployer).setTestnetFaucet(faucetAddress);
  await setTestnetFaucet.wait();

  console.table({
    token: tokenAddress,
    registry: registryAddress,
    sign: signAddress,
    faucet: faucetAddress,
  });
}

main().catch(console.error);
