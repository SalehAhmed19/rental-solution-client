import React from "react";
import {
  Megaphone,
  Plus,
  Eye,
  Edit2,
  Trash2,
  MapPin,
  BadgeCheck,
  ArrowUpRight,
  Clock,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// ডামি ডাটা (এপিআই থেকে আসবে)
const myAds = [
  {
    id: 1,
    title: "আধুনিক ৩ রুমের ফ্ল্যাট - উত্তরা",
    location: "সেক্টর ৪, উত্তরা, ঢাকা",
    price: "২৫,০০০",
    views: "১.২k",
    status: "active", // active, pending, rented
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
    date: "১০ মার্চ ২০২৬",
  },
  {
    id: 2,
    title: "লাক্সারি ডুপ্লেক্স হাউজ",
    location: "বনানী ডিওএইচএস, ঢাকা",
    price: "৯৫,০০০",
    views: "৮৫০",
    status: "pending",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop",
    date: "০৮ মার্চ ২০২৬",
  },
  {
    id: 3,
    title: "ধানমন্ডি লেক ভিউ অ্যাপার্টমেন্ট",
    location: "রোড ৫, ধানমন্ডি, ঢাকা",
    price: "৪৫,০০০",
    views: "২.১k",
    status: "rented",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop",
    date: "০১ ফেব্রুয়ারি ২০২৬",
  },
];

export default function MyAds() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-2">
            <Megaphone className="w-3 h-3" /> ম্যানেজমেন্ট
          </div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">
            আমার <span className="text-teal-600">বিজ্ঞাপন</span> সমূহ
          </h1>
          <p className="text-gray-500 font-medium font-heading">
            আপনার আপলোড করা বাসাগুলোর বর্তমান অবস্থা এখান থেকে নিয়ন্ত্রণ করুন।
          </p>
        </div>
        <Link to="/post-ad">
          <Button className="bg-[#051c1e] hover:bg-teal-700 h-14 rounded-2xl px-8 gap-2 font-black shadow-xl shadow-teal-900/20 transition-all active:scale-95 text-white">
            <Plus className="w-5 h-5" /> নতুন বিজ্ঞাপন
          </Button>
        </Link>
      </div>

      {/* Ads List */}
      <div className="space-y-4">
        {myAds.map((ad) => (
          <div
            key={ad.id}
            className="group bg-white p-4 pr-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-500 flex flex-col md:flex-row items-center gap-6"
          >
            {/* Property Image */}
            <div className="relative w-full md:w-48 h-32 rounded-[1.8rem] overflow-hidden">
              <img
                src={ad.image}
                alt={ad.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>

            {/* Content Info */}
            <div className="flex-1 space-y-2 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                <h3 className="text-xl font-black text-gray-900 group-hover:text-teal-600 transition-colors">
                  {ad.title}
                </h3>
                {ad.status === "active" && (
                  <span className="flex items-center gap-1 px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black uppercase rounded-full">
                    <BadgeCheck className="w-3 h-3" /> লাইভ
                  </span>
                )}
                {ad.status === "pending" && (
                  <span className="flex items-center gap-1 px-3 py-1 bg-amber-50 text-amber-600 text-[10px] font-black uppercase rounded-full">
                    <Clock className="w-3 h-3" /> পেন্ডিং
                  </span>
                )}
                {ad.status === "rented" && (
                  <span className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-500 text-[10px] font-black uppercase rounded-full">
                    <Home className="w-3 h-3" /> ভাড়া হয়েছে
                  </span>
                )}
              </div>
              <div className="flex items-center justify-center md:justify-start gap-1.5 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">{ad.location}</span>
              </div>
            </div>

            {/* Performance Stats */}
            <div className="flex items-center gap-8 px-8 border-x border-gray-50 hidden xl:flex">
              <div className="text-center">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                  মোট ভিউ
                </p>
                <div className="flex items-center gap-1 text-teal-600 font-black">
                  <Eye className="w-4 h-4" /> {ad.views}
                </div>
              </div>
              <div className="text-center font-heading">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                  মাসিক ভাড়া
                </p>
                <p className="text-lg font-black text-gray-900">৳{ad.price}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button className="p-4 bg-gray-50 hover:bg-teal-50 text-gray-400 hover:text-teal-600 rounded-2xl transition-all active:scale-90">
                <Edit2 className="w-5 h-5" />
              </button>
              <button className="p-4 bg-gray-50 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-2xl transition-all active:scale-90">
                <Trash2 className="w-5 h-5" />
              </button>
              <button className="p-4 bg-[#051c1e] text-white rounded-2xl hover:bg-teal-700 transition-all shadow-lg shadow-teal-900/10 active:scale-90">
                <ArrowUpRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Summary Card */}
      <div className="bg-[#051c1e] p-10 rounded-[3.5rem] text-white relative overflow-hidden group">
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -mb-32 -mr-32" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-black italic">
              আপনার প্রপার্টিগুলো কি আরও দ্রুত ভাড়া দিতে চান?
            </h3>
            <p className="text-gray-400 font-medium">
              বিজ্ঞাপন বুস্ট করে ৫ গুণ বেশি কাস্টমারের কাছে পৌঁছে যান।
            </p>
          </div>
          <Button className="bg-teal-500 hover:bg-teal-400 text-white h-14 rounded-2xl px-10 font-black shadow-xl shadow-teal-500/20 transition-all active:scale-95">
            বিজ্ঞাপন বুস্ট করুন
          </Button>
        </div>
      </div>
    </div>
  );
}
