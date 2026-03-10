import React from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Camera,
  ShieldCheck,
  Key,
  LogOut,
  Edit3,
  ExternalLink,
  BadgeCheck,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";
import { useAppSelector } from "@/redux/hooks";
import { Button } from "@/components/ui/button";

export default function UserProfile() {
  const { user } = useAppSelector((state) => state.auth);
  const role = user?.role || "tenant";

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      {/* 1. Header Card - Super Classy Glassmorphism */}
      <div className="relative bg-white rounded-[3rem] border border-gray-100 p-8 shadow-sm overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl -mr-32 -mt-32 transition-transform group-hover:scale-110 duration-700"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          {/* Avatar Section */}
          <div className="relative">
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-[2.5rem] border-4 border-teal-50 p-1.5 shadow-xl transition-transform hover:rotate-3 duration-500">
              <img
                src={
                  user?.avatar ||
                  `https://ui-avatars.com/api/?name=${user?.name}&background=0d9488&color=fff&bold=true`
                }
                alt="Profile"
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </div>
            <button className="absolute -bottom-2 -right-2 p-3 bg-[#051c1e] text-white rounded-2xl shadow-xl hover:bg-teal-600 transition-all active:scale-90">
              <Camera className="w-5 h-5" />
            </button>
          </div>

          {/* User Basic Info */}
          <div className="flex-1 text-center md:text-left space-y-2">
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <h1 className="text-4xl font-black text-gray-900 tracking-tighter flex items-center justify-center md:justify-start gap-2">
                {user?.name}
                {user?.isVerified && (
                  <BadgeCheck className="w-7 h-7 text-teal-500 fill-teal-50 shadow-sm" />
                )}
              </h1>
              <span className="px-4 py-1.5 bg-[#051c1e] text-white text-[10px] font-black uppercase rounded-full tracking-widest shadow-lg shadow-teal-900/20">
                {role === "tenant"
                  ? "ভাড়াটিয়া"
                  : role === "landlord"
                    ? "বাড়িওয়ালা"
                    : "অ্যাডমিন"}
              </span>
            </div>
            <p className="text-gray-400 font-medium flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-4 h-4" /> {user?.email}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Button className="bg-teal-600 hover:bg-teal-700 h-14 rounded-2xl px-8 gap-2 font-black shadow-xl shadow-teal-600/20 transition-all active:scale-95">
              <Edit3 className="w-5 h-5" /> প্রোফাইল এডিট
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 2. Personal Information Grid */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-10">
            <h3 className="text-xl font-black text-gray-900 border-l-4 border-teal-600 pl-4 uppercase tracking-tight">
              যোগাযোগের তথ্য
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                { label: "পূর্ণ নাম", value: user?.name, icon: User },
                { label: "ইমেইল অ্যাড্রেস", value: user?.email, icon: Mail },
                { label: "ফোন নম্বর", value: "+৮৮০ ১৭XXXXXXXX", icon: Phone },
                { label: "বর্তমান শহর", value: "ঢাকা, বাংলাদেশ", icon: MapPin },
              ].map((item, i) => (
                <div key={i} className="group cursor-default">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 mb-2 transition-colors group-hover:text-teal-600">
                    <item.icon className="w-3 h-3" /> {item.label}
                  </p>
                  <p className="text-lg font-bold text-gray-800 bg-gray-50 p-4 rounded-2xl border border-transparent group-hover:border-teal-100 group-hover:bg-white transition-all">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Security & Verification Side */}
        <div className="space-y-8">
          {/* Security Card */}
          <div className="bg-[#051c1e] p-8 rounded-[3rem] text-white shadow-2xl shadow-teal-900/30">
            <h3 className="text-xl font-black mb-6">নিরাপত্তা সেটিং</h3>
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-5 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/5 group">
                <div className="flex items-center gap-3 text-sm font-bold tracking-tight">
                  <Key className="w-5 h-5 text-teal-400" /> পাসওয়ার্ড পরিবর্তন
                </div>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="w-full flex items-center justify-center gap-3 p-5 bg-red-500/10 text-red-400 rounded-2xl hover:bg-red-500 hover:text-white transition-all font-black border border-red-500/20">
                <LogOut className="w-5 h-5" /> লগ আউট
              </button>
            </div>
          </div>

          {/* Verification Status Card */}
          <div
            className={`p-8 rounded-[3rem] border-2 transition-all duration-500 ${
              user?.isVerified
                ? "bg-green-50/50 border-green-100"
                : "bg-amber-50/50 border-amber-100 animate-pulse"
            }`}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                  user?.isVerified
                    ? "bg-green-500 text-white shadow-lg shadow-green-200"
                    : "bg-amber-500 text-white shadow-lg shadow-amber-200"
                }`}
              >
                {user?.isVerified ? (
                  <ShieldCheck className="w-8 h-8" />
                ) : (
                  <ShieldAlert className="w-8 h-8" />
                )}
              </div>
              <div>
                <h4
                  className={`text-xl font-black ${user?.isVerified ? "text-green-700" : "text-amber-700"}`}
                >
                  {user?.isVerified ? "ভেরিফাইড প্রোফাইল" : "অপেক্ষা করুন"}
                </h4>
                <p className="text-xs font-bold text-gray-500 mt-2 leading-relaxed">
                  {user?.isVerified
                    ? "আপনার অ্যাকাউন্টটি সম্পূর্ণ ভেরিফাইড। আপনি এখন সব ফিচার ব্যবহার করতে পারবেন।"
                    : "আপনার এনআইডি কার্ডটি বর্তমানে অ্যাডমিন প্যানেলে ভেরিফিকেশনের জন্য অপেক্ষায় আছে।"}
                </p>
              </div>
              {!user?.isVerified && (
                <Button
                  variant="outline"
                  className="w-full rounded-xl border-amber-200 text-amber-700 hover:bg-amber-100 font-black h-12"
                >
                  বিস্তারিত জানুন
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Bottom Information/Guide Message */}
      {!user?.isVerified && (
        <div className="bg-white p-8 md:p-10 rounded-[3rem] border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-amber-500 transition-all group-hover:w-4"></div>
          <div className="p-5 bg-amber-50 rounded-[2rem] text-amber-600">
            <ShieldAlert className="w-10 h-10" />
          </div>
          <div className="flex-1 space-y-2">
            <h3 className="text-xl font-black text-gray-900 uppercase italic tracking-tighter">
              আপনার এনআইডি ভেরিফিকেশন কেন প্রয়োজন?
            </h3>
            <p className="text-gray-500 font-medium leading-relaxed max-w-3xl">
              আবাস-এ প্রতিটি ইউজারকে ভেরিফাইড হতে হয় যাতে বাড়িওয়ালা এবং ভাড়াটিয়া
              উভয় পক্ষই নিরাপদ অনুভব করে। আপনার দেওয়া এনআইডি কার্ডটি আমাদের
              অ্যাডমিন ম্যানুয়ালি চেক করছে। সাধারণত{" "}
              <span className="text-teal-600 font-bold underline">
                ১২-২৪ ঘণ্টার
              </span>{" "}
              মধ্যে ভেরিফিকেশন সম্পন্ন হয়ে যায়। ধৈর্য ধরার জন্য ধন্যবাদ!
            </p>
          </div>
          <Button
            variant="link"
            className="text-amber-600 font-black gap-1 p-0 hover:no-underline hover:translate-x-1 transition-transform"
          >
            হেল্প সেন্টারে কথা বলুন <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
