import axios from "axios";
import { getServiceHosts } from "./api";
import { getProfiles } from "./profile/getProfiles";

const generateAuthorization = (token = "") => {
  if (token) return `Bearer ${token}`;

  return "";
};

const generateApi = (token = "") => {
  return axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `${generateAuthorization(token)}`,
    },
  });
};

export let api = generateApi();

export const setToken = (token: string) => {
  api = generateApi(token);

  getProfiles(getServices());
};

const generateServices = () => {
  const serviceHosts = getServiceHosts();

  const ethEndpoint = serviceHosts.eth;
  const tokenEndpoint = serviceHosts.token;
  const nodeEndpoint = serviceHosts.node;
  const adminEndpoint = serviceHosts.admin;
  const userEndpoint = serviceHosts.user;

  return {
    eth: {
      nonce: `${ethEndpoint}/nonce`,
      verify: `${ethEndpoint}/verify`,
      health: `${ethEndpoint}/health`,
      logout: `${ethEndpoint}/logout`,
    },
    token: {
      faucet: `${tokenEndpoint}/faucet`,
    },
    node: {
      nodes: `${nodeEndpoint}/nodes`,
      stats: `${nodeEndpoint}/stats`,
      node: (id: string) => `${nodeEndpoint}/node/${id}`,
    },
    admin: {
      index: `${adminEndpoint}`,
      allProfiles: `${adminEndpoint}/user/all/profiles`,
      approveProfile: (id: string) => `${adminEndpoint}/user/profile/approve/${id}`,
      rejectProfile: (id: string) => `${adminEndpoint}/user/profile/reject/${id}`,
      getUserProfile: (id: string) => `${adminEndpoint}/user/profile/${id}`,
    },
    user: {
      profile: `${userEndpoint}/profile`,
      getProfile: (id: string) => `${userEndpoint}/profile/${id}`,
      cancel: (id: string) => `${userEndpoint}/profile/${id}`,
      profiles: `${userEndpoint}/profiles`,
      profilesMaxVersion: `${userEndpoint}/profiles/maxVersion`,
    },
  };
};

let services = generateServices();

export const createServices = () => {
  services = generateServices();

  return services;
};

export const getServices = () => {
  return services;
};

export type Servcices = typeof services;
