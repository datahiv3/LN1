import { useStore } from "@nanostores/react";
import React, { PropsWithChildren, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAccount } from "wagmi";
import { authStatus } from "../../features/auth";
import Loading from "../../screens/Loading";
import { LazyLogin } from "./elements";

const RequireAuth: React.FC<PropsWithChildren> = () => {
  const $authStatus = useStore(authStatus);
  const account = useAccount();
  const [auth, setAuth] = React.useState<"" | boolean>("");

  useEffect(() => {
    if (account.status === "connecting" || $authStatus === "loading") {
      setAuth("");
    }
  }, [$authStatus, account.status]);

  useEffect(() => {
    if (account.status === "disconnected" || $authStatus === "unauthenticated") {
      setAuth(false);
      return;
    }

    setAuth(true);
  }, [$authStatus, account.status]);

  if (auth === "") return <Loading />;
  if (auth === false) return <LazyLogin />;

  return <Outlet />;
};

export default RequireAuth;
