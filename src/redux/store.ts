import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// এই টাইপগুলো আমাদের কম্পোনেন্টে লাগবে
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
