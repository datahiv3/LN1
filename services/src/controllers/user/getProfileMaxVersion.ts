import type { KoaContext } from "../../global";
import userProfileColl from "../../models/user__profile";
import { successResponse } from "../../services/response";

export const getProfileMaxVersion = async (ctx: KoaContext) => {
  const response = await userProfileColl
    .aggregate()
    .match({ evmAddress: ctx.evmAddress })
    .group({ _id: null, maxVersion: { $max: "$version" } })
    .toArray();
  const maxVersion = response[0]?.maxVersion || 0;

  ctx.body = successResponse(maxVersion);
  ctx.status = 200;
};
