import React from "react";
import {
  TrendingUp,
  Users,
  Home,
  ShieldCheck,
  Heart,
  MessageSquare,
  Eye,
  Plus,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useAppSelector } from "@/redux/hooks";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// ডামি ডাটা গ্রাফের জন্য
const data = [
  { name: "Sat", views: 400 },
  { name: "Sun", views: 700 },
  { name: "Mon", views: 500 },
  { name: "Tue", views: 900 },
  { name: "Wed", views: 1100 },
  { name: "Thu", views: 800 },
  { name: "Fri", views: 1300 },
];

export default function DashboardHome() {
  const { user } = useAppSelector((state) => state.auth);
  const role = user?.role || "tenant";

  // রোল অনুযায়ী স্ট্যাটাস কার্ড কনফিগারেশন
  const stats = {
    tenant: [
      {
        label: "সেভ করা বাসা",
        value: "১২",
        icon: Heart,
        color: "text-rose-600",
        bg: "bg-rose-50",
      },
      {
        label: "যোগাযোগ করেছি",
        value: "০৫",
        icon: MessageSquare,
        color: "text-blue-600",
        bg: "bg-blue-50",
      },
      {
        label: "ভেরিফিকেশন",
        value: user?.isVerified ? "সম্পূর্ণ" : "পেন্ডিং",
        icon: ShieldCheck,
        color: "text-teal-600",
        bg: "bg-teal-50",
      },
    ],
    landlord: [
      {
        label: "মোট বিজ্ঞাপন",
        value: "০৮",
        icon: Home,
        color: "text-teal-600",
        bg: "bg-teal-50",
      },
      {
        label: "মোট ভিউ",
        value: "১.২k",
        icon: Eye,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
      },
      {
        label: "নতুন নক",
        value: "০৪",
        icon: MessageSquare,
        color: "text-amber-600",
        bg: "bg-amber-50",
      },
    ],
    admin: [
      {
        label: "পেন্ডিং ভেরিফিকেশন",
        value: "২৫",
        icon: ShieldCheck,
        color: "text-red-600",
        bg: "bg-red-50",
      },
      {
        label: "মোট ইউজার",
        value: "৮৫০",
        icon: Users,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
      },
      {
        label: "মোট প্রপার্টি",
        value: "১২০",
        icon: Home,
        color: "text-teal-600",
        bg: "bg-teal-50",
      },
    ],
  };

  const currentStats = stats[role as keyof typeof stats];

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">
            শুভ অপরাহ্ন,{" "}
            <span className="text-teal-600">{user?.name?.split(" ")[0]}!</span>
          </h1>
          <p className="text-gray-500 font-medium mt-1">
            আপনার আজকের নব ঠিকানা ড্যাশবোর্ড সামারি এখানে।
          </p>
        </div>
        {role === "landlord" && (
          <Link to="/post-ad">
            <Button className="bg-teal-600 hover:bg-teal-700 h-12 rounded-2xl px-6 gap-2 font-bold shadow-lg shadow-teal-600/20">
              <Plus className="w-5 h-5" /> নতুন বিজ্ঞাপন দিন
            </Button>
          </Link>
        )}
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentStats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <div
                className={`p-4 rounded-2xl ${stat.bg} ${stat.color} transition-transform group-hover:scale-110`}
              >
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-full text-[10px] font-bold">
                <TrendingUp className="w-3 h-3" /> +১২%
              </div>
            </div>
            <div className="mt-5">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                {stat.label}
              </p>
              <h3 className="text-3xl font-black text-gray-900 mt-1">
                {stat.value}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Chart & Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Graph (Large) */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-black text-gray-900">
              অ্যাক্টিভিটি অ্যানালিটিক্স
            </h3>
            <select className="bg-gray-50 border-none text-xs font-bold rounded-xl px-3 py-2 outline-none">
              <option>এই সপ্তাহ</option>
              <option>এই মাস</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0d9488" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#0d9488" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f0f0f0"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fontWeight: 600, fill: "#94a3b8" }}
                  dy={10}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "16px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                  }}
                  itemStyle={{ fontWeight: 800, color: "#0d9488" }}
                />
                <Area
                  type="monotone"
                  dataKey="views"
                  stroke="#0d9488"
                  strokeWidth={4}
                  fillOpacity={1}
                  fill="url(#colorViews)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Side Activity/Quick Actions */}
        {/* <div className="bg-[#051c1e] p-8 rounded-[2.5rem] text-white shadow-xl shadow-teal-900/20 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-black mb-4 italic text-teal-400">
              Pro Tip
            </h3>
            <p className="text-gray-300 font-medium leading-relaxed">
              আপনার প্রোফাইল ১০০% ভেরিফাই করলে বাড়িওয়ালারা আপনার সাথে দ্রুত
              যোগাযোগ করতে আগ্রহী হয়।
            </p>
          </div>

          <div className="space-y-4 mt-10">
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
              <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400">
                  এনআইডি স্ট্যাটাস
                </p>
                <p className="text-sm font-black">
                  {user?.isVerified ? "ভেরিফাইড" : "পেন্ডিং"}
                </p>
              </div>
            </div>
            <Button className="w-full bg-white text-black hover:bg-gray-100 h-14 rounded-2xl font-black tracking-tight">
              বিস্তারিত দেখুন
            </Button>
          </div>
        </div> */}

        {/* Right Side Activity/Quick Actions */}
        <div className="bg-[#051c1e] p-8 rounded-[2.5rem] text-white shadow-xl shadow-teal-900/20 flex flex-col justify-between overflow-hidden relative group">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-teal-500/20"></div>

          <div>
            <h3 className="text-xl font-black mb-4 italic text-teal-400 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 not-italic" /> Pro Tip
            </h3>

            {/* রোল অনুযায়ী ভিন্ন ভিন্ন মেসেজ */}
            <div className="animate-in slide-in-from-bottom-2 duration-500">
              {role === "tenant" && (
                <p className="text-gray-300 font-medium leading-relaxed">
                  আপনার প্রোফাইল{" "}
                  <span className="text-white font-bold">১০০% ভেরিফাই</span>{" "}
                  করলে বাড়িওয়ালারা আপনার সাথে দ্রুত যোগাযোগ করতে এবং বাসা ভাড়া
                  দিতে নিরাপদ বোধ করেন।
                </p>
              )}

              {role === "landlord" && (
                <p className="text-gray-300 font-medium leading-relaxed">
                  আপনার প্রপার্টির বিজ্ঞাপনে{" "}
                  <span className="text-white font-bold">উচ্চমানের ছবি</span>{" "}
                  এবং সঠিক লোকেশন ব্যবহার করলে ভিউ এবং কাস্টমার পাওয়ার সম্ভাবনা
                  ৩ গুণ বেড়ে যায়!
                </p>
              )}

              {role === "admin" && (
                <p className="text-gray-300 font-medium leading-relaxed">
                  সিস্টেমে{" "}
                  <span className="text-white font-bold">
                    পেন্ডিং ভেরিফিকেশন
                  </span>{" "}
                  দ্রুত সম্পন্ন করুন। এটি ইউজারদের বিশ্বাসযোগ্যতা এবং অ্যাপের
                  জনপ্রিয়তা বাড়াতে সাহায্য করে।
                </p>
              )}
            </div>
          </div>

          {/* <div className="space-y-4 mt-10">
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                  এনআইডি স্ট্যাটাস
                </p>
                <p className="text-sm font-black flex items-center gap-2">
                  {user?.isVerified ? (
                    <>
                      ভেরিফাইড{" "}
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    </>
                  ) : (
                    <>
                      পেন্ডিং{" "}
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse"></span>
                    </>
                  )}
                </p>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full bg-white text-black hover:bg-gray-100 hover:text-black h-14 rounded-2xl font-black tracking-tight border-none transition-all active:scale-[0.98]"
            >
              {role === "landlord" ? "বিজ্ঞাপন বুস্ট করুন" : "বিস্তারিত দেখুন"}
            </Button>
          </div> */}
          <div className="space-y-4 mt-10">
            <div
              className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-500 backdrop-blur-sm ${
                user?.isVerified
                  ? "bg-green-500/10 border-green-500/20"
                  : "bg-amber-500/10 border-amber-500/20"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  user?.isVerified ? "bg-green-500/20" : "bg-amber-500/20"
                }`}
              >
                <ShieldCheck
                  className={`w-5 h-5 ${
                    user?.isVerified ? "text-green-400" : "text-amber-400"
                  }`}
                />
              </div>

              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  এনআইডি স্ট্যাটাস
                </p>
                <p
                  className={`text-sm font-black flex items-center gap-2 ${
                    user?.isVerified ? "text-green-400" : "text-amber-400"
                  }`}
                >
                  {user?.isVerified ? (
                    <>
                      ভেরিফাইড{" "}
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                    </>
                  ) : (
                    <>
                      পেন্ডিং{" "}
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(245,158,11,0.6)]"></span>
                    </>
                  )}
                </p>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full bg-white text-black hover:bg-gray-100 hover:text-black h-14 rounded-2xl font-black tracking-tight border-none transition-all active:scale-[0.98] shadow-lg shadow-black/20"
            >
              {role === "landlord" ? "বিজ্ঞাপন বুস্ট করুন" : "বিস্তারিত দেখুন"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
