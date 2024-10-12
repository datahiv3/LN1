import type { KoaContext } from "../../global";
import userProfileColl from "../../models/user__profile";
import { errorResponse, successResponse } from "../../services/response";

export const adminGetUserProfileMaxVersion = async (ctx: KoaContext) => {
  const evmAddress = ctx.params.evmAddress;

  if (!evmAddress) {
    ctx.body = errorResponse("evmAddress is required", 400);
    ctx.status = 400;
    return;
  }

  const response = await userProfileColl
    .aggregate()
    .match({ evmAddress: evmAddress })
    .group({ _id: null, maxVersion: { $max: "$version" } })
    .toArray();
  const maxVersion = response[0]?.maxVersion || 0;

  ctx.body = successResponse(maxVersion);
  ctx.status = 200;
};
