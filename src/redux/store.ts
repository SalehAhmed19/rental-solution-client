import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { propertyApi } from "./slices/propertyApi";
import { adminApi } from "./slices/adminApi";
import { platformReviewApi } from "./slices/platformReviewApi"; // 🔥 নতুন ইমপোর্ট

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [propertyApi.reducerPath]: propertyApi.reducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [platformReviewApi.reducerPath]: platformReviewApi.reducer, // 🔥 রেজিস্টার করা হলো
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      propertyApi.middleware,
      adminApi.middleware,
      platformReviewApi.middleware, // 🔥 মিডলওয়্যার যুক্ত করা হলো
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
