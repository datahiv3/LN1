import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { emptyToast, setToast } from "./toastReducer";

const Toast: React.FC<{ isOnboarding?: boolean }> = ({ isOnboarding = false }) => {
  const dispatch = useDispatch();

  const toastRedux = useAppSelector((state: RootState) => state.toast);

  useEffect(() => {
    if (toastRedux.show) {
      switch (toastRedux.type) {
        case "error":
          toast.error(toastRedux.message);
          break;
        case "success":
          toast.success(toastRedux.message, { duration: 1500 });
          break;
        case "info":
          toast.success(toastRedux.message);
          break;
        default:
          break;
      }
      dispatch(setToast(emptyToast));
    }
  });

  let containerStyle: React.CSSProperties = {
    top: 50,
    // zIndex: 5
  };
  if (isOnboarding) {
    containerStyle = {
      position: "absolute",
      width: "100%",
      height: "83%",
      inset: 0,
    };
  }

  return (
    <Toaster
      containerStyle={containerStyle}
      position="top-center"
      toastOptions={{
        error: {
          style: {
            boxShadow: "none",
            backgroundColor: "#ebebeb",
            borderRadius: "92px",
            fontSize: "16px",
            padding: "8px 18px",
            maxWidth: "400px",
            border: "1px solid #e23333",
            color: "#e23333",
          },
        },
        success: {
          style: {
            boxShadow: "none",
            backgroundColor: "#ebebeb",
            borderRadius: "92px",
            fontSize: "16px",
            padding: "8px 18px",
            color: "#048727",
            maxWidth: "400px",
          },
        },
      }}
    />
  );
};

export default Toast;
