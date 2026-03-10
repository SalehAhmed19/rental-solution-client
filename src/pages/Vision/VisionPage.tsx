import React from "react";
import {
  ArrowLeft,
  Target,
  Eye,
  ShieldCheck,
  Heart,
  Sparkles,
  Zap,
  Users,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function VisionPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fcfcfc] overflow-x-hidden">
      {/* =========================================
           Hero: The Big Statement (Padding Added)
          ========================================= */}
      <section className="relative pt-32 md:pt-56 pb-20 px-6 max-w-7xl mx-auto">
        {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
        <div className="absolute top-40 right-[-5%] text-[10rem] md:text-[20rem] font-black text-teal-600/5 select-none pointer-events-none leading-none">
          ABAS
        </div>

        <div className="max-w-5xl space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-4 h-4" /> আমাদের মূল দর্শন
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-gray-900 leading-[1.1] tracking-tight">
            ভাড়াটে ও মালিকের মাঝে <br className="hidden md:block" />
            <span className="text-teal-600">স্বচ্ছতার সেতুবন্ধন</span>
          </h1>
          <p className="text-lg md:text-2xl font-medium text-gray-500 leading-relaxed max-w-3xl">
            আমরা শুধু একটি ওয়েবসাইট নই; আমরা একটি আন্দোলন—বাসা ভাড়া নেওয়ার সেই
            পুরানো ও ঝামেলার সংস্কৃতি বদলে দেওয়ার জন্য।
          </p>
        </div>
      </section>

      {/* =========================================
           Core Pillars: Interactive Cards
          ========================================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {[
          {
            icon: <Target className="w-8 h-8 md:w-10 md:h-10" />,
            title: "লক্ষ্য (Mission)",
            desc: "প্রযুক্তি ব্যবহারের মাধ্যমে দালালমুক্ত ও নিরাপদ রিয়েল এস্টেট ইকোসিস্টেম তৈরি করা।",
            color: "text-teal-600",
            light: "bg-teal-50",
          },
          {
            icon: <Eye className="w-8 h-8 md:w-10 md:h-10" />,
            title: "ভিশন (Vision)",
            desc: "বাংলাদেশের প্রতিটি মানুষের জন্য বাসা বদল হবে ক্লিক করার মতোই সহজ ও আনন্দদায়ক।",
            color: "text-[#051c1e]",
            light: "bg-gray-100",
          },
          {
            icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" />,
            title: "নিরাপত্তা (Security)",
            desc: "NID ভেরিফিকেশন এবং এনক্রিপ্টেড ডাটা স্টোরেজ এর মাধ্যমে আপনার গোপনীয়তা নিশ্চিত করা।",
            color: "text-blue-600",
            light: "bg-blue-50",
          },
        ].map((pillar, i) => (
          <div
            key={i}
            className="group relative p-10 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-teal-900/5 transition-all duration-500 hover:-translate-y-3"
          >
            <div
              className={`w-16 h-16 md:w-20 md:h-20 ${pillar.light} rounded-2xl md:rounded-3xl flex items-center justify-center mb-8 transition-transform group-hover:rotate-12`}
            >
              <div className={pillar.color}>{pillar.icon}</div>
            </div>
            <h3 className="text-2xl font-black text-gray-900 mb-4">
              {pillar.title}
            </h3>
            <p className="text-gray-500 font-medium leading-relaxed text-sm md:text-base">
              {pillar.desc}
            </p>
          </div>
        ))}
      </section>

      {/* অন্যান্য সেকশনগুলো (Statistics এবং Footer) আগের মতোই থাকবে... */}
      <section className="py-20 px-6 text-center">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em]">
          Powered by TechXbureau IT Firm
        </p>
      </section>
    </div>
  );
}
