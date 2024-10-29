import Joi from "joi";
import { ln1_wl_request_bot } from "../../bots/ln1_wl_request_bot";
import { isDevelopment, isStaging } from "../../config";
import type { KoaContext } from "../../global";
import userWhitelistRequestColl from "../../models/user__whitelist_request";
import { errorResponse, successResponse } from "../../services/response";
import logger from "../../utils/log";

export const userWhitelistRequest = async (ctx: KoaContext) => {
  const data = ctx.parsedBody as {
    additional: string;
  };

  const requestSchema = Joi.object({
    additional: Joi.string().optional().allow(null, "").max(1000),
  });

  const { error } = requestSchema.validate(data);
  if (error) {
    logger.error({ thread: "user.createWhitelistRequest", data: JSON.stringify(error) });

    ctx.body = errorResponse(error.message, 400);
    ctx.status = 400;
    return;
  }

  const count = await userWhitelistRequestColl.countDocuments({ evmAddress: ctx.evmAddress });

  if (!count) {
    await userWhitelistRequestColl.updateOne(
      { _id: ctx.evmAddress },
      {
        $set: {
          _id: ctx.evmAddress,
          evmAddress: ctx.evmAddress,
          additional: data.additional || "",
          createdAt: new Date(),
        },
      },
      {
        upsert: true,
      },
    );

    ln1_wl_request_bot.sendMessage(
      isDevelopment ? -1002286761074 : -4599568134,
      `New whitelist request from ${ctx.evmAddress}.${data.additional ? ` Additional Information: ${data.additional || ""}. ` : ""} Approve here: http://${isStaging ? "https://staging-29c55d.datahive.p10node.com" : "https://ln1.datahive.p10node.com"}/admin/whitelisted`,
    );
  }

  ctx.status = 200;
  ctx.body = successResponse("updated");

  return;
};
