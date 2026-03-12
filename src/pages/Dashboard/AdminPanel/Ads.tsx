// import React, { useState } from "react";
// import {
//   Search,
//   Filter,
//   Trash2,
//   Eye,
//   BadgeCheck,
//   Clock,
//   Ban,
//   MapPin,
//   User as UserIcon,
//   Loader2,
//   Bed,
//   Bath,
//   Layers,
//   X,
//   ShieldCheck,
//   Phone,
//   Mail,
//   AlertCircle,
//   AlertTriangle,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";
// import { toast } from "sonner";
// import { Sheet, SheetContent } from "@/components/ui/sheet";

// // 🔥 Shadcn Alert Dialog Imports
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
// } from "@/components/ui/alert-dialog";

// // এপিআই হুকসমূহ
// import {
//   useGetAdminAllPropertiesQuery,
//   useApprovePropertyMutation,
//   useDeletePropertyMutation,
// } from "@/redux/slices/propertyApi";

// export default function Ads() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedAd, setSelectedAd] = useState<any>(null);

//   // ডিলিট কনফার্মেশনের জন্য স্টেট
//   const [deleteId, setDeleteId] = useState<string | null>(null);

//   // ১. সব বিজ্ঞাপন ফেচ করা
//   const { data: response, isLoading } =
//     useGetAdminAllPropertiesQuery(undefined);
//   const [approveProperty, { isLoading: isApproving }] =
//     useApprovePropertyMutation();
//   const [deleteProperty, { isLoading: isDeleting }] =
//     useDeletePropertyMutation();

//   const properties = response?.data || [];

//   // ২. সার্চ লজিক
//   const filteredProperties = properties.filter((ad: any) => {
//     const searchString = searchTerm.toLowerCase();
//     return (
//       ad.title.toLowerCase().includes(searchString) ||
//       ad.address.area.toLowerCase().includes(searchString) ||
//       ad.ownerId?.name?.toLowerCase().includes(searchString)
//     );
//   });

//   // ৩. অ্যাপ্রুভ হ্যান্ডলার
//   const handleApprove = async (id: string, currentStatus: boolean) => {
//     try {
//       await approveProperty({ id, isApproved: !currentStatus }).unwrap();
//       toast.success(
//         currentStatus
//           ? "বিজ্ঞাপনটি পেন্ডিং করা হয়েছে"
//           : "বিজ্ঞাপনটি এখন লাইভ!",
//       );
//       if (selectedAd) setSelectedAd(null);
//     } catch (err: any) {
//       toast.error(err?.data?.message || "অ্যাকশন সম্পন্ন করা যায়নি");
//     }
//   };

//   // ৪. রিয়েল ডিলিট হ্যান্ডলার (অ্যালার্ট কনফার্ম হওয়ার পর)
//   const confirmDelete = async () => {
//     if (!deleteId) return;
//     try {
//       await deleteProperty(deleteId).unwrap();
//       toast.success("বিজ্ঞাপনটি সফলভাবে মুছে ফেলা হয়েছে");
//       if (selectedAd?._id === deleteId) setSelectedAd(null);
//       setDeleteId(null); // মডেল বন্ধ করা
//     } catch (err: any) {
//       toast.error(err?.data?.message || "ডিলিট করা সম্ভব হয়নি");
//       setDeleteId(null);
//     }
//   };

//   if (isLoading)
//     return (
//       <div className="h-96 flex flex-col items-center justify-center gap-4 font-heading">
//         <Loader2 className="w-10 h-10 animate-spin text-teal-600" />
//         <p className="text-xs font-black uppercase tracking-widest text-gray-400">
//           লোড হচ্ছে...
//         </p>
//       </div>
//     );

