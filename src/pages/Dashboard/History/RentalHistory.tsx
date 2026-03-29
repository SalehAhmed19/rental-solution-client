import React from "react";
import {
  History,
  Calendar,
  MapPin,
  ReceiptText,
  CheckCircle2,
  Clock,
  ChevronRight,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ডামি ডাটা (এপিআই থেকে আসবে)
const rentalHistory = [
  {
    id: 1,
    homeTitle: "মিরপুর ২ - গ্রিন ভিউ অ্যাপার্টমেন্ট",
    location: "ব্লক সি, মিরপুর ২, ঢাকা",
    period: "জুন ২০২৫ - বর্তমান",
    amount: "১৮,৫০০",
    status: "active",
    invoiceId: "INV-2025-001",
  },
  {
    id: 2,
    homeTitle: "উত্তরা ৩ নম্বর সেক্টর ফ্ল্যাট",
    location: "সেক্টর ৩, উত্তরা, ঢাকা",
    period: "জানুয়ারি ২০২৪ - মে ২০২৫",
    amount: "২২,০০০",
    status: "completed",
    invoiceId: "INV-2024-045",
  },
  {
    id: 3,
    homeTitle: "বনানী স্টুডিও অ্যাপার্টমেন্ট",
    location: "রোড ৪, বনানী, ঢাকা",
    period: "আগস্ট ২০২৩ - ডিসেম্বর ২০২৩",
    amount: "৩৫,০০০",
    status: "completed",
    invoiceId: "INV-2023-089",
  },
];

export default function RentalHistory() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-[#051c1e] p-8 md:p-10 rounded-[3rem] text-white shadow-xl shadow-teal-900/10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-2">
            <History className="w-3 h-3" /> রেকর্ড বুক
          </div>
          <h1 className="text-3xl font-black tracking-tight">
            আপনার <span className="text-teal-400">ভাড়ার</span> ইতিহাস
          </h1>
          <p className="text-gray-400 font-medium">
            আপনার আগের এবং বর্তমান সব বাসার ভাড়ার হিসাব এখানে রয়েছে।
          </p>
        </div>
        <Button className="bg-white text-black hover:bg-teal-50 h-14 rounded-2xl px-8 font-black flex items-center gap-2 transition-all active:scale-95">
          <Download className="w-5 h-5" /> রিপোর্ট ডাউনলোড
        </Button>
      </div>

      {/* History List */}
      <div className="space-y-4">
        {rentalHistory.map((item) => (
          <div
            key={item.id}
            className="group bg-white p-6 md:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            {/* Left: Home Info */}
            <div className="flex items-start gap-6 w-full md:w-auto">
              <div
                className={`p-5 rounded-[1.5rem] flex items-center justify-center transition-colors ${
                  item.status === "active"
                    ? "bg-teal-50 text-teal-600"
                    : "bg-gray-50 text-gray-400"
                }`}
              >
                <ReceiptText className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-black text-gray-900 group-hover:text-teal-600 transition-colors">
                    {item.homeTitle}
                  </h3>
                  {item.status === "active" && (
                    <span className="px-2 py-0.5 bg-green-100 text-green-600 text-[10px] font-black uppercase rounded-full animate-pulse">
                      বর্তমান
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1.5 text-gray-400">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="text-sm font-medium">{item.location}</span>
                </div>
              </div>
            </div>

            {/* Middle: Duration & Amount */}
            <div className="grid grid-cols-2 gap-8 md:gap-16 w-full md:w-auto px-4 py-4 md:py-0 border-y md:border-y-0 md:border-x border-gray-50">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> সময়কাল
                </p>
                <p className="text-sm font-bold text-gray-700">{item.period}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1">
                  ভাড়া
                </p>
                <p className="text-lg font-black text-teal-700">
                  ৳ {item.amount}
                </p>
              </div>
            </div>

            {/* Right: Status & Actions */}
            <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
              <div className="text-right">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                  স্ট্যাটাস
                </p>
                {item.status === "active" ? (
                  <div className="flex items-center gap-1 text-green-600 font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4" /> সচল
                  </div>
                ) : (
                  <div className="flex items-center gap-1 text-gray-400 font-bold text-sm">
                    <Clock className="w-4 h-4" /> শেষ হয়েছে
                  </div>
                )}
              </div>
              <button className="p-4 bg-gray-50 hover:bg-teal-600 hover:text-white rounded-2xl text-gray-400 transition-all group/btn">
                <ChevronRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Info Card */}
      <div className="bg-teal-50/50 border border-teal-100 p-6 rounded-[2rem] flex flex-col md:flex-row items-center gap-4 text-center md:text-left justify-center">
        <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
          <ReceiptText className="w-6 h-6" />
        </div>
        <p className="text-sm font-bold text-teal-900 max-w-md">
          আপনার কোনো পেমেন্ট বা ভাড়ার রসিদ নিয়ে সমস্যা থাকলে সরাসরি সাপোর্ট
          সেন্টারে যোগাযোগ করুন।
        </p>
        <button className="text-teal-600 font-black text-sm underline md:ml-auto">
          সাপোর্ট টিকেট খুলুন
        </button>
      </div>
    </div>
  );
}
