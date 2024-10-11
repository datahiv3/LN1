import type Koa from "koa";
import type { KoaContext } from "../global";
import { errorResponse } from "../services/response";

export const requireAdminMiddleware = async (ctx: KoaContext, next: Koa.Next) => {
  if (!ctx.isAdmin) {
    ctx.status = 401;
    ctx.body = errorResponse("unauthorized", 401);
    return;
  }

  await next();
};