//   return (
//     <div className="space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-700 font-heading">
//       {/* 1. Header & Filters */}
//       <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm">
//         <div className="space-y-1">
//           <h1 className="text-3xl font-black text-gray-900 tracking-tight uppercase">
//             সব <span className="text-teal-600">বিজ্ঞাপন</span> লিস্ট
//           </h1>
//           <p className="text-gray-500 font-medium text-sm">
//             প্ল্যাটফর্মের সকল বাসার বিজ্ঞাপন এখান থেকে নিয়ন্ত্রণ করুন।
//           </p>
//         </div>
//         <div className="relative">
//           <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//           <Input
//             placeholder="সার্চ করুন..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="pl-12 h-12 w-full md:w-64 rounded-2xl border-gray-100 bg-gray-50 focus:bg-white transition-all shadow-sm"
//           />
//         </div>
//       </div>

//       {/* 2. Content Table */}
//       <div className="bg-white rounded-[3rem] border border-gray-100 shadow-sm overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="border-b border-gray-50 bg-gray-50/50 text-[10px] font-black uppercase text-gray-400 tracking-widest">
//                 <th className="px-8 py-6 text-center w-[120px]">ছবি</th>
//                 <th className="px-4 py-6">প্রোপার্টি ডিটেইলস</th>
//                 <th className="px-8 py-6">অবস্থা</th>
//                 <th className="px-8 py-6">ভাড়া (৳)</th>
//                 <th className="px-8 py-6 text-center">অ্যাকশন</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-gray-50">
//               {filteredProperties.map((ad: any) => (
//                 <tr
//                   key={ad._id}
//                   className="group hover:bg-gray-50/50 transition-colors"
//                 >
//                   <td className="px-8 py-5">
//                     <div className="w-20 h-14 rounded-xl overflow-hidden border border-gray-100 shadow-sm mx-auto">
//                       <img
//                         src={ad.images[0]}
//                         className="w-full h-full object-cover"
//                         alt="Home"
//                       />
//                     </div>
//                   </td>
//                   <td className="px-4 py-5">
//                     <p className="text-sm font-black text-gray-900 uppercase tracking-tighter line-clamp-1">
//                       {ad.title}
//                     </p>
//                     <p className="text-[10px] font-bold text-gray-400 flex items-center gap-1">
//                       <UserIcon className="w-3 h-3" />{" "}
//                       {ad.ownerId?.name || "সালেহ আহমেদ"}
//                     </p>
//                   </td>
//                   <td className="px-8 py-5">
//                     <Badge
//                       className={`border-none font-black text-[10px] uppercase px-3 py-1 rounded-full ${ad.isApproved ? "bg-green-50 text-green-600" : "bg-amber-50 text-amber-600"}`}
//                     >
//                       {ad.isApproved ? "Approved" : "Pending"}
//                     </Badge>
//                   </td>
//                   <td className="px-8 py-5 text-lg font-black text-teal-700 italic">
//                     ৳{ad.price.toLocaleString()}
//                   </td>
//                   <td className="px-8 py-5 text-center">
//                     <div className="flex items-center justify-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
//                       <Button
//                         onClick={() => handleApprove(ad._id, ad.isApproved)}
//                         variant="ghost"
//                         className={`p-2.5 rounded-xl transition-all ${ad.isApproved ? "text-red-500 hover:bg-red-50" : "text-teal-600 hover:bg-teal-50"}`}
//                       >
//                         {ad.isApproved ? (
//                           <Ban className="w-4 h-4" />
//                         ) : (
//                           <BadgeCheck className="w-4 h-4" />
//                         )}
//                       </Button>
//                       <button
//                         onClick={() => setSelectedAd(ad)}
//                         className="p-2.5 bg-gray-50 hover:bg-gray-900 hover:text-white rounded-xl transition-all"
//                       >
//                         <Eye className="w-4 h-4" />
//                       </button>

