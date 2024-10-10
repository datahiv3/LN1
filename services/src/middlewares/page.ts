import type Koa from "koa";
import type { KoaContext } from "../global";

export const paginationMiddleware = async (ctx: KoaContext, next: Koa.Next) => {
  let page = Number(ctx.query.page || 1);
  // biome-ignore lint/suspicious/noGlobalIsNan: <explanation>
  if (isNaN(page)) {
    page = 1;
  }
  if (page < 1) {
    page = 1;
  }

  let limit = Number(ctx.query.limit || 50);
  // biome-ignore lint/suspicious/noGlobalIsNan: <explanation>
  if (isNaN(limit)) {
    limit = 50;
  }
  if (limit > 200) {
    limit = 200;
  }
  ctx.page = page;
  ctx.limit = limit;

  await next();
};
