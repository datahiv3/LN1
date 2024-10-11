import type { KoaContext, KoaNext } from "../global";
import { isAdmin } from "../utils/isAdmin";

export const evmAdminMiddleware = async (ctx: KoaContext, next: KoaNext) => {
  ctx.isAdmin = isAdmin(ctx.evmAddress);

  await next();
};
