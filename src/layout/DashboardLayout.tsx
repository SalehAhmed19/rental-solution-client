import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  UserCircle,
  Heart,
  Megaphone,
  Settings,
  LogOut,
  ShieldCheck,
  Home,
  Menu,
  X,
} from "lucide-react";
import { useAppSelector } from "@/redux/hooks";

export default function DashboardLayout() {
  const { user } = useAppSelector((state) => state.auth);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // রোল অনুযায়ী মেনু আইটেম ডিফাইন করা
  const menuItems = {
    tenant: [
      { name: "ড্যাশবোর্ড", icon: LayoutDashboard, path: "/dashboard" },
      { name: "সেভ করা বাসা", icon: Heart, path: "/dashboard/saved" },
      { name: "ভাড়ার ইতিহাস", icon: Home, path: "/dashboard/history" },
      { name: "প্রোফাইল", icon: UserCircle, path: "/dashboard/profile" },
    ],
    landlord: [
      { name: "ড্যাশবোর্ড", icon: LayoutDashboard, path: "/dashboard" },
      { name: "আমার বিজ্ঞাপন", icon: Megaphone, path: "/dashboard/my-ads" },
      { name: "নতুন বিজ্ঞাপন", icon: Home, path: "/post-ad" },
      { name: "প্রোফাইল", icon: UserCircle, path: "/dashboard/profile" },
    ],
    admin: [
      { name: "অ্যাডমিন প্যানেল", icon: ShieldCheck, path: "/dashboard/admin" },
      {
        name: "ইউজার ভেরিফিকেশন",
        icon: UserCircle,
        path: "/dashboard/admin/verify",
      },
      { name: "সব বিজ্ঞাপন", icon: Megaphone, path: "/dashboard/admin/ads" },
      { name: "সেটিংস", icon: Settings, path: "/dashboard/settings" },
    ],
  };

  const currentMenu =
    menuItems[user?.role as keyof typeof menuItems] || menuItems.tenant;

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Section */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-100 transition-transform duration-300 lg:translate-x-0 lg:static lg:inset-0
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex flex-col h-full p-6">
          {/* Brand Logo */}
          <div className="flex items-center gap-3 px-2 mb-10">
            <div className="bg-teal-600 p-2 rounded-xl">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-black text-gray-900 tracking-tight">
              নব ঠিকানা ড্যাশবোর্ড
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 space-y-2">
            {currentMenu.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`
                  flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold transition-all duration-200
                  ${
                    location.pathname === item.path
                      ? "bg-teal-50 text-teal-700 shadow-sm shadow-teal-100/50"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  }
                `}
              >
                <item.icon
                  className={`w-5 h-5 ${location.pathname === item.path ? "text-teal-600" : "text-gray-400"}`}
                />
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Sidebar Footer (Logout) */}
          <div className="pt-6 mt-6 border-t border-gray-100">
            <button className="flex items-center gap-4 w-full px-4 py-3.5 text-red-500 font-bold hover:bg-red-50 rounded-2xl transition-all">
              <LogOut className="w-5 h-5" />
              লগআউট
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Section */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header for Mobile & Desktop Context */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-6 lg:px-10 sticky top-0 z-30">
          <button
            className="p-2 lg:hidden text-gray-600"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-4 ml-auto">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-black text-gray-900">{user?.name}</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-teal-600">
                {user?.role === "tenant"
                  ? "ভাড়াটিয়া"
                  : user?.role === "landlord"
                    ? "বাড়িওয়ালা"
                    : "অ্যাডমিন"}
              </p>
            </div>
            <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold border-2 border-white shadow-sm">
              {user?.name?.charAt(0)}
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-6 lg:p-10 overflow-y-auto">
          <Outlet /> {/* এখানে সাব-পেজগুলো রেন্ডার হবে */}
        </div>
      </main>
    </div>
  );
}
