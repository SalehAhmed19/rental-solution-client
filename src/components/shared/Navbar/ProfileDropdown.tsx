// // import {
// //   User,
// //   LayoutDashboard,
// //   UserCircle,
// //   Heart,
// //   Megaphone,
// //   LogOut,
// // } from "lucide-react";
// // import {
// //   DropdownMenu,
// //   DropdownMenuContent,
// //   DropdownMenuGroup,
// //   DropdownMenuItem,
// //   DropdownMenuSeparator,
// //   DropdownMenuTrigger,
// // } from "../../ui/dropdown-menu";
// // import { Button } from "../../ui/button";

// // export default function ProfileDropdown({ user }) {
// //   return (
// //     <DropdownMenu>
// //       {/* Trigger Button */}
// //       <DropdownMenuTrigger>
// //         <Button
// //           variant="outline"
// //           size="icon"
// //           className="text-teal-700 transition-all border-teal-200 rounded-full shadow-sm outline-none bg-teal-50 hover:bg-teal-100 hover:border-teal-300 ring-0 focus-visible:ring-0"
// //         >
// //           <User className="w-5 h-5" />
// //         </Button>
// //       </DropdownMenuTrigger>

// //       {/* Dropdown Content */}
// //       <DropdownMenuContent
// //         className="w-56 p-2 mt-2 border-gray-100 shadow-lg rounded-xl shadow-teal-900/10"
// //         align="end"
// //       >
// //         {/* Fix: DropdownMenuLabel এর বদলে সাধারণ div ব্যবহার করা হয়েছে */}
// //         <div className="p-2">
// //           <div className="flex flex-col space-y-1">
// //             <p className="text-sm font-bold leading-none text-gray-900">
// //               আমার একাউন্ট
// //             </p>
// //             <p className="mt-1 text-xs leading-none text-gray-500">
// //               user@example.com
// //             </p>
// //           </div>
// //         </div>

// //         <DropdownMenuSeparator className="bg-gray-100" />

// //         {/* মেইন মেনু আইটেমগুলো */}
// //         <DropdownMenuGroup className="my-1 space-y-1">
// //           <DropdownMenuItem className="cursor-pointer rounded-lg hover:bg-teal-50 focus:bg-teal-50 focus:text-teal-700 transition-colors py-2.5">
// //             <LayoutDashboard className="w-4 h-4 mr-3 text-gray-500" />
// //             <span className="font-medium text-gray-700">ড্যাশবোর্ড</span>
// //           </DropdownMenuItem>

// //           <DropdownMenuItem className="cursor-pointer rounded-lg hover:bg-teal-50 focus:bg-teal-50 focus:text-teal-700 transition-colors py-2.5">
// //             <UserCircle className="w-4 h-4 mr-3 text-gray-500" />
// //             <span className="font-medium text-gray-700">প্রোফাইল</span>
// //           </DropdownMenuItem>

// //           <DropdownMenuItem className="cursor-pointer rounded-lg hover:bg-teal-50 focus:bg-teal-50 focus:text-teal-700 transition-colors py-2.5">
// //             <Heart className="w-4 h-4 mr-3 text-gray-500" />
// //             <span className="font-medium text-gray-700">সেভ করা বাসা</span>
// //           </DropdownMenuItem>

// //           <DropdownMenuItem className="cursor-pointer rounded-lg hover:bg-teal-50 focus:bg-teal-50 focus:text-teal-700 transition-colors py-2.5">
// //             <Megaphone className="w-4 h-4 mr-3 text-gray-500" />
// //             <span className="font-medium text-gray-700">আমার বিজ্ঞাপন</span>
// //           </DropdownMenuItem>
// //         </DropdownMenuGroup>

// //         <DropdownMenuSeparator className="bg-gray-100" />

// //         {/* লগআউট বাটন */}
// //         <DropdownMenuItem className="cursor-pointer rounded-lg text-red-600 focus:bg-red-50 focus:text-red-700 transition-colors py-2.5 mt-1">
// //           <LogOut className="w-4 h-4 mr-3" />
// //           <span className="font-bold">লগআউট</span>
// //         </DropdownMenuItem>
// //       </DropdownMenuContent>
// //     </DropdownMenu>
// //   );
// // }

// import {
//   User as UserIcon,
//   LayoutDashboard,
//   UserCircle,
//   Heart,
//   Megaphone,
//   LogOut,
//   Loader2,
// } from "lucide-react";

// import { Button } from "../../ui/button";
// import { useAppDispatch } from "@/redux/hooks";
// import { logoutUser } from "../../../redux/slices/authSlice";
// import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";
// import { useState } from "react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "../../ui/dropdown-menu";

// export default function ProfileDropdown({ user }) {
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const [isLoggingOut, setIsLoggingOut] = useState(false);

//   // লগআউট হ্যান্ডলার
//   const handleLogout = async () => {
//     try {
//       setIsLoggingOut(true);
//       const resultAction = await dispatch(logoutUser());

