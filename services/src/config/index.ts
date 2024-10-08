import randomstring from "randomstring";
import logger from "../utils/log";

export const env = process.env.ENV!;
export const stage = process.env.STAGE!;

export const isEnvProduction = env === "production";

export const isProduction = stage === "production";
export const isStaging = stage === "staging";

logger.info({ base: "env", env, stage, isProduction, isStaging });

export const mongodbUrl = process.env.MONGODB_URL!;

export const jwtSecret = process.env.JWT_SECRET! || randomstring.generate();

export const rpcHttp = process.env.RPC_HTTP!;

export const adminAddresses = ["0xe70adf9aE4d5F68E80A8E2C5EA3B916Dd49C6D87", "0xB20E2539706BD724A1F17E85A2D2fE0Ff7359514"];
export const signerPrivateKey = process.env.SIGNER_PRIVATE_KEY!;

export const contracts = {
  DataHiveToken: "",
  Registry: "",
  TestnetFaucet: "",
};

export const recaptchaSecretkey = process.env.RECAPTCHA_SECRETKEY!;
