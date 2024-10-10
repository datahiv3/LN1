import type React from "react";
import type { PropsWithChildren } from "react";
import cn from "../../services/cn";

const DefaultPage: React.FC<PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
  return <div className={cn("p-12 pr-0", className)}>{children}</div>;
};

export default DefaultPage;
