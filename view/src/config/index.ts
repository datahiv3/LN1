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
    whitelisted: "",
  },
  staging: {
    whitelisted: "https://api.studio.thegraph.com/query/57647/ln1/v0.0.1",
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
  Whitelisted: "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
  NodeFeeManager: "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e",
  NodeStaking: "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82",
  StakingRewardsDistribution: "0x0B306BF915C4d645ff596e518fAf3F9669b97016",
};

export const stagingContracts: { [key: string]: `0x${string}` } = {
  DataHiveToken: "0x91fB42BF01519468bd93D0B06D324D01243CF959",
  SignatureVerification: "0x6c5fD19b95DA2103f287d6032aB22fF57176e551",
  Registry: "0xb48e7948a00aE2F8E1D1E58724f40012BcfcAEDC",
  TestnetFaucet: "0x2DaA4af4c4b53457443bfcCEE21daa319df359Bd",
  Whitelisted: "0x10E0fd5cd2FC69CE0ccD3c7fdB76a5bE86b6F267",
  NodeFeeManager: "0xE0c9D392598C11c7Cb6791A2a7ebA0e3Ddc5E406",
  NodeStaking: "0xE5B34D6DA17E206b7db46daC57539C2d09261581",
  StakingRewardsDistribution: "0xbd261C9602e4DbF3F61Eae36c9a3085D37f2c727",
};

export const productionContracts: { [key: string]: `0x${string}` } = {
  DataHiveToken: "0x",
  SignatureVerification: "0x",
  Registry: "0x",
  TestnetFaucet: "0x",
  Whitelisted: "0x",
  NodeFeeManager: "0x",
  NodeStaking: "0x",
  StakingRewardsDistribution: "0x",
};

export const contracts = isProduction ? productionContracts : isStaging ? stagingContracts : devContracts;
