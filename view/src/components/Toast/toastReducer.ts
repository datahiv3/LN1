import { createAction, createReducer } from "@reduxjs/toolkit";
import { ToastReducer } from "./types";

export const setToast = createAction<ToastReducer>("app/toast");

export const emptyToast: ToastReducer = {
  show: false,
  title: "",
  message: "",
  type: "info",
  square: false,
};

const toastReducer = createReducer(emptyToast, (builder) =>
  builder.addCase(setToast, (state, action) => {
    return {
      ...state,
      show: action.payload.show,
      title: action.payload.title,
      message: action.payload.message || "err:toast:empty-message",
      type: action.payload.type,
    };
  }),
);

export default toastReducer;
