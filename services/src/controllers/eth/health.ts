import { KoaContext } from "../../global";
import { errorResponse, successResponse } from "../../services/response";

export const ethHealth = async (ctx: KoaContext) => {
  if (!ctx.isAuth) {
    ctx.body = errorResponse("not authenticated", 401);
    ctx.status = 200;
    return;
  }

  ctx.body = successResponse({ isAdmin: ctx.isAdmin });
  ctx.status = 200;
};
