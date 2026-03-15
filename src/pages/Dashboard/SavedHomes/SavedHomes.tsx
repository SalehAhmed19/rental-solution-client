// import React from "react";
// import {
//   Heart,
//   MapPin,
//   BedDouble,
//   Bath,
//   Trash2,
//   ArrowUpRight,
//   Sparkles,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Link } from "react-router-dom";

// // ডামি ডাটা (পরে এপিআই থেকে আসবে)
// const savedHomes = [
//   {
//     id: 1,
//     title: "উত্তরা সেক্টর ৪ - আধুনিক ফ্ল্যাট",
//     location: "সেক্টর ৪, উত্তরা, ঢাকা",
//     price: "২৫,০০০",
//     beds: 3,
//     baths: 2,
//     image:
//       "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
//     category: "ফ্ল্যাট",
//   },
//   {
//     id: 2,
//     title: "বনানী ডিওএইচএস ডুপ্লেক্স",
//     location: "রোড ১২, বনানী, ঢাকা",
//     price: "৮৫,০০০",
//     beds: 4,
//     baths: 4,
//     image:
//       "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop",
//     category: "ডুপ্লেক্স",
//   },
//   {
//     id: 3,
//     title: "ধানমন্ডি লেক ভিউ অ্যাপার্টমেন্ট",
//     location: "রোড ৫, ধানমন্ডি, ঢাকা",
//     price: "৪৫,০০০",
//     beds: 3,
//     baths: 3,
//     image:
//       "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2074&auto=format&fit=crop",
//     category: "ফ্ল্যাট",
//   },
// ];

// export default function SavedHomes() {
//   return (
//     <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
//       {/* Header Section */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
//         <div className="space-y-1">
//           <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-2">
//             <Heart className="w-3 h-3 fill-rose-600" /> পছন্দের তালিকা
//           </div>
//           <h1 className="text-3xl font-black text-gray-900 tracking-tight">
//             আপনার <span className="text-teal-600">সেভ করা</span> বাসা
//           </h1>
//           <p className="text-gray-500 font-medium">
//             এখানে আপনার পছন্দের সব বাসাগুলো গুছিয়ে রাখা হয়েছে।
//           </p>
//         </div>
//         <div className="flex items-center gap-3">
//           <div className="text-right hidden sm:block">
//             <p className="text-xs font-bold text-gray-400 uppercase">
//               মোট বাসা
//             </p>
//             <p className="text-xl font-black text-gray-900">
//               {savedHomes.length} টি
//             </p>
//           </div>
//           <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-100">
//             <Sparkles className="w-6 h-6" />
//           </div>
//         </div>
//       </div>

//       {/* Homes Grid */}
//       {savedHomes.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
//           {savedHomes.map((home) => (
//             <div
//               key={home.id}
//               className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-teal-900/5 transition-all duration-500"
//             >
//               {/* Image Container */}
//               <div className="relative h-64 overflow-hidden">
//                 <img
//                   src={home.image}
//                   alt={home.title}
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//                 {/* Top Actions */}
//                 <div className="absolute top-5 right-5 flex gap-2">
//                   <button className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center text-rose-500 hover:bg-rose-500 hover:text-white transition-all shadow-lg active:scale-90">
//                     <Trash2 className="w-5 h-5" />
//                   </button>
//                 </div>

//                 {/* Price Tag */}
//                 <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg">
//                   <p className="text-teal-700 font-black text-lg">
//                     ৳ {home.price}
//                     <span className="text-[10px] text-gray-500 font-bold uppercase ml-1">
//                       / মাস
//                     </span>
//                   </p>
//                 </div>
//               </div>

//               {/* Content Section */}
//               <div className="p-7 space-y-4">
//                 <div className="space-y-1">
//                   <p className="text-[10px] font-black text-teal-600 uppercase tracking-widest">
//                     {home.category}
//                   </p>
//                   <h3 className="text-xl font-black text-gray-900 line-clamp-1 group-hover:text-teal-600 transition-colors">
//                     {home.title}
//                   </h3>
//                   <div className="flex items-center gap-1 text-gray-400">
//                     <MapPin className="w-3.5 h-3.5" />
//                     <span className="text-xs font-medium">{home.location}</span>
//                   </div>
//                 </div>

//                 {/* Features Info */}
//                 <div className="flex items-center gap-6 py-4 border-y border-gray-50">
//                   <div className="flex items-center gap-2">
//                     <div className="p-2 bg-gray-50 rounded-lg text-gray-500">
//                       <BedDouble className="w-4 h-4" />
//                     </div>
//                     <span className="text-sm font-bold text-gray-700">
//                       {home.beds} রুম
//                     </span>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div className="p-2 bg-gray-50 rounded-lg text-gray-500">
//                       <Bath className="w-4 h-4" />
//                     </div>
//                     <span className="text-sm font-bold text-gray-700">
//                       {home.baths} বাথ
//                     </span>
//                   </div>
//                 </div>

