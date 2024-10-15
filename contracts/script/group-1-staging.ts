import { ethers, upgrades } from "hardhat";
import type { DataHiveToken, NodeFeeManager, NodeStaking, Registry, SignatureVerification, StakingRewardsDistribution, TestnetFaucet, Whitelisted } from "../typechain-types";

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
  const WhitelistedContract = await ethers.getContractFactory("Whitelisted", deployer);
  const NodeFeeManagerContract = await ethers.getContractFactory("NodeFeeManager", deployer);
  const NodeStakingContract = await ethers.getContractFactory("NodeStaking", deployer);
  const StakingRewardsDistributionContract = await ethers.getContractFactory("StakingRewardsDistribution", deployer);

  //
  // Deploy
  //
  const deployToken = await upgrades.deployProxy(DataHiveTokenContract, [], { kind: "uups", initializer: "initialize" });
  const deployRegistry = await upgrades.deployProxy(RegistryContract, [], { kind: "uups", initializer: "initialize" });
  const deploySign = await upgrades.deployProxy(SignatureVerificationContract, [], { kind: "uups", initializer: "initialize" });
  const deployFaucet = await upgrades.deployProxy(TestnetFaucetContract, [], { kind: "uups", initializer: "initialize" });
  const deployWhitelisted = await upgrades.deployProxy(WhitelistedContract, [], { kind: "uups", initializer: "initialize" });
  const deployNodeFeeManager = await upgrades.deployProxy(NodeFeeManagerContract, [], { kind: "uups", initializer: "initialize" });
  const deployNodeStaking = await upgrades.deployProxy(NodeStakingContract, [], { kind: "uups", initializer: "initialize" });
  const deployStakingRewardsDistribution = await upgrades.deployProxy(StakingRewardsDistributionContract, [], { kind: "uups", initializer: "initialize" });

  //
  // Wait for deployment transactions
  //
  await deployToken.waitForDeployment();
  await deployRegistry.waitForDeployment();
  await deploySign.waitForDeployment();
  await deployFaucet.waitForDeployment();
  await deployWhitelisted.waitForDeployment();
  await deployNodeFeeManager.waitForDeployment();
  await deployNodeStaking.waitForDeployment();
  await deployStakingRewardsDistribution.waitForDeployment();

  //
  // Type Casting
  //
  const token = deployToken as unknown as DataHiveToken;
  const registry = deployRegistry as unknown as Registry;
  const sign = deploySign as unknown as SignatureVerification;
  const faucet = deployFaucet as unknown as TestnetFaucet;
  const whitelisted = deployWhitelisted as unknown as Whitelisted;
  const nodeFeeManager = deployNodeFeeManager as unknown as NodeFeeManager;
  const nodeStaking = deployNodeStaking as unknown as NodeStaking;
  const stakingRewardsDistribution = deployStakingRewardsDistribution as unknown as StakingRewardsDistribution;

  //
  // Get Contract Address
  //
  const tokenAddress = await token.getAddress();
  const registryAddress = await registry.getAddress();
  const signAddress = await sign.getAddress();
  const faucetAddress = await faucet.getAddress();
  const whitelistedAddress = await whitelisted.getAddress();
  const nodeFeeManagerAddress = await nodeFeeManager.getAddress();
  const nodeStakingAddress = await nodeStaking.getAddress();
  const stakingRewardsDistributionAddress = await stakingRewardsDistribution.getAddress();

  //
  // Set Contract Address to Registry
  //
  const setDataHiveToken = await registry.connect(deployer).setDataHiveToken(tokenAddress);
  await setDataHiveToken.wait();

  const setSignatureVerification = await registry.connect(deployer).setSignatureVerification(signAddress);
  await setSignatureVerification.wait();

  const setTestnetFaucet = await registry.connect(deployer).setTestnetFaucet(faucetAddress);
  await setTestnetFaucet.wait();

  const setWhitelisted = await registry.connect(deployer).setWhitelist(whitelistedAddress);
  await setWhitelisted.wait();

  const setNodeFeeManager = await registry.connect(deployer).setNodeFeeManager(nodeFeeManagerAddress);
  await setNodeFeeManager.wait();

  const setNodeStaking = await registry.connect(deployer).setNodeStaking(nodeStakingAddress);
  await setNodeStaking.wait();

  const setStakingRewardsDistribution = await registry.connect(deployer).setStakingRewardsDistribution(stakingRewardsDistributionAddress);
  await setStakingRewardsDistribution.wait();

  //
  // Initialize
  //

  // set registry for faucet
  const faucetSetRegistry = await faucet.connect(deployer).setRegistryAddress(registryAddress);
  await faucetSetRegistry.wait();

  // set registry for sign
  const signSetRegistry = await sign.connect(deployer).setRegistryAddress(registryAddress);
  await signSetRegistry.wait();

  // set registry for whitelisted
  const whitelistedSetRegistry = await whitelisted.connect(deployer).setRegistryAddress(registryAddress);
  await whitelistedSetRegistry.wait();

  // set registry for node fee manager
  const nodeFeeManagerSetRegistry = await nodeFeeManager.connect(deployer).setRegistryAddress(registryAddress);
  await nodeFeeManagerSetRegistry.wait();

  // set registry for node staking
  const nodeStakingSetRegistry = await nodeStaking.connect(deployer).setRegistryAddress(registryAddress);
  await nodeStakingSetRegistry.wait();

  // set registry for staking rewards distribution
  const stakingRewardsDistributionSetRegistry = await stakingRewardsDistribution.connect(deployer).setRegistryAddress(registryAddress);
  await stakingRewardsDistributionSetRegistry.wait();

  // let the sign contract verify signatures
  const setSigner = await sign.connect(deployer).setSignerAddress("0x2afDa889eB3fD5a02b3dff4D39c7F5212EdE2AEC");
  await setSigner.wait();

  // testnet minter
  // let the faucet mint tokens
  const setMinter = await token.connect(deployer).grantRole(await token.MINTER_ROLE(), faucetAddress);
  await setMinter.wait();

  // fee
  // add allow token to node fee manager
  const nodeFeeManagerAllowToken = await nodeFeeManager.connect(deployer).setAllowToken(tokenAddress);
  await nodeFeeManagerAllowToken.wait();

  // set fee to node fee manager
  const nodeFeeManagerSetFee = await nodeFeeManager.connect(deployer).setFee(tokenAddress, ethers.parseEther("0.1"));
  await nodeFeeManagerSetFee.wait();

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

  // unpause whitelisted
  const unpauseWhitelisted = await whitelisted.connect(deployer).unpause();
  await unpauseWhitelisted.wait();

  // unpause node fee manager
  const unpauseNodeFeeManager = await nodeFeeManager.connect(deployer).unpause();
  await unpauseNodeFeeManager.wait();

  // unpause node staking
  const unpauseNodeStaking = await nodeStaking.connect(deployer).unpause();
  await unpauseNodeStaking.wait();

  // unpause staking rewards distribution
  const unpauseStakingRewardsDistribution = await stakingRewardsDistribution.connect(deployer).unpause();
  await unpauseStakingRewardsDistribution.wait();

  //
  // development
  //
  const whitelistedGrantRole1 = await whitelisted.connect(deployer).grantRole(await whitelisted.WHITELIST_ADMIN_ROLE(), "0xe70adf9aE4d5F68E80A8E2C5EA3B916Dd49C6D87");
  await whitelistedGrantRole1.wait();

  //
  //
  //
  console.table({
    token: tokenAddress,
    registry: registryAddress,
    sign: signAddress,
    faucet: faucetAddress,
    whitelisted: whitelistedAddress,
    nodeFeeManager: nodeFeeManagerAddress,
    nodeStaking: nodeStakingAddress,
    stakingRewardsDistribution: stakingRewardsDistributionAddress,
  });

  console.table({
    registryGetToken: await registry.dataHiveTokenAddress(),
    registryGetSign: await registry.signatureVerificationAddress(),
    registryGetFaucet: await registry.testnetFaucetAddress(),
    registryGetWhitelisted: await registry.whitelistedAddress(),
    registryGetNodeFeeManager: await registry.nodeFeeManagerAddress(),
    registryGetNodeStaking: await registry.nodeStakingAddress(),
    registryGetStakingRewardsDistribution: await registry.stakingRewardsDistributionAddress(),
  });
}

main().catch(console.error);
