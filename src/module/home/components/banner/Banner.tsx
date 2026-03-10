// import { images } from "../../../../assets/assets";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// // মডার্ন লুকের জন্য আইকন ইম্পোর্ট করা হলো
// import { MapPin, Home, Banknote, Search, ShieldCheck } from "lucide-react";

// export default function Banner() {
//   return (
//     // মোবাইলে ফিল্টার বার যেন না কাটে, তাই mb-32 (মার্জিন বটম) বাড়িয়ে দেওয়া হয়েছে
//     <div className="relative w-full px-4 mt-4 mb-48 md:mb-24 md:px-8">
//       {/* =========================================
//           মডার্ন হিরো সেকশন (Gradient & Glassmorphism)
//           ========================================= */}
//       <div
//         className="relative w-full h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden flex items-center"
//         style={{
//           backgroundImage: `url(${images.bannerBg})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* টেক্সট সুন্দরভাবে পড়ার জন্য ব্যাকগ্রাউন্ডে একটি সফট ডার্ক গ্রেডিয়েন্ট দেওয়া হয়েছে */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

//         {/* কনটেন্ট (Glassmorphism Badge সহ) */}
//         <div className="relative z-10 max-w-3xl p-8 space-y-6 text-white md:p-16">
//           {/* Trust Badge - ইউজারদের ভরসা দেওয়ার জন্য */}
//           <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-full bg-white/10 backdrop-blur-md border-white/20">
//             <ShieldCheck className="w-5 h-5 text-teal-400" />
//             <span className="tracking-wide">১০০% ভেরিফাইড ও ব্রোকার-মুক্ত</span>
//           </div>

//           <h1 className="text-5xl font-bold leading-tight md:text-h1-desktop font-heading">
//             আপনার স্বপ্নের ঠিকানা <br /> খুঁজুন সহজেই!
//           </h1>

//           <p className="text-lg font-medium leading-relaxed md:text-xl text-white/80 md:w-4/5">
//             ব্রোকার ছাড়াই সরাসরি যোগাযোগ করুন। NID ভেরিফাইড বাড়িওয়ালাদের কাছ
//             থেকে আপনার বাজেট ও পছন্দমতো বাসা ভাড়া নিন সম্পূর্ণ নিশ্চিন্তে।
//           </p>
//         </div>
//       </div>

//       {/* =========================================
//           Pill-Shaped Modern Floating Filter / Search Bar
//           ========================================= */}
//       <div className="absolute -bottom-36 md:-bottom-10 left-1/2 transform -translate-x-1/2 w-[92%] md:w-auto bg-white rounded-3xl md:rounded-full shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-2 md:p-3 flex flex-col md:flex-row md:items-center gap-4 md:gap-0 md:divide-x divide-gray-100 z-20">
//         {/* City Input */}
//         <div className="flex items-center gap-3 px-4 py-2 md:px-6">
//           <div className="p-2.5 bg-teal-50 rounded-full text-teal-600">
//             <MapPin className="w-5 h-5" />
//           </div>
//           <div className="flex flex-col">
//             <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
//               Location
//             </label>
//             <input
//               type="text"
//               placeholder="মিরপুর, উত্তরা..."
//               className="w-full text-sm font-bold text-gray-900 placeholder-gray-300 bg-transparent outline-none md:w-32 lg:w-40"
//             />
//           </div>
//         </div>

//         {/* Property Type (shadcn Select) */}
//         <div className="flex items-center gap-3 px-4 py-2 md:px-6">
//           <div className="p-2.5 bg-blue-50 rounded-full text-blue-600">
//             <Home className="w-5 h-5" />
//           </div>
//           <div className="flex flex-col w-full md:w-36 lg:w-40">
//             <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
//               Property Type
//             </label>
//             <Select>
//               <SelectTrigger className="w-full h-auto p-0 text-sm font-bold text-gray-900 bg-transparent border-none shadow-none focus:ring-0 focus:ring-offset-0">
//                 <SelectValue placeholder="ধরণ নির্বাচন করুন" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="ফ্যামিলি বাসা">ফ্যামিলি বাসা</SelectItem>
//                 <SelectItem value="ব্যাচেলর মেস">ব্যাচেলর মেস</SelectItem>
//                 <SelectItem value="সাবলেট">সাবলেট</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//         </div>

//         {/* Budget (shadcn Select) */}
//         <div className="flex items-center gap-3 px-4 py-2 md:px-6">
//           <div className="p-2.5 bg-orange-50 rounded-full text-orange-600">
//             <Banknote className="w-5 h-5" />
//           </div>
//           <div className="flex flex-col w-full md:w-40">
//             <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
//               Budget
//             </label>
//             <Select>
//               <SelectTrigger className="w-full h-auto p-0 text-sm font-bold text-gray-900 bg-transparent border-none shadow-none focus:ring-0 focus:ring-offset-0">
//                 <SelectValue placeholder="বাজেট নির্বাচন করুন" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="10k-15k">১০,০০০ - ১৫,০০০ ৳</SelectItem>
//                 <SelectItem value="15k-20k">১৫,০০০ - ২০,০০০ ৳</SelectItem>
//                 <SelectItem value="20k+">২০,০০০+ ৳</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//         </div>

