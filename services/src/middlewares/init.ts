import type Koa from "koa";
import type { KoaContext } from "../global";

export const initMiddleware = async (ctx: KoaContext, next: Koa.Next) => {
  ctx.isAuth = false;
  ctx.isAdmin = false;

  ctx.evmAddress = "";

  await next();
};
