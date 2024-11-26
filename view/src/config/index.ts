const stage = import.meta.env.VITE_STAGE as string;
const googleGA = import.meta.env.VITE_GOOGLE_GA as string;
const googleRecaptcha = import.meta.env.VITE_GOOGLE_RECAPTCHA as string;
const apiUrl = import.meta.env.VITE_API_URL as string;

export const isProduction = stage === "production";
export const isDev = stage === "development";
export const isStaging = stage === "staging";

export const isEnvProduction = isProduction || isStaging;

export const subgraphs: { [key: string]: { whitelisted: string } } = {
  production: {
    whitelisted: "https://api.studio.thegraph.com/query/57647/ln1-production/v0.0.1",
  },
  staging: {
    whitelisted: "https://api.studio.thegraph.com/query/57647/ln1/v0.0.2",
  },
  development: {
    whitelisted: "http://localhost:8000/subgraphs/name/ln1/whitelisted",
  },
};

export const config = { stage, isProduction, googleGA, googleRecaptcha, apiUrl };

export const devContracts: { [key: string]: `0x${string}` } = {
  DataHiveToken: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
  Registry: "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9",
  SignatureVerification: "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707",
  TestnetFaucet: "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853",
  NodeFeeManager: "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
  NodeStaking: "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e",
};

export const stagingContracts: { [key: string]: `0x${string}` } = {
  DataHiveToken: "0xBdb411a25535cFf4e7dba09dFebed3A88fb08613",
  SignatureVerification: "0xc3027C1E531b0dC2d403927EC6A7eAC171a2ECB9",
  Registry: "0x2CfAcBd186F2B24EeD255aDa4213BFa83B2bCe38",
  TestnetFaucet: "0xC6c6c61004e710B94f38f2e9183F8Ed4190901b5",
  NodeFeeManager: "0x3e047D123Cb91A3D76CA9fB7014Ce7f0ef3C1CDf",
  NodeStaking: "0x87999bed3ca61614569822F1fA53a9d5E894CA94",
};

export const productionContracts: { [key: string]: `0x${string}` } = {
  DataHiveToken: "0xf8BE3f58e65574F66968BA262C81798623B5589e",
  SignatureVerification: "0x330093832a058452aB5f9141b77916274b587B1D",
  Registry: "0x438E4Db78bB4334E436A3571e85b79EFF05AeE06",
  TestnetFaucet: "0x845CdcCF86e8996876258941341a49aA76E822ac",
  NodeFeeManager: "0x3ae098B54a2E1004FDF3A06bA401E136043b4A66",
  NodeStaking: "0xE54779771Fe36a4bD7287Fa07603d31632f41574",
};

export const contracts = isProduction ? productionContracts : isStaging ? stagingContracts : devContracts;
