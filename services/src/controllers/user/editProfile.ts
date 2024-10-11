import type { KoaContext } from "../../global";
import userProfileColl from "../../models/user__profile";
import { errorResponse, successResponse } from "../../services/response";
import type { Profile } from "../../types/Profile";
import logger from "../../utils/log";

export const editProfile = async (ctx: KoaContext) => {
  const data = ctx.parsedBody as Profile;

  try {
    const result = await userProfileColl.updateOne({ _id: ctx.evmAddress }, { $set: { _id: ctx.evmAddress, ...data, evmAddress: ctx.evmAddress } }, { upsert: true });
    logger.error({ thread: "user.editProfile", result });
  } catch (error) {
    console.log(error);
    logger.error({ thread: "user.editProfile", data: JSON.stringify(error) });
    ctx.body = errorResponse("", 500);
    ctx.status = 500;
    return;
  }

  ctx.body = successResponse("Updated");
  ctx.status = 200;

  return;
};
