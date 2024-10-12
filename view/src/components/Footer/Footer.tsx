import type React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 pl-[300px] max-[765px]:pl-0">
      <div className="flex flex-col gap-2 justify-between px-12">
        <div className="flex flex-col gap-3">
          <img src="/images/datahive-logo2.webp" width={120} alt="logo" />
          <div>An AI platform providing the infrastructure for a fair & efficient personal information economy.</div>
        </div>
        <div>
          DataHive |{" "}
          <a href="https://www.datahive.network/privacy-policy" target="_blank" rel="noopener noreferrer" className="underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
