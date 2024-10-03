import { KoaContext } from "../global";
import { errorResponse } from "../services/response";

export const notFound = async (ctx: KoaContext) => {
  ctx.body = errorResponse("404 Not Found!!1", 404);
  ctx.status = 404;
};
