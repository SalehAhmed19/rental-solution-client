// // import { createBrowserRouter } from "react-router-dom";
// // import MainLayout from "../layout/MainLayout";
// // import Home from "../pages/Home/Home";
// // import SearchHome from "../pages/SearchHome/SearchHome";
// // import HowItWorks from "../pages/HowItWorks/HowItWorks";
// // import PropertyDetails from "../pages/SearchHome/PropertyDetailsPage";
// // import AdPost from "../pages/AdPost/AdPost";
// // import Login from "../pages/Authentication/Login/Login";
// // import Signup from "../pages/Authentication/Signup/Signup";
// // import VisionPage from "../pages/Vision/VisionPage";
// // import ProtectedRoute from "./ProtectedRoute";
// // import DashboardLayout from "../layout/DashboardLayout";
// // import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
// // import UserProfile from "../pages/Dashboard/UserProfile/UserProfile";
// // import SavedHomes from "../pages/Dashboard/SavedHomes/SavedHomes";
// // import MyAds from "../pages/Dashboard/MyAds/MyAds";
// // import History from "../pages/Dashboard/History/RentalHistory";
// // import Settings from "../pages/Dashboard/Settings/Settings";
// // import AdminPanel from "../pages/Dashboard/AdminPanel/AdminPanel";

// // const router = createBrowserRouter([
// //   {
// //     path: "/",
// //     element: <MainLayout />,
// //     children: [
// //       { path: "/", element: <Home /> },
// //       { path: "/our-vision", element: <VisionPage /> },
// //       { path: "/search", element: <SearchHome /> },
// //       { path: "/search/:id", element: <PropertyDetails /> },
// //       { path: "/how-it-works", element: <HowItWorks /> },
// //       {
// //         path: "/post-ad",
// //         element: (
// //           <ProtectedRoute>
// //             <AdPost />
// //           </ProtectedRoute>
// //         ),
// //       },
// //       {
// //         path: "/authentication/login",
// //         element: <Login />,
// //       },
// //       {
// //         path: "/authentication/signup",
// //         element: <Signup />,
// //       },

// //       {
// //         path: "/dashboard",
// //         element: <DashboardLayout />,
// //         children: [
// //           { index: true, element: <DashboardHome /> }, // ড্যাশবোর্ডের মেইন হোম (স্ট্যাটস)
// //           { path: "profile", element: <UserProfile /> },
// //           { path: "saved", element: <SavedHomes /> },
// //           { path: "history", element: <History /> },
// //           { path: "settings", element: <Settings /> },
// //           { path: "my-ads", element: <MyAds /> },
// //           // admin রাউট (শুধুমাত্র অ্যাডমিন ইউজারদের জন্য)
// //           { path: "admin", element: <AdminPanel /> },
// //           // বাকি রাউটগুলো এখানে হবে...
// //         ],
// //       },
// //     ],
// //   },
// // ]);

// // export default router;

// import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../layout/MainLayout";
// import Home from "../pages/Home/Home";
// import SearchHome from "../pages/SearchHome/SearchHome";
// import HowItWorks from "../pages/HowItWorks/HowItWorks";
// import PropertyDetails from "../pages/SearchHome/PropertyDetailsPage";
// import AdPost from "../pages/AdPost/AdPost";
// import Login from "../pages/Authentication/Login/Login";
// import Signup from "../pages/Authentication/Signup/Signup";
// import VisionPage from "../pages/Vision/VisionPage";
// import ProtectedRoute from "./ProtectedRoute";
// import DashboardLayout from "../layout/DashboardLayout";
// import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
// import UserProfile from "../pages/Dashboard/UserProfile/UserProfile";
// import SavedHomes from "../pages/Dashboard/SavedHomes/SavedHomes";
// import MyAds from "../pages/Dashboard/MyAds/MyAds";
// import History from "../pages/Dashboard/History/RentalHistory";
// import Settings from "../pages/Dashboard/Settings/Settings";
// import AdminPanel from "../pages/Dashboard/AdminPanel/AdminPanel";
// import AdminVerify from "../pages/Dashboard/AdminPanel/AdminVerify";
// import Ads from "../pages/Dashboard/AdminPanel/Ads";

// const router = createBrowserRouter([
//   // --- মেইন ওয়েবসাইট রাউটস ---
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/our-vision", element: <VisionPage /> },
//       { path: "/search", element: <SearchHome /> },
//       { path: "/search/:id", element: <PropertyDetails /> },
//       { path: "/how-it-works", element: <HowItWorks /> },
//       {
//         path: "/post-ad",
//         element: (
//           <ProtectedRoute>
//             <AdPost />
//           </ProtectedRoute>
//         ),
//       },
//       { path: "/authentication/login", element: <Login /> },
//       { path: "/authentication/signup", element: <Signup /> },
//     ],
//   },

