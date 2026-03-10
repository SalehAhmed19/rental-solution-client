import { images } from "../../../../assets/assets";
import { ArrowRight, CheckCircle2, Home, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="relative px-6 mx-auto overflow-visible py-28 md:px-12 max-w-7xl">
      {/* ব্যাকগ্রাউন্ডে বড় একটি ডেকোরেটিভ টেক্সট যা ইউনিক লুক দিবে */}
      <div className="absolute top-10 left-0 text-[12rem] font-black text-gray-50 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        VISION
      </div>

      <div className="flex flex-col items-stretch gap-0 lg:flex-row">
        {/* =========================================
            Left Side: Modern Asymmetric Image Stack
            ========================================= */}
        <div className="relative w-full lg:w-3/5 h-[500px] md:h-[650px]">
          {/* মেইন বড় ইমেজ */}
          <div className="absolute top-0 left-0 w-4/5 h-4/5 rounded-[3rem] overflow-hidden z-10 shadow-2xl">
            <img
              src={
                images.about1 ||
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800"
              }
              className="object-cover w-full h-full transition-transform duration-1000 hover:scale-110"
              alt="Luxury Interior"
            />
          </div>

          {/* সেকেন্ডারি ইমেজ যা মেইন ইমেজের ওপর ওভারল্যাপ করছে */}
          <div className="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-[3rem] border-[12px] border-white overflow-hidden z-20 shadow-2xl hidden md:block">
            <img
              src={
                images.about2 ||
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600"
              }
              className="object-cover w-full h-full"
              alt="Modern Exterior"
            />
          </div>

          {/* ফ্লোটিং স্ট্যাটাস ব্যাজ */}
          <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-teal-600 text-white p-6 rounded-3xl z-30 shadow-xl hidden xl:flex flex-col items-center gap-2 animate-bounce duration-[4000ms]">
            <Zap className="w-8 h-8 fill-current" />
            <span className="text-xl font-bold">100%</span>
            <span className="text-[10px] uppercase tracking-widest font-bold opacity-80">
              Direct Rent
            </span>
          </div>
        </div>

        {/* =========================================
            Right Side: Floating Content Card (Overlap)
            ========================================= */}
        <div className="relative w-full lg:w-2/5 flex items-center z-40 mt-[-60px] lg:mt-0 lg:ml-[-10%]">
          <div className="bg-white/90 backdrop-blur-xl p-8 md:p-14 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-white/20 w-full">
            <div className="space-y-8">
              {/* ছোট ট্যাগলাইন */}
              <div className="flex items-center gap-3 text-teal-600 font-bold tracking-[0.2em] uppercase text-xs">
                <div className="w-10 h-[2px] bg-teal-600"></div>
                আমাদের লক্ষ্য
              </div>

              <h2 className="text-4xl md:text-5xl font-heading font-black text-gray-900 leading-[1.1]">
                বাসা বদল হোক <br />
                <span className="relative">
                  একদম ঝামেলাহীন
                  <svg
                    className="absolute left-0 w-full -bottom-2"
                    viewBox="0 0 200 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 6C50 2 150 2 198 6"
                      stroke="#0D9488"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>

              <p className="text-lg font-medium leading-relaxed text-gray-500">
                পুরানো ঝামেলার দিন শেষ। সরাসরি মালিকের সাথে কথা বলে আপনার
                স্বপ্নের ঠিকানা খুঁজে নিন কোনো লুকানো খরচ ছাড়াই।
              </p>

              {/* ইউনিক লিস্ট স্টাইল */}
              <div className="pt-4 space-y-4">
                {[
                  {
                    icon: <ShieldCheck className="w-5 h-5" />,
                    text: "১০০% সরাসরি যোগাযোগ",
                  },
                  {
                    icon: <Home className="w-5 h-5" />,
                    text: "ভেরিফাইড লিস্টিং ও নিরাপত্তা",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 transition-colors rounded-2xl bg-gray-50 hover:bg-teal-50 group"
                  >
                    <div className="text-teal-600 transition-transform group-hover:scale-110">
                      {item.icon}
                    </div>
                    <span className="font-bold text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* ফাইনাল অ্যাকশন */}
              <div className="pt-6">
                <Link to="/our-vision">
                  <Button className="w-full bg-[#0a4a4e] hover:bg-black text-white h-20 rounded-[2rem] text-xl font-bold transition-all flex items-center justify-between px-10 group overflow-hidden">
                    <span>বিস্তারিত জানুন</span>
                    <div className="bg-white/20 p-3 rounded-full group-hover:bg-white group-hover:text-[#0a4a4e] transition-all">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
