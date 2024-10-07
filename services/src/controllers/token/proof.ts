import abi from "ethereumjs-abi";
import randomstring from "randomstring";
import { KoaContext } from "../../global";
import { createSigner } from "../../services/eth/createSigner";
import { successResponse } from "../../services/response";

export const tokenGetProof = async (ctx: KoaContext) => {
  if (!ctx.isAuth) {
    ctx.status = 401;
    return;
  }

  const signer = await createSigner();
  const random = randomstring.generate();
  const message = abi.soliditySHA3(["address", "string"], [ctx.evmAddress, random]);
  const signature = await signer.signMessage(new Uint8Array(message));

  ctx.body = successResponse({ signature, random });
  ctx.status = 200;
};
