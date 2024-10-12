import { ObjectId } from "mongodb";
import type { KoaContext } from "../../global";
import userProfileColl from "../../models/user__profile";
import { errorResponse, successResponse } from "../../services/response";

export const adminGetUserProfile = async (ctx: KoaContext) => {
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

  ctx.body = successResponse(profile);
  ctx.status = 200;
};
