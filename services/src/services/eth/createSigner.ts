import { ethers } from "ethers";
import { httpProvider } from ".";
import { signerPrivateKey } from "../../config";

export const createSigner = async () => {
  const signer = new ethers.Wallet(signerPrivateKey, httpProvider);

  return signer;
};
