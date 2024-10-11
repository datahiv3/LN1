import { ethers } from "ethers";
import type Koa from "koa";
import type { KoaContext } from "../global";
import { errorResponse } from "../services/response";

export const verifySignatureMiddleware = async (ctx: KoaContext, next: Koa.Next) => {
  const { message, signed } = ctx.request.body as { message: string; signed: string };

  if (!message || !signed) {
    ctx.body = errorResponse("invalid request", 400);
    ctx.status = 400;
    return;
  }

  const messageHash = ethers.hashMessage(message);

  const recovered = ethers.recoverAddress(messageHash, signed);

  if (recovered !== ctx.evmAddress) {
    ctx.body = errorResponse("invalid signature", 400);
    ctx.status = 400;
    return;
  }

  ctx.parsedBody = JSON.parse(message);

  await next();
};
