import { KoaContext } from "../global";

export const index = async (ctx: KoaContext) => {
  ctx.body = "DataHive LN1 APIs";
  ctx.status = 200;
};
