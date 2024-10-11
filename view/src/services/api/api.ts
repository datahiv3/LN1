let serviceHosts = {
  eth: "/v1/eth",
  token: "/v1/token",
  node: "/v1/node",
  admin: "/v1/admin",
  user: "/v1/user",
};

export type Hosts = typeof serviceHosts;

export const serviceKeys = ["eth", "token", "node", "admin", "user"];

export const setServiceHosts = (hosts: Hosts) => {
  serviceHosts = hosts;
};
export const getServiceHosts = () => serviceHosts;
