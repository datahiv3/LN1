import "@nomicfoundation/hardhat-chai-matchers";
import "@nomicfoundation/hardhat-ethers";
import type { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
import { expect } from "chai";
import abi from "ethereumjs-abi";
import { ethers, upgrades } from "hardhat";
import type { SignatureVerification } from "../typechain-types";

describe("Group1", () => {
  let deployer: HardhatEthersSigner;
  let addr1: HardhatEthersSigner;
  let signatureVerification: SignatureVerification;

  beforeEach(async () => {
    [deployer, addr1] = await ethers.getSigners();
    const SignatureVerificationContract = await ethers.getContractFactory("SignatureVerification", deployer);
    const deploySign = await upgrades.deployProxy(SignatureVerificationContract, [], { kind: "uups", initializer: "initialize" });
    await deploySign.waitForDeployment();

    signatureVerification = deploySign as unknown as SignatureVerification;
  });

  it("should return the correct signer", async () => {
    const message = "XXug25sDjb";

    const signature = await addr1.signMessage(message);

    await expect(signatureVerification.connect(deployer).setSignerAddress(addr1.address)).to.not.reverted;
    await expect(signatureVerification.connect(deployer).unpause()).to.not.reverted;

    expect(await signatureVerification.verifyMessage(message, signature)).to.equal(true);
  });

  it("should return the correct signer with bytes message", async () => {
    const message = "XXug25sDjb";
    const hash = abi.soliditySHA3(["address", "string"], ["0xe70adf9aE4d5F68E80A8E2C5EA3B916Dd49C6D87", message]);

    const signature = await addr1.signMessage(hash);

    await expect(signatureVerification.connect(deployer).setSignerAddress(addr1.address)).to.not.reverted;
    await expect(signatureVerification.connect(deployer).unpause()).to.not.reverted;

    expect(await signatureVerification.verifyBytes(ethers.hexlify(hash), signature)).to.equal(true);
  });
});
