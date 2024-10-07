import axios from "axios";
import { getServiceHosts } from "./api";

const generateAuthorization = (token: string = "") => {
  if (token) return `Bearer ${token}`;

  return "";
};

const generateApi = (token: string = "") => {
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
};

const generateServices = () => {
  const serviceHosts = getServiceHosts();

  const ethEndpoint = serviceHosts.eth;
  const tokenEndpoint = serviceHosts.token;
  const nodeEndpoint = serviceHosts.node;
  const adminEndpoint = serviceHosts.admin;

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
