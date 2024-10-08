import { Copy as CopyIcon } from "@styled-icons/fluentui-system-regular";
import React, { PropsWithChildren } from "react";
import Copy from "./Copy";

const Code: React.FC<PropsWithChildren<{ copy?: string }>> = ({ children, copy }) => {
  return (
    <Copy content={copy || ""}>
      <div className="rounded-lg cursor-pointer code inline-flex gap-1">
        {children}
        <CopyIcon size={20} className="pt-[4px]" />
      </div>
    </Copy>
  );
};

export default Code;
