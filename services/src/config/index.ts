import randomstring from "randomstring";
import logger from "../utils/log";

export const env = process.env.ENV as string;
export const stage = process.env.STAGE as string;

export const isEnvProduction = env === "production";

export const isProduction = stage === "production";
export const isStaging = stage === "staging";
export const isDevelopment = stage === "localhost";

logger.info({ base: "env", env, stage, isProduction, isStaging });

export const mongodbUrl = process.env.MONGODB_URL as string;

export const jwtSecret = (process.env.JWT_SECRET as string) || randomstring.generate();

export const rpcHttp = process.env.RPC_HTTP as string;

export const adminAddresses = isStaging
  ? ["0xe70adf9aE4d5F68E80A8E2C5EA3B916Dd49C6D87", "0xB20E2539706BD724A1F17E85A2D2fE0Ff7359514"]
  : isProduction
    ? ["0xB20E2539706BD724A1F17E85A2D2fE0Ff7359514"]
    : ["0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"];

export const signerPrivateKey = process.env.SIGNER_PRIVATE_KEY as string;

export const contracts = {
  DataHiveToken: "",
  Registry: "",
  TestnetFaucet: "",
};

export const recaptchaSecretkey = process.env.RECAPTCHA_SECRETKEY as string;
