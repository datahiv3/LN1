import type React from "react";
import Container from "../Layout/Container";

const Footer: React.FC = () => {
  return (
    <footer className="py-12">
      <Container className="flex justify-between">
        <div className="flex flex-col gap-2">
          <img src="/images/datahive-logo2.webp" width={200} alt="logo" />
          An AI platform providing the infrastructure for a fair & efficient personal information economy.
        </div>
        <div />
      </Container>
    </footer>
  );
};

export default Footer;
