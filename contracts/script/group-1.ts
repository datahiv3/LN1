import { ethers, upgrades } from "hardhat";
import type { DataHiveToken, NodeFeeManager, NodeStaking, Registry, SignatureVerification, StakingRewardsDistribution, TestnetFaucet, Whitelist } from "../typechain-types";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("deployer address:", deployer.address);

  const DataHiveTokenContract = await ethers.getContractFactory("DataHiveToken", deployer);
  const RegistryContract = await ethers.getContractFactory("Registry", deployer);
  const SignatureVerificationContract = await ethers.getContractFactory("SignatureVerification", deployer);
  const TestnetFaucetContract = await ethers.getContractFactory("TestnetFaucet", deployer);
  const WhitelistContract = await ethers.getContractFactory("Whitelist", deployer);
  const NodeFeeManagerContract = await ethers.getContractFactory("NodeFeeManager", deployer);
  const NodeStakingContract = await ethers.getContractFactory("NodeStaking", deployer);
  const StakingRewardsDistributionContract = await ethers.getContractFactory("StakingRewardsDistribution", deployer);

  const deployToken = await upgrades.deployProxy(DataHiveTokenContract, [], { kind: "uups", initializer: "initialize" });
  const deployRegistry = await upgrades.deployProxy(RegistryContract, [], { kind: "uups", initializer: "initialize" });
  const deploySign = await upgrades.deployProxy(SignatureVerificationContract, [], { kind: "uups", initializer: "initialize" });
  const deployFaucet = await upgrades.deployProxy(TestnetFaucetContract, [], { kind: "uups", initializer: "initialize" });
  const deployWhitelist = await upgrades.deployProxy(WhitelistContract, [], { kind: "uups", initializer: "initialize" });
  const deployNodeFeeManager = await upgrades.deployProxy(NodeFeeManagerContract, [], { kind: "uups", initializer: "initialize" });
  const deployNodeStaking = await upgrades.deployProxy(NodeStakingContract, [], { kind: "uups", initializer: "initialize" });
  const deployStakingRewardsDistribution = await upgrades.deployProxy(StakingRewardsDistributionContract, [], { kind: "uups", initializer: "initialize" });

  await deployToken.waitForDeployment();
  await deployRegistry.waitForDeployment();
  await deploySign.waitForDeployment();
  await deployFaucet.waitForDeployment();
  await deployWhitelist.waitForDeployment();
  await deployNodeFeeManager.waitForDeployment();
  await deployNodeStaking.waitForDeployment();
  await deployStakingRewardsDistribution.waitForDeployment();

  const token = deployToken as unknown as DataHiveToken;
  const registry = deployRegistry as unknown as Registry;
  const sign = deploySign as unknown as SignatureVerification;
  const faucet = deployFaucet as unknown as TestnetFaucet;
  const whitelist = deployWhitelist as unknown as Whitelist;
  const nodeFeeManager = deployNodeFeeManager as unknown as NodeFeeManager;
  const nodeStaking = deployNodeStaking as unknown as NodeStaking;
  const stakingRewardsDistribution = deployStakingRewardsDistribution as unknown as StakingRewardsDistribution;

  const tokenAddress = await token.getAddress();
  const registryAddress = await registry.getAddress();
  const signAddress = await sign.getAddress();
  const faucetAddress = await faucet.getAddress();
  const whitelistAddress = await whitelist.getAddress();
  const nodeFeeManagerAddress = await nodeFeeManager.getAddress();
  const nodeStakingAddress = await nodeStaking.getAddress();
  const stakingRewardsDistributionAddress = await stakingRewardsDistribution.getAddress();

  const setDataHiveToken = await registry.connect(deployer).setDataHiveToken(tokenAddress);
  await setDataHiveToken.wait();

  const setSignatureVerification = await registry.connect(deployer).setSignatureVerification(signAddress);
  await setSignatureVerification.wait();

  const setTestnetFaucet = await registry.connect(deployer).setTestnetFaucet(faucetAddress);
  await setTestnetFaucet.wait();

  const setWhitelist = await registry.connect(deployer).setWhitelist(whitelistAddress);
  await setWhitelist.wait();

  const setNodeFeeManager = await registry.connect(deployer).setNodeFeeManager(nodeFeeManagerAddress);
  await setNodeFeeManager.wait();

  const setNodeStaking = await registry.connect(deployer).setNodeStaking(nodeStakingAddress);
  await setNodeStaking.wait();

  const setStakingRewardsDistribution = await registry.connect(deployer).setStakingRewardsDistribution(stakingRewardsDistributionAddress);
  await setStakingRewardsDistribution.wait();

  // let the faucet mint tokens
  const setMinter = await token.connect(deployer).grantRole(await token.MINTER_ROLE(), faucetAddress);
  await setMinter.wait();

  // let the sign contract verify signatures
  const setSigner = await sign.connect(deployer).setSignerAddress("0x2afDa889eB3fD5a02b3dff4D39c7F5212EdE2AEC");
  await setSigner.wait();

  // unpause sign
  const unpauseSign = await sign.connect(deployer).unpause();
  await unpauseSign.wait();

  // unpause faucet
  const unpauseFaucet = await faucet.connect(deployer).unpause();
  await unpauseFaucet.wait();

  // unpause token
  const unpauseToken = await token.connect(deployer).unpause();
  await unpauseToken.wait();

  // set registry for faucet
  const faucetSetRegistry = await faucet.connect(deployer).setRegistryAddress(registryAddress);
  await faucetSetRegistry.wait();

  // set registry for sign
  const signSetRegistry = await sign.connect(deployer).setRegistryAddress(registryAddress);
  await signSetRegistry.wait();

  // transfer 1 ETH Hardhat to 0xe70adf9aE4d5F68E80A8E2C5EA3B916Dd49C6D87
  const transfer = await deployer.sendTransaction({ to: "0xe70adf9aE4d5F68E80A8E2C5EA3B916Dd49C6D87", value: ethers.parseEther("1") });
  await transfer.wait();

  console.table({
    token: tokenAddress,
    registry: registryAddress,
    sign: signAddress,
    faucet: faucetAddress,
    whitelist: whitelistAddress,
    nodeFeeManager: nodeFeeManagerAddress,
    nodeStaking: nodeStakingAddress,
    stakingRewardsDistribution: stakingRewardsDistributionAddress,
  });

  console.table({
    registryGetToken: await registry.dataHiveTokenAddress(),
    registryGetSign: await registry.signatureVerificationAddress(),
    registryGetFaucet: await registry.testnetFaucetAddress(),
    registryGetWhitelist: await registry.whitelistAddress(),
    registryGetNodeFeeManager: await registry.nodeFeeManagerAddress(),
    registryGetNodeStaking: await registry.nodeStakingAddress(),
    registryGetStakingRewardsDistribution: await registry.stakingRewardsDistributionAddress(),
  });
}

main().catch(console.error);
