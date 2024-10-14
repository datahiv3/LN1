import type { KoaContext } from "../../global";
import userProfileColl from "../../models/user__profile";
import { successResponse } from "../../services/response";

export const getProfilesCountVerified = async (ctx: KoaContext) => {
  const count = await userProfileColl.countDocuments({ kycStatus: "approved" });

  ctx.body = successResponse(count);
  ctx.status = 200;
};
