import { userDb } from "./user";

export type UserWhitelistRequestModel = {
  _id?: string;

  evmAddress: string;
  additional: string;

  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
};

const userWhitelistRequestColl = await userDb.createCollection<UserWhitelistRequestModel>("whitelist-request");
export default userWhitelistRequestColl;
