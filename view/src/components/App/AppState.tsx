import { useStore } from "@nanostores/react";
import type React from "react";
import { type PropsWithChildren, useEffect } from "react";
import { useAccountEffect } from "wagmi";
import { authStatus, isAdmin, token } from "../../features/auth";
import { api, createServices, setToken } from "../../services/api";
import { createServiceHosts } from "../../services/api/create";
import type { ServiceResponse } from "../../services/api/types";
import { signOut } from "../../services/eth/authenticationAdapter";

const AppState: React.FC<PropsWithChildren> = ({ children }) => {
  const $token = useStore(token);

  useEffect(() => {
    setToken($token);

    createServiceHosts();
    const services = createServices();

    api
      .post<ServiceResponse<{ isAdmin: boolean }>>(services.eth.health, { token: $token })
      .then(({ data }) => {
        if (!data.status) {
          signOut();

          return;
        }

        authStatus.set("authenticated");
        isAdmin.set(data.data.isAdmin);
      })
      .catch(() => {
        signOut();
      });
  }, [$token]);

  useAccountEffect({
    onConnect(data) {
      console.log("Connected!", data);
    },
    onDisconnect() {
      console.log("Disconnected!");
    },
  });

  return <>{children}</>;
};

export default AppState;
