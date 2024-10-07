import jwt from "jsonwebtoken";
import { SiweMessage } from "siwe";
import { jwtSecret } from "../../config";
import { KoaContext } from "../../global";
import { errorResponse, successResponse } from "../../services/response";
import { isAdmin } from "../../utils/isAdmin";

interface Message {
  nonce: string;
}

export const ethVerify = async (ctx: KoaContext) => {
  const { message, signature } = ctx.request.body as { message: Message; signature: string };

  let data;

  try {
    const SIWEObject = new SiweMessage(message);
    const ret = await SIWEObject.verify({ signature, nonce: message.nonce });

    data = ret.data;
  } catch (err) {
    ctx.body = errorResponse("Signature verification failed", 500);
    ctx.status = 500;

    return;
  }

  const token = jwt.sign(
    {
      address: data.address,
      chainId: data.chainId,
    },
    jwtSecret,
    {
      expiresIn: "1d",
    },
  );

  const result = {
    exp: (jwt.decode(token) as jwt.JwtPayload).exp,
    token,
    isAdmin: isAdmin(data.address),
  };

  ctx.body = successResponse(result);
  ctx.status = 200;
};
