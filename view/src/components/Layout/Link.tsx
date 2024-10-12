import type React from "react";
import type { PropsWithChildren } from "react";
import { Link as DomLink, type LinkProps } from "react-router-dom";
import cn from "../../services/cn";

const Link: React.FC<PropsWithChildren<LinkProps & { className?: string }>> = ({ children, to, className, ...props }) => {
  return (
    <DomLink {...props} to={to} className={cn("underline", className)}>
      {children}
    </DomLink>
  );
};

export default Link;
