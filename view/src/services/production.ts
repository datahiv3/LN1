import { isEnvProduction } from "../config";

export const production = (var1: unknown, var2: unknown) => {
  if (isEnvProduction) {
    return var1;
  }

  return var2;
};
