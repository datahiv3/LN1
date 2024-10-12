import _ from "lodash";
import { atom, computed } from "nanostores";
import type { Profile } from "../types/Profile";

export const profiles = atom<{ loading: boolean; data: Profile[] }>({ loading: true, data: [] });
export const allProfiles = atom<{ loading: boolean; data: Profile[] }>({ loading: true, data: [] });
export const viewProfile = atom<Profile | undefined>(undefined);

export const isProfilesInitialized = computed(profiles, ({ loading, data }) => !loading && !!data?.length);
export const isProfilesNotFound = computed(profiles, ({ loading, data }) => !loading && data?.length === 0);

export const profilesMaxVersion = atom<number>(0);

export const profile = computed(profiles, ({ data }) => data[profilesMaxVersion.get()]);

export const isVerified = computed(profiles, (profiles) => {
  const last = _.last(profiles.data);

  if (!last) {
    return false;
  }

  return last.kycStatus === "approved";
});

export const isPending = computed(profiles, (profiles) => {
  const last = _.last(profiles.data);

  if (!last) {
    return false;
  }

  return last.kycStatus === "pending";
});

export const currentKycStatus = computed(profiles, (profiles) => {
  const last = _.last(profiles.data);

  if (!last) {
    return "not started yet";
  }

  return last.kycStatus;
});
