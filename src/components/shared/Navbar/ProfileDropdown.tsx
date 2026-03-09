// import { User } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuTrigger,
// } from "../../ui/dropdown-menu";

// export default function ProfileDropdown() {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger
//         render={
//           <button>
//             <User />
//           </button>
//         }
//       />
//       <DropdownMenuContent className="w-40" align="start">
//         <DropdownMenuGroup>
//           <DropdownMenuLabel>আমার একাউন্ট</DropdownMenuLabel>
//           <DropdownMenuItem>
//             ড্যাশবোর্ড
//             {/* <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut> */}
//           </DropdownMenuItem>
//           <DropdownMenuItem>
//             প্রোফাইল
//             {/* <DropdownMenuShortcut>⌘B</DropdownMenuShortcut> */}
//           </DropdownMenuItem>
//           <DropdownMenuItem>
//             সেভ করা বাসা
//             {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
//           </DropdownMenuItem>
//           <DropdownMenuItem>
//             আমার বিজ্ঞাপন
//             {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
//           </DropdownMenuItem>
//           <DropdownMenuItem>
//             লগআউট
//             {/* <DropdownMenuShortcut>⌘S</DropdownMenuShortcut> */}
//           </DropdownMenuItem>
//         </DropdownMenuGroup>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }

import {
  User,
  LayoutDashboard,
  UserCircle,
  Heart,
  Megaphone,
  LogOut,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { Button } from "../../ui/button";

export default function ProfileDropdown() {
  return (
    <DropdownMenu>
      {/* Trigger Button */}
      <DropdownMenuTrigger>
        <Button
          variant="outline"
          size="icon"
          className="text-teal-700 transition-all border-teal-200 rounded-full shadow-sm outline-none bg-teal-50 hover:bg-teal-100 hover:border-teal-300 ring-0 focus-visible:ring-0"
        >
          <User className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>

      {/* Dropdown Content */}
      <DropdownMenuContent
        className="w-56 p-2 mt-2 border-gray-100 shadow-lg rounded-xl shadow-teal-900/10"
        align="end"
      >
        {/* Fix: DropdownMenuLabel এর বদলে সাধারণ div ব্যবহার করা হয়েছে */}
        <div className="p-2">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-bold leading-none text-gray-900">
              আমার একাউন্ট
            </p>
            <p className="mt-1 text-xs leading-none text-gray-500">
              user@example.com
            </p>
          </div>
        </div>

        <DropdownMenuSeparator className="bg-gray-100" />

        {/* মেইন মেনু আইটেমগুলো */}
        <DropdownMenuGroup className="my-1 space-y-1">
          <DropdownMenuItem className="cursor-pointer rounded-lg hover:bg-teal-50 focus:bg-teal-50 focus:text-teal-700 transition-colors py-2.5">
            <LayoutDashboard className="w-4 h-4 mr-3 text-gray-500" />
            <span className="font-medium text-gray-700">ড্যাশবোর্ড</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer rounded-lg hover:bg-teal-50 focus:bg-teal-50 focus:text-teal-700 transition-colors py-2.5">
            <UserCircle className="w-4 h-4 mr-3 text-gray-500" />
            <span className="font-medium text-gray-700">প্রোফাইল</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer rounded-lg hover:bg-teal-50 focus:bg-teal-50 focus:text-teal-700 transition-colors py-2.5">
            <Heart className="w-4 h-4 mr-3 text-gray-500" />
            <span className="font-medium text-gray-700">সেভ করা বাসা</span>
          </DropdownMenuItem>

          <DropdownMenuItem className="cursor-pointer rounded-lg hover:bg-teal-50 focus:bg-teal-50 focus:text-teal-700 transition-colors py-2.5">
            <Megaphone className="w-4 h-4 mr-3 text-gray-500" />
            <span className="font-medium text-gray-700">আমার বিজ্ঞাপন</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="bg-gray-100" />

        {/* লগআউট বাটন */}
        <DropdownMenuItem className="cursor-pointer rounded-lg text-red-600 focus:bg-red-50 focus:text-red-700 transition-colors py-2.5 mt-1">
          <LogOut className="w-4 h-4 mr-3" />
          <span className="font-bold">লগআউট</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
