import { atom } from "nanostores";
import type { Profile } from "../types/Profile";

export const profile = atom<{ loading: boolean; data: Profile | undefined }>({ loading: true, data: undefined });
