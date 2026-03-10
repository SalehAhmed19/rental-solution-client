import React, { useState } from "react";
import {
  ShieldCheck,
  Eye,
  CheckCircle2,
  XCircle,
  User,
  ExternalLink,
  Search,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface PendingUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  nidFront: string;
  nidBack: string;
  appliedDate: string;
}

const initialPendingUsers: PendingUser[] = [
  {
    id: "1",
    name: "সালেহ আহমেদ মাহিন",
    email: "mahin@techx.com",
    phone: "017XXXXXXXX",
    nidFront:
      "https://images.unsplash.com/photo-1633113088483-66b746c039f1?q=80&w=2070",
    nidBack:
      "https://images.unsplash.com/photo-1633113088483-66b746c039f1?q=80&w=2070",
    appliedDate: "১০ মার্চ ২০২৬",
  },
  {
    id: "2",
    name: "জাহিদুল ইসলাম",
    email: "zahid@example.com",
    phone: "018XXXXXXXX",
    nidFront:
      "https://images.unsplash.com/photo-1633113088483-66b746c039f1?q=80&w=2070",
    nidBack:
      "https://images.unsplash.com/photo-1633113088483-66b746c039f1?q=80&w=2070",
    appliedDate: "০৯ মার্চ ২০২৬",
  },
  // আরও ডামি ডাটা যোগ করা যেতে পারে স্ক্রলিং টেস্ট করার জন্য
];

export default function AdminVerify() {
  const [selectedUser, setSelectedUser] = useState<PendingUser | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // সার্চ লজিক: নাম বা ইমেইল দিয়ে ফিল্টার
  const filteredUsers = initialPendingUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 font-heading">
      {/* 1. Header Section with Functional Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-2">
            <Clock className="w-3 h-3" /> রিভিউ পেন্ডিং
          </div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight uppercase">
            ইউজার <span className="text-teal-600">ভেরিফিকেশন</span>
          </h1>
          <p className="text-gray-500 font-medium font-heading">
            পেন্ডিং ইউজারদের এনআইডি কার্ড যাচাই করুন।
          </p>
        </div>
        <div className="relative w-full md:w-72 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-teal-600 transition-colors" />
          <Input
            placeholder="নাম বা ইমেইল দিয়ে খুঁজুন..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 h-14 rounded-2xl border-gray-100 bg-gray-50 focus:bg-white transition-all outline-none font-bold"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* 2. Left Side: Users List with Vertical Scroll */}
        <div className="lg:col-span-2 space-y-4 max-h-[700px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-teal-100 scrollbar-track-transparent">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div
                key={user.id}
                onClick={() => setSelectedUser(user)}
                className={`p-6 rounded-[2.5rem] border transition-all cursor-pointer flex items-center justify-between group active:scale-[0.98] ${
                  selectedUser?.id === user.id
                    ? "bg-teal-50 border-teal-200 shadow-lg shadow-teal-900/5"
                    : "bg-white border-gray-100 hover:border-teal-100"
                }`}
              >
                <div className="flex items-center gap-5">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
                      selectedUser?.id === user.id
                        ? "bg-teal-600 text-white"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-gray-900 text-lg">
                      {user.name}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium">
                      {user.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  <div className="hidden md:block text-right">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      আবেদন তারিখ
                    </p>
                    <p className="text-xs font-bold text-gray-700">
                      {user.appliedDate}
                    </p>
                  </div>
                  <div
                    className={`p-3 rounded-xl transition-colors ${
                      selectedUser?.id === user.id
                        ? "bg-teal-100 text-teal-600"
                        : "bg-gray-50 text-gray-400"
                    }`}
                  >
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white p-20 rounded-[3rem] text-center border border-gray-100">
              <Search className="w-12 h-12 text-gray-200 mx-auto mb-4" />
              <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">
                এই নামে কেউ পেন্ডিং নেই
              </p>
            </div>
          )}
        </div>

        {/* 3. Right Side: NID Preview (Sticky) */}
        <div className="lg:col-span-1 lg:sticky lg:top-24">
          {selectedUser ? (
            <div className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-xl space-y-8 animate-in slide-in-from-right-4 duration-500">
              <div className="space-y-1">
                <h2 className="text-xl font-black text-gray-900 uppercase tracking-tighter italic">
                  ডকুমেন্ট চেক
                </h2>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                  এনআইডি কার্ডের ছবি
                </p>
              </div>

              {/* Front & Back Images */}
              <div className="space-y-5">
                <div className="space-y-2">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3" /> সামনের অংশ
                  </p>
                  <div className="aspect-[16/10] bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 group relative shadow-inner">
                    <img
                      src={selectedUser.nidFront}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      alt="NID Front"
                    />
                    <a
                      href={selectedUser.nidFront}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute bottom-3 right-3 p-2 bg-black/60 text-white rounded-xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3" /> পেছনের অংশ
                  </p>
                  <div className="aspect-[16/10] bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 group relative shadow-inner">
                    <img
                      src={selectedUser.nidBack}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      alt="NID Back"
                    />
                    <a
                      href={selectedUser.nidBack}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute bottom-3 right-3 p-2 bg-black/60 text-white rounded-xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-2">
                <Button className="flex-1 bg-red-50 text-red-600 hover:bg-red-500 hover:text-white h-14 rounded-2xl font-black gap-2 transition-all active:scale-95 border-none">
                  <XCircle className="w-5 h-5" /> রিজেক্ট
                </Button>
                <Button className="flex-1 bg-teal-600 hover:bg-teal-700 text-white h-14 rounded-2xl font-black gap-2 transition-all shadow-lg shadow-teal-600/20 active:scale-95 border-none">
                  <CheckCircle2 className="w-5 h-5" /> এপ্রুভ
                </Button>
              </div>
            </div>
          ) : (
            <div className="bg-white border-2 border-dashed border-gray-100 h-[500px] rounded-[3.5rem] flex flex-col items-center justify-center text-center p-10 space-y-4 opacity-70">
              <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center text-gray-200">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <p className="text-gray-900 font-black uppercase tracking-widest text-xs italic">
                  ইউজার সিলেক্ট করুন
                </p>
                <p className="text-gray-400 text-xs font-medium leading-relaxed font-heading">
                  যাচাই করার জন্য বাম পাশের তালিকা থেকে একজন ইউজার বেছে নিন।
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
