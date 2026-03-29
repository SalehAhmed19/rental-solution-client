// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Star, Quote, ArrowRight, ArrowLeft, Loader2 } from "lucide-react";
// import { useGetPlatformReviewsQuery } from "@/redux/slices/platformReviewApi";

// export default function TestimonialSection() {
//   const [index, setIndex] = useState(0);
//   const {
//     data: response,
//     isLoading,
//     isError,
//   } = useGetPlatformReviewsQuery(undefined);

//   // ডাটাবেজ থেকে আসা ডাটা
//   const testimonials = response?.data || [];

//   useEffect(() => {
//     if (testimonials.length > 1) {
//       const timer = setInterval(() => {
//         setIndex((prev) => (prev + 1) % testimonials.length);
//       }, 5000);
//       return () => clearInterval(timer);
//     }
//   }, [testimonials.length]);

//   if (isLoading) {
//     return (
//       <div className="py-32 flex justify-center items-center">
//         <Loader2 className="w-10 h-10 animate-spin text-teal-600" />
//       </div>
//     );
//   }

//   // ডাটা না থাকলে কনসোলে চেক করার জন্য এবং স্ক্রিনে দেখানোর জন্য
//   if (isError || testimonials.length === 0) {
//     console.log("Testimonials Data:", testimonials); // কনসোলে চেক করুন কি আসছে
//     return (
//       <div className="py-10 text-center text-gray-400 italic">
//         {isError
//           ? "ডাটা লোড করতে সমস্যা হয়েছে"
//           : "কোনো ফিচারড রিভিউ পাওয়া যায়নি (isFeatured: true চেক করুন)"}
//       </div>
//     );
//   }

//   // বর্তমান রিভিউ অবজেক্ট (নিরাপদভাবে ধরার জন্য)
//   const currentTestimonial = testimonials[index];

//   return (
//     <section className="relative px-6 py-32 mx-auto overflow-visible md:px-12 max-w-7xl">
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-teal-50/30 rounded-[5rem] -z-10 blur-3xl opacity-50"></div>

//       <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
//         {/* Left Side: Animated Image */}
//         <div className="relative w-full lg:w-1/2 h-[450px] md:h-[600px]">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
//               animate={{ opacity: 1, scale: 1, rotate: 0 }}
//               exit={{ opacity: 0, scale: 1.1, rotate: 5 }}
//               transition={{ duration: 0.8, ease: "circOut" }}
//               className="w-full h-full rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white bg-gray-100"
//             >
//               <img
//                 src={
//                   currentTestimonial?.userId?.image ||
//                   "https://avatar.iran.liara.run/public"
//                 }
//                 className="object-cover w-full h-full"
//                 alt={currentTestimonial?.userId?.name || "User"}
//               />
//             </motion.div>
//           </AnimatePresence>

//           <div className="absolute -bottom-8 -right-8 bg-[#0a4a4e] text-white p-8 rounded-[2.5rem] shadow-2xl z-20 hidden md:block">
//             <Quote className="w-10 h-10 mb-2 text-teal-400 fill-current" />
//             <p className="text-sm font-bold tracking-widest uppercase opacity-70">
//               Verified Story
//             </p>
//           </div>
//         </div>

//         {/* Right Side: Content */}
//         <div className="w-full space-y-10 lg:w-1/2">
//           <div className="space-y-4">
//             <h3 className="text-teal-600 font-bold uppercase tracking-[0.3em] text-xs flex items-center gap-2">
//               <span className="w-8 h-px bg-teal-600"></span>
//               ইউজারদের অভিজ্ঞতা
//             </h3>
//             <h2 className="text-4xl md:text-6xl font-heading font-black text-gray-900 leading-[1.1]">
//               মানুষ কেন আমাদের <br />{" "}
//               <span className="text-teal-600">ভরসা করে?</span>
//             </h2>
//           </div>

//           <div className="relative h-[250px] md:h-[200px] overflow-hidden">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={index}
//                 initial={{ y: 50, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 exit={{ y: -50, opacity: 0 }}
//                 transition={{ duration: 0.5, ease: "easeInOut" }}
//                 className="absolute inset-0 space-y-6"
//               >
//                 <div className="flex gap-1 text-yellow-400">
//                   {[...Array(currentTestimonial?.rating || 5)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 fill-current" />
//                   ))}
//                 </div>

