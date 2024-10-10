import { verify } from "jsonwebtoken";
import { jwtSecret } from "../config";
import type { KoaContext, KoaNext } from "../global";

export const auth = async (ctx: KoaContext, next: KoaNext) => {
  const token = (ctx.request.headers.authorization || "").replaceAll("Bearer ", "");

  if (!token) {
    await next();
    return;
  }

  try {
    const result = verify(token, jwtSecret) as { address: string; chainId: number };
    ctx.evmAddress = result.address;
    ctx.isAuth = true;
  } catch {}

  await next();
};
