import type { KoaContext } from "../../global";
import userWhitelistRequestColl from "../../models/user__whitelist_request";
import { errorResponse, successResponse } from "../../services/response";

export const allUserWhitelistRequests = async (ctx: KoaContext) => {
  const cursor = userWhitelistRequestColl.find();

  const requests = [];

  for await (const request of cursor) {
    requests.push(request);
  }

  if (!requests.length) {
    ctx.body = errorResponse("requests not found", 404);
    ctx.status = 404;
    return;
  }

  ctx.body = successResponse(requests);
  ctx.status = 200;
};
