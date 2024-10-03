import { isValidISODateString } from "iso-datestring-validator";
import { DateRange } from "../services/dateRange";
import Koa from "koa";
import { KoaContext } from "../global";

export const dateRangeMiddleware = async (ctx: KoaContext, next: Koa.Next) => {
  const dateRange = new DateRange();
  const from = Array.isArray(ctx.query["fromTime"]) ? ctx.query["fromTime"][0] : ctx.query["fromTime"];
  if (from && isValidISODateString(from)) {
    dateRange.setFrom(from);
  }
  const to = Array.isArray(ctx.query["toTime"]) ? ctx.query["toTime"][0] : ctx.query["toTime"];
  if (to && isValidISODateString(to)) {
    dateRange.setTo(to);
  }

  ctx.dateRange = dateRange;
  await next();
};
