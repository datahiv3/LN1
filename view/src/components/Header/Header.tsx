import React from "react";
import { Link } from "react-router-dom";
import Container from "../Layout/Container";

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
          <Link to="/faucet" className="underline">
            Faucet
          </Link>
          <div>
            <w3m-button />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
