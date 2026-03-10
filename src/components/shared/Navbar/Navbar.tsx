// // মডার্ন আইকনগুলো
// import { Building2, Bell, Menu, PlusCircle } from "lucide-react";
// import ProfileDropdown from "./ProfileDropdown";
// import { Button } from "../../ui/button";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   // লগইন স্টেট (পরে এটি Context API বা Redux থেকে আসবে)
//   const login = false;

//   return (
//     // Sticky Navbar with Glassmorphism
//     <nav className="sticky top-0 z-50 w-full transition-all duration-300 border-b border-gray-100 shadow-sm bg-white/80 backdrop-blur-md">
//       <div className="flex items-center justify-between h-20 px-4 mx-auto max-w-7xl md:px-8">
//         {/* =========================================
//             Left Side: Logo Brand
//             ========================================= */}
//         <div className="flex items-center gap-2 cursor-pointer group">
//           <div className="p-2 text-white transition-transform shadow-lg bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl shadow-teal-500/30 group-hover:scale-105">
//             <Building2 className="w-6 h-6" />
//           </div>
//           <span className="text-2xl font-extrabold tracking-tight text-gray-900 font-heading">
//             আবাস<span className="text-teal-600">.</span>
//           </span>
//         </div>

//         {/* =========================================
//             Center: Navigation Links (Desktop Only)
//             ========================================= */}
//         <ul className="items-center hidden gap-8 font-medium text-gray-600 md:flex">
//           <Link to={"/"}>
//             <li className="hover:text-teal-600 transition-colors cursor-pointer relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-teal-600 hover:after:w-full after:transition-all after:duration-300">
//               হোম
//             </li>
//           </Link>
//           <Link to={"/search"}>
//             <li className="hover:text-teal-600 transition-colors cursor-pointer relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-teal-600 hover:after:w-full after:transition-all after:duration-300">
//               বাসা খুঁজুন
//             </li>
//           </Link>
//           <Link to={"/how-it-works"}>
//             <li className="hover:text-teal-600 transition-colors cursor-pointer relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-teal-600 hover:after:w-full after:transition-all after:duration-300">
//               কিভাবে কাজ করে?
//             </li>
//           </Link>
//         </ul>

//         {/* =========================================
//             Right Side: Actions & Auth
//             ========================================= */}
//         <div className="items-center hidden gap-5 md:flex">
//           {/* যদি ইউজার লগইন করা না থাকে */}
//           {!login ? (
//             <>
//               <Button
//                 variant="ghost"
//                 className="px-6 font-bold text-gray-600 rounded-full hover:text-teal-600 hover:bg-teal-50"
//               >
//                 <Link to={"/authentication/login"}>লগইন</Link>
//               </Button>
//               <Button className="bg-[#0a4a4e] hover:bg-[#073639] text-white rounded-full px-6 font-medium shadow-md shadow-teal-900/20 flex items-center gap-2">
//                 <Link to={"/post-ad"} className="flex items-center gap-2">
//                   <PlusCircle className="w-4 h-4" />
//                   বিজ্ঞাপন দিন
//                 </Link>
//               </Button>
//             </>
//           ) : (
//             /* যদি ইউজার লগইন করা থাকে */
//             <>
//               <Button className="bg-[#0a4a4e] hover:bg-[#073639] text-white rounded-full px-6 font-medium shadow-md shadow-teal-900/20 flex items-center gap-2">
//                 <Link to={"/post-ad"} className="flex items-center gap-2">
//                   <PlusCircle className="w-4 h-4" />
//                   বিজ্ঞাপন দিন
//                 </Link>
//               </Button>

//               {/* নোটিফিকেশন আইকন */}
//               <button className="relative p-2.5 text-gray-500 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-colors">
//                 <Bell className="w-5 h-5" />
//                 {/* লাল ডট (নতুন নোটিফিকেশন বোঝাতে) */}
//                 <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
//               </button>

//               <div className="pl-2 border-l border-gray-200">
//                 <ProfileDropdown />
//               </div>
//             </>
//           )}
//         </div>

