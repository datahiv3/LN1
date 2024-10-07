import { useStore } from "@nanostores/react";
import React, { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
import { authStatus, isAdmin } from "../../features/auth";

const RequireAdmin: React.FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const $authStatus = useStore(authStatus);
  const account = useAccount();

  const $isAdmin = useStore(isAdmin);

  useEffect(() => {
    if ($authStatus === "loading" || account.status === "connecting") {
      return;
    }

    if (!$isAdmin) {
      navigate("/");
    }
  }, [$authStatus, $isAdmin, account.status, navigate]);

  return <>{children}</>;
};

export default RequireAdmin;
