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
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import type { Property } from "../../../assets/data";
import { useGetMyPropertiesQuery } from "../../../redux/slices/propertyApi";
// আপনার ইন্টারফেস

export default function MyAds() {
  // ১. ডাইনামিক ডাটা ফেচিং
  const {
    data: response,
    isLoading,
    isError,
  } = useGetMyPropertiesQuery(undefined);
  const myProperties = response?.data || [];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 font-heading">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-2">
            <Megaphone className="w-3 h-3" /> ম্যানেজমেন্ট
          </div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">
            আমার <span className="text-teal-600">বিজ্ঞাপন</span> সমূহ
          </h1>
          <p className="text-gray-500 font-medium">
            আপনার আপলোড করা বাসাগুলোর বর্তমান অবস্থা এখান থেকে নিয়ন্ত্রণ করুন।
          </p>
        </div>
        <Link to="/post-ad">
          <Button className="bg-[#051c1e] hover:bg-teal-700 h-14 rounded-2xl px-8 gap-2 font-black shadow-xl shadow-teal-900/20 text-white transition-all active:scale-95">
            <Plus className="w-5 h-5" /> নতুন বিজ্ঞাপন
          </Button>
        </Link>
      </div>

      {/* ২. লোর্ডিং এবং এরর হ্যান্ডলিং */}
      {isLoading && (
        <div className="py-20 flex flex-col items-center justify-center gap-4 text-teal-600">
          <Loader2 className="w-10 h-10 animate-spin" />
          <p className="font-black uppercase text-xs tracking-widest">
            বিজ্ঞাপন লোড হচ্ছে...
          </p>
        </div>
      )}

      {isError && (
        <div className="py-20 text-center bg-red-50 rounded-[3rem] border border-red-100">
          <p className="text-red-500 font-bold uppercase text-xs">
            ডাটা লোড করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।
          </p>
        </div>
      )}

      {/* Ads List */}
      <div className="space-y-4">
        {!isLoading && myProperties.length > 0
          ? myProperties.map((ad: Property) => (
              <div
                key={ad._id}
                className="group bg-white p-4 pr-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-500 flex flex-col md:flex-row items-center gap-6"
              >
                {/* Property Image (Dynamic URL) */}
                <div className="relative w-full md:w-48 h-32 rounded-[1.8rem] overflow-hidden">
                  <img
                    src={ad.images[0]}
                    alt={ad.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Content Info */}
                <div className="flex-1 space-y-2 text-center md:text-left">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                    <h3 className="text-xl font-black text-gray-900 group-hover:text-teal-600 transition-colors line-clamp-1">
                      {ad.title}
                    </h3>

                    {/* Dynamic Status Badges */}
                    {!ad.isApproved ? (
                      <span className="flex items-center gap-1 px-3 py-1 bg-amber-50 text-amber-600 text-[10px] font-black uppercase rounded-full animate-pulse">
                        <Clock className="w-3 h-3" /> পেন্ডিং রিভিও
                      </span>
                    ) : ad.status === "available" ? (
                      <span className="flex items-center gap-1 px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black uppercase rounded-full">
                        <BadgeCheck className="w-3 h-3" /> লাইভ
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-500 text-[10px] font-black uppercase rounded-full">
                        <Home className="w-3 h-3" /> ভাড়া হয়েছে
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-1.5 text-gray-400">
                    <MapPin className="w-4 h-4 text-teal-600" />
                    <span className="text-sm font-medium">
                      {ad.address.area}
                    </span>
                  </div>
                </div>

                {/* Stats & Price */}
                <div className="flex items-center gap-8 px-8 border-x border-gray-50 hidden xl:flex">
                  <div className="text-center">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                      ভিউ
                    </p>
                    <div className="flex items-center gap-1 text-teal-600 font-black italic">
                      <Eye className="w-4 h-4" /> ০
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                      মাসিক ভাড়া
                    </p>
                    <p className="text-lg font-black text-gray-900">
                      ৳{ad.price.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <button className="p-4 bg-gray-50 hover:bg-teal-50 text-gray-400 hover:text-teal-600 rounded-2xl transition-all active:scale-90">
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button className="p-4 bg-gray-50 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-2xl transition-all active:scale-90">
                    <Trash2 className="w-5 h-5" />
                  </button>
                  <Link to={`/properties/${ad._id}`}>
                    <button className="p-4 bg-[#051c1e] text-white rounded-2xl hover:bg-teal-700 transition-all shadow-lg shadow-teal-900/10 active:scale-90">
                      <ArrowUpRight className="w-6 h-6" />
                    </button>
                  </Link>
                </div>
              </div>
            ))
          : !isLoading && (
              <div className="py-20 text-center bg-white rounded-[3rem] border border-dashed border-gray-200">
                <p className="text-gray-400 font-black uppercase text-xs tracking-[0.2em]">
                  আপনি এখনো কোনো বিজ্ঞাপন দেননি!
                </p>
              </div>
            )}
      </div>

      {/* ৩. প্রোমোশন কার্ড */}
      <div className="bg-[#051c1e] p-10 rounded-[3.5rem] text-white relative overflow-hidden shadow-2xl shadow-teal-900/20">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2">
            <h3 className="text-2xl font-black italic uppercase tracking-tighter">
              আপনার বিজ্ঞাপন বুস্ট করুন
            </h3>
            <p className="text-gray-400 font-medium tracking-tight">
              বিজ্ঞাপন বুস্ট করে ৫ গুণ বেশি কাস্টমারের কাছে পৌঁছে যান খুব সহজে।
            </p>
          </div>
          <Button className="bg-teal-500 hover:bg-teal-400 text-white h-14 rounded-2xl px-10 font-black shadow-xl shadow-teal-500/20 transition-all active:scale-95">
            বুস্ট করুন
          </Button>
        </div>
      </div>
    </div>
  );
}