//         {/* =========================================
//             Mobile Menu Toggle (Hamburger)
//             ========================================= */}
//         <div className="flex items-center gap-4 md:hidden">
//           {login && <ProfileDropdown />}
//           <button className="p-2 text-gray-600 transition-colors rounded-lg hover:bg-gray-100">
//             <Menu className="w-6 h-6" />
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }

import { Building2, Bell, Menu, PlusCircle, LogIn } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/redux/hooks"; // রিডাক্স হুক ইমপোর্ট করুন

export default function Navbar() {
  // রিডাক্স থেকে অথ স্টেট নিয়ে আসা
  const { isAuthenticated, user, loading } = useAppSelector(
    (state) => state.auth,
  );

  console.log(user);

  return (
    <nav className="sticky top-0 z-50 w-full transition-all duration-300 border-b border-gray-100 shadow-sm bg-white/80 backdrop-blur-md">
      <div className="flex items-center justify-between h-20 px-4 mx-auto max-w-7xl md:px-8">
        {/* Left Side: Logo Brand */}
        <Link to="/">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="p-2 text-white transition-transform shadow-lg bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl shadow-teal-500/30 group-hover:scale-105">
              <Building2 className="w-6 h-6" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-gray-900 font-heading">
              আবাস<span className="text-teal-600">.</span>
            </span>
          </div>
        </Link>

        {/* Center: Navigation Links */}
        <ul className="items-center hidden gap-8 font-medium text-gray-600 md:flex">
          <Link to="/">
            <li className="hover:text-teal-600 transition-colors cursor-pointer relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-teal-600 hover:after:w-full after:transition-all after:duration-300 font-bold">
              হোম
            </li>
          </Link>
          <Link to="/search">
            <li className="hover:text-teal-600 transition-colors cursor-pointer relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-teal-600 hover:after:w-full after:transition-all after:duration-300 font-bold">
              বাসা খুঁজুন
            </li>
          </Link>
          <Link to="/how-it-works">
            <li className="hover:text-teal-600 transition-colors cursor-pointer relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-teal-600 hover:after:w-full after:transition-all after:duration-300 font-bold">
              কিভাবে কাজ করে?
            </li>
          </Link>
        </ul>

        {/* Right Side: Actions & Auth */}
        <div className="items-center hidden gap-5 md:flex">
          {/* লোডিং অবস্থায় থাকলে ছোট একটি গ্যাপ রাখবে */}
          {!loading && (
            <>
              {!isAuthenticated ? (
                /* যদি ইউজার লগইন করা না থাকে */
                <>
                  <Link to="/authentication/login">
                    <Button
                      variant="ghost"
                      className="px-6 font-bold text-gray-600 rounded-full hover:text-teal-600 hover:bg-teal-50 gap-2 transition-all"
                    >
                      <LogIn className="w-4 h-4" /> লগইন
                    </Button>
                  </Link>
                  <Link to="/post-ad">
                    <Button className="bg-[#0a4a4e] hover:bg-[#073639] text-white rounded-full px-6 font-bold shadow-md shadow-teal-900/20 flex items-center gap-2 transition-all active:scale-95">
                      <PlusCircle className="w-4 h-4" /> বিজ্ঞাপন দিন
                    </Button>
                  </Link>
                </>
              ) : (
                /* যদি ইউজার লগইন করা থাকে */
                <>
                  <Link to="/post-ad">
                    <Button className="bg-[#0a4a4e] hover:bg-[#073639] text-white rounded-full px-6 font-bold shadow-md shadow-teal-900/20 flex items-center gap-2 transition-all active:scale-95">
                      <PlusCircle className="w-4 h-4" /> বিজ্ঞাপন দিন
                    </Button>
                  </Link>

                  {/* নোটিফিকেশন আইকন */}
                  <button className="relative p-2.5 text-gray-500 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-all">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                  </button>

                  {/* ইউজার প্রোফাইল মেনু */}
                  <div className="pl-2 border-l border-gray-200">
                    <ProfileDropdown user={user} />
                  </div>
                </>
              )}
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          {isAuthenticated && <ProfileDropdown user={user} />}
          <button className="p-2 text-gray-600 transition-colors rounded-lg hover:bg-gray-100">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
