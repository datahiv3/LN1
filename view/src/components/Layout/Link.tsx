import type React from "react";
import type { PropsWithChildren } from "react";
import { Link as DomLink, type LinkProps } from "react-router-dom";

const Link: React.FC<PropsWithChildren<LinkProps>> = ({ children, to, ...props }) => {
  return (
    <DomLink {...props} to={to} className="underline">
      {children}
    </DomLink>
  );
};

export default Link;
