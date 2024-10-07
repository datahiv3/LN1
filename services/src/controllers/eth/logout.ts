import { KoaContext } from "../../global";
import { successResponse } from "../../services/response";

export const ethLogout = async (ctx: KoaContext) => {
  ctx.body = successResponse("logout success");
  ctx.status = 200;
};
