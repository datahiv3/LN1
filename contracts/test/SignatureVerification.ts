import "@nomicfoundation/hardhat-chai-matchers";
import "@nomicfoundation/hardhat-ethers";
import type { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
import { expect } from "chai";
import abi from "ethereumjs-abi";
import { ethers, upgrades } from "hardhat";
import type { SignatureVerification } from "../typechain-types";

describe("Group1", () => {
  let deployer: HardhatEthersSigner;
  let signatureVerification: SignatureVerification;

  beforeEach(async () => {
    [deployer] = await ethers.getSigners();
    const SignatureVerificationContract = await ethers.getContractFactory("SignatureVerification", deployer);
    const deploySign = await upgrades.deployProxy(SignatureVerificationContract, [], { kind: "uups", initializer: "initialize" });
    await deploySign.waitForDeployment();

    signatureVerification = deploySign as unknown as SignatureVerification;
  });

  it("should return the correct signer", async () => {
    const privateKey = "8a152bd030deeaa4a8b1b4ad3a07459d452fa4de3b95f0b8ab72c941951da82c";
    const signer = new ethers.Wallet(privateKey, ethers.provider);

    const message = "XXug25sDjb";

    const signature = await signer.signMessage(message);

    await expect(signatureVerification.connect(deployer).setSignerAddress(signer.address)).to.not.reverted;
    await expect(signatureVerification.connect(deployer).unpause()).to.not.reverted;

    expect(await signatureVerification.verifyMessage(message, signature)).to.equal(true);
  });

  it("should return the correct signer with bytes message", async () => {
    const privateKey = "8a152bd030deeaa4a8b1b4ad3a07459d452fa4de3b95f0b8ab72c941951da82c";
    const signer = new ethers.Wallet(privateKey, ethers.provider);

    const message = "XXug25sDjb";
    const hash = abi.soliditySHA3(["address", "string"], ["0xe70adf9aE4d5F68E80A8E2C5EA3B916Dd49C6D87", message]);

    const signature = await signer.signMessage(hash);

    await expect(signatureVerification.connect(deployer).setSignerAddress(signer.address)).to.not.reverted;
    await expect(signatureVerification.connect(deployer).unpause()).to.not.reverted;

    expect(await signatureVerification.verifyBytes(ethers.hexlify(hash), signature)).to.equal(true);
  });
});
