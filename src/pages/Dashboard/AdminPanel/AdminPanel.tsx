import React from "react";
import {
  Users,
  Home,
  ShieldCheck,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  UserPlus,
  CheckCircle,
  Clock,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useAppSelector } from "@/redux/hooks";

// ডামি ডাটা: ইউজার গ্রোথ
const chartData = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 600 },
  { name: "Mar", users: 850 }, // আপনার বর্তমান ইউজার ৮৫০
];

export default function AdminPanel() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* 1. Admin Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-[#051c1e] p-8 md:p-10 rounded-[3rem] text-white shadow-2xl shadow-teal-900/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        <div className="relative z-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-2">
            <ShieldCheck className="w-3 h-3" /> সিস্টেম অ্যাডমিন
          </div>
          <h1 className="text-3xl font-black tracking-tight">
            স্বাগতম, <span className="text-teal-400">{user?.name}!</span>
          </h1>
          <p className="text-gray-400 font-medium">
            আজকের প্ল্যাটফর্ম স্ট্যাটাস এবং ইউজার অ্যাক্টিভিটি চেক করুন।
          </p>
        </div>
        <div className="flex gap-4 relative z-10">
          <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center min-w-[100px]">
            <p className="text-[10px] font-black text-teal-400 uppercase">
              সার্ভার স্ট্যাটাস
            </p>
            <p className="text-sm font-bold flex items-center justify-center gap-2 mt-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>{" "}
              সচল
            </p>
          </div>
        </div>
      </div>

      {/* 2. Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            label: "মোট ইউজার",
            value: "৮৫০",
            icon: Users,
            color: "text-blue-600",
            bg: "bg-blue-50",
            trend: "+১২%",
          },
          {
            label: "মোট প্রপার্টি",
            value: "১২০",
            icon: Home,
            color: "text-teal-600",
            bg: "bg-teal-50",
            trend: "+৮%",
          },
          {
            label: "পেন্ডিং ভেরিফিকেশন",
            value: "২৫",
            icon: Clock,
            color: "text-amber-600",
            bg: "bg-amber-50",
            trend: "-৫%",
          },
          {
            label: "সফল ডিল",
            value: "৪৫",
            icon: CheckCircle,
            color: "text-green-600",
            bg: "bg-green-50",
            trend: "+১৫%",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between">
              <div
                className={`p-4 rounded-2xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}
              >
                <stat.icon className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-black text-green-500 bg-green-50 px-2 py-1 rounded-full">
                {stat.trend}
              </span>
            </div>
            <div className="mt-5">
              <p className="text-xs font-black text-gray-400 uppercase tracking-widest">
                {stat.label}
              </p>
              <h3 className="text-3xl font-black text-gray-900 mt-1">
                {stat.value}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Analytics & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Growth Chart */}
        <div className="lg:col-span-2 bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic">
              ইউজার রেজিস্ট্রেশন গ্রোথ
            </h3>
            <Activity className="w-5 h-5 text-gray-300" />
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f0f0f0"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fontWeight: 700, fill: "#94a3b8" }}
                />
                <YAxis hide />
                <Tooltip
                  cursor={{ fill: "#f8fafc" }}
                  contentStyle={{
                    borderRadius: "16px",
                    border: "none",
                    boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                  }}
                />
                <Bar dataKey="users" radius={[10, 10, 10, 10]} barSize={40}>
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index === 2 ? "#0d9488" : "#e2e8f0"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent System Activity */}
        <div className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm">
          <h3 className="text-xl font-black text-gray-900 mb-8 uppercase tracking-tighter italic">
            রিসেন্ট অ্যাক্টিভিটি
          </h3>
          <div className="space-y-6">
            {[
              {
                text: "নতুন ইউজার রেজিস্ট্রেশন",
                time: "২ মিনিট আগে",
                icon: UserPlus,
                bg: "bg-blue-50",
                color: "text-blue-600",
              },
              {
                text: "বাসার বিজ্ঞাপন আপলোড",
                time: "১৫ মিনিট আগে",
                icon: Home,
                bg: "bg-teal-50",
                color: "text-teal-600",
              },
              {
                text: "NID ভেরিফিকেশন রিকোয়েস্ট",
                time: "১ ঘণ্টা আগে",
                icon: ShieldCheck,
                bg: "bg-amber-50",
                color: "text-amber-600",
              },
            ].map((act, i) => (
              <div
                key={i}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div
                  className={`p-3 rounded-xl ${act.bg} ${act.color} group-hover:scale-110 transition-transform`}
                >
                  <act.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-800 line-clamp-1">
                    {act.text}
                  </p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase">
                    {act.time}
                  </p>
                </div>
                <ArrowUpRight className="ml-auto w-4 h-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
            <button className="w-full py-4 mt-4 text-xs font-black uppercase tracking-widest text-teal-600 border border-teal-100 rounded-2xl hover:bg-teal-50 transition-colors">
              সব দেখুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