//                       {/* 🔥 ডিলিট ট্রিগার বাটন (মডেল ওপেন করবে) */}
//                       <button
//                         onClick={() => setDeleteId(ad._id)}
//                         className="p-2.5 bg-gray-50 hover:bg-red-500 hover:text-white rounded-xl transition-all"
//                       >
//                         <Trash2 className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* 🛡️ প্রিমিয়াম ডিলিট অ্যালার্ট ডায়ালগ */}
//       <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
//         <AlertDialogContent className="rounded-[2.5rem] p-8 border-none shadow-2xl max-w-md font-heading">
//           <AlertDialogHeader className="space-y-4">
//             <div className="w-16 h-16 bg-red-50 text-red-500 rounded-[1.5rem] flex items-center justify-center mx-auto mb-2">
//               <AlertTriangle className="w-8 h-8" />
//             </div>
//             <AlertDialogTitle className="text-2xl font-black text-center uppercase tracking-tighter text-gray-900">
//               আপনি কি নিশ্চিত?
//             </AlertDialogTitle>
//             <AlertDialogDescription className="text-center font-medium text-gray-500 leading-relaxed">
//               এই বিজ্ঞাপনটি চিরতরে মুছে ফেলা হবে। এই অ্যাকশনটি কোনোভাবেই আন্ডু
//               (Undo) করা সম্ভব নয়। আপনি কি ডিলিট করতে চান?
//             </AlertDialogDescription>
//           </AlertDialogHeader>
//           <AlertDialogFooter className="mt-8 flex flex-row justify-center gap-4 sm:space-x-0">
//             <AlertDialogCancel className="w-full h-14 rounded-2xl font-bold border-gray-200 text-gray-600 hover:bg-gray-50 mt-0">
//               বাতিল করুন
//             </AlertDialogCancel>
//             <AlertDialogAction
//               onClick={confirmDelete}
//               className="w-full h-14 rounded-2xl font-black bg-red-500 hover:bg-red-600 text-white shadow-xl shadow-red-500/20"
//             >
//               {isDeleting ? (
//                 <Loader2 className="w-5 h-5 animate-spin" />
//               ) : (
//                 "হ্যাঁ, ডিলিট করুন"
//               )}
//             </AlertDialogAction>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>

//       {/* 3. ড্রয়ার / ডাইনামিক ভিউ শিট */}
//       <Sheet open={!!selectedAd} onOpenChange={() => setSelectedAd(null)}>
//         <SheetContent
//           side="right"
//           className="w-[50vw] !max-w-[50vw] sm:w-[50vw] overflow-y-auto rounded-l-[3rem] border-l-8 border-teal-600 p-0 [&>button]:hidden"
//         >
//           {/* ... (আপনার ড্রয়ারের আগের সব কোড ঠিক থাকবে, কোনো চেঞ্জ নেই) ... */}
//           {selectedAd && (
//             <div className="flex flex-col h-full bg-white font-heading">
//               <div className="relative h-72 w-full">
//                 <img
//                   src={selectedAd.images[0]}
//                   className="w-full h-full object-cover"
//                   alt=""
//                 />
//                 <button
//                   onClick={() => setSelectedAd(null)}
//                   className="absolute top-6 right-6 p-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl hover:bg-red-50 hover:text-red-500 transition-all active:scale-95 group z-50"
//                 >
//                   <X className="w-5 h-5 text-gray-900 group-hover:text-red-500" />
//                 </button>
//               </div>

//               <div className="p-12 space-y-10">
//                 <div className="space-y-4">
//                   <div className="flex items-center gap-2">
//                     <Badge className="bg-teal-600 text-white border-none uppercase text-[10px] px-3 font-black">
//                       {selectedAd.features.propertyType}
//                     </Badge>
//                     <Badge className="bg-gray-100 text-gray-500 border-none uppercase text-[10px] px-3 font-black">
//                       ID: {selectedAd._id.slice(-6)}
//                     </Badge>
//                   </div>
//                   <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter leading-none">
//                     {selectedAd.title}
//                   </h2>
//                   <p className="flex items-center gap-2 text-gray-400 font-bold text-base">
//                     <MapPin className="w-5 h-5 text-teal-600" />{" "}
//                     {selectedAd.address.fullAddress}
//                   </p>
//                 </div>

