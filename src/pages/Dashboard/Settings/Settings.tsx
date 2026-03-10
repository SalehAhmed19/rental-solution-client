import React, { useState } from "react";
import {
  User,
  Lock,
  Bell,
  Shield,
  CreditCard,
  Globe,
  Moon,
  Trash2,
  ChevronRight,
  Laptop,
  Smartphone,
  Store,
  Building2,
} from "lucide-react";
import { useAppSelector } from "@/redux/hooks";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch"; // Shadcn UI Switch

export default function Settings() {
  const { user } = useAppSelector((state) => state.auth);
  const role = user?.role || "tenant";
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700 font-heading">
      {/* Header */}
      <div className="bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-black text-gray-900 tracking-tight uppercase">
            সেটিংস ও <span className="text-teal-600">প্রাইভেসি</span>
          </h1>
          <p className="text-gray-500 font-medium">
            আপনার অ্যাকাউন্ট এবং অ্যাপের অভিজ্ঞতা কাস্টমাইজ করুন।
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-2xl border border-gray-100">
          <span className="text-[10px] font-black uppercase text-gray-400">
            অ্যাকাউন্ট টাইপ:
          </span>
          <span className="text-xs font-black text-teal-600 uppercase tracking-widest">
            {role}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Tabs */}
        <div className="lg:col-span-1 space-y-2">
          {[
            { id: "general", label: "সাধারণ", icon: User },
            { id: "security", label: "নিরাপত্তা", icon: Shield },
            { id: "notifications", label: "নোটিফিকেশন", icon: Bell },
            // বাড়িওয়ালার জন্য এক্সট্রা সেটিংস
            ...(role === "landlord"
              ? [{ id: "business", label: "ব্যবসা", icon: Store }]
              : []),
            { id: "display", label: "ডিসপ্লে", icon: Moon },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-6 py-4 rounded-2xl transition-all font-bold text-sm ${
                activeTab === tab.id
                  ? "bg-[#051c1e] text-white shadow-xl shadow-teal-900/20 translate-x-2"
                  : "bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Settings Content Area */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white p-8 md:p-10 rounded-[3rem] border border-gray-100 shadow-sm min-h-[500px]">
            {/* 1. General Settings */}
            {activeTab === "general" && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <h3 className="text-xl font-black text-gray-900 uppercase italic tracking-tighter">
                  প্রোফাইল ইনফরমেশন
                </h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-gray-400 ml-2">
                        পাবলিক নাম
                      </label>
                      <input
                        type="text"
                        defaultValue={user?.name}
                        className="w-full h-14 bg-gray-50 rounded-2xl px-6 outline-none font-bold focus:ring-2 focus:ring-teal-500/20 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-gray-400 ml-2">
                        ইমেইল অ্যাড্রেস
                      </label>
                      <input
                        type="email"
                        defaultValue={user?.email}
                        className="w-full h-14 bg-gray-50 rounded-2xl px-6 outline-none font-bold opacity-60 cursor-not-allowed"
                        disabled
                      />
                    </div>
                  </div>
                  <Button className="bg-teal-600 hover:bg-teal-700 h-12 rounded-xl px-8 font-black shadow-lg shadow-teal-600/20">
                    পরিবর্তন সেভ করুন
                  </Button>
                </div>
              </div>
            )}

            {/* 2. Security Settings */}
            {activeTab === "security" && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <h3 className="text-xl font-black text-gray-900 uppercase italic tracking-tighter">
                  অ্যাকাউন্ট সিকিউরিটি
                </h3>
                <div className="space-y-4">
                  <div className="p-6 rounded-3xl bg-gray-50 flex items-center justify-between group hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-teal-100">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white rounded-xl text-teal-600 shadow-sm">
                        <Lock className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">
                          পাসওয়ার্ড পরিবর্তন
                        </p>
                        <p className="text-xs text-gray-400 font-medium">
                          সর্বশেষ পরিবর্তন: ২ মাস আগে
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-300 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="p-6 rounded-3xl bg-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white rounded-xl text-teal-600 shadow-sm">
                        <Smartphone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">
                          টু-ফ্যাক্টর অথেন্টিকেশন
                        </p>
                        <p className="text-xs text-gray-400 font-medium">
                          অ্যাকাউন্ট আরও সুরক্ষিত রাখুন
                        </p>
                      </div>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>
            )}

            {/* 3. Landlord Specific Business Settings */}
            {activeTab === "business" && role === "landlord" && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <h3 className="text-xl font-black text-gray-900 uppercase italic tracking-tighter">
                  ব্যবসার তথ্য
                </h3>
                <div className="space-y-6">
                  <div className="p-6 rounded-3xl border-2 border-dashed border-gray-100 flex flex-col items-center justify-center text-center space-y-3">
                    <Building2 className="w-10 h-10 text-gray-200" />
                    <p className="text-sm font-bold text-gray-500">
                      আপনার কি একাধিক প্রোপার্টি আছে?
                    </p>
                    <Button
                      variant="outline"
                      className="rounded-xl font-black text-xs uppercase tracking-widest"
                    >
                      কোম্পানি প্রোফাইল তৈরি করুন
                    </Button>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                      <span className="text-sm font-bold text-gray-700">
                        অটোমেটিক ইনভয়েস জেনারেট করুন
                      </span>
                      <Switch />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. Display Settings */}
            {activeTab === "display" && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <h3 className="text-xl font-black text-gray-900 uppercase italic tracking-tighter">
                  অ্যাপ থিম ও ডিসপ্লে
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 rounded-3xl border-2 border-teal-600 bg-teal-50/50 space-y-4 cursor-pointer">
                    <div className="w-full h-20 bg-white rounded-xl shadow-sm border border-teal-100"></div>
                    <p className="text-center font-black text-xs text-teal-600 uppercase">
                      লাইট মোড
                    </p>
                  </div>
                  <div className="p-6 rounded-3xl border-2 border-gray-100 space-y-4 cursor-pointer hover:border-gray-300">
                    <div className="w-full h-20 bg-gray-900 rounded-xl shadow-sm"></div>
                    <p className="text-center font-black text-xs text-gray-400 uppercase">
                      ডার্ক মোড
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Danger Zone */}
            <div className="mt-16 pt-8 border-t border-gray-50">
              <h4 className="text-[10px] font-black text-red-400 uppercase tracking-[0.2em] mb-4">
                ডেঞ্জার জোন
              </h4>
              <button className="flex items-center gap-2 text-red-500 font-bold hover:bg-red-50 px-4 py-2 rounded-xl transition-colors">
                <Trash2 className="w-4 h-4" /> অ্যাকাউন্ট ডিলিট করুন
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
