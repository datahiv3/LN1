import cors from "@koa/cors";
import { isProduction, isStaging } from "../config";

const crosProductionDomains = ["datahive.p10node.com"];
const crosStagingDomains = ["staging-*.datahive.p10node.com"];

const isDev = !isProduction;

const crosDevDomains = ["localhost"];

export const corsMiddleware = cors({
  origin: (ctx): string => {
    const validDomains = isDev ? crosDevDomains : isStaging ? crosStagingDomains : crosProductionDomains;
    if (validDomains.indexOf(ctx.request.header.origin!) !== -1) {
      return ctx.request.header.origin || "";
    }
    return "";
  },

  credentials: true,
});
