import { config } from "../../config";
import { setServiceHosts } from "./api";

const buildEndpoint = (rootPath: string): string => {
  return `${config.apiUrl}${rootPath}`;
};

export const createServiceHosts = () => {
  setServiceHosts({
    eth: buildEndpoint("/v1/eth"),
    token: buildEndpoint("/v1/token"),
    node: buildEndpoint("/v1/node"),
    admin: buildEndpoint("/v1/admin"),
    user: buildEndpoint("/v1/user"),
  });
};
