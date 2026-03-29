import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    credentials: "include",
  }),
  tagTypes: ["UserVerification"], // ট্যাগ দিলাম যেন অ্যাপ্রুভ করার পর লিস্ট অটো আপডেট হয়
  endpoints: (builder) => ({
    // ১. যাদের NID পেন্ডিং আছে তাদের লিস্ট গেট করা
    getPendingVerifications: builder.query({
      query: () => "/admin/pending-verifications",
      providesTags: ["UserVerification"],
    }),

    // ২. নির্দিষ্ট ইউজারের NID ছবি (Signed URLs) গেট করা
    getUserNidImages: builder.query({
      query: (userId: string) => `/admin/view-nid/${userId}`,
    }),

    // ৩. ইউজারকে অ্যাপ্রুভ বা রিজেক্ট করা
    verifyUserNid: builder.mutation({
      query: ({
        userId,
        status,
        reason,
      }: {
        userId: string;
        status: "approved" | "rejected";
        reason?: string;
      }) => ({
        url: `/admin/verify-nid/${userId}`,
        method: "PATCH",
        body: { status, reason },
      }),
      invalidatesTags: ["UserVerification"], // এটি কল হলেই পেন্ডিং লিস্ট রি-ফেচ হবে
    }),
  }),
});

export const {
  useGetPendingVerificationsQuery,
  useGetUserNidImagesQuery,
  useVerifyUserNidMutation,
} = adminApi;
