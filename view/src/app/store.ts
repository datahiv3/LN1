import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import toastReducer from "../components/Toast/toastReducer";

export const store = configureStore({
  reducer: {
    toast: toastReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
