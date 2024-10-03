import { KoaContext, KoaNext } from "../global";

export const evmAdmin = async (ctx: KoaContext, next: KoaNext) => {
  const admins = [].map((item) => item.toLocaleLowerCase());
  if (admins.includes(ctx.evmAddress)) {
    ctx.isAdmin = true;
  }

  await next();
};