//                 <div className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 grid grid-cols-2 gap-8">
//                   <div className="space-y-4">
//                     <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
//                       ল্যান্ডলর্ড ইনফো
//                     </p>
//                     <div className="flex items-center gap-4">
//                       <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
//                         <UserIcon className="w-5 h-5 text-teal-600" />
//                       </div>
//                       <div>
//                         <p className="text-base font-black text-gray-900 uppercase">
//                           {selectedAd.ownerId?.name || "সালেহ আহমেদ"}
//                         </p>
//                         <div className="flex items-center gap-1.5 mt-0.5">
//                           {selectedAd.ownerId?.isVerified ? (
//                             <span className="flex items-center gap-1 text-[9px] font-black text-blue-600 uppercase bg-blue-50 px-2 py-0.5 rounded-full">
//                               <ShieldCheck className="w-3 h-3" /> NID ভেরিফাইড
//                             </span>
//                           ) : (
//                             <span className="flex items-center gap-1 text-[9px] font-black text-red-500 uppercase bg-red-50 px-2 py-0.5 rounded-full">
//                               <AlertCircle className="w-3 h-3" /> আন-ভেরিফাইড
//                             </span>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="space-y-4 border-l border-gray-200 pl-8">
//                     <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
//                       কন্টাক্ট ডিটেইলস
//                     </p>
//                     <div className="space-y-1">
//                       <p className="text-sm font-black text-gray-700 flex items-center gap-2">
//                         <Phone className="w-3 h-3 text-teal-600" />{" "}
//                         {selectedAd.ownerId?.phone || "০১৭XXXXXXXX"}
//                       </p>
//                       <p className="text-sm font-black text-gray-700 flex items-center gap-2">
//                         <Mail className="w-3 h-3 text-teal-600" />{" "}
//                         {selectedAd.ownerId?.email || "user@gmail.com"}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-3 gap-4">
//                   <StatBox
//                     icon={<Bed />}
//                     label="বেডরুম"
//                     value={selectedAd.features.bedrooms}
//                   />
//                   <StatBox
//                     icon={<Bath />}
//                     label="বাথরুম"
//                     value={selectedAd.features.bathrooms}
//                   />
//                   <StatBox
//                     icon={<Layers />}
//                     label="বারান্দা"
//                     value={selectedAd.features.balcony}
//                   />
//                 </div>

//                 <div className="space-y-3">
//                   <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
//                     বিস্তারিত বর্ণনা
//                   </h4>
//                   <p className="text-gray-600 font-medium text-sm leading-relaxed">
//                     {selectedAd.description}
//                   </p>
//                 </div>

//                 <div className="pt-8 border-t border-gray-100 flex items-center justify-between gap-6">
//                   <div className="flex flex-col">
//                     <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
//                       মাসিক ভাড়া
//                     </span>
//                     <span className="text-4xl font-black text-teal-700 italic tracking-tighter">
//                       ৳{selectedAd.price.toLocaleString()}
//                     </span>
//                   </div>
//                   <Button
//                     onClick={() =>
//                       handleApprove(selectedAd._id, selectedAd.isApproved)
//                     }
//                     disabled={isApproving}
//                     className={`h-16 px-10 rounded-2xl font-black uppercase tracking-widest shadow-xl transition-all active:scale-95 text-white ${
//                       selectedAd.isApproved
//                         ? "bg-red-500 hover:bg-red-600"
//                         : "bg-teal-600 hover:bg-teal-700"
//                     }`}
//                   >
//                     {isApproving ? (
//                       <Loader2 className="animate-spin" />
//                     ) : selectedAd.isApproved ? (
//                       "Reject / Suspend"
//                     ) : (
//                       "Approve & Publish"
//                     )}
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </SheetContent>
//       </Sheet>

