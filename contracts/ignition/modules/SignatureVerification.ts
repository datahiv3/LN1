import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SignatureVerification = buildModule("SignatureVerification", (m) => {
  const signatureVerification = m.contract("SignatureVerification");

  return { signatureVerification };
});

export default SignatureVerification;
