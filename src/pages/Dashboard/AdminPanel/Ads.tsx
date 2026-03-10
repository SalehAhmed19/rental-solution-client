import React, { useState } from "react";
import {
  Home,
  Search,
  Filter,
  Trash2,
  Eye,
  BadgeCheck,
  Clock,
  Ban,
  MapPin,
  LayoutGrid,
  List,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { properties } from "../../../assets/data"; // আপনার ডামি ডাটা

export default function Ads() {
  const [searchTerm, setSearchTerm] = useState(""); // সার্চের জন্য স্টেট

  // সার্চ লজিক: টাইটেল, এলাকা বা ওনারের নাম দিয়ে সার্চ হবে
  const filteredProperties = properties.filter((ad) => {
    const searchString = searchTerm.toLowerCase();
    return (
      ad.title.toLowerCase().includes(searchString) ||
      ad.address.area.toLowerCase().includes(searchString) ||
      ad.ownerId?.name?.toLowerCase().includes(searchString)
    );
  });

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700 font-heading">
      {/* 1. Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm">
        <div className="space-y-1 text-center md:text-left">
          <h1 className="text-3xl font-black text-gray-900 tracking-tight uppercase">
            সব <span className="text-teal-600">বিজ্ঞাপন</span> লিস্ট
          </h1>
          <p className="text-gray-500 font-medium">
            প্ল্যাটফর্মের সকল বাসার বিজ্ঞাপন এখান থেকে নিয়ন্ত্রণ করুন।
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-teal-600" />
            <Input
              placeholder="বাসার নাম বা এলাকা..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // ইনপুট হ্যান্ডলিং
              className="pl-12 h-12 w-full md:w-64 rounded-2xl border-gray-100 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-teal-500/20 transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs font-bold"
              >
                Clear
              </button>
            )}
          </div>
          <Button
            variant="outline"
            className="h-12 w-12 rounded-2xl p-0 border-gray-100"
          >
            <Filter className="w-5 h-5 text-gray-400" />
          </Button>
        </div>
      </div>

      {/* 2. Content Section (Scrollable Table) */}
      <div className="bg-white rounded-[3rem] border border-gray-100 shadow-sm overflow-hidden flex flex-col">
        {/* Table Header (Fixed) */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-50 bg-gray-50/50 text-[10px] font-black uppercase text-gray-400 tracking-widest">
                <th className="px-8 py-6 text-center w-[120px]">ছবি</th>
                <th className="px-4 py-6">প্রোপার্টি ডিটেইলস</th>
                <th className="px-8 py-6">এলাকা ও টাইপ</th>
                <th className="px-8 py-6">ভাড়া (৳)</th>
                <th className="px-8 py-6">অবস্থা</th>
                <th className="px-8 py-6 text-center">অ্যাকশন</th>
              </tr>
            </thead>
          </table>
        </div>

        {/* Table Body (Vertical Scrollable) */}
        <div className="overflow-x-auto overflow-y-auto max-h-[500px] scrollbar-thin scrollbar-thumb-teal-100 scrollbar-track-transparent">
          {filteredProperties.length > 0 ? (
            <table className="w-full text-left border-collapse">
              <tbody className="divide-y divide-gray-50">
                {filteredProperties.map((ad: any) => (
                  <tr
                    key={ad._id}
                    className="group hover:bg-gray-50/50 transition-colors"
                  >
                    {/* ... (বাকি টেবিল রো কোড আপনার আগের মতোই থাকবে) */}
                    <td className="px-8 py-5 w-[120px]">
                      <div className="w-20 h-14 rounded-xl overflow-hidden border border-gray-100 shadow-sm mx-auto">
                        <img
                          src={ad.images[0]}
                          className="w-full h-full object-cover"
                          alt="Home"
                        />
                      </div>
                    </td>

                    <td className="px-4 py-5">
                      <div className="space-y-0.5">
                        <p className="text-sm font-black text-gray-900 line-clamp-1">
                          {ad.title}
                        </p>
                        <p className="text-[10px] font-bold text-gray-400 flex items-center gap-1 uppercase">
                          <User className="w-3 h-3" />{" "}
                          {ad.ownerId?.name || "সালেহ আহমেদ"}
                        </p>
                      </div>
                    </td>

                    <td className="px-8 py-5">
                      <div className="space-y-1">
                        <p className="text-xs font-bold text-gray-700 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-teal-600" />{" "}
                          {ad.address.area}
                        </p>
                        <Badge className="bg-teal-50 text-teal-600 border-none text-[8px] font-black uppercase tracking-tighter">
                          {ad.features.propertyType}
                        </Badge>
                      </div>
                    </td>

                    <td className="px-8 py-5">
                      <div className="space-y-0.5">
                        <p className="text-lg font-black text-teal-700">
                          ৳{ad.price.toLocaleString()}
                        </p>
                        <p className="text-[9px] font-bold text-gray-400 uppercase">
                          চার্জ: ৳{ad.serviceCharge}
                        </p>
                      </div>
                    </td>

                    <td className="px-8 py-5">
                      {ad.status === "available" ? (
                        <span className="flex items-center gap-1.5 text-green-600 font-black text-[10px] uppercase">
                          <BadgeCheck className="w-4 h-4" /> লাইভ
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5 text-gray-400 font-black text-[10px] uppercase">
                          <Home className="w-4 h-4" /> ভাড়া হয়েছে
                        </span>
                      )}
                    </td>

                    <td className="px-8 py-5 text-center">
                      <div className="flex items-center justify-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                        <button className="p-2.5 bg-gray-50 hover:bg-teal-600 hover:text-white rounded-xl transition-all shadow-sm">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2.5 bg-gray-50 hover:bg-red-500 hover:text-white rounded-xl transition-all shadow-sm">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button className="p-2.5 bg-gray-50 hover:bg-gray-900 hover:text-white rounded-xl transition-all shadow-sm">
                          <Ban className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            /* No Results State */
            <div className="py-20 text-center flex flex-col items-center justify-center space-y-4">
              <Search className="w-12 h-12 text-gray-200" />
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs italic">
                দুঃখিত, কোনো বিজ্ঞাপন খুঁজে পাওয়া যায়নি
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 3. Summary Footer */}
      <div className="bg-[#051c1e] p-10 rounded-[3.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-teal-900/20">
        {/* ... (ফুটার সেকশন আগের মতোই থাকবে) */}
        <div className="flex gap-12">
          <div className="text-center">
            <p className="text-[10px] font-black text-teal-400 uppercase tracking-widest mb-1">
              মোট বিজ্ঞাপন
            </p>
            <p className="text-3xl font-black">{properties.length} টি</p>
          </div>
          <div className="text-center border-l border-white/10 pl-12">
            <p className="text-[10px] font-black text-teal-400 uppercase tracking-widest mb-1">
              ভাড়া হয়েছে
            </p>
            <p className="text-3xl font-black">
              {properties.filter((p) => p.status === "rented").length} টি
            </p>
          </div>
        </div>
        <Button className="bg-teal-500 hover:bg-teal-400 text-white h-14 rounded-2xl px-10 font-black shadow-xl shadow-teal-500/20 border-none transition-all active:scale-95">
          রিপোর্ট জেনারেট করুন
        </Button>
      </div>
    </div>
  );
}