//       {/* Summary Footer */}
//       <div className="bg-[#051c1e] p-10 rounded-[3.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-teal-900/20">
//         <div className="flex gap-12">
//           <div className="text-center">
//             <p className="text-[10px] font-black text-teal-400 uppercase tracking-widest mb-1">
//               মোট বিজ্ঞাপন
//             </p>
//             <p className="text-3xl font-black">{properties.length} টি</p>
//           </div>
//           <div className="text-center border-l border-white/10 pl-12">
//             <p className="text-[10px] font-black text-teal-400 uppercase tracking-widest mb-1">
//               পেন্ডিং
//             </p>
//             <p className="text-3xl font-black text-amber-400">
//               {properties.filter((p: any) => !p.isApproved).length} টি
//             </p>
//           </div>
//         </div>
//         <Button className="bg-teal-500 hover:bg-teal-400 text-white h-14 rounded-2xl px-10 font-black">
//           রিপোর্ট জেনারেট করুন
//         </Button>
//       </div>
//     </div>
//   );
// }

// function StatBox({ icon, label, value }: any) {
//   return (
//     <div className="bg-teal-50/50 p-5 rounded-3xl text-center border border-teal-100 transition-all hover:bg-teal-50">
//       <div className="text-teal-600 mb-1 flex justify-center">{icon}</div>
//       <p className="text-[9px] font-black text-gray-400 uppercase">{label}</p>
//       <p className="text-sm font-black text-gray-900">{value} টি</p>
//     </div>
//   );
// }

import React, { useState } from "react";
import {
  Search,
  Filter,
  Trash2,
  Eye,
  BadgeCheck,
  Clock,
  Ban,
  MapPin,
  User as UserIcon,
  Loader2,
  Bed,
  Bath,
  Layers,
  X,
  ShieldCheck,
  Phone,
  Mail,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Sheet, SheetContent } from "@/components/ui/sheet";

// 🔥 Shadcn Alert Dialog Imports
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

// এপিআই হুকসমূহ
import {
  useGetAdminAllPropertiesQuery,
  useApprovePropertyMutation,
  useDeletePropertyMutation,
} from "@/redux/slices/propertyApi";

