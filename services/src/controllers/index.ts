import type { KoaContext } from "../global";
import { successResponse } from "../services/response";

export const index = async (ctx: KoaContext) => {
  ctx.body = successResponse("DataHive LN1 APIs");
  ctx.status = 200;
};
