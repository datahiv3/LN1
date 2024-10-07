import { isProduction } from "../config";

export const production = (var1: unknown, var2: unknown) => {
  if (isProduction) {
    return var1;
  }

  return var2;
};
