import { isEnvProduction } from "../config";

export const production = <T>(var1: T, var2: T) => {
  if (isEnvProduction) {
    return var1;
  }

  return var2;
};
