import { ObjectId } from "mongodb";
import type { KoaContext } from "../../global";
import userProfileColl from "../../models/user__profile";
import { errorResponse, successResponse } from "../../services/response";
import logger from "../../utils/log";

export const cancelProfile = async (ctx: KoaContext) => {
  const { id } = ctx.params;

  if (!id) {
    ctx.body = errorResponse("id is required", 400);
    ctx.status = 400;
    return;
  }

  let oid: ObjectId;
  try {
    oid = ObjectId.createFromHexString(id);
  } catch (error) {
    ctx.body = errorResponse("invalid id", 400);
    ctx.status = 400;
    return;
  }

  const profile = await userProfileColl.findOne({ _id: oid });
  if (!profile) {
    ctx.body = errorResponse("profile not found", 404);
    ctx.status = 404;
    return;
  }

  if (profile.evmAddress !== ctx.evmAddress) {
    ctx.body = errorResponse("unauthorized", 403);
    ctx.status = 403;
    return;
  }

  if (profile.kycStatus !== "pending") {
    ctx.body = errorResponse("You have one profile is not under review", 400);
    ctx.status = 400;
    return;
  }

  try {
    await userProfileColl.updateOne({ _id: oid }, { $set: { kycStatus: "cancelled" } });
  } catch (error) {
    logger.error({ method: "cancelProfile", id, error });

    ctx.body = errorResponse("", 500);
    ctx.status = 500;
    return;
  }

  ctx.body = successResponse("cancelled");
  ctx.status = 200;
};
