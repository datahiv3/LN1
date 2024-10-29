import cors from "@koa/cors";
import { isProduction, isStaging } from "../config";
import logger from "../utils/log";

const crosProductionDomains = ["https://ln1.datahive.p10node.com"];
const crosStagingDomains = ["https://*.datahive.p10node.com"];

const isDev = !isProduction;

const crosDevDomains = ["http://localhost:5173"];

export const corsMiddleware = cors({
  origin(ctx) {
    const allowedDomains = isProduction ? crosProductionDomains : isStaging ? crosStagingDomains : crosDevDomains;

    const origin = (ctx.request.header.origin as string) || "";

    for (const domain of allowedDomains) {
      const regex = new RegExp(domain.replace(/\*/g, "[^.]+"));
      const test = regex.test(origin);

      logger.info({ iddleware: "corsMiddleware", origin, domain, test });

      if (test) {
        return origin;
      }
    }

    return "";
  },

  credentials: true,
});
