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
  Whitelisted: "0x8A791620dd6260079BF849Dc5567aDC3F2FdC318",
  NodeFeeManager: "0xB7f8BC63BbcaD18155201308C8f3540b07f84F5e",
  NodeStaking: "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82",
  StakingRewardsDistribution: "0x0B306BF915C4d645ff596e518fAf3F9669b97016",
};

export const stagingContracts: { [key: string]: `0x${string}` } = {
  DataHiveToken: "0x063D9e366Ac8e1Cd0b5c12161b9a4065a7Ae814E",
  SignatureVerification: "0x22E33bA02BEB546c2cF722C6E72a83EE3c8Fee98",
  Registry: "0x4C5F08597295f696880C8eE01123FE805735ed03",
  TestnetFaucet: "0xd76D14Ea60a6d981F70A0c87bc7F5aeE0B0339Ba",
  Whitelisted: "0xE74E02Cb6a1fc40fd376dDD8a8BF32D3dabc171A",
  NodeFeeManager: "0x203cA8a6fb98C7252409F5474c64CB828024ECEB",
  NodeStaking: "0x680a14F40b3E7F6f62668c5DFaf6d0d1eF08500A",
  StakingRewardsDistribution: "0xeE0D60375Fe5B33d7B5785f3BF9BD7Db2f2322C4",
};

export const productionContracts: { [key: string]: `0x${string}` } = {
  DataHiveToken: "0xf8BE3f58e65574F66968BA262C81798623B5589e",
  SignatureVerification: "0x330093832a058452aB5f9141b77916274b587B1D",
  Registry: "0x438E4Db78bB4334E436A3571e85b79EFF05AeE06",
  TestnetFaucet: "0x845CdcCF86e8996876258941341a49aA76E822ac",
  Whitelisted: "0x9471FCf5e9dc973B78afd7484287A1091ee5B44F",
  NodeFeeManager: "0x3ae098B54a2E1004FDF3A06bA401E136043b4A66",
  NodeStaking: "0xE54779771Fe36a4bD7287Fa07603d31632f41574",
  StakingRewardsDistribution: "0x2f6e334fB8afC3E3DEC73b03B2DF22a284ACa3b0",
};

export const contracts = isProduction ? productionContracts : isStaging ? stagingContracts : devContracts;
