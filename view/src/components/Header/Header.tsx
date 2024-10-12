import { ConnectButton } from "@rainbow-me/rainbowkit";
import type React from "react";
import Link from "../Layout/Link";

const Header: React.FC = () => {
  return (
    <header className="flex-1">
      <div className="flex items-center justify-between h-[60px]">
        <div>
          <Link to="/">
            <img src="/images/datahive-logo.webp" width={130} alt="DatHive Logo" />
          </Link>
        </div>
        <div className="gap-6 items-center flex">
          <Link to="/faucet" className="hidden lg:block">
            Faucet
          </Link>
          <div>
            <ConnectButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
