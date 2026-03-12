import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { propertyApi } from "./slices/propertyApi";
import { adminApi } from "./slices/adminApi"; // 🔥 নতুন এপিআই ইমপোর্ট করা হলো

export const store = configureStore({
  reducer: {
    auth: authReducer,
    // RTK Query-এর এপিআই স্লাইসগুলো এখানে রেজিস্টার করছি
    [propertyApi.reducerPath]: propertyApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer, // 🔥 adminApi যুক্ত করা হলো
  },
  // RTK Query-এর ক্যাশিং এবং অন্যান্য ফিচারের জন্য মিডলওয়্যার যোগ করা
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      propertyApi.middleware,
      adminApi.middleware, // 🔥 adminApi এর মিডলওয়্যার যুক্ত করা হলো
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
