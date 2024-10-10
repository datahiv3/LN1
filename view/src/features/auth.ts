import type { AuthenticationStatus } from "@rainbow-me/rainbowkit";
import { atom, computed } from "nanostores";
import LocalStorage from "../services/localStorage";

export const tokenStore = new LocalStorage<string>("token");

export const authStatus = atom<AuthenticationStatus>("loading");
export const token = atom<string>(tokenStore.get(""));
export const isAdmin = atom<boolean>(false);

export const setAuthStatus = (status: AuthenticationStatus) => {
  authStatus.set(status);
};

export const isConnected = computed(authStatus, (status) => status === "authenticated");
