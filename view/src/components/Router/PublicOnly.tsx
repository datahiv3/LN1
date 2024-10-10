import { useStore } from "@nanostores/react";
import type React from "react";
import { type PropsWithChildren, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
import { authStatus } from "../../features/auth";

const PublicOnly: React.FC<PropsWithChildren> = () => {
  const $authStatus = useStore(authStatus);
  const navigate = useNavigate();
  const account = useAccount();

  useEffect(() => {
    if (account.status === "connected" && $authStatus === "authenticated") {
      navigate("/");
    }
  }, [$authStatus, account.status, navigate]);

  return <Outlet />;
};

export default PublicOnly;
