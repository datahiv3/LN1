import { KoaContext } from "../../global";
import { errorResponse, successResponse } from "../../services/response";

export const ethIsAdmin = async (ctx: KoaContext) => {
  if (ctx.isAdmin) {
    ctx.body = successResponse("admin");
    ctx.status = 200;
    return;
  }

  ctx.body = errorResponse("not admin");
  ctx.status = 200;
};
