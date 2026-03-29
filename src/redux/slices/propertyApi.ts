// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const propertyApi = createApi({
//   reducerPath: "propertyApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "http://localhost:5000/api/v1",
//     credentials: "include",
//   }),
//   tagTypes: ["Property", "User"],
//   endpoints: (builder) => ({
//     // ১. সব প্রোপার্টি গেট করা
//     getProperties: builder.query({
//       query: () => "/properties",
//       providesTags: ["Property"],
//     }),

//     // ২. নতুন বিজ্ঞাপন পোস্ট করা
//     postAd: builder.mutation({
//       query: (formData) => ({
//         url: "/properties/add",
//         method: "POST",
//         body: formData,
//       }),
//       invalidatesTags: ["Property"],
//     }),

//     // ৩. ল্যান্ডলর্ডের নিজের বিজ্ঞাপন দেখা
//     getMyProperties: builder.query({
//       query: () => "/properties/my-ads",
//       providesTags: ["Property"],
//     }),

//     // ৪. প্রোপার্টি ডিটেইলস দেখা
//     getPropertyById: builder.query({
//       query: (id) => `/properties/details/${id}`,
//       providesTags: (result, error, id) => [{ type: "Property", id }],
//     }),

//     // ৫. বাসা সেভ বা আন-সেভ করা (Toggle Save)
//     toggleSaveProperty: builder.mutation({
//       query: (id) => ({
//         url: `/properties/toggle-save/${id}`,
//         method: "PATCH",
//       }),
//       invalidatesTags: ["Property", "User"],
//     }),

//     // ৬. সেভ করা সব বাসার লিস্ট দেখা
//     getSavedProperties: builder.query({
//       query: () => "/properties/saved-ads",
//       providesTags: ["Property"],
//     }),

//     // --- 🔥 অ্যাডমিন স্পেশাল এন্ডপয়েন্টস ---

//     // ৭. অ্যাডমিনের জন্য সব বিজ্ঞাপন গেট করা (Pending + Approved)
//     getAdminAllProperties: builder.query({
//       query: () => "/properties/admin/all",
//       providesTags: ["Property"],
//     }),

//     // ৮. বিজ্ঞাপন অ্যাপ্রুভ বা রিজেক্ট করা
//     approveProperty: builder.mutation({
//       query: ({ id, isApproved }) => ({
//         url: `/properties/admin/approve/${id}`,
//         method: "PATCH",
//         body: { isApproved },
//       }),
//       invalidatesTags: ["Property"], // যেন সাথে সাথে অ্যাডমিন প্যানেল আপডেট হয়
//     }),
//   }),
// });

// export const {
//   useGetPropertiesQuery,
//   usePostAdMutation,
//   useGetMyPropertiesQuery,
//   useGetPropertyByIdQuery,
//   useToggleSavePropertyMutation,
//   useGetSavedPropertiesQuery,
//   useGetAdminAllPropertiesQuery, // অ্যাডমিন প্যানেলের জন্য
//   useApprovePropertyMutation, // অ্যাপ্রুভ বাটনের জন্য
// } = propertyApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const propertyApi = createApi({
  reducerPath: "propertyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    credentials: "include",
  }),
  tagTypes: ["Property", "User"],
  endpoints: (builder) => ({
    // ১. সব প্রোপার্টি গেট করা
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

    // ৩. ল্যান্ডলর্ডের নিজের বিজ্ঞাপন দেখা
    getMyProperties: builder.query({
      query: () => "/properties/my-ads",
      providesTags: ["Property"],
    }),

    // ৪. প্রোপার্টি ডিটেইলস দেখা
    getPropertyById: builder.query({
      query: (id) => `/properties/details/${id}`,
      providesTags: (result, error, id) => [{ type: "Property", id }],
    }),

    // ৫. বাসা সেভ বা আন-সেভ করা (Toggle Save)
    toggleSaveProperty: builder.mutation({
      query: (id) => ({
        url: `/properties/toggle-save/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Property", "User"],
    }),

    // ৬. সেভ করা সব বাসার লিস্ট দেখা
    getSavedProperties: builder.query({
      query: () => "/properties/saved-ads",
      providesTags: ["Property"],
    }),

    // --- 🔥 অ্যাডমিন স্পেশাল এন্ডপয়েন্টস ---

    // ৭. অ্যাডমিনের জন্য সব বিজ্ঞাপন গেট করা (Pending + Approved)
    getAdminAllProperties: builder.query({
      query: () => "/properties/admin/all",
      providesTags: ["Property"],
    }),

    // ৮. বিজ্ঞাপন অ্যাপ্রুভ বা রিজেক্ট করা
    approveProperty: builder.mutation({
      query: ({ id, isApproved }) => ({
        url: `/properties/admin/approve/${id}`,
        method: "PATCH",
        body: { isApproved },
      }),
      invalidatesTags: ["Property"], // যেন সাথে সাথে অ্যাডমিন প্যানেল আপডেট হয়
    }),

    // 🔥 ৯. বিজ্ঞাপন ডিলিট করা
    deleteProperty: builder.mutation({
      query: (id) => ({
        url: `/properties/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Property"], // ডিলিট হওয়ার পর লিস্ট আপডেট করার জন্য
    }),
  }),
});

export const {
  useGetPropertiesQuery,
  usePostAdMutation,
  useGetMyPropertiesQuery,
  useGetPropertyByIdQuery,
  useToggleSavePropertyMutation,
  useGetSavedPropertiesQuery,
  useGetAdminAllPropertiesQuery, // অ্যাডমিন প্যানেলের জন্য
  useApprovePropertyMutation, // অ্যাপ্রুভ বাটনের জন্য
  useDeletePropertyMutation, // 🔥 ডিলিট বাটনের জন্য
} = propertyApi;
