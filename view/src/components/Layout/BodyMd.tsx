import type React from "react";
import type { PropsWithChildren } from "react";

const BodyMd: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className='className="MuiTypography-root MuiTypography-body-md'>{children}</div>;
};

export default BodyMd;
