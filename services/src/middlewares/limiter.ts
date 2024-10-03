import { RateLimit } from "koa2-ratelimit";

export const limiter = RateLimit.middleware({
  interval: { min: 1 * 60 * 1000 }, // 1 minutes = 1*60*1000
  max: 100, // limit each IP to 100 requests per interval
});
