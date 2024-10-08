import axios from "axios";
import Koa from "koa";
import { recaptchaSecretkey } from "../config";
import { KoaContext } from "../global";
import { errorResponse } from "../services/response";

export const recaptchaMiddleware = async (ctx: KoaContext, next: Koa.Next) => {
  const body = ctx.request.body as { captcha: string; address: string };

  await next();
  return;

  const key = body["captcha"];
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretkey}&response=${key}`;
  const verify = await axios.post(verifyUrl, { headers: { "Content-Type": "application/x-www-form-urlencoded", json: true } });
  if (!verify.data["success"]) {
    ctx.status = 400;

    ctx.body = errorResponse("captcha verify error", 400);
    return;
  }

  await next();
};
