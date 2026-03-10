// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const propertyApi = createApi({
//   reducerPath: "propertyApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:5000/api/v1",
//     credentials: "include", // আপনার ব্যাকএন্ডের বেস ইউআরএল
//     prepareHeaders: (headers) => {
//       return headers;
//     },
//   }),
//   tagTypes: ["Property"], // ডাটা রি-ফেচ করার জন্য ট্যাগ
//   endpoints: (builder) => ({
//     // ১. সব প্রোপার্টি ফেচ করা (সার্চ রেজাল্ট পেজের জন্য)
//     getProperties: builder.query({
//       query: () => "/properties",
//       providesTags: ["Property"],
//     }),

//     // ২. নতুন বিজ্ঞাপন পোস্ট করা (Multi-part Form Data)
//     postAd: builder.mutation({
//       query: (formData) => ({
//         url: "/properties/add",
//         method: "POST",
//         body: formData, // ইমেজ থাকায় আমরা FormData পাঠাবো
//       }),
//       invalidatesTags: ["Property"], // নতুন অ্যাড দিলে লিস্ট রিফ্রেশ হবে
//     }),

//     // ৩. নির্দিষ্ট একটি বাসার ডিটেইলস দেখা
//     getPropertyById: builder.query({
//       query: (id) => `/properties/details/${id}`,
//       providesTags: (result, error, id) => [{ type: "Property", id }],
//     }),
//   }),
// });

// export const {
//   useGetPropertiesQuery,
//   usePostAdMutation,
//   useGetPropertyByIdQuery,
// } = propertyApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertyApi = createApi({
  reducerPath: "propertyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1", // বেস ইউআরএল
    credentials: "include", // কুকি পাঠানোর জন্য গুরুত্বপূর্ণ
  }),
  tagTypes: ["Property"],
  endpoints: (builder) => ({
    // ১. সব প্রোপার্টি গেট করা (পাবলিক সার্চের জন্য)
    getProperties: builder.query({
      query: () => "/properties",
      providesTags: ["Property"],
    }),

    // ২. নতুন বিজ্ঞাপন পোস্ট করা
    postAd: builder.mutation({
      query: (formData) => ({
        url: "/properties/add",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Property"],
    }),

    // ৩. ইউজারের নিজের বিজ্ঞাপনগুলো দেখা (এই এন্ডপয়েন্টটি অ্যাড করা হলো)
    getMyProperties: builder.query({
      query: () => "/properties/my-ads",
      providesTags: ["Property"],
    }),

    // ৪. নির্দিষ্ট বাসার ডিটেইলস দেখা
    getPropertyById: builder.query({
      query: (id) => `/properties/details/${id}`,
      providesTags: (result, error, id) => [{ type: "Property", id }],
    }),
  }),
});

// হুকগুলো এক্সপোর্ট করা হচ্ছে
export const {
  useGetPropertiesQuery,
  usePostAdMutation,
  useGetMyPropertiesQuery, // এখন এটি আপনার কম্পোনেন্টে এভেইলএবল হবে
  useGetPropertyByIdQuery,
} = propertyApi;
