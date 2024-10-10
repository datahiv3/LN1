import { useStore } from "@nanostores/react";
import type React from "react";
import { type PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
import { authStatus, isAdmin } from "../../features/auth";
import AdminLayout from "../Layout/AdminLayout";

const RequireAdmin: React.FC<PropsWithChildren> = () => {
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

  return <AdminLayout />;
};

export default RequireAdmin;
