import { ethers } from "ethers";
import { rpcHttp } from "../../config";

export const httpProvider = new ethers.JsonRpcProvider(rpcHttp);
