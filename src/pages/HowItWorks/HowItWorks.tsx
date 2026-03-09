import React from "react";
import {
  Search,
  UserCheck,
  Key,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Lock,
  ChevronRight,
} from "lucide-react";
import { Button } from "../../components/ui/button";

const steps = [
  {
    id: "01",
    title: "বাসা খুঁজুন",
    description:
      "আপনার পছন্দের এলাকা, বাজেট এবং প্রয়োজনীয় সুবিধা অনুযায়ী আমাদের অ্যাডভান্স সার্চ ব্যবহার করে বাসা ফিল্টার করুন।",
    icon: <Search className="w-8 h-8" />,
    color: "bg-blue-500",
    badge: null,
  },
  {
    id: "02",
    title: "ভেরিফিকেশন দেখুন",
    description:
      "নিরাপদ ভাড়ার জন্য লিস্টিংয়ের পাশে থাকা 'Verified' ব্যাজটি চেক করুন এবং বাসার বিস্তারিত তথ্য পড়ে নিন।",
    icon: <UserCheck className="w-8 h-8" />,
    color: "bg-teal-500",
    badge: null,
  },
  {
    id: "03",
    title: "ভেরিফাইড যোগাযোগ",
    description:
      "নিরাপত্তার স্বার্থে আপনার NID ভেরিফিকেশন সম্পন্ন করুন। আইডি ভেরিফাইড হলে সরাসরি মালিকের কন্টাক্ট ডিটেইলস আনলক করুন।",
    icon: <ShieldCheck className="w-8 h-8" />,
    color: "bg-orange-500",
    badge: "ভেরিফিকেশন আবশ্যক",
  },
  {
    id: "04",
    title: "মুভ-ইন করুন",
    description:
      "সবকিছু ঠিক থাকলে মালিকের সাথে চুক্তি সম্পন্ন করে আপনার নতুন বাসায় আজই মুভ-ইন করুন।",
    icon: <Key className="w-8 h-8" />,
    color: "bg-purple-500",
    badge: null,
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* 1. Hero Section */}
      <section className="relative py-24 overflow-hidden bg-gray-50/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-10 left-10 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-100 rounded-full shadow-sm text-teal-600 text-xs font-bold uppercase tracking-[0.2em] mb-8">
            <Sparkles className="w-4 h-4" /> সহজ ৪টি ধাপ
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-black text-gray-900 leading-tight mb-8">
            আবাসে বাসা ভাড়া নেওয়া <br />
            <span className="text-teal-600 italic text-4xl md:text-6xl font-medium">
              এখন আরও নিরাপদ
            </span>
          </h1>
          <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
            আমরা নিশ্চিত করি ব্রোকার মুক্ত এবং সরাসরি বাসা ভাড়ার অভিজ্ঞতা। তবে
            ইউজারের নিরাপত্তা আমাদের প্রথম অগ্রাধিকার।
          </p>
        </div>
      </section>

      {/* 2. Steps Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* কানেক্টর লাইন (ডেস্কটপ অনলি) */}
          <div className="hidden lg:block absolute top-1/3 left-0 w-full h-0.5 bg-gray-100 -z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 group">
              <div className="h-full bg-white p-10 rounded-[3rem] border border-gray-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-4 flex flex-col">
                {/* আইকন এবং আইডি */}
                <div className="flex items-center justify-between mb-10">
                  <div
                    className={`w-20 h-20 ${step.color} text-white rounded-3xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-500`}
                  >
                    {step.badge && index === 2 ? (
                      <Lock className="w-8 h-8 animate-pulse" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <span className="text-5xl font-black text-gray-100 group-hover:text-teal-50 transition-colors">
                    {step.id}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 font-medium leading-relaxed">
                    {step.description}
                  </p>

                  {/* ভেরিফিকেশন স্পেশাল ট্যাগ (স্টেপ ০৩ এর জন্য) */}
                  {step.badge && (
                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-[10px] font-black uppercase tracking-tighter border border-orange-100">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full animate-ping"></div>
                      {step.badge}
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-50 flex items-center gap-2 text-teal-600 font-bold group-hover:gap-4 transition-all cursor-pointer">
                  বিস্তারিত দেখুন <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Value Proposition */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-[#051c1e] rounded-[4rem] text-center overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/50 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

        <div className="relative z-10 space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-white">
              নিরাপদ ভাড়ার বিশ্বস্ত প্ল্যাটফর্ম
            </h2>
            <p className="text-teal-50/60 max-w-xl mx-auto font-medium">
              আপনার পরিচয় গোপন রেখে ভেরিফাইড ইউজারদের সাথে যোগাযোগ নিশ্চিত করাই
              আমাদের লক্ষ্য।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto text-left">
            <div className="space-y-4 p-8 bg-white/5 rounded-[2rem] border border-white/5 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-teal-500/20 rounded-2xl flex items-center justify-center text-teal-400">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white">ভেরিফাইড লিস্টিং</h4>
              <p className="text-teal-50/60 leading-relaxed font-medium text-sm">
                প্রতিটি বাসার লিস্টিং আমরা সরেজমিনে বা ভিডিও কলের মাধ্যমে যাচাই
                করি।
              </p>
            </div>
            <div className="space-y-4 p-8 bg-white/5 rounded-[2rem] border border-white/5 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400">
                <Zap className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white">কোনো ব্রোকার নেই</h4>
              <p className="text-teal-50/60 leading-relaxed font-medium text-sm">
                মালিক ও ভাড়াটিয়ার মাঝে কোনো মধ্যসত্ত্বভোগী বা দালালি চার্জ
                নেই।
              </p>
            </div>
            <div className="space-y-4 p-8 bg-white/5 rounded-[2rem] border border-white/5 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center text-purple-400">
                <UserCheck className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white">আইডি প্রোটেকশন</h4>
              <p className="text-teal-50/60 leading-relaxed font-medium text-sm">
                আপনার তথ্য আমাদের কাছে সুরক্ষিত। আইডি ভেরিফিকেশন প্রসেস
                এনক্রিপ্টেড।
              </p>
            </div>
          </div>

          <div className="pt-8">
            <Button className="bg-white text-[#051c1e] hover:bg-teal-50 px-12 h-20 rounded-3xl text-2xl font-black transition-all active:scale-95 shadow-2xl">
              আজই বাসা খুঁজুন
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
