import { type Servcices, api } from "..";
import { allProfiles, allWhitelistRequests, profiles, profilesMaxVersion, whitelistRequest } from "../../../features/user";
import type { Profile } from "../../../types/Profile";
import type { UserWhitelistRequest } from "../../../types/WhitelistRequest";
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
      allProfiles.set({ loading: false, data: [] });
      return;
    }

    allProfiles.set({ loading: false, data: data.data });
  } catch (err) {
    allProfiles.set({ loading: false, data: [] });
  }
};

export const getWhitelistRequest = async (services: Servcices) => {
  try {
    const { data } = await api.get<ServiceResponse<UserWhitelistRequest>>(services.user.whitelistRequest);
    if (!data.status) {
      whitelistRequest.set({ loading: false, data: undefined });
      return;
    }

    whitelistRequest.set({ loading: false, data: data.data });
  } catch (err) {
    whitelistRequest.set({ loading: false, data: undefined });
  }
};

export const getAllWhitelistRequests = async (services: Servcices) => {
  try {
    const { data } = await api.get<ServiceResponse<UserWhitelistRequest[]>>(services.admin.allWhitelistRequests);
    if (!data.status) {
      allWhitelistRequests.set({ loading: false, data: [] });
      return;
    }

    allWhitelistRequests.set({ loading: false, data: data.data });
  } catch (err) {
    allWhitelistRequests.set({ loading: false, data: [] });
  }
};
