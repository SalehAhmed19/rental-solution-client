import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const platformReviewApi = createApi({
  reducerPath: "platformReviewApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }), // আপনার ব্যাকএন্ড URL দিন
  tagTypes: ["PlatformReview"],
  endpoints: (builder) => ({
    // সব প্ল্যাটফর্ম রিভিউ গেট করার হুক
    getPlatformReviews: builder.query({
      query: () => "/platform-reviews",
      providesTags: ["PlatformReview"],
    }),

    // নতুন রিভিউ অ্যাড করার জন্য (পরবর্তীতে কাজে লাগবে)
    addPlatformReview: builder.mutation({
      query: (newReview) => ({
        url: "/platform-reviews",
        method: "POST",
        body: newReview,
      }),
      invalidatesTags: ["PlatformReview"],
    }),
  }),
});

export const { useGetPlatformReviewsQuery, useAddPlatformReviewMutation } =
  platformReviewApi;
