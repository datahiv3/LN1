import abi from "ethereumjs-abi";
import randomstring from "randomstring";
import type { KoaContext } from "../../global";
import { createSigner } from "../../services/eth/createSigner";
import { successResponse } from "../../services/response";

export const tokenGetProof = async (ctx: KoaContext) => {
  if (!ctx.isAuth) {
    ctx.status = 401;
    return;
  }

  const signer = await createSigner();

  const message = randomstring.generate({ length: 10 });
  const hash = abi.soliditySHA3(["address", "string"], [ctx.evmAddress, message]);

  const signature = await signer.signMessage(Uint8Array.from(hash));

  ctx.body = successResponse({ signature, hash: message });
  ctx.status = 200;
};
