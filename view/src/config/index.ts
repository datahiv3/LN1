const stage = import.meta.env.VITE_STAGE! as string;
const googleGA = import.meta.env.VITE_GOOGLE_GA! as string;
const googleRecaptcha = import.meta.env.VITE_GOOGLE_RECAPTCHA! as string;
const apiUrl = import.meta.env.VITE_API_URL! as string;

export const isProduction = stage === "production";
export const isDev = stage === "development";
export const isStaging = stage === "staging";

export const config = { isProduction, googleGA, googleRecaptcha, apiUrl };

export const devContracts: { [key: string]: `0x${string}` } = {
  DataHiveToken: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  SignatureVerification: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
  Registry: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
  TestnetFaucet: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0",
};

export const stagingContracts: { [key: string]: `0x${string}` } = {
  DataHiveToken: "0x",
  SignatureVerification: "0x",
  Registry: "0x",
  TestnetFaucet: "0x",
};

export const productionContracts: { [key: string]: `0x${string}` } = {
  DataHiveToken: "0x",
  SignatureVerification: "0x",
  Registry: "0x",
  TestnetFaucet: "0x",
};

export const contracts = isProduction ? productionContracts : isStaging ? stagingContracts : devContracts;