//       if (logoutUser.fulfilled.match(resultAction)) {
//         toast.success("সফলভাবে লগআউট হয়েছে");
//         navigate("/authentication/login");
//       } else {
//         toast.error("লগআউট করতে সমস্যা হয়েছে");
//       }
//     } catch (error) {
//       toast.error("কিছু একটা ভুল হয়েছে");
//     } finally {
//       setIsLoggingOut(false);
//     }
//   };

//   return (
//     <DropdownMenu>
//       {/* Trigger Button */}
//       <DropdownMenuTrigger asChild>
//         <Button
//           variant="outline"
//           size="icon"
//           className="text-teal-700 transition-all border-teal-200 rounded-full shadow-sm outline-none bg-teal-50 hover:bg-teal-100 hover:border-teal-300 ring-0 focus-visible:ring-0"
//         >
//           <UserIcon className="w-5 h-5" />
//         </Button>
//       </DropdownMenuTrigger>

//       {/* Dropdown Content */}
//       <DropdownMenuContent
//         className="w-64 p-2 mt-2 border-gray-100 shadow-lg rounded-xl shadow-teal-900/10"
//         align="end"
//       >
//         {/* ইউজার ইনফো সেকশন */}
//         <div className="p-3">
//           <div className="flex flex-col space-y-1">
//             <p className="text-sm font-black leading-none text-gray-900">
//               {user?.name || "ব্যবহারকারী"}
//             </p>
//             <p className="mt-1 text-xs leading-none text-gray-500 truncate">
//               {user?.email || "ইমেইল পাওয়া যায়নি"}
//             </p>
//           </div>
//         </div>

//         <DropdownMenuSeparator className="bg-gray-100" />

//         {/* মেইন মেনু আইটেমগুলো */}
//         <DropdownMenuGroup className="my-1 space-y-1">
//           <DropdownMenuItem
//             onClick={() => navigate("/dashboard")}
//             className="cursor-pointer rounded-lg hover:bg-teal-50 focus:bg-teal-50 focus:text-teal-700 transition-colors py-2.5"
//           >
//             <LayoutDashboard className="w-4 h-4 mr-3 text-gray-500" />
//             <span className="font-medium text-gray-700">ড্যাশবোর্ড</span>
//           </DropdownMenuItem>

//           <DropdownMenuItem
//             onClick={() => navigate("/profile")}
//             className="cursor-pointer rounded-lg hover:bg-teal-50 focus:bg-teal-50 focus:text-teal-700 transition-colors py-2.5"
//           >
//             <UserCircle className="w-4 h-4 mr-3 text-gray-500" />
//             <span className="font-medium text-gray-700">প্রোফাইল</span>
//           </DropdownMenuItem>

//           <DropdownMenuItem
//             onClick={() => navigate("/saved-homes")}
//             className="cursor-pointer rounded-lg hover:bg-teal-50 focus:bg-teal-50 focus:text-teal-700 transition-colors py-2.5"
//           >
//             <Heart className="w-4 h-4 mr-3 text-gray-500" />
//             <span className="font-medium text-gray-700">সেভ করা বাসা</span>
//           </DropdownMenuItem>

//           <DropdownMenuItem
//             onClick={() => navigate("/my-ads")}
//             className="cursor-pointer rounded-lg hover:bg-teal-50 focus:bg-teal-50 focus:text-teal-700 transition-colors py-2.5"
//           >
//             <Megaphone className="w-4 h-4 mr-3 text-gray-500" />
//             <span className="font-medium text-gray-700">আমার বিজ্ঞাপন</span>
//           </DropdownMenuItem>
//         </DropdownMenuGroup>

//         <DropdownMenuSeparator className="bg-gray-100" />

//         {/* লগআউট বাটন */}
//         <DropdownMenuItem
//           onClick={handleLogout}
//           disabled={isLoggingOut}
//           className="cursor-pointer rounded-lg text-red-600 focus:bg-red-50 focus:text-red-700 transition-colors py-2.5 mt-1 disabled:opacity-50"
//         >
//           {isLoggingOut ? (
//             <Loader2 className="w-4 h-4 mr-3 animate-spin" />
//           ) : (
//             <LogOut className="w-4 h-4 mr-3" />
//           )}
//           <span className="font-bold">লগআউট</span>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

import {
  User as UserIcon,
  LayoutDashboard,
  UserCircle,
  Heart,
  Megaphone,
  LogOut,
  Loader2,
  ShieldCheck,
  Settings,
} from "lucide-react";

import { Button } from "../../ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { logoutUser } from "../../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

