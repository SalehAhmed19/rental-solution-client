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

// const router = createBrowserRouter([
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
//       {
//         path: "/authentication/login",
//         element: <Login />,
//       },
//       {
//         path: "/authentication/signup",
//         element: <Signup />,
//       },

//       {
//         path: "/dashboard",
//         element: <DashboardLayout />,
//         children: [
//           { index: true, element: <DashboardHome /> }, // ড্যাশবোর্ডের মেইন হোম (স্ট্যাটস)
//           { path: "profile", element: <UserProfile /> },
//           { path: "saved", element: <SavedHomes /> },
//           { path: "history", element: <History /> },
//           { path: "settings", element: <Settings /> },
//           { path: "my-ads", element: <MyAds /> },
//           // admin রাউট (শুধুমাত্র অ্যাডমিন ইউজারদের জন্য)
//           { path: "admin", element: <AdminPanel /> },
//           // বাকি রাউটগুলো এখানে হবে...
//         ],
//       },
//     ],
//   },
// ]);

// export default router;

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import SearchHome from "../pages/SearchHome/SearchHome";
import HowItWorks from "../pages/HowItWorks/HowItWorks";
import PropertyDetails from "../pages/SearchHome/PropertyDetailsPage";
import AdPost from "../pages/AdPost/AdPost";
import Login from "../pages/Authentication/Login/Login";
import Signup from "../pages/Authentication/Signup/Signup";
import VisionPage from "../pages/Vision/VisionPage";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import UserProfile from "../pages/Dashboard/UserProfile/UserProfile";
import SavedHomes from "../pages/Dashboard/SavedHomes/SavedHomes";
import MyAds from "../pages/Dashboard/MyAds/MyAds";
import History from "../pages/Dashboard/History/RentalHistory";
import Settings from "../pages/Dashboard/Settings/Settings";
import AdminPanel from "../pages/Dashboard/AdminPanel/AdminPanel";
import AdminVerify from "../pages/Dashboard/AdminPanel/AdminVerify";
import Ads from "../pages/Dashboard/AdminPanel/Ads";

const router = createBrowserRouter([
  // --- মেইন ওয়েবসাইট রাউটস ---
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/our-vision", element: <VisionPage /> },
      { path: "/search", element: <SearchHome /> },
      { path: "/search/:id", element: <PropertyDetails /> },
      { path: "/how-it-works", element: <HowItWorks /> },
      {
        path: "/post-ad",
        element: (
          <ProtectedRoute>
            <AdPost />
          </ProtectedRoute>
        ),
      },
      { path: "/authentication/login", element: <Login /> },
      { path: "/authentication/signup", element: <Signup /> },
    ],
  },

  // --- ড্যাশবোর্ড রাউটস (রোল বেজড) ---
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      // ১. সবার জন্য কমন ড্যাশবোর্ড হোম
      { index: true, element: <DashboardHome /> },
      { path: "profile", element: <UserProfile /> },
      { path: "settings", element: <Settings /> },

      // ২. ভাড়াটিয়া (Tenant) এর জন্য রাউটস
      { path: "saved", element: <SavedHomes /> },
      { path: "history", element: <History /> },

      // ৩. বাড়িওয়ালা (Landlord) এর জন্য রাউটস
      { path: "my-ads", element: <MyAds /> },

      // ৪. অ্যাডমিন (Admin) এর জন্য রাউটস
      {
        path: "admin",
        children: [
          { index: true, element: <AdminPanel /> }, // /dashboard/admin
          { path: "verify", element: <AdminVerify /> }, // /dashboard/admin/verify
          { path: "ads", element: <Ads /> }, // /dashboard/admin/verify
          // ভবিষ্যতে আরও অ্যাডমিন রাউট এখানে যোগ করতে পারবেন
        ],
      },
    ],
  },
]);

export default router;
