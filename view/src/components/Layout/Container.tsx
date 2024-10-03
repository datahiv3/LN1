import React, { PropsWithChildren } from "react";
import cn from "../../services/cn";

const Container: React.FC<PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
  return <div className={cn("container mx-auto px-6", className)}>{children}</div>;
};

export default Container;
