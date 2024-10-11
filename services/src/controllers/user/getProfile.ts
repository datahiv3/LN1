import type { KoaContext } from "../../global";
import userProfileColl from "../../models/user__profile";
import { errorResponse, successResponse } from "../../services/response";

export const getProfile = async (ctx: KoaContext) => {
  const profile = await userProfileColl.findOne({ evmAddress: ctx.evmAddress });

  if (!profile) {
    ctx.body = errorResponse("profile not found", 404);
    ctx.status = 404;
    return;
  }

  ctx.body = successResponse(profile);
  ctx.status = 200;
};
