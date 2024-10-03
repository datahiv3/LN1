import { isProduction } from "../config";

export const production = (var1: any, var2: any) => {
  if (isProduction) {
    return var1;
  }
  return var2;
};
