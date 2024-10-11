import { type UserProfileModel, userDb } from "./user";

const userProfileColl = await userDb.createCollection<UserProfileModel>("profile");
export default userProfileColl;
