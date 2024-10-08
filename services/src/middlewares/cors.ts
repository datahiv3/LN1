import cors from "@koa/cors";
import { isProduction, isStaging } from "../config";

const crosProductionDomains = ["https://datahive.p10node.com"];
const crosStagingDomains = ["https://*.datahive.p10node.com"];

const isDev = !isProduction;

const crosDevDomains = ["http://localhost:5173"];

export const corsMiddleware = cors({
  origin: (ctx): string => {
    const allowedDomains = isDev ? crosDevDomains : isStaging ? crosStagingDomains : crosProductionDomains;

    const origin = ctx.request.header.origin! || "";

    for (const domain of allowedDomains) {
      const regex = new RegExp(domain.replace(/\*/g, "[^.]+"));
      if (regex.test(origin)) {
        return origin;
      }
    }

    return "";
  },

  credentials: true,
});
