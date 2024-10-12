import type { KoaContext } from "../../global";
import userProfileColl from "../../models/user__profile";
import { errorResponse, successResponse } from "../../services/response";

export const adminGetUserProfiles = async (ctx: KoaContext) => {
  const evmAddress = ctx.params.evmAddress;

  if (!evmAddress) {
    ctx.body = errorResponse("evmAddress is required", 400);
    ctx.status = 400;
    return;
  }

  const cursor = userProfileColl.find({ evmAddress }, { sort: { version: 1 } });

  const profiles = [];

  for await (const profile of cursor) {
    profiles.push(profile);
  }

  if (!profiles.length) {
    ctx.body = errorResponse("profile not found", 404);
    ctx.status = 404;
    return;
  }

  ctx.body = successResponse(profiles);
  ctx.status = 200;
};
