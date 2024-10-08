const stage = import.meta.env.VITE_STAGE! as string;
const googleGA = import.meta.env.VITE_GOOGLE_GA! as string;
const googleRecaptcha = import.meta.env.VITE_GOOGLE_RECAPTCHA! as string;
const apiUrl = import.meta.env.VITE_API_URL! as string;

export const isProduction = stage === "production";
export const isDev = stage === "development";
export const isStaging = stage === "staging";

export const isEnvProduction = isProduction || isStaging;

export const config = { isProduction, googleGA, googleRecaptcha, apiUrl };

export const devContracts: { [key: string]: `0x${string}` } = {
  DataHiveToken: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
  Registry: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
  SignatureVerification: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
  TestnetFaucet: "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
};

export const stagingContracts: { [key: string]: `0x${string}` } = {
  DataHiveToken: "0xa4456Bbd784132b584A677df7892D0f4a97c89A6",
  SignatureVerification: "0x0a8EFB7C57D808642451fC443E0578B45a1B71E8",
  Registry: "0xc7DfdF3698c6926c3e2aDAa8A545EcE73e417F14",
  TestnetFaucet: "0xB9872C2Cb1FA34f3d2aF260eEC18507BC46B70F5",
};

export const productionContracts: { [key: string]: `0x${string}` } = {
  DataHiveToken: "0x",
  SignatureVerification: "0x",
  Registry: "0x",
  TestnetFaucet: "0x",
};

export const contracts = isProduction ? productionContracts : isStaging ? stagingContracts : devContracts;