//                 {/* Action Button */}
//                 <Link to={`/property/${home.id}`}>
//                   <Button className="w-full h-14 bg-gray-900 hover:bg-teal-700 text-white rounded-2xl font-black gap-2 transition-all mt-2 shadow-xl shadow-black/5 active:scale-[0.98]">
//                     বিস্তারিত দেখুন <ArrowUpRight className="w-5 h-5" />
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         /* Empty State */
//         <div className="bg-white py-20 rounded-[3rem] border-2 border-dashed border-gray-100 flex flex-col items-center justify-center text-center space-y-4">
//           <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
//             <Heart className="w-10 h-10" />
//           </div>
//           <div className="space-y-1">
//             <h3 className="text-2xl font-black text-gray-900">
//               এখনো কিছু সেভ করেননি!
//             </h3>
//             <p className="text-gray-500 font-medium">
//               আপনার পছন্দের বাসাগুলো এখানে জমা থাকবে।
//             </p>
//           </div>
//           <Link to="/search">
//             <Button className="bg-teal-600 hover:bg-teal-700 h-14 px-8 rounded-2xl font-black mt-4">
//               বাসা খুঁজতে চলুন
//             </Button>
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// }

import React from "react";
import {
  Heart,
  MapPin,
  BedDouble,
  Bath,
  Trash2,
  ArrowUpRight,
  Sparkles,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  useGetSavedPropertiesQuery,
  useToggleSavePropertyMutation, // আমরা ৫ নম্বর এন্ডপয়েন্টটি ব্যবহার করব
} from "@/redux/slices/propertyApi";
import { toast } from "sonner";

export default function SavedHomes() {
  // ১. ডাটাবেজ থেকে সেভ করা বাসার লিস্ট আনা
  const { data: response, isLoading } = useGetSavedPropertiesQuery(undefined);

  // ২. আপনার এপিআই স্লাইসের ৫ নম্বর এন্ডপয়েন্ট (Toggle Save) ব্যবহার করছি
  // কারণ এটিই ডাটাবেজ থেকে আইডি রিমুভ করবে
  const [toggleSave] = useToggleSavePropertyMutation();

  const savedHomes = response?.data || [];

  // ৩. রিমুভ হ্যান্ডলার
  const handleRemove = async (id: string) => {
    try {
      await toggleSave(id).unwrap();
      toast.success("বাসাটি আপনার পছন্দের তালিকা থেকে মুছে ফেলা হয়েছে", {
        style: { background: "#fff", color: "#e11d48", fontWeight: "bold" },
      });
    } catch (err) {
      toast.error("মুছে ফেলতে সমস্যা হয়েছে, আবার চেষ্টা করুন");
    }
  };

  if (isLoading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-teal-600" />
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-2">
            <Heart className="w-3 h-3 fill-rose-600" /> পছন্দের তালিকা
          </div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">
            আপনার <span className="text-teal-600">সেভ করা</span> বাসা
          </h1>
          <p className="text-gray-500 font-medium">
            এখানে আপনার পছন্দের সব বাসাগুলো গুছিয়ে রাখা হয়েছে।
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-gray-400 uppercase">
              মোট বাসা
            </p>
            <p className="text-xl font-black text-gray-900">
              {savedHomes.length} টি
            </p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-100">
            <Sparkles className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Homes Grid */}
      {savedHomes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {savedHomes.map((home: any) => (
            <div
              key={home._id}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-teal-900/5 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={
                    home.images?.[0]?.url || "https://via.placeholder.com/800"
                  }
                  alt={home.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Delete Button */}
                <div className="absolute top-5 right-5">
                  <button
                    onClick={() => handleRemove(home._id)}
                    className="w-11 h-11 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-rose-500 hover:bg-rose-600 hover:text-white transition-all shadow-xl active:scale-90"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>

                <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg">
                  <p className="text-teal-700 font-black text-lg">
                    ৳ {home.rent?.toLocaleString() || home.price}
                    <span className="text-[10px] text-gray-500 font-bold uppercase ml-1">
                      / মাস
                    </span>
                  </p>
                </div>
              </div>

              <div className="p-7 space-y-4">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-teal-600 uppercase tracking-widest">
                    {home.category || "বাসা"}
                  </p>
                  <h3 className="text-xl font-black text-gray-900 line-clamp-1">
                    {home.title}
                  </h3>
                  <div className="flex items-center gap-1 text-gray-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="text-xs font-medium">
                      {home.address?.area || home.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-6 py-4 border-y border-gray-50">
                  <div className="flex items-center gap-2">
                    <BedDouble className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-bold text-gray-700">
                      {home.bedrooms || home.beds} রুম
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-bold text-gray-700">
                      {home.bathrooms || home.baths} বাথ
                    </span>
                  </div>
                </div>

                <Link to={`/properties/details/${home._id}`}>
                  <Button className="w-full h-14 bg-gray-900 hover:bg-teal-700 text-white rounded-2xl font-black gap-2 transition-all shadow-xl active:scale-[0.98]">
                    বিস্তারিত দেখুন <ArrowUpRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white py-24 rounded-[3rem] border-2 border-dashed border-gray-100 flex flex-col items-center justify-center text-center space-y-5">
          <div className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center text-rose-200">
            <Heart className="w-12 h-12" />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-black text-gray-900 font-heading">
              পছন্দের তালিকা খালি!
            </h3>
            <p className="text-gray-500 font-medium">
              এখনো কোনো বাসা সেভ করেননি। আপনার পছন্দের বাসাগুলো এখানে জমা থাকবে।
            </p>
          </div>
          <Link to="/search">
            <Button className="bg-teal-600 hover:bg-teal-700 h-15 px-10 rounded-2xl font-black mt-4 shadow-xl shadow-teal-600/20">
              বাসা খুঁজতে চলুন
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
