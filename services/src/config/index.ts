import randomstring from "randomstring";

export const stage = process.env.STAGE!;
export const env = process.env.ENV!;

export const isProduction = stage === "production";
export const isStaging = env === "staging";

export const mongodbUrl = process.env.MONGODB_URL!;

export const jwtSecret = process.env.JWT_SECRET! || randomstring.generate();

export const rpcHttp = process.env.RPC_HTTP!;

export const adminAddresses = ["0xe70adf9aE4d5F68E80A8E2C5EA3B916Dd49C6D87"];
export const signerPrivateKey = process.env.SIGNER_PRIVATE_KEY!;

export const contracts = {
  DataHiveToken: "",
  Registry: "",
  TestnetFaucet: "",
};

export const recaptchaSecretkey = process.env.RECAPTCHA_SECRETKEY!;
