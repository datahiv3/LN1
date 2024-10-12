import { ObjectId } from "mongodb";
import type { KoaContext } from "../../global";
import userProfileColl from "../../models/user__profile";
import { errorResponse, successResponse } from "../../services/response";
import logger from "../../utils/log";

export const adminApproveProfile = async (ctx: KoaContext) => {
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

  try {
    await userProfileColl.updateOne({ _id: oid }, { $set: { kycStatus: "approved" } });
  } catch (error) {
    logger.error({ method: "adminApproveProfile", id, error });

    ctx.body = errorResponse("", 500);
    ctx.status = 500;
    return;
  }

  ctx.body = successResponse("approved");
  ctx.status = 200;
};

export const adminRejectProfile = async (ctx: KoaContext) => {
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

  try {
    await userProfileColl.updateOne({ _id: oid }, { $set: { kycStatus: "rejected" } });
  } catch (error) {
    logger.error({ method: "adminRejectProfile", id, error });

    ctx.body = errorResponse("", 500);
    ctx.status = 500;
    return;
  }

  ctx.body = successResponse("approved");
  ctx.status = 200;
};
