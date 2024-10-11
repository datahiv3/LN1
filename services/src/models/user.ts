import { DbModel } from "../db/collName";
import type { Profile } from "../types/Profile";

export const userDb = new DbModel("user");

export type UserProfileModel = Profile & {
  _id: string;
  evmAddress: string;
};