export default function Ads() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAd, setSelectedAd] = useState<any>(null);

  // ডিলিট কনফার্মেশনের জন্য স্টেট
  const [deleteId, setDeleteId] = useState<string | null>(null);

  // ১. সব বিজ্ঞাপন ফেচ করা
  const { data: response, isLoading } =
    useGetAdminAllPropertiesQuery(undefined);
  const [approveProperty, { isLoading: isApproving }] =
    useApprovePropertyMutation();
  const [deleteProperty, { isLoading: isDeleting }] =
    useDeletePropertyMutation();

  const properties = response?.data || [];

  // ২. সার্চ লজিক
  const filteredProperties = properties.filter((ad: any) => {
    const searchString = searchTerm.toLowerCase();
    return (
      ad.title.toLowerCase().includes(searchString) ||
      ad.address.area.toLowerCase().includes(searchString) ||
      ad.ownerId?.name?.toLowerCase().includes(searchString)
    );
  });

  // ৩. অ্যাপ্রুভ হ্যান্ডলার
  const handleApprove = async (id: string, currentStatus: boolean) => {
    try {
      await approveProperty({ id, isApproved: !currentStatus }).unwrap();
      toast.success(
        currentStatus
          ? "বিজ্ঞাপনটি পেন্ডিং করা হয়েছে"
          : "বিজ্ঞাপনটি এখন লাইভ!",
      );
      if (selectedAd) setSelectedAd(null);
    } catch (err: any) {
      toast.error(err?.data?.message || "অ্যাকশন সম্পন্ন করা যায়নি");
    }
  };

  // ৪. রিয়েল ডিলিট হ্যান্ডলার
  const confirmDelete = async () => {
    if (!deleteId) return;
    try {
      await deleteProperty(deleteId).unwrap();
      toast.success("বিজ্ঞাপনটি সফলভাবে মুছে ফেলা হয়েছে");
      if (selectedAd?._id === deleteId) setSelectedAd(null);
      setDeleteId(null);
    } catch (err: any) {
      toast.error(err?.data?.message || "ডিলিট করা সম্ভব হয়নি");
      setDeleteId(null);
    }
  };

  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center gap-4 h-96 font-heading">
        <Loader2 className="w-10 h-10 animate-spin text-teal-600" />
        <p className="text-xs font-black tracking-widest text-gray-400 uppercase">
          লোড হচ্ছে...
        </p>
      </div>
    );

  return (
    <div className="space-y-8 duration-700 animate-in fade-in slide-in-from-bottom-6 font-heading">
      {/* 1. Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-8 rounded-[3rem] border border-gray-100 shadow-sm">
        <div className="space-y-1">
          <h1 className="text-3xl font-black tracking-tight text-gray-900 uppercase">
            সব <span className="text-teal-600">বিজ্ঞাপন</span> লিস্ট
          </h1>
          <p className="text-sm font-medium text-gray-500">
            প্ল্যাটফর্মের সকল বাসার বিজ্ঞাপন এখান থেকে নিয়ন্ত্রণ করুন।
          </p>
        </div>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="সার্চ করুন..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 h-12 w-full md:w-64 rounded-2xl border-gray-100 bg-gray-50 focus:bg-white transition-all shadow-sm"
          />
        </div>
      </div>

      {/* 2. Content Table */}
      <div className="overflow-hidden bg-white border border-gray-100 shadow-sm rounded-[3rem]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-50 bg-gray-50/50 text-[10px] font-black uppercase text-gray-400 tracking-widest">
                <th className="px-8 py-6 text-center w-[120px]">ছবি</th>
                <th className="px-4 py-6">প্রোপার্টি ডিটেইলস</th>
                <th className="px-8 py-6">অবস্থা</th>
                <th className="px-8 py-6">ভাড়া (৳)</th>
                <th className="px-8 py-6 text-center">অ্যাকশন</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredProperties.map((ad: any) => (
                <tr
                  key={ad._id}
                  className="transition-colors group hover:bg-gray-50/50"
                >
                  <td className="px-8 py-5">
                    <div className="w-20 h-14 rounded-xl overflow-hidden border border-gray-100 shadow-sm mx-auto">
                      <img
                        src={ad.images[0]}
                        className="block w-full h-full object-cover"
                        alt="Home"
                      />
                    </div>
                  </td>
                  <td className="px-4 py-5">
                    <p className="text-sm font-black text-gray-900 uppercase tracking-tighter line-clamp-1">
                      {ad.title}
                    </p>
                    <p className="text-[10px] font-bold text-gray-400 flex items-center gap-1">
                      <UserIcon className="w-3 h-3" />{" "}
                      {ad.ownerId?.name || "সালেহ আহমেদ"}
                    </p>
                  </td>
                  <td className="px-8 py-5">
                    <Badge
                      className={`border-none font-black text-[10px] uppercase px-3 py-1 rounded-full ${ad.isApproved ? "bg-green-50 text-green-600" : "bg-amber-50 text-amber-600"}`}
                    >
                      {ad.isApproved ? "Approved" : "Pending"}
                    </Badge>
                  </td>
                  <td className="px-8 py-5 text-lg italic font-black text-teal-700">
                    ৳{ad.price.toLocaleString()}
                  </td>
                  <td className="px-8 py-5 text-center">
                    <div className="flex items-center justify-center gap-2 transition-opacity opacity-60 group-hover:opacity-100">
                      <Button
                        onClick={() => handleApprove(ad._id, ad.isApproved)}
                        variant="ghost"
                        className={`p-2.5 rounded-xl transition-all ${ad.isApproved ? "text-red-500 hover:bg-red-50" : "text-teal-600 hover:bg-teal-50"}`}
                      >
                        {ad.isApproved ? (
                          <Ban className="w-4 h-4" />
                        ) : (
                          <BadgeCheck className="w-4 h-4" />
                        )}
                      </Button>
                      <button
                        onClick={() => setSelectedAd(ad)}
                        className="p-2.5 bg-gray-50 hover:bg-gray-900 hover:text-white rounded-xl transition-all"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      {/* 🔥 ডিলিট ট্রিগার বাটন */}
                      <button
                        onClick={() => setDeleteId(ad._id)}
                        className="p-2.5 bg-gray-50 hover:bg-red-500 hover:text-white rounded-xl transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 🛡️ ফিক্সড প্রিমিয়াম ডিলিট অ্যালার্ট ডায়ালগ */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent className="rounded-[2.5rem] p-10 border-none shadow-2xl max-w-[420px] font-heading flex flex-col items-center justify-center">
          <AlertDialogHeader className="flex flex-col items-center w-full space-y-4">
            <div className="flex items-center justify-center w-20 h-20 mb-2 text-red-500 bg-red-50 rounded-[1.5rem]">
              <Trash2 className="w-10 h-10" />
            </div>
            <AlertDialogTitle className="text-3xl font-black text-center text-gray-900 uppercase tracking-tighter">
              আপনি কি নিশ্চিত?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-base font-medium leading-relaxed text-center text-gray-500">
              এই বিজ্ঞাপনটি চিরতরে মুছে ফেলা হবে। এই অ্যাকশনটি আন্ডু (Undo) করা
              সম্ভব নয়।
            </AlertDialogDescription>
          </AlertDialogHeader>

          {/* 🔥 Grid Layout for perfect side-by-side buttons */}
          <div className="grid w-full grid-cols-2 gap-4 mt-8">
            <AlertDialogCancel className="w-full h-14 m-0 rounded-2xl font-bold border-gray-200 text-gray-600 hover:bg-gray-50 text-base">
              বাতিল করুন
            </AlertDialogCancel>
            <Button
              onClick={confirmDelete}
              disabled={isDeleting}
              className="w-full h-14 m-0 rounded-2xl font-black bg-red-500 hover:bg-red-600 text-white shadow-xl shadow-red-500/20 text-base"
            >
              {isDeleting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                "হ্যাঁ, ডিলিট করুন"
              )}
            </Button>
          </div>
        </AlertDialogContent>
      </AlertDialog>

      {/* 3. ড্রয়ার / ডাইনামিক ভিউ শিট */}
      <Sheet open={!!selectedAd} onOpenChange={() => setSelectedAd(null)}>
        <SheetContent
          side="right"
          className="w-[50vw] !max-w-[50vw] sm:w-[50vw] overflow-y-auto rounded-l-[3rem] border-l-8 border-teal-600 p-0 [&>button]:hidden"
        >
          {selectedAd && (
            <div className="flex flex-col h-full bg-white font-heading">
              <div className="relative w-full h-72">
                <img
                  src={selectedAd.images[0]}
                  className="block w-full h-full object-cover"
                  alt=""
                />
                <button
                  onClick={() => setSelectedAd(null)}
                  className="absolute top-6 right-6 p-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl hover:bg-red-50 hover:text-red-500 transition-all active:scale-95 group z-50"
                >
                  <X className="w-5 h-5 text-gray-900 group-hover:text-red-500" />
                </button>
              </div>

              <div className="p-12 space-y-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-teal-600 text-white border-none uppercase text-[10px] px-3 font-black">
                      {selectedAd.features.propertyType}
                    </Badge>
                    <Badge className="bg-gray-100 text-gray-500 border-none uppercase text-[10px] px-3 font-black">
                      ID: {selectedAd._id.slice(-6)}
                    </Badge>
                  </div>
                  <h2 className="text-4xl font-black leading-none text-gray-900 uppercase tracking-tighter">
                    {selectedAd.title}
                  </h2>
                  <p className="flex items-center gap-2 text-base font-bold text-gray-400">
                    <MapPin className="w-5 h-5 text-teal-600" />{" "}
                    {selectedAd.address.fullAddress}
                  </p>
                </div>

                <div className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 grid grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      ল্যান্ডলর্ড ইনফো
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-white border border-gray-100 shadow-sm rounded-xl">
                        <UserIcon className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <p className="text-base font-black text-gray-900 uppercase">
                          {selectedAd.ownerId?.name || "সালেহ আহমেদ"}
                        </p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          {selectedAd.ownerId?.isVerified ? (
                            <span className="flex items-center gap-1 text-[9px] font-black text-blue-600 uppercase bg-blue-50 px-2 py-0.5 rounded-full">
                              <ShieldCheck className="w-3 h-3" /> NID ভেরিফাইড
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-[9px] font-black text-red-500 uppercase bg-red-50 px-2 py-0.5 rounded-full">
                              <AlertCircle className="w-3 h-3" /> আন-ভেরিফাইড
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pl-8 border-l border-gray-200 space-y-4">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      কন্টাক্ট ডিটেইলস
                    </p>
                    <div className="space-y-1">
                      <p className="flex items-center gap-2 text-sm font-black text-gray-700">
                        <Phone className="w-3 h-3 text-teal-600" />{" "}
                        {selectedAd.ownerId?.phone || "০১৭XXXXXXXX"}
                      </p>
                      <p className="flex items-center gap-2 text-sm font-black text-gray-700">
                        <Mail className="w-3 h-3 text-teal-600" />{" "}
                        {selectedAd.ownerId?.email || "user@gmail.com"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <StatBox
                    icon={<Bed />}
                    label="বেডরুম"
                    value={selectedAd.features.bedrooms}
                  />
                  <StatBox
                    icon={<Bath />}
                    label="বাথরুম"
                    value={selectedAd.features.bathrooms}
                  />
                  <StatBox
                    icon={<Layers />}
                    label="বারান্দা"
                    value={selectedAd.features.balcony}
                  />
                </div>

                <div className="space-y-3">
                  <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                    বিস্তারিত বর্ণনা
                  </h4>
                  <p className="text-sm font-medium leading-relaxed text-gray-600">
                    {selectedAd.description}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-6 pt-8 border-t border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                      মাসিক ভাড়া
                    </span>
                    <span className="text-4xl italic font-black text-teal-700 tracking-tighter">
                      ৳{selectedAd.price.toLocaleString()}
                    </span>
                  </div>
                  <Button
                    onClick={() =>
                      handleApprove(selectedAd._id, selectedAd.isApproved)
                    }
                    disabled={isApproving}
                    className={`h-16 px-10 rounded-2xl font-black uppercase tracking-widest shadow-xl transition-all active:scale-95 text-white ${
                      selectedAd.isApproved
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-teal-600 hover:bg-teal-700"
                    }`}
                  >
                    {isApproving ? (
                      <Loader2 className="animate-spin" />
                    ) : selectedAd.isApproved ? (
                      "Reject / Suspend"
                    ) : (
                      "Approve & Publish"
                    )}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>

      {/* Summary Footer */}
      <div className="bg-[#051c1e] p-10 rounded-[3.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-teal-900/20">
        <div className="flex gap-12">
          <div className="text-center">
            <p className="text-[10px] font-black text-teal-400 uppercase tracking-widest mb-1">
              মোট বিজ্ঞাপন
            </p>
            <p className="text-3xl font-black">{properties.length} টি</p>
          </div>
          <div className="pl-12 text-center border-l border-white/10">
            <p className="text-[10px] font-black text-teal-400 uppercase tracking-widest mb-1">
              পেন্ডিং
            </p>
            <p className="text-3xl font-black text-amber-400">
              {properties.filter((p: any) => !p.isApproved).length} টি
            </p>
          </div>
        </div>
        <Button className="h-14 px-10 font-black text-white transition-all border-none shadow-xl bg-teal-500 hover:bg-teal-400 rounded-2xl shadow-teal-500/20 active:scale-95">
          রিপোর্ট জেনারেট করুন
        </Button>
      </div>
    </div>
  );
}

function StatBox({ icon, label, value }: any) {
  return (
    <div className="p-5 text-center transition-all border border-teal-100 bg-teal-50/50 rounded-3xl hover:bg-teal-50">
      <div className="flex justify-center mb-1 text-teal-600">{icon}</div>
      <p className="text-[9px] font-black text-gray-400 uppercase">{label}</p>
      <p className="text-sm font-black text-gray-900">{value} টি</p>
    </div>
  );
}
