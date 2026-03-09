import {
  Building2,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
  Send,
  Sparkles,
} from "lucide-react";
import { Button } from "../../ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#051c1e] text-gray-300 pt-32 pb-10 overflow-hidden">
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন - ডাইনামিক গ্লো */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] -z-0 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-900/20 rounded-full blur-[100px] -z-0"></div>

      <div className="relative z-10 px-6 mx-auto max-w-7xl md:px-12">
        {/* =========================================
            Top Section: Ultra-Premium CTA Card
            ========================================= */}
        <div className="relative -mt-52 mb-24 p-10 md:p-20 rounded-[4rem] bg-[#0a4a4e] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden group border border-white/5">
          {/* এনিমেটেড লাইট বিম ইফেক্ট */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_var(--x,_50%)_var(--y,_50%),_rgba(255,255,255,0.4)_0%,_transparent_50%)] transition-opacity duration-500 group-hover:opacity-40"></div>

          <div className="absolute w-64 h-64 transition-transform duration-1000 rounded-full -top-24 -right-24 bg-teal-400/20 blur-3xl group-hover:scale-150"></div>

          <div className="relative z-10 flex flex-col items-center justify-between gap-12 lg:flex-row">
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-teal-300 text-xs font-bold uppercase tracking-widest border border-white/10">
                <Sparkles className="w-4 h-4" />
                মালিকদের জন্য বিশেষ সুযোগ
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-black text-white leading-[1.1]">
                আপনার বাসাটি বিজ্ঞাপন <br />
                <span className="text-teal-400">দিতে চান আজই?</span>
              </h2>
              <p className="max-w-xl text-lg text-teal-50/70 md:text-xl">
                হাজারো ভেরিফাইড ভাড়াটিয়া সরাসরি আপনার সাথে যোগাযোগ করতে
                প্রস্তুত। কোনো ব্রোকার ফি নেই।
              </p>
            </div>

            <Button className="bg-white text-[#0a4a4e] hover:bg-teal-50 h-20 px-12 rounded-[2rem] text-xl font-black shadow-2xl flex items-center gap-4 transition-all hover:-translate-y-2 active:scale-95 group/btn">
              বিজ্ঞাপন দিন
              <div className="bg-[#0a4a4e] p-2 rounded-full text-white transition-transform group-hover/btn:translate-x-2">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Button>
          </div>
        </div>

        {/* =========================================
            Middle Section: Grid Layout
            ========================================= */}
        <div className="grid grid-cols-1 gap-16 pb-20 border-b md:grid-cols-2 lg:grid-cols-4 border-white/5">
          {/* Brand & Social */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 text-white shadow-lg bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl shadow-teal-500/20 rotate-3">
                <Building2 className="w-7 h-7" />
              </div>
              <span className="text-3xl font-black tracking-tight text-white font-heading">
                আবাস<span className="text-teal-500">.</span>
              </span>
            </div>
            <p className="text-base italic font-medium leading-relaxed opacity-60">
              "ব্রোকারমুক্ত এবং সরাসরি বাসা ভাড়ার অভিজ্ঞতায় আমরাই বাংলাদেশের
              প্রথম পছন্দ।"
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "Linkedin" },
              ].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center justify-center w-12 h-12 transition-all duration-300 border rounded-2xl bg-white/5 border-white/10 hover:bg-teal-500 hover:text-white hover:border-teal-500 group"
                  aria-label={item.label}
                >
                  <item.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links with Hover Effect */}
          <div className="space-y-8">
            <h4 className="text-xl font-bold tracking-wide text-white">
              সার্ভিসসমূহ
            </h4>
            <ul className="space-y-5">
              {[
                "বাসা খুঁজুন",
                "কিভাবে কাজ করে",
                "এলাকা ভিত্তিক সার্চ",
                "প্রাইভেসি পলিসি",
                "শর্তাবলী",
              ].map((link) => (
                <li key={link} className="group">
                  <a
                    href="#"
                    className="flex items-center gap-3 font-medium transition-all group-hover:text-teal-400"
                  >
                    <span className="w-0 h-[2px] bg-teal-500 transition-all group-hover:w-4"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <h4 className="text-xl font-bold tracking-wide text-white">
              সরাসরি যোগাযোগ
            </h4>
            <ul className="space-y-6">
              {[
                { icon: MapPin, text: "উত্তরা, ঢাকা-১২৩০, বাংলাদেশ" },
                { icon: Phone, text: "+৮৮০ ১২৩৪ ৫৬৭৮৯০" },
                { icon: Mail, text: "support@abas.com" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <div className="p-3 text-teal-500 transition-all bg-white/5 rounded-xl group-hover:bg-teal-500 group-hover:text-white">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="pt-1 text-sm font-semibold">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter with Glassmorphism */}
          <div className="space-y-8">
            <h4 className="text-xl font-bold tracking-wide text-white">
              নিউজলেটার
            </h4>
            <p className="text-sm font-medium leading-relaxed opacity-60">
              নতুন নতুন প্রপার্টি আপডেট এবং বিশেষ অফার পেতে আপনার ইমেইল দিয়ে
              সংযুক্ত থাকুন।
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="আপনার ইমেইল এড্রেস"
                className="w-full px-6 py-5 text-sm transition-all border outline-none bg-white/5 border-white/10 rounded-2xl focus:border-teal-500 focus:bg-white/10 placeholder:text-gray-600"
              />
              <button className="absolute flex items-center px-5 text-white transition-all bg-teal-600 shadow-lg right-2 top-2 bottom-2 hover:bg-teal-500 rounded-xl active:scale-95 group">
                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================
            Bottom Bar
            ========================================= */}
        <div className="flex flex-col items-center justify-between gap-8 pt-12 md:flex-row">
          <div className="flex flex-col items-center gap-4 text-xs font-bold tracking-widest uppercase md:flex-row opacity-40">
            <p>© {currentYear} আবাস রেন্টালস - সর্বস্বত্ব সংরক্ষিত</p>
            <span className="hidden md:block">|</span>
            <p>
              একটি{" "}
              <a
                href="#"
                className="underline transition-colors hover:text-white"
              >
                TechXbureau
              </a>{" "}
              প্রজেক্ট
            </p>
          </div>

          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] opacity-30">
            <a href="#" className="transition-opacity hover:opacity-100">
              Sitemap
            </a>
            <a href="#" className="transition-opacity hover:opacity-100">
              Cookies
            </a>
            <a href="#" className="transition-opacity hover:opacity-100">
              Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