//         {/* Search Button */}
//         <div className="w-full px-2 py-2 mt-2 md:px-4 md:mt-0 md:w-auto">
//           <Button className="w-full md:w-auto bg-[#0a4a4e] hover:bg-[#073639] text-white rounded-[20px] md:rounded-full px-8 py-7 flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-teal-900/20">
//             <Search className="w-5 h-5" />
//             <span className="text-base font-bold">Search</span>
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { useNavigate } from "react-router-dom"; // রিডিরেক্ট করার জন্য
import { images } from "../../../../assets/assets";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Home, Banknote, Search, ShieldCheck } from "lucide-react";

export default function Banner() {
  const navigate = useNavigate();

  // --- সার্চ স্টেট ম্যানেজমেন্ট ---
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState("");

  // --- সার্চ হ্যান্ডলার ফাংশন ---
  const handleSearch = () => {
    const params = new URLSearchParams();

    if (location) params.append("location", location);
    if (propertyType) params.append("type", propertyType);
    if (budget) params.append("budget", budget);

    // সার্চ পেজে রিডিরেক্ট করা হচ্ছে কুয়েরি ডাটা সহ
    navigate(`/search?${params.toString()}`);
  };

  return (
    <div className="relative w-full px-4 mt-4 mb-48 md:mb-24 md:px-8">
      <div
        className="relative w-full h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden flex items-center"
        style={{
          backgroundImage: `url(${images.bannerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

        <div className="relative z-10 max-w-3xl p-8 space-y-6 text-white md:p-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-full bg-white/10 backdrop-blur-md border-white/20">
            <ShieldCheck className="w-5 h-5 text-teal-400" />
            <span className="tracking-wide">১০০% ভেরিফাইড ও ব্রোকার-মুক্ত</span>
          </div>

          <h1 className="text-5xl font-bold leading-tight md:text-6xl font-heading">
            আপনার স্বপ্নের ঠিকানা <br /> খুঁজুন সহজেই!
          </h1>

          <p className="text-lg font-medium leading-relaxed md:text-xl text-white/80 md:w-4/5">
            ব্রোকার ছাড়াই সরাসরি যোগাযোগ করুন। NID ভেরিফাইড বাড়িওয়ালাদের কাছ
            থেকে আপনার বাজেট ও পছন্দমতো বাসা ভাড়া নিন সম্পূর্ণ নিশ্চিন্তে।
          </p>
        </div>
      </div>

      {/* Floating Filter / Search Bar */}
      <div className="absolute -bottom-36 md:-bottom-10 left-1/2 transform -translate-x-1/2 w-[92%] md:w-auto bg-white rounded-3xl md:rounded-full shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 p-2 md:p-3 flex flex-col md:flex-row md:items-center gap-4 md:gap-0 md:divide-x divide-gray-100 z-20">
        {/* Location Input */}
        <div className="flex items-center gap-3 px-4 py-2 md:px-6">
          <div className="p-2.5 bg-teal-50 rounded-full text-teal-600">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
              Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="মিরপুর, উত্তরা..."
              className="w-full text-sm font-bold text-gray-900 placeholder-gray-300 bg-transparent outline-none md:w-32 lg:w-40"
            />
          </div>
        </div>

        {/* Property Type */}
        <div className="flex items-center gap-3 px-4 py-2 md:px-6">
          <div className="p-2.5 bg-blue-50 rounded-full text-blue-600">
            <Home className="w-5 h-5" />
          </div>
          <div className="flex flex-col w-full md:w-36 lg:w-40">
            <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
              Property Type
            </label>
            <Select onValueChange={(value) => setPropertyType(value)}>
              <SelectTrigger className="w-full h-auto p-0 text-sm font-bold text-gray-900 bg-transparent border-none shadow-none focus:ring-0 focus:ring-offset-0">
                <SelectValue placeholder="ধরণ নির্বাচন করুন" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="family">ফ্যামিলি বাসা</SelectItem>
                <SelectItem value="bachelor">ব্যাচেলর মেস</SelectItem>
                <SelectItem value="sublet">সাবলেট</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Budget */}
        <div className="flex items-center gap-3 px-4 py-2 md:px-6">
          <div className="p-2.5 bg-orange-50 rounded-full text-orange-600">
            <Banknote className="w-5 h-5" />
          </div>
          <div className="flex flex-col w-full md:w-40">
            <label className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">
              Budget
            </label>
            <Select onValueChange={(value) => setBudget(value)}>
              <SelectTrigger className="w-full h-auto p-0 text-sm font-bold text-gray-900 bg-transparent border-none shadow-none focus:ring-0 focus:ring-offset-0">
                <SelectValue placeholder="বাজেট নির্বাচন করুন" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-15000">১০,০০০ - ১৫,০০০ ৳</SelectItem>
                <SelectItem value="15000-25000">১৫,০০০ - ২৫,০০০ ৳</SelectItem>
                <SelectItem value="25000-999999">২৫,০০০+ ৳</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Search Button */}
        <div className="w-full px-2 py-2 mt-2 md:px-4 md:mt-0 md:w-auto">
          <Button
            onClick={handleSearch} // ক্লিক করলে সার্চ লজিক চলবে
            className="w-full md:w-auto bg-[#0a4a4e] hover:bg-[#073639] text-white rounded-[20px] md:rounded-full px-8 py-7 flex items-center justify-center gap-2 transition-all hover:shadow-lg"
          >
            <Search className="w-5 h-5" />
            <span className="text-base font-bold">Search</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