//                 <p className="text-xl italic font-medium leading-relaxed text-gray-700 md:text-2xl">
//                   "{currentTestimonial?.comment || "চমৎকার সার্ভিস!"}"
//                 </p>

//                 <div className="pt-4">
//                   <h4 className="text-2xl font-black text-gray-900">
//                     {currentTestimonial?.userId?.name || "সম্মানিত ইউজার"}
//                   </h4>
//                   <p className="text-sm font-bold tracking-wide text-teal-600">
//                     {currentTestimonial?.userId?.occupation || "পেশাজীবী"}
//                   </p>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* Navigation Controls */}
//           <div className="flex items-center gap-6 pt-12 md:pt-0">
//             <button
//               onClick={() =>
//                 setIndex(
//                   (prev) =>
//                     (prev - 1 + testimonials.length) % testimonials.length,
//                 )
//               }
//               className="flex items-center justify-center transition-all border-2 border-gray-100 w-14 h-14 rounded-2xl hover:bg-teal-600 hover:border-teal-600 hover:text-white group active:scale-95"
//             >
//               <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
//             </button>
//             <button
//               onClick={() =>
//                 setIndex((prev) => (prev + 1) % testimonials.length)
//               }
//               className="flex items-center justify-center transition-all border-2 border-gray-100 w-14 h-14 rounded-2xl hover:bg-teal-600 hover:border-teal-600 hover:text-white group active:scale-95"
//             >
//               <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ArrowRight, ArrowLeft, Loader2 } from "lucide-react";
import { useGetPlatformReviewsQuery } from "@/redux/slices/platformReviewApi";

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const {
    data: response,
    isLoading,
    isError,
  } = useGetPlatformReviewsQuery(undefined);

  const testimonials = response?.data || [];

  useEffect(() => {
    if (testimonials.length > 1) {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [testimonials.length]);

  if (isLoading) {
    return (
      <div className="py-32 flex justify-center items-center">
        <Loader2 className="w-10 h-10 animate-spin text-teal-600" />
      </div>
    );
  }

  if (isError || testimonials.length === 0) return null;

  const currentTestimonial = testimonials[index];

  return (
    <section className="relative px-6 py-32 mx-auto overflow-visible md:px-12 max-w-7xl">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-teal-50/30 rounded-[5rem] -z-10 blur-3xl opacity-50"></div>

      <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
        {/* Left Side: Animated Image */}
        <div className="relative w-full lg:w-1/2 h-[450px] md:h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.8, ease: "circOut" }}
              className="w-full h-full rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] border-white bg-gray-100"
            >
              <img
                src={
                  currentTestimonial?.userId?.image ||
                  "https://avatar.iran.liara.run/public"
                }
                className="object-cover w-full h-full"
                alt={currentTestimonial?.userId?.name || "User"}
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute -bottom-8 -right-8 bg-[#0a4a4e] text-white p-8 rounded-[2.5rem] shadow-2xl z-20 hidden md:block">
            <Quote className="w-10 h-10 mb-2 text-teal-400 fill-current" />
            <p className="text-sm font-bold tracking-widest uppercase opacity-70">
              Verified Story
            </p>
          </div>
        </div>

        {/* Right Side: Content */}
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

          {/* ফিক্স: h-auto এবং min-h ব্যবহার করা হয়েছে যাতে কন্টেন্ট না কাটে */}
          <div className="relative h-auto min-h-[300px] md:min-h-[250px] overflow-visible">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="space-y-6"
              >
                <div className="flex gap-1 text-yellow-400">
                  {[...Array(currentTestimonial?.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                <p className="text-xl italic font-medium leading-relaxed text-gray-700 md:text-2xl">
                  "{currentTestimonial?.comment}"
                </p>

                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-2xl font-black text-gray-900">
                    {currentTestimonial?.userId?.name}
                  </h4>
                  <p className="text-sm font-bold tracking-wide text-teal-600">
                    {currentTestimonial?.userId?.occupation || "সন্তুষ্ট ইউজার"}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-6">
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
          </div>
        </div>
      </div>
    </section>
  );
}
