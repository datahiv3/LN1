import Koa from "koa";
import { KoaContext } from "../global";

export const init = async (ctx: KoaContext, next: Koa.Next) => {
  ctx.isAuth = false;
  ctx.isAdmin = false;

  ctx.evmAddress = "";

  await next();
};