//   // --- ড্যাশবোর্ড রাউটস (রোল বেজড) ---
//   {
//     path: "/dashboard",
//     element: (
//       <ProtectedRoute>
//         <DashboardLayout />
//       </ProtectedRoute>
//     ),
//     children: [
//       // ১. সবার জন্য কমন ড্যাশবোর্ড হোম
//       { index: true, element: <DashboardHome /> },
//       { path: "profile", element: <UserProfile /> },
//       { path: "settings", element: <Settings /> },

//       // ২. ভাড়াটিয়া (Tenant) এর জন্য রাউটস
//       { path: "saved", element: <SavedHomes /> },
//       { path: "history", element: <History /> },

//       // ৩. বাড়িওয়ালা (Landlord) এর জন্য রাউটস
//       { path: "my-ads", element: <MyAds /> },

//       // ৪. অ্যাডমিন (Admin) এর জন্য রাউটস
//       {
//         path: "admin",
//         children: [
//           { index: true, element: <AdminPanel /> }, // /dashboard/admin
//           { path: "verify", element: <AdminVerify /> }, // /dashboard/admin/verify
//           { path: "ads", element: <Ads /> }, // /dashboard/admin/verify
//           // ভবিষ্যতে আরও অ্যাডমিন রাউট এখানে যোগ করতে পারবেন
//         ],
//       },
//     ],
//   },
// ]);

// export default router;

import { createBrowserRouter } from "react-router-dom";

// Layouts
import MainLayout from "../layout/MainLayout";
import DashboardLayout from "../layout/DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";

// Main Website Pages
import Home from "../pages/Home/Home";
import SearchHome from "../pages/SearchHome/SearchHome";
import PropertyDetails from "../pages/SearchHome/PropertyDetailsPage";
import HowItWorks from "../pages/HowItWorks/HowItWorks";
import AdPost from "../pages/AdPost/AdPost";
import VisionPage from "../pages/Vision/VisionPage";

// Authentication Pages
import Login from "../pages/Authentication/Login/Login";
import Signup from "../pages/Authentication/Signup/Signup";

// Dashboard Pages
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import UserProfile from "../pages/Dashboard/UserProfile/UserProfile";
import Settings from "../pages/Dashboard/Settings/Settings";

// Tenant (ভাড়াটিয়া) Pages
import SavedHomes from "../pages/Dashboard/SavedHomes/SavedHomes";
import History from "../pages/Dashboard/History/RentalHistory";

// Landlord (বাড়িওয়ালা) Pages
import MyAds from "../pages/Dashboard/MyAds/MyAds";

// Admin Pages
import AdminPanel from "../pages/Dashboard/AdminPanel/AdminPanel";
import AdminVerify from "../pages/Dashboard/AdminPanel/AdminVerify";
import Ads from "../pages/Dashboard/AdminPanel/Ads";

const router = createBrowserRouter([
  // 🌐 --- মেইন ওয়েবসাইট রাউটস (Public & Semi-Public) ---
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/our-vision", element: <VisionPage /> },
      { path: "/how-it-works", element: <HowItWorks /> },

      // প্রোপার্টি সার্চ এবং ডিটেইলস
      { path: "/search", element: <SearchHome /> },
      { path: "/properties/details/:id", element: <PropertyDetails /> }, // 🔥 লিংক ঠিক করা হয়েছে

      // বিজ্ঞাপন দেওয়া (লগইন করা থাকতে হবে)
      {
        path: "/post-ad",
        element: (
          <ProtectedRoute>
            <AdPost />
          </ProtectedRoute>
        ),
      },

      // অথেনটিকেশন
      { path: "/authentication/login", element: <Login /> },
      { path: "/authentication/signup", element: <Signup /> },
    ],
  },

  // 🔒 --- ড্যাশবোর্ড রাউটস (Protected & Role Based) ---
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      // ১. কমন রাউটস (সবার জন্য)
      { index: true, element: <DashboardHome /> }, // /dashboard
      { path: "profile", element: <UserProfile /> }, // /dashboard/profile
      { path: "settings", element: <Settings /> }, // /dashboard/settings

      // ২. ভাড়াটিয়া (Tenant) স্পেসিফিক রাউটস
      { path: "saved", element: <SavedHomes /> }, // /dashboard/saved
      { path: "history", element: <History /> }, // /dashboard/history

      // ৩. বাড়িওয়ালা (Landlord) স্পেসিফিক রাউটস
      { path: "my-ads", element: <MyAds /> }, // /dashboard/my-ads

      // ৪. অ্যাডমিন (Admin) স্পেসিফিক রাউটস
      {
        path: "admin",
        children: [
          { index: true, element: <AdminPanel /> }, // /dashboard/admin (Overview)
          { path: "verify", element: <AdminVerify /> }, // /dashboard/admin/verify (NID Approval)
          { path: "ads", element: <Ads /> }, // /dashboard/admin/ads (Property Approval)
        ],
      },
    ],
  },
]);

export default router;
