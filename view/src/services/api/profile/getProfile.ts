import { type Servcices, api } from "..";
import { profile } from "../../../features/user";
import type { Profile } from "../../../types/Profile";
import type { ServiceResponse } from "../types";

export const getProfile = async (services: Servcices) => {
  try {
    const { data } = await api.get<ServiceResponse<Profile>>(services.user.profile);
    if (!data.status) {
      return;
    }

    const parsedData = data.data;
    parsedData._id = undefined;

    profile.set({ loading: false, data: data.data });
  } catch (err) {
    profile.set({ loading: false, data: undefined });
  }
};
