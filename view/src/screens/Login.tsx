import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import CentralPage from "../components/Layout/CentralPage";

const Login: React.FC = () => {
  return (
    <CentralPage>
      <div>You need to connect your wallet to access this page</div>

      <div>
        <ConnectButton />
      </div>
    </CentralPage>
  );
};

export default Login;
