import type { Profile } from "../types/Profile";
import { userDb } from "./user";

export type UserProfileModel = Profile;

const userProfileColl = await userDb.createCollection<UserProfileModel>("profile");
export default userProfileColl;