export default function ProfileDropdown({ user }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // লগআউট হ্যান্ডলার
  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      const resultAction = await dispatch(logoutUser());

      if (logoutUser.fulfilled.match(resultAction)) {
        toast.success("সফলভাবে লগআউট হয়েছে");
        navigate("/authentication/login");
      } else {
        toast.error("লগআউট করতে সমস্যা হয়েছে");
      }
    } catch (error) {
      toast.error("কিছু একটা ভুল হয়েছে");
    } finally {
      setIsLoggingOut(false);
    }
  };

  // রোল অনুযায়ী মেনু ফিল্টার করার লজিক
  const isAdmin = user?.role === "admin";
  const isLandlord = user?.role === "landlord";
  const isTenant = user?.role === "tenant";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="text-teal-700 transition-all border-teal-200 rounded-full shadow-sm outline-none bg-teal-50 hover:bg-teal-100 hover:border-teal-300 ring-0 focus-visible:ring-0"
        >
          <UserIcon className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-64 p-2 mt-2 border-gray-100 shadow-lg rounded-xl shadow-teal-900/10"
        align="end"
      >
        {/* ইউজার ইনফো সেকশন */}
        <div className="p-3">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-black leading-none text-gray-900">
              {user?.name || "ব্যবহারকারী"}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <p className="text-[10px] px-2 py-0.5 bg-teal-50 text-teal-600 rounded-full font-bold uppercase tracking-wider">
                {isAdmin ? "অ্যাডমিন" : isLandlord ? "বাড়িওয়ালা" : "ভাড়াটিয়া"}
              </p>
              <p className="text-[10px] text-gray-400 truncate max-w-[100px]">
                {user?.email}
              </p>
            </div>
          </div>
        </div>

        <DropdownMenuSeparator className="bg-gray-100" />

        <DropdownMenuGroup className="my-1 space-y-1">
          {/* সবার জন্য সাধারণ অপশন */}
          <DropdownMenuItem
            onClick={() => navigate("/dashboard")}
            className="cursor-pointer rounded-lg hover:bg-teal-50 focus:bg-teal-50 focus:text-teal-700 transition-colors py-2.5"
          >
            <LayoutDashboard className="w-4 h-4 mr-3 text-gray-500" />
            <span className="font-medium text-gray-700">ড্যাশবোর্ড</span>
          </DropdownMenuItem>

          {/* শুধু অ্যাডমিন এর জন্য */}
          {isAdmin && (
            <DropdownMenuItem
              onClick={() => navigate("/dashboard/admin/verify")}
              className="cursor-pointer rounded-lg hover:bg-teal-50 focus:bg-teal-50 focus:text-teal-700 transition-colors py-2.5"
            >
              <ShieldCheck className="w-4 h-4 mr-3 text-teal-600" />
              <span className="font-medium text-gray-700">
                ভেরিফিকেশন প্যানেল
              </span>
            </DropdownMenuItem>
          )}

          {/* ভাড়াটিয়া এবং বাড়িওয়ালার জন্য প্রোফাইল */}
          {(isTenant || isLandlord) && (
            <DropdownMenuItem
              onClick={() => navigate("/dashboard/profile")}
              className="cursor-pointer rounded-lg hover:bg-teal-50 focus:bg-teal-50 focus:text-teal-700 transition-colors py-2.5"
            >
              <UserCircle className="w-4 h-4 mr-3 text-gray-500" />
              <span className="font-medium text-gray-700">প্রোফাইল</span>
            </DropdownMenuItem>
          )}

          {/* শুধু ভাড়াটিয়া এর জন্য */}
          {isTenant && (
            <DropdownMenuItem
              onClick={() => navigate("/dashboard/saved")}
              className="cursor-pointer rounded-lg hover:bg-teal-50 focus:bg-teal-50 focus:text-teal-700 transition-colors py-2.5"
            >
              <Heart className="w-4 h-4 mr-3 text-gray-500" />
              <span className="font-medium text-gray-700">সেভ করা বাসা</span>
            </DropdownMenuItem>
          )}

          {/* শুধু বাড়িওয়ালা এর জন্য */}
          {isLandlord && (
            <DropdownMenuItem
              onClick={() => navigate("/dashboard/my-ads")}
              className="cursor-pointer rounded-lg hover:bg-teal-50 focus:bg-teal-50 focus:text-teal-700 transition-colors py-2.5"
            >
              <Megaphone className="w-4 h-4 mr-3 text-gray-500" />
              <span className="font-medium text-gray-700">আমার বিজ্ঞাপন</span>
            </DropdownMenuItem>
          )}

          {/* সেটিংস সবার জন্য */}
          <DropdownMenuItem
            onClick={() => navigate("/dashboard/settings")}
            className="cursor-pointer rounded-lg hover:bg-teal-50 focus:bg-teal-50 focus:text-teal-700 transition-colors py-2.5"
          >
            <Settings className="w-4 h-4 mr-3 text-gray-500" />
            <span className="font-medium text-gray-700">সেটিংস</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="bg-gray-100" />

        {/* লগআউট বাটন */}
        <DropdownMenuItem
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="cursor-pointer rounded-lg text-red-600 focus:bg-red-50 focus:text-red-700 transition-colors py-2.5 mt-1 disabled:opacity-50"
        >
          {isLoggingOut ? (
            <Loader2 className="w-4 h-4 mr-3 animate-spin" />
          ) : (
            <LogOut className="w-4 h-4 mr-3" />
          )}
          <span className="font-bold">লগআউট</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
