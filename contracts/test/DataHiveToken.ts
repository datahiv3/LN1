import type { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers, upgrades } from "hardhat";
import type { DataHiveToken } from "../typechain-types";

describe("DataHiveToken", () => {
  let dataHiveToken: DataHiveToken;
  let owner: HardhatEthersSigner;
  let addr1: HardhatEthersSigner;
  let addr2: HardhatEthersSigner;
  let addrs: HardhatEthersSigner[];

  beforeEach(async () => {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    const DataHiveTokenContract = await ethers.getContractFactory("DataHiveToken", owner);
    const deployToken = await upgrades.deployProxy(DataHiveTokenContract, [], { kind: "uups", initializer: "initialize" });
    await deployToken.waitForDeployment();

    dataHiveToken = deployToken as unknown as DataHiveToken;
  });

  describe("Deployment", () => {
    it("Can set unpause", async () => {
      await expect(dataHiveToken.connect(owner).unpause()).to.not.reverted;
    });

    it("Can set pause", async () => {
      await expect(dataHiveToken.connect(owner).pause()).to.not.reverted;
    });

    it("Should set the right owner", async () => {
      expect(await dataHiveToken.connect(owner).hasRole(await dataHiveToken.DEFAULT_ADMIN_ROLE(), owner.address)).to.be.true;
    });

    it("Should assign the total supply of tokens to the owner", async () => {
      const ownerBalance = await dataHiveToken.balanceOf(owner.address);
      expect(await dataHiveToken.totalSupply()).to.equal(ownerBalance);
    });
  });

  describe("Transactions", () => {
    before(async () => {
      if (await dataHiveToken.paused()) {
        await expect(dataHiveToken.connect(owner).unpause()).to.not.reverted;
      }
    });

    it("Can grant roles", async () => {
      await dataHiveToken.connect(owner).grantRole(await dataHiveToken.MINTER_ROLE(), addr1.address);
      expect(await dataHiveToken.connect(owner).hasRole(await dataHiveToken.MINTER_ROLE(), addr1.address)).to.be.true;
    });

    it("Cant not mint when paused", async () => {
      await expect(dataHiveToken.connect(owner).mint(addr1.address, 100)).to.be.revertedWith("EnforcedPause()");
    });

    it("Can mint tokens", async () => {
      await dataHiveToken.mint(addr1.address, 100);
      const addr1Balance = await dataHiveToken.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(100);
    });

    it("Should transfer tokens between accounts", async () => {
      // Transfer 50 tokens from owner to addr1
      await dataHiveToken.transfer(addr1.address, 50);
      const addr1Balance = await dataHiveToken.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(50);

      // Transfer 50 tokens from addr1 to addr2
      await dataHiveToken.connect(addr1).transfer(addr2.address, 50);
      const addr2Balance = await dataHiveToken.balanceOf(addr2.address);
      expect(addr2Balance).to.equal(50);
    });

    it("Should fail if sender doesn't have enough tokens", async () => {
      const initialOwnerBalance = await dataHiveToken.balanceOf(owner.address);

      // Try to send 1 token from addr1 (0 tokens) to owner (should fail)
      await expect(dataHiveToken.connect(addr1).transfer(owner.address, 1)).to.be.revertedWith("Not enough balance");

      // Owner balance shouldn't have changed.
      expect(await dataHiveToken.balanceOf(owner.address)).to.equal(initialOwnerBalance);
    });

    it("Should update balances after transfers", async () => {
      const initialOwnerBalance = await dataHiveToken.balanceOf(owner.address);

      // Transfer 100 tokens from owner to addr1.
      await dataHiveToken.transfer(addr1.address, 100);

      // Transfer another 50 tokens from owner to addr2.
      await dataHiveToken.transfer(addr2.address, 50);

      // Check balances.
      const finalOwnerBalance = await dataHiveToken.balanceOf(owner.address);
      expect(finalOwnerBalance).to.equal(initialOwnerBalance - BigInt(150));

      const addr1Balance = await dataHiveToken.balanceOf(addr1.address);
      expect(addr1Balance).to.equal(100);

      const addr2Balance = await dataHiveToken.balanceOf(addr2.address);
      expect(addr2Balance).to.equal(50);
    });
  });
});
