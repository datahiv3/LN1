import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import Container from "../Layout/Container";
import Link from "../Layout/Link";

const Header: React.FC = () => {
  return (
    <header className="border-b border-color-[#ddd]">
      <Container className="flex items-center justify-between min-h-[62px]">
        <div>
          <Link to="/">
            <img src="/images/datahive-logo.webp" width={130} />
          </Link>
        </div>
        <div className="flex gap-6 items-center">
          <a href="https://docs.optimism.io/builders/tools/build/faucets" target="_blank" rel="noopener noreferrer" className="underline">
            Faucet OP Sepolia
          </a>

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
