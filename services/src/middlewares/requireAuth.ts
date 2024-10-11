import type Koa from "koa";
import type { KoaContext } from "../global";
import { errorResponse } from "../services/response";

export const requireAuthMiddleware = async (ctx: KoaContext, next: Koa.Next) => {
  if (!ctx.isAuth) {
    ctx.status = 401;
    ctx.body = errorResponse("unauthorized", 401);
    return;
  }

  await next();
};
