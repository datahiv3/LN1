import type React from "react";
import type { PropsWithChildren } from "react";

const Button: React.FC<PropsWithChildren> = ({ children }) => {
  return <button type="button">{children}</button>;
};

export default Button;
