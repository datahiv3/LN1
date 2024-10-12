import { type Servcices, api } from "..";
import { allProfiles, profiles, profilesMaxVersion } from "../../../features/user";
import type { Profile } from "../../../types/Profile";
import type { ServiceResponse } from "../types";

export const getProfiles = async (services: Servcices) => {
  try {
    const { data } = await api.get<ServiceResponse<Profile[]>>(services.user.profiles);
    if (!data.status) {
      return;
    }

    profiles.set({ loading: false, data: data.data });

    getProfileMaxVersion(services);
  } catch (err) {
    profiles.set({ loading: false, data: [] });
  }
};

export const getProfileMaxVersion = async (services: Servcices) => {
  try {
    const { data } = await api.get<ServiceResponse<number>>(services.user.profilesMaxVersion);
    if (!data.status) {
      return;
    }

    profilesMaxVersion.set(data.data);
  } catch (err) {
    profilesMaxVersion.set(0);
  }
};

export const getAllProfiles = async (services: Servcices) => {
  try {
    const { data } = await api.get<ServiceResponse<Profile[]>>(services.admin.allProfiles);
    if (!data.status) {
      return;
    }

    allProfiles.set({ loading: false, data: data.data });
  } catch (err) {
    allProfiles.set({ loading: false, data: [] });
  }
};
