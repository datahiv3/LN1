import { isEnvProduction } from "../config";

export const production = (var1: any, var2: any) => {
  if (isEnvProduction) {
    return var1;
  }
  return var2;
};
