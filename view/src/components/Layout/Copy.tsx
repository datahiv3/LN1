import type React from "react";
import type { PropsWithChildren } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import { useAppDispatch } from "../../app/hooks";
import { setToast } from "../Toast/toastReducer";

const Copy: React.FC<PropsWithChildren<{ content: string; message?: string }>> = ({ content, children, message = "Copied" }) => {
  const dispatch = useAppDispatch();

  const toastCopy = () => {
    toast.dismiss();
    dispatch(
      setToast({
        show: true,
        title: "",
        message,
        type: "success",
      }),
    );
  };

  return (
    <CopyToClipboard text={content} onCopy={toastCopy}>
      {children}
    </CopyToClipboard>
  );
};

export default Copy;
