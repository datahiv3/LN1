import type { KoaContext } from "../../global";
import userProfileColl from "../../models/user__profile";
import { successResponse } from "../../services/response";

export const getProfilesCountPending = async (ctx: KoaContext) => {
  const count = await userProfileColl.countDocuments({ kycStatus: "pending" });

  ctx.body = successResponse(count);
  ctx.status = 200;
};
