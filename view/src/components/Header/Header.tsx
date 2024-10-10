import { ConnectButton } from "@rainbow-me/rainbowkit";
import type React from "react";
import Container from "../Layout/Container";
import Link from "../Layout/Link";

const Header: React.FC = () => {
  return (
    <header className="border-b border-color-[#ddd]">
      <Container className="flex items-center justify-between min-h-[62px]">
        <div>
          <Link to="/">
            <img src="/images/datahive-logo.webp" width={130} alt="DatHive Logo" />
          </Link>
        </div>
        <div className="flex gap-6 items-center">
          <Link to="/faucet">Faucet</Link>
          <div>
            <ConnectButton />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
