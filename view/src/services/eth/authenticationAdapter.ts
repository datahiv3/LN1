import { createAuthenticationAdapter } from "@rainbow-me/rainbowkit";
import { SiweMessage } from "siwe";
import { authStatus, isAdmin, setAuthStatus, token, tokenStore } from "../../features/auth";
import { api, getServices, setToken } from "../api";
import type { ServiceResponse } from "../api/types";

export const authenticationAdapter = createAuthenticationAdapter({
  getNonce: async () => {
    const { data } = await api.get<ServiceResponse<string>>(getServices().eth.nonce);
    return data.data;
  },

  createMessage: ({ nonce, address, chainId }) => {
    return new SiweMessage({
      domain: window.location.host,
      address,
      statement: "Sign in with Ethereum to the app.",
      uri: window.location.origin,
      version: "1",
      chainId,
      nonce,
    });
  },

  getMessageBody: ({ message }) => {
    return message.prepareMessage();
  },

  verify: async ({ message, signature }) => {
    try {
      const { data } = await api.post<ServiceResponse<{ token: string; isAdmin: boolean }>>(getServices().eth.verify, { message, signature });

      const token = data.data.token;

      tokenStore.set(token);
      setToken(token);
      isAdmin.set(data.data.isAdmin);

      setAuthStatus("authenticated");

      return true;
    } catch {
      setAuthStatus("unauthenticated");
    }

    return false;
  },

  signOut: async () => {
    signOut();

    await api.post(getServices().eth.logout, { token: token.get() });
  },
});

export const signOut = () => {
  isAdmin.set(false);
  token.set("");
  tokenStore.set("");
  authStatus.set("unauthenticated");
};
