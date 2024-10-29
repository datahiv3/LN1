import type { KoaContext } from "../../global";
import userWhitelistRequestColl from "../../models/user__whitelist_request";
import { errorResponse, successResponse } from "../../services/response";

export const getWhitelistRequest = async (ctx: KoaContext) => {
  const request = await userWhitelistRequestColl.findOne({ _id: ctx.evmAddress });

  if (!request) {
    ctx.body = errorResponse("request not found", 404);
    ctx.status = 404;
    return;
  }

  if (request.evmAddress !== ctx.evmAddress) {
    ctx.body = errorResponse("unauthorized", 401);
    ctx.status = 401;
    return;
  }

  ctx.body = successResponse(request);
  ctx.status = 200;
};
