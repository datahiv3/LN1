import countries from "i18n-iso-countries";
import Joi from "joi";
import type { KoaContext } from "../../global";
import userProfileColl from "../../models/user__profile";
import { errorResponse, successResponse } from "../../services/response";
import type { Profile } from "../../types/Profile";
import logger from "../../utils/log";

export const createProfile = async (ctx: KoaContext) => {
  const data = ctx.parsedBody as Profile;

  const profileSchema = Joi.object({
    firstName: Joi.string().required().max(500),
    lastName: Joi.string().required().max(500),

    email: Joi.string().email().required().max(5000),

    countryCode: Joi.string().required().max(10),
    phoneNumber: Joi.string().required().max(50),

    address: Joi.string().required().max(5000),
    city: Joi.string().required().max(5000),
    state: Joi.string().required().max(5000),
    zipCode: Joi.string().required().max(50),
    country: Joi.string().required().max(50),
  });

  const { error } = profileSchema.validate(data);
  if (error) {
    logger.error({ thread: "user.createProfile", data: JSON.stringify(error) });

    ctx.body = errorResponse(error.message, 400);
    ctx.status = 400;
    return;
  }

  if (!countries.isValid(data.country)) {
    ctx.body = errorResponse("invalid country", 400);
    ctx.status = 400;
    return;
  }

  const response = await userProfileColl
    .aggregate()
    .match({ evmAddress: ctx.evmAddress })
    .group({ _id: null, maxVersion: { $max: "$version" } })
    .toArray();

  const nextVersion = response[0]?.maxVersion + 1 || 0;

  const count = await userProfileColl.countDocuments({ evmAddress: ctx.evmAddress });

  if (count) {
    const currentProfile = await userProfileColl.findOne({ evmAddress: ctx.evmAddress, version: nextVersion - 1 });
    if (currentProfile.kycStatus === "pending") {
      ctx.body = errorResponse("You have one profile is under review", 400);
      ctx.status = 400;
      return;
    }
  }

  try {
    const result = await userProfileColl.insertOne({ ...data, evmAddress: ctx.evmAddress, kycStatus: "pending", version: nextVersion });
    logger.error({ thread: "user.createProfile", result });
  } catch (error) {
    logger.error({ thread: "user.createProfile", data: JSON.stringify(error) });

    ctx.body = errorResponse("", 500);
    ctx.status = 500;

    return;
  }

  ctx.body = successResponse("updated");
  ctx.status = 200;

  return;
};
