import { Hosts } from "./types";

let serviceHosts: Hosts = {
  eth: "/v1/eth",
  token: "/v1/token",
  node: "/v1/node",
  admin: "/v1/admin",
};

export const serviceKeys = ["eth", "token", "node", "admin"];

export const setServiceHosts = (hosts: Hosts) => (serviceHosts = hosts);
export const getServiceHosts = () => serviceHosts;
