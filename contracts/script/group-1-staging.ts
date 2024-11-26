import { ethers, upgrades } from "hardhat";
import type { DataHiveToken, NodeFeeManager, NodeStaking, Registry, SignatureVerification, TestnetFaucet } from "../typechain-types";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("deployer address:", deployer.address);

  //
  // Contract Factory
  //
  const DataHiveTokenContract = await ethers.getContractFactory("DataHiveToken", deployer);
  const RegistryContract = await ethers.getContractFactory("Registry", deployer);
  const SignatureVerificationContract = await ethers.getContractFactory("SignatureVerification", deployer);
  const TestnetFaucetContract = await ethers.getContractFactory("TestnetFaucet", deployer);
  const NodeFeeManagerContract = await ethers.getContractFactory("NodeFeeManager", deployer);
  const NodeStakingContract = await ethers.getContractFactory("NodeStaking", deployer);

  //
  // Deploy
  //
  const deployToken = await upgrades.deployProxy(DataHiveTokenContract, [], { kind: "uups", initializer: "initialize" });
  const deployRegistry = await upgrades.deployProxy(RegistryContract, [], { kind: "uups", initializer: "initialize" });
  const deploySign = await upgrades.deployProxy(SignatureVerificationContract, [], { kind: "uups", initializer: "initialize" });
  const deployFaucet = await upgrades.deployProxy(TestnetFaucetContract, [], { kind: "uups", initializer: "initialize" });
  const deployNodeFeeManager = await upgrades.deployProxy(NodeFeeManagerContract, [], { kind: "uups", initializer: "initialize" });
  const deployNodeStaking = await upgrades.deployProxy(NodeStakingContract, [], { kind: "uups", initializer: "initialize" });

  //
  // Wait for deployment transactions
  //
  await deployToken.waitForDeployment();
  await deployRegistry.waitForDeployment();
  await deploySign.waitForDeployment();
  await deployFaucet.waitForDeployment();
  await deployNodeFeeManager.waitForDeployment();
  await deployNodeStaking.waitForDeployment();

  //
  // Type Casting
  //
  const token = deployToken as unknown as DataHiveToken;
  const registry = deployRegistry as unknown as Registry;
  const sign = deploySign as unknown as SignatureVerification;
  const faucet = deployFaucet as unknown as TestnetFaucet;
  const nodeFeeManager = deployNodeFeeManager as unknown as NodeFeeManager;
  const nodeStaking = deployNodeStaking as unknown as NodeStaking;

  //
  // Get Contract Address
  //
  const tokenAddress = await token.getAddress();
  const registryAddress = await registry.getAddress();
  const signAddress = await sign.getAddress();
  const faucetAddress = await faucet.getAddress();
  const nodeFeeManagerAddress = await nodeFeeManager.getAddress();
  const nodeStakingAddress = await nodeStaking.getAddress();

  //
  // Set Contract Address to Registry
  //
  const setDataHiveToken = await registry.connect(deployer).setDataHiveToken(tokenAddress);
  await setDataHiveToken.wait();

  const setSignatureVerification = await registry.connect(deployer).setSignatureVerification(signAddress);
  await setSignatureVerification.wait();

  const setTestnetFaucet = await registry.connect(deployer).setTestnetFaucet(faucetAddress);
  await setTestnetFaucet.wait();

  const setNodeFeeManager = await registry.connect(deployer).setNodeFeeManager(nodeFeeManagerAddress);
  await setNodeFeeManager.wait();

  const setNodeStaking = await registry.connect(deployer).setNodeStaking(nodeStakingAddress);
  await setNodeStaking.wait();

  //
  // Initialize
  //

  // set registry for faucet
  const faucetSetRegistry = await faucet.connect(deployer).setRegistryAddress(registryAddress);
  await faucetSetRegistry.wait();

  // set registry for sign
  const signSetRegistry = await sign.connect(deployer).setRegistryAddress(registryAddress);
  await signSetRegistry.wait();

  // set registry for node fee manager
  const nodeFeeManagerSetRegistry = await nodeFeeManager.connect(deployer).setRegistryAddress(registryAddress);
  await nodeFeeManagerSetRegistry.wait();

  // set registry for node staking
  const nodeStakingSetRegistry = await nodeStaking.connect(deployer).setRegistryAddress(registryAddress);
  await nodeStakingSetRegistry.wait();

  // let the sign contract verify signatures
  const setSigner = await sign.connect(deployer).setSignerAddress("0x2afDa889eB3fD5a02b3dff4D39c7F5212EdE2AEC");
  await setSigner.wait();

  // testnet minter
  // let the faucet mint tokens
  const setMinter = await token.connect(deployer).grantRole(await token.MINTER_ROLE(), faucetAddress);
  await setMinter.wait();

  // fee
  // add allow token to node fee manager
  const nodeFeeManagerAllowToken = await nodeFeeManager.connect(deployer).setToken(tokenAddress);
  await nodeFeeManagerAllowToken.wait();

  //  add allow token to node staking
  const nodeStakingAllowToken = await nodeStaking.connect(deployer).setToken(tokenAddress);
  await nodeStakingAllowToken.wait();

  // staking
  // unpause token
  const unpauseToken = await token.connect(deployer).unpause();
  await unpauseToken.wait();

  // unpause sign
  const unpauseSign = await sign.connect(deployer).unpause();
  await unpauseSign.wait();

  // unpause faucet
  const unpauseFaucet = await faucet.connect(deployer).unpause();
  await unpauseFaucet.wait();

  // unpause node fee manager
  const unpauseNodeFeeManager = await nodeFeeManager.connect(deployer).unpause();
  await unpauseNodeFeeManager.wait();

  // unpause node staking
  const unpauseNodeStaking = await nodeStaking.connect(deployer).unpause();
  await unpauseNodeStaking.wait();

  //
  //
  //
  console.table({
    token: tokenAddress,
    registry: registryAddress,
    sign: signAddress,
    faucet: faucetAddress,
    nodeFeeManager: nodeFeeManagerAddress,
    nodeStaking: nodeStakingAddress,
  });

  console.table({
    registryGetToken: await registry.dataHiveTokenAddress(),
    registryGetSign: await registry.signatureVerificationAddress(),
    registryGetFaucet: await registry.testnetFaucetAddress(),
    registryGetNodeFeeManager: await registry.nodeFeeManagerAddress(),
    registryGetNodeStaking: await registry.nodeStakingAddress(),
  });
}

main().catch(console.error);
