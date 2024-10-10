import type React from "react";
import type { PropsWithChildren } from "react";
import cn from "../../services/cn";
import DefaultPage from "./DefaultPage";

const CentralPage: React.FC<PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
  return <DefaultPage className={cn("w-[100%] h-[100%] flex flex-col justify-center gap-3", className)}>{children}</DefaultPage>;
};

export default CentralPage;
