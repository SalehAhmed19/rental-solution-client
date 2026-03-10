import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { propertyApi } from "./slices/propertyApi"; // এটি আমরা পরের ধাপে বানাচ্ছি

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // RTK Query-এর এপিআই স্লাইস এখানে রেজিস্টার করছি
    [propertyApi.reducerPath]: propertyApi.reducer,
  },
  // RTK Query-এর ক্যাশিং এবং অন্যান্য ফিচারের জন্য মিডলওয়্যার যোগ করা
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(propertyApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
