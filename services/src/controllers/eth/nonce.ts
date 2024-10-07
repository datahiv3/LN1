import { generateNonce } from "siwe";
import { KoaContext } from "../../global";
import { successResponse } from "../../services/response";

export const ethGetNonce = async (ctx: KoaContext) => {
  ctx.body = successResponse(generateNonce());
  ctx.status = 200;
};
