import { ConnectButton } from "@rainbow-me/rainbowkit";
import type React from "react";
import DefaultPage from "../components/Layout/DefaultPage";

const Login: React.FC = () => {
  return (
    <DefaultPage>
      <div>You need to connect your wallet to access this page</div>
      <div className="mt-2">
        <ConnectButton />
      </div>
    </DefaultPage>
  );
};

export default Login;
