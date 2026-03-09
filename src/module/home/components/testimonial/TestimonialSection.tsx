import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ArrowRight, ArrowLeft } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "আরিফ রহমান",
    role: "সফটওয়্যার ইঞ্জিনিয়ার",
    comment:
      "মিরপুরে অনেক খুঁজেও মনের মতো ঝকঝকে বাসা পাচ্ছিলাম না। এই প্ল্যাটফর্মের মাধ্যমে মাত্র ৩ দিনে ফ্রেশ পেইন্ট করা একটি বাসা ভাড়া নিয়েছি। ওয়াশরুম ফিটিংস একদম নতুন ছিল!",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
    rating: 5,
  },
  {
    id: 2,
    name: "সাদিয়া ইসলাম",
    role: "উদ্যোক্তা",
    comment:
      "বাসা বদলানোর ঝামেলার কথা ভেবেই ভয় পেতাম। কিন্তু এখানকার ভেরিফাইড লিস্টিং আর সরাসরি মালিকের সাথে কথা বলার সুবিধাটা আমার কাজ অনেক সহজ করে দিয়েছে।",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
    rating: 5,
  },
  {
    id: 3,
    name: "তানভীর আহমেদ",
    role: "ব্যাংকার",
    comment:
      "আমি খুব খুঁতখুঁতে মানুষ। তারা আমাকে এমন একটি ফ্ল্যাট দেখিয়েছে যার ফিনিশিং ছিল দুর্দান্ত। ঢাকার বুকে এমন প্রফেশনাল সার্ভিস সত্যিই বিরল।",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800",
    rating: 5,
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  // অটো-প্লে লজিক (প্রতি ৫ সেকেন্ডে চেঞ্জ হবে)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative px-6 py-32 mx-auto overflow-visible md:px-12 max-w-7xl">
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-teal-50/30 rounded-[5rem] -z-10 blur-3xl opacity-50"></div>

      <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
        {/* =========================================
            Left Side: Large Animated Profile Image
            ========================================= */}
        <div className="relative w-full lg:w-1/2 h-[450px] md:h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="w-full h-full rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white"
            >
              <img
                src={testimonials[index].img}
                className="object-cover w-full h-full"
                alt={testimonials[index].name}
              />
            </motion.div>
          </AnimatePresence>

          {/* ফ্লোটিং ব্যাজ */}
          <div className="absolute -bottom-8 -right-8 bg-[#0a4a4e] text-white p-8 rounded-[2.5rem] shadow-2xl z-20 hidden md:block">
            <Quote className="w-10 h-10 mb-2 text-teal-400 fill-current" />
            <p className="text-sm font-bold tracking-widest uppercase opacity-70">
              Verified Story
            </p>
          </div>
        </div>

        {/* =========================================
            Right Side: Content with Vertical Slide
            ========================================= */}
        <div className="w-full space-y-10 lg:w-1/2">
          <div className="space-y-4">
            <h3 className="text-teal-600 font-bold uppercase tracking-[0.3em] text-xs flex items-center gap-2">
              <span className="w-8 h-px bg-teal-600"></span>
              ইউজারদের অভিজ্ঞতা
            </h3>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-gray-900 leading-[1.1]">
              মানুষ কেন আমাদের <br />{" "}
              <span className="text-teal-600">ভরসা করে?</span>
            </h2>
          </div>

          {/* রিভিউ কন্টেন্ট যা নিজে থেকে স্লাইড হবে */}
          <div className="relative h-[250px] md:h-[200px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 space-y-6"
              >
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(testimonials[index].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                <p className="text-xl italic font-medium leading-relaxed text-gray-700 md:text-2xl">
                  "{testimonials[index].comment}"
                </p>

                <div className="pt-4">
                  <h4 className="text-2xl font-black text-gray-900">
                    {testimonials[index].name}
                  </h4>
                  <p className="text-sm font-bold tracking-wide text-teal-600">
                    {testimonials[index].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* কাস্টম নেভিগেশন কন্ট্রোলস */}
          <div className="flex items-center gap-6 pt-12 md:pt-0">
            <button
              onClick={() =>
                setIndex(
                  (prev) =>
                    (prev - 1 + testimonials.length) % testimonials.length,
                )
              }
              className="flex items-center justify-center transition-all border-2 border-gray-100 w-14 h-14 rounded-2xl hover:bg-teal-600 hover:border-teal-600 hover:text-white group active:scale-95"
            >
              <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
            </button>
            <button
              onClick={() =>
                setIndex((prev) => (prev + 1) % testimonials.length)
              }
              className="flex items-center justify-center transition-all border-2 border-gray-100 w-14 h-14 rounded-2xl hover:bg-teal-600 hover:border-teal-600 hover:text-white group active:scale-95"
            >
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
            </button>

            {/* প্রগ্রেস ইন্ডিকেটর */}
            <div className="flex gap-2 ml-4">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-8 bg-teal-600" : "w-2 bg-gray-200"}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
