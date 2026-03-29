// import React, { useState, useRef } from "react";
// import {
//   User,
//   Mail,
//   Phone,
//   MapPin,
//   Camera,
//   ShieldCheck,
//   Key,
//   LogOut,
//   Edit3,
//   ExternalLink,
//   BadgeCheck,
//   ShieldAlert,
//   ArrowRight,
//   Loader2,
// } from "lucide-react";
// import { useAppSelector, useAppDispatch } from "@/redux/hooks";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { toast } from "sonner";
// import {
//   logoutUser,
//   updateProfile,
//   updateAvatar,
// } from "../../../redux/slices/authSlice";
// import { useNavigate } from "react-router-dom";

// export default function UserProfile() {
//   const { user } = useAppSelector((state) => state.auth);
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const role = user?.role || "tenant";

//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

//   // এডিট ফরমের জন্য স্টেট
//   const [formData, setFormData] = useState({
//     name: user?.name || "",
//     phone: user?.phone || "",
//   });

//   // ১. প্রোফাইল পিকচার আপলোড হ্যান্ডলার
//   const handleAvatarClick = () => fileInputRef.current?.click();

//   const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const updateFormData = new FormData();
//       updateFormData.append("avatar", file);

//       const toastId = toast.loading("ছবি আপলোড হচ্ছে...");
//       try {
//         // @ts-ignore
//         await dispatch(updateAvatar(updateFormData)).unwrap();
//         toast.success("প্রোফাইল ছবি সফলভাবে আপডেট হয়েছে", { id: toastId });
//       } catch (err: any) {
//         toast.error(err || "ছবি আপলোড ব্যর্থ হয়েছে", { id: toastId });
//       }
//     }
//   };

//   // ২. প্রোফাইল তথ্য আপডেট হ্যান্ডলার
//   const handleUpdateProfile = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const toastId = toast.loading("তথ্য আপডেট হচ্ছে...");
//     try {
//       // @ts-ignore
//       await dispatch(
//         updateProfile({ name: formData.name, phone: formData.phone }),
//       ).unwrap();
//       toast.success("প্রোফাইল তথ্য আপডেট করা হয়েছে!", { id: toastId });
//       setIsEditDialogOpen(false);
//     } catch (err: any) {
//       toast.error(err || "আপডেট করতে সমস্যা হয়েছে", { id: toastId });
//     }
//   };

//   // ৩. হ্যান্ডলার: লগ আউট
//   const handleLogout = () => {
//     dispatch(logoutUser());
//     toast.success("লগ আউট সফল হয়েছে");
//     navigate("/login");
//   };

//   return (
//     <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
//       {/* 1. Header Card */}
//       <div className="relative bg-white rounded-[3rem] border border-gray-100 p-8 shadow-sm overflow-hidden group">
//         <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl -mr-32 -mt-32 transition-transform group-hover:scale-110 duration-700"></div>

//         <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
//           {/* Avatar Section */}
//           <div className="relative">
//             <div className="w-32 h-32 md:w-44 md:h-44 rounded-[2.5rem] border-4 border-teal-50 p-1.5 shadow-xl transition-transform hover:rotate-3 duration-500 bg-white overflow-hidden">
//               <img
//                 src={
//                   user?.avatar ||
//                   `https://ui-avatars.com/api/?name=${user?.name}&background=0d9488&color=fff&bold=true`
//                 }
//                 alt="Profile"
//                 className="w-full h-full object-cover rounded-[2rem]"
//               />
//             </div>
//             <input
//               type="file"
//               ref={fileInputRef}
//               onChange={handleFileChange}
//               className="hidden"
//               accept="image/*"
//             />
//             <button
//               onClick={handleAvatarClick}
//               className="absolute -bottom-2 -right-2 p-3 bg-[#051c1e] text-white rounded-2xl shadow-xl hover:bg-teal-600 transition-all active:scale-90"
//             >
//               <Camera className="w-5 h-5" />
//             </button>
//           </div>

//           <div className="flex-1 text-center md:text-left space-y-2">
//             <div className="flex flex-col md:flex-row md:items-center gap-3">
//               <h1 className="text-4xl font-black text-gray-900 tracking-tighter flex items-center justify-center md:justify-start gap-2">
//                 {user?.name}
//                 {user?.isVerified && (
//                   <BadgeCheck className="w-7 h-7 text-teal-500 fill-teal-50 shadow-sm" />
//                 )}
//               </h1>
//               <span className="px-4 py-1.5 bg-[#051c1e] text-white text-[10px] font-black uppercase rounded-full tracking-widest shadow-lg shadow-teal-900/20">
//                 {role === "tenant"
//                   ? "ভাড়াটিয়া"
//                   : role === "landlord"
//                     ? "বাড়িওয়ালা"
//                     : "অ্যাডমিন"}
//               </span>
//             </div>
//             <p className="text-gray-400 font-medium flex items-center justify-center md:justify-start gap-2">
//               <Mail className="w-4 h-4" /> {user?.email}
//             </p>
//           </div>

//           {/* Edit Profile Modal */}
//           <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
//             <DialogTrigger asChild>
//               <Button className="bg-teal-600 hover:bg-teal-700 h-14 rounded-2xl px-8 gap-2 font-black shadow-xl shadow-teal-600/20 transition-all active:scale-95">
//                 <Edit3 className="w-5 h-5" /> প্রোফাইল এডিট
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-[425px] rounded-[2rem] border-none shadow-2xl">
//               <DialogHeader>
//                 <DialogTitle className="text-2xl font-black text-gray-900 uppercase">
//                   তথ্য পরিবর্তন করুন
//                 </DialogTitle>
//               </DialogHeader>
//               <form onSubmit={handleUpdateProfile} className="space-y-6 py-4">
//                 <div className="space-y-2">
//                   <Label className="font-bold text-gray-500">আপনার নাম</Label>
//                   <Input
//                     value={formData.name}
//                     onChange={(e) =>
//                       setFormData({ ...formData, name: e.target.value })
//                     }
//                     className="h-12 rounded-xl border-gray-100 focus:ring-teal-500"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label className="font-bold text-gray-500">ফোন নম্বর</Label>
//                   <Input
//                     value={formData.phone}
//                     onChange={(e) =>
//                       setFormData({ ...formData, phone: e.target.value })
//                     }
//                     className="h-12 rounded-xl border-gray-100 focus:ring-teal-500"
//                   />
//                 </div>
//                 <DialogFooter>
//                   <Button
//                     type="submit"
//                     className="w-full bg-[#051c1e] h-12 rounded-xl font-black active:scale-95 transition-transform"
//                   >
//                     সেভ করুন
//                   </Button>
//                 </DialogFooter>
//               </form>
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>

//       {/* 2. Grid Sections (Contacts, Security, Status) */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2 space-y-8">
//           <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-10">
//             <h3 className="text-xl font-black text-gray-900 border-l-4 border-teal-600 pl-4 uppercase tracking-tight">
//               যোগাযোগের তথ্য
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//               {[
//                 { label: "পূর্ণ নাম", value: user?.name, icon: User },
//                 { label: "ইমেইল অ্যাড্রেস", value: user?.email, icon: Mail },
//                 {
//                   label: "ফোন নম্বর",
//                   value: user?.phone || "সংযুক্ত নেই",
//                   icon: Phone,
//                 },
//                 { label: "বর্তমান শহর", value: "ঢাকা, বাংলাদেশ", icon: MapPin },
//               ].map((item, i) => (
//                 <div key={i} className="group cursor-default">
//                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 mb-2 transition-colors group-hover:text-teal-600">
//                     <item.icon className="w-3 h-3" /> {item.label}
//                   </p>
//                   <p className="text-lg font-bold text-gray-800 bg-gray-50 p-4 rounded-2xl border border-transparent group-hover:border-teal-100 group-hover:bg-white transition-all">
//                     {item.value}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="space-y-8">
//           {/* Security Card */}
//           <div className="bg-[#051c1e] p-8 rounded-[3rem] text-white shadow-2xl shadow-teal-900/30">
//             <h3 className="text-xl font-black mb-6">নিরাপত্তা সেটিং</h3>
//             <div className="space-y-4">
//               <button className="w-full flex items-center justify-between p-5 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/5 group">
//                 <div className="flex items-center gap-3 text-sm font-bold tracking-tight">
//                   <Key className="w-5 h-5 text-teal-400" /> পাসওয়ার্ড পরিবর্তন
//                 </div>
//                 <ArrowRight className="w-4 h-4 text-gray-500 group-hover:translate-x-1 transition-transform" />
//               </button>

//               <button
//                 onClick={handleLogout}
//                 className="w-full flex items-center justify-center gap-3 p-5 bg-red-500/10 text-red-400 rounded-2xl hover:bg-red-500 hover:text-white transition-all font-black border border-red-500/20 active:scale-95"
//               >
//                 <LogOut className="w-5 h-5" /> লগ আউট
//               </button>
//             </div>
//           </div>

//           {/* Verification Status Card */}
//           <div
//             className={`p-8 rounded-[3rem] border-2 transition-all duration-500 ${user?.isVerified ? "bg-green-50/50 border-green-100" : "bg-amber-50/50 border-amber-100 animate-pulse"}`}
//           >
//             <div className="flex flex-col items-center text-center space-y-4">
//               <div
//                 className={`w-16 h-16 rounded-2xl flex items-center justify-center ${user?.isVerified ? "bg-green-500 text-white shadow-lg shadow-green-200" : "bg-amber-500 text-white shadow-lg shadow-amber-200"}`}
//               >
//                 {user?.isVerified ? (
//                   <ShieldCheck className="w-8 h-8" />
//                 ) : (
//                   <ShieldAlert className="w-8 h-8" />
//                 )}
//               </div>
//               <div>
//                 <h4
//                   className={`text-xl font-black ${user?.isVerified ? "text-green-700" : "text-amber-700"}`}
//                 >
//                   {user?.isVerified ? "ভেরিফাইড প্রোফাইল" : "অপেক্ষা করুন"}
//                 </h4>
//                 <p className="text-xs font-bold text-gray-500 mt-2 leading-relaxed">
//                   {user?.isVerified
//                     ? "আপনার অ্যাকাউন্টটি সম্পূর্ণ ভেরিফাইড।"
//                     : "আপনার এনআইডি কার্ডটি ভেরিফিকেশনের জন্য অপেক্ষায় আছে।"}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* NID Guide (Only for unverified) */}
//       {!user?.isVerified && (
//         <div className="bg-white p-8 md:p-10 rounded-[3rem] border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group">
//           <div className="absolute top-0 left-0 w-2 h-full bg-amber-500 transition-all group-hover:w-4"></div>
//           <div className="p-5 bg-amber-50 rounded-[2rem] text-amber-600">
//             <ShieldAlert className="w-10 h-10" />
//           </div>
//           <div className="flex-1 space-y-2">
//             <h3 className="text-xl font-black text-gray-900 uppercase italic tracking-tighter">
//               এনআইডি ভেরিফিকেশন কেন প্রয়োজন?
//             </h3>
//             <p className="text-gray-500 font-medium leading-relaxed">
//               সবার নিরাপত্তা নিশ্চিত করতে আপনার দেওয়া এনআইডি কার্ডটি অ্যাডমিন
//               ম্যানুয়ালি চেক করছে। ১২-২৪ ঘণ্টার মধ্যে সম্পন্ন হয়ে যায়।
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// import React, { useState, useRef } from "react";
// import {
//   User,
//   Mail,
//   Phone,
//   MapPin,
//   Camera,
//   ShieldCheck,
//   Key,
//   LogOut,
//   Edit3,
//   BadgeCheck,
//   ShieldAlert,
//   ArrowRight,
//   Loader2,
// } from "lucide-react";
// import { useAppSelector, useAppDispatch } from "@/redux/hooks";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { toast } from "sonner";
// import {
//   logoutUser,
//   updateProfile,
//   updateAvatar,
//   updatePassword,
// } from "../../../redux/slices/authSlice";
// import { useNavigate } from "react-router-dom";

// export default function UserProfile() {
//   const { user } = useAppSelector((state) => state.auth);
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const role = user?.role || "tenant";

//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
//   const [isPassDialogOpen, setIsPassDialogOpen] = useState(false);

//   const [formData, setFormData] = useState({
//     name: user?.name || "",
//     phone: user?.phone || "",
//   });

//   const [passData, setPassData] = useState({
//     currentPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//   });

//   const handleAvatarClick = () => fileInputRef.current?.click();

//   const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const updateFormData = new FormData();
//       updateFormData.append("avatar", file);
//       const toastId = toast.loading("ছবি আপলোড হচ্ছে...");
//       try {
//         // @ts-ignore
//         await dispatch(updateAvatar(updateFormData)).unwrap();
//         toast.success("প্রোফাইল ছবি আপডেট হয়েছে", { id: toastId });
//       } catch (err: any) {
//         toast.error(err || "ছবি আপলোড ব্যর্থ হয়েছে", { id: toastId });
//       }
//     }
//   };

//   const handleUpdateProfile = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const toastId = toast.loading("তথ্য আপডেট হচ্ছে...");
//     try {
//       // @ts-ignore
//       await dispatch(
//         updateProfile({ name: formData.name, phone: formData.phone }),
//       ).unwrap();
//       toast.success("প্রোফাইল তথ্য আপডেট হয়েছে!", { id: toastId });
//       setIsEditDialogOpen(false);
//     } catch (err: any) {
//       toast.error(err || "আপডেট করতে সমস্যা হয়েছে", { id: toastId });
//     }
//   };

//   const handleUpdatePassword = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (passData.newPassword !== passData.confirmPassword) {
//       return toast.error("নতুন পাসওয়ার্ড দুটি মিলছে না!");
//     }
//     const toastId = toast.loading("পাসওয়ার্ড পরিবর্তন হচ্ছে...");
//     try {
//       // @ts-ignore
//       await dispatch(
//         updatePassword({
//           currentPassword: passData.currentPassword,
//           newPassword: passData.newPassword,
//         }),
//       ).unwrap();
//       toast.success("পাসওয়ার্ড পরিবর্তন হয়েছে!", { id: toastId });
//       setIsPassDialogOpen(false);
//       setPassData({
//         currentPassword: "",
//         newPassword: "",
//         confirmPassword: "",
//       });
//     } catch (err: any) {
//       toast.error(err || "পাসওয়ার্ড পরিবর্তনে সমস্যা হয়েছে", { id: toastId });
//     }
//   };

//   const handleLogout = () => {
//     dispatch(logoutUser());
//     toast.success("লগ আউট সফল হয়েছে");
//     navigate("/login");
//   };

//   return (
//     <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 pb-20">
//       {/* Header Card */}
//       <div className="relative bg-white rounded-[3rem] border border-gray-100 p-8 shadow-sm overflow-hidden">
//         <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl -mr-32 -mt-32"></div>
//         <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
//           <div className="relative">
//             <div className="w-32 h-32 md:w-44 md:h-44 rounded-[2.5rem] border-4 border-teal-50 p-1.5 shadow-xl bg-white overflow-hidden">
//               <img
//                 src={
//                   user?.avatar ||
//                   `https://ui-avatars.com/api/?name=${user?.name}&background=0d9488&color=fff&bold=true`
//                 }
//                 alt="Profile"
//                 className="w-full h-full object-cover rounded-[2rem]"
//               />
//             </div>
//             <input
//               type="file"
//               ref={fileInputRef}
//               onChange={handleFileChange}
//               className="hidden"
//               accept="image/*"
//             />
//             <button
//               onClick={handleAvatarClick}
//               className="absolute -bottom-2 -right-2 p-3 bg-[#051c1e] text-white rounded-2xl shadow-xl hover:bg-teal-600 transition-all active:scale-90"
//             >
//               <Camera className="w-5 h-5" />
//             </button>
//           </div>

//           <div className="flex-1 text-center md:text-left space-y-2">
//             <div className="flex flex-col md:flex-row md:items-center gap-3">
//               <h1 className="text-4xl font-black text-gray-900 tracking-tighter flex items-center justify-center md:justify-start gap-2">
//                 {user?.name}
//                 {user?.isVerified && (
//                   <BadgeCheck className="w-7 h-7 text-teal-500 fill-teal-50" />
//                 )}
//               </h1>
//               <span className="px-4 py-1.5 bg-[#051c1e] text-white text-[10px] font-black uppercase rounded-full tracking-widest shadow-lg">
//                 {role === "tenant"
//                   ? "ভাড়াটিয়া"
//                   : role === "landlord"
//                     ? "বাড়িওয়ালা"
//                     : "অ্যাডমিন"}
//               </span>
//             </div>
//             <p className="text-gray-400 font-medium flex items-center justify-center md:justify-start gap-2">
//               <Mail className="w-4 h-4" /> {user?.email}
//             </p>
//           </div>

//           <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
//             <DialogTrigger asChild>
//               <Button className="bg-teal-600 hover:bg-teal-700 h-14 rounded-2xl px-8 gap-2 font-black shadow-xl active:scale-95">
//                 <Edit3 className="w-5 h-5" /> প্রোফাইল এডিট
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-[425px] rounded-[2rem] border-none shadow-2xl p-8">
//               <DialogHeader>
//                 <DialogTitle className="text-2xl font-black text-gray-900 uppercase">
//                   তথ্য পরিবর্তন
//                 </DialogTitle>
//               </DialogHeader>
//               <form onSubmit={handleUpdateProfile} className="space-y-6 py-4">
//                 <div className="space-y-2">
//                   <Label className="font-bold text-gray-500">আপনার নাম</Label>
//                   <Input
//                     value={formData.name}
//                     onChange={(e) =>
//                       setFormData({ ...formData, name: e.target.value })
//                     }
//                     className="h-12 rounded-xl border-gray-100"
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label className="font-bold text-gray-500">ফোন নম্বর</Label>
//                   <Input
//                     value={formData.phone}
//                     onChange={(e) =>
//                       setFormData({ ...formData, phone: e.target.value })
//                     }
//                     className="h-12 rounded-xl border-gray-100"
//                   />
//                 </div>
//                 <DialogFooter>
//                   <Button
//                     type="submit"
//                     className="w-full bg-[#051c1e] h-12 rounded-xl font-black active:scale-95 transition-all"
//                   >
//                     সেভ করুন
//                   </Button>
//                 </DialogFooter>
//               </form>
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2 space-y-8">
//           <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-10">
//             <h3 className="text-xl font-black text-gray-900 border-l-4 border-teal-600 pl-4 uppercase tracking-tight">
//               যোগাযোগের তথ্য
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//               {[
//                 { label: "পূর্ণ নাম", value: user?.name, icon: User },
//                 { label: "ইমেইল অ্যাড্রেস", value: user?.email, icon: Mail },
//                 {
//                   label: "ফোন নম্বর",
//                   value: user?.phone || "সংযুক্ত নেই",
//                   icon: Phone,
//                 },
//                 { label: "বর্তমান শহর", value: "ঢাকা, বাংলাদেশ", icon: MapPin },
//               ].map((item, i) => (
//                 <div key={i} className="group cursor-default">
//                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 mb-2 transition-colors group-hover:text-teal-600 font-heading">
//                     <item.icon className="w-3 h-3" /> {item.label}
//                   </p>
//                   <p className="text-lg font-bold text-gray-800 bg-gray-50 p-4 rounded-2xl border border-transparent transition-all">
//                     {item.value}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="space-y-8">
//           <div className="bg-[#051c1e] p-8 rounded-[3rem] text-white shadow-2xl">
//             <h3 className="text-xl font-black mb-6 font-heading tracking-tight">
//               নিরাপত্তা সেটিং
//             </h3>
//             <div className="space-y-4">
//               {/* পাসওয়ার্ড পরিবর্তন (Fixing Nested Trigger) */}
//               <Dialog
//                 open={isPassDialogOpen}
//                 onOpenChange={setIsPassDialogOpen}
//               >
//                 <DialogTrigger asChild style={{ width: "100%" }}>
//                   <div className="w-full flex items-center justify-between p-5 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/5 group cursor-pointer outline-none">
//                     <div className="flex items-center gap-3 text-sm font-bold tracking-tight">
//                       <Key className="w-5 h-5 text-teal-400" /> পাসওয়ার্ড
//                       পরিবর্তন
//                     </div>
//                     <ArrowRight className="w-4 h-4 text-gray-500 group-hover:translate-x-1 transition-transform" />
//                   </div>
//                 </DialogTrigger>
//                 <DialogContent className="sm:max-w-[425px] rounded-[2.5rem] border-none shadow-2xl p-8">
//                   <DialogHeader>
//                     <DialogTitle className="text-2xl font-black text-gray-900 uppercase">
//                       পাসওয়ার্ড পরিবর্তন
//                     </DialogTitle>
//                   </DialogHeader>
//                   <form
//                     onSubmit={handleUpdatePassword}
//                     className="space-y-4 py-4"
//                   >
//                     <div className="space-y-2">
//                       <Label className="font-bold text-gray-500 text-xs uppercase tracking-widest">
//                         বর্তমান পাসওয়ার্ড
//                       </Label>
//                       <Input
//                         type="password"
//                         required
//                         value={passData.currentPassword}
//                         onChange={(e) =>
//                           setPassData({
//                             ...passData,
//                             currentPassword: e.target.value,
//                           })
//                         }
//                         className="h-14 rounded-2xl border-gray-100 bg-gray-50"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <Label className="font-bold text-gray-500 text-xs uppercase tracking-widest">
//                         নতুন পাসওয়ার্ড
//                       </Label>
//                       <Input
//                         type="password"
//                         required
//                         value={passData.newPassword}
//                         onChange={(e) =>
//                           setPassData({
//                             ...passData,
//                             newPassword: e.target.value,
//                           })
//                         }
//                         className="h-14 rounded-2xl border-gray-100 bg-gray-50"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <Label className="font-bold text-gray-500 text-xs uppercase tracking-widest">
//                         পাসওয়ার্ড নিশ্চিত করুন
//                       </Label>
//                       <Input
//                         type="password"
//                         required
//                         value={passData.confirmPassword}
//                         onChange={(e) =>
//                           setPassData({
//                             ...passData,
//                             confirmPassword: e.target.value,
//                           })
//                         }
//                         className="h-14 rounded-2xl border-gray-100 bg-gray-50"
//                       />
//                     </div>
//                     <Button
//                       type="submit"
//                       className="w-full bg-[#051c1e] hover:bg-teal-700 h-14 rounded-2xl font-black mt-2 active:scale-95 transition-all"
//                     >
//                       আপডেট করুন
//                     </Button>
//                   </form>
//                 </DialogContent>
//               </Dialog>

//               <button
//                 onClick={handleLogout}
//                 className="w-full flex items-center justify-center gap-3 p-5 bg-red-500/10 text-red-400 rounded-2xl hover:bg-red-500 hover:text-white transition-all font-black border border-red-500/20 active:scale-95"
//               >
//                 <LogOut className="w-5 h-5" /> লগ আউট
//               </button>
//             </div>
//           </div>

//           <div
//             className={`p-8 rounded-[3rem] border-2 transition-all duration-500 ${user?.isVerified ? "bg-green-50/50 border-green-100" : "bg-amber-50/50 border-amber-100 animate-pulse"}`}
//           >
//             <div className="flex flex-col items-center text-center space-y-4">
//               <div
//                 className={`w-16 h-16 rounded-2xl flex items-center justify-center ${user?.isVerified ? "bg-green-500 text-white shadow-lg shadow-green-200" : "bg-amber-500 text-white shadow-lg shadow-amber-200"}`}
//               >
//                 {user?.isVerified ? (
//                   <ShieldCheck className="w-8 h-8" />
//                 ) : (
//                   <ShieldAlert className="w-8 h-8" />
//                 )}
//               </div>
//               <div>
//                 <h4
//                   className={`text-xl font-black ${user?.isVerified ? "text-green-700" : "text-amber-700"}`}
//                 >
//                   {user?.isVerified ? "ভেরিফাইড প্রোফাইল" : "অপেক্ষা করুন"}
//                 </h4>
//                 <p className="text-xs font-bold text-gray-500 mt-2 leading-relaxed">
//                   {user?.isVerified
//                     ? "আপনার অ্যাকাউন্টটি সম্পূর্ণ ভেরিফাইড।"
//                     : "আপনার এনআইডি কার্ডটি ভেরিফিকেশনের জন্য অপেক্ষায় আছে।"}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState, useRef } from "react";
// import {
//   User,
//   Mail,
//   Phone,
//   MapPin,
//   Camera,
//   ShieldCheck,
//   Key,
//   LogOut,
//   Edit3,
//   BadgeCheck,
//   ShieldAlert,
//   ArrowRight,
//   Loader2,
// } from "lucide-react";
// import { useAppSelector, useAppDispatch } from "@/redux/hooks";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { toast } from "sonner";
// import {
//   logoutUser,
//   updateProfile,
//   updateAvatar,
//   updatePassword,
// } from "../../../redux/slices/authSlice";
// import { useNavigate } from "react-router-dom";

// export default function UserProfile() {
//   const { user } = useAppSelector((state) => state.auth);
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const role = user?.role || "tenant";

//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
//   const [isPassDialogOpen, setIsPassDialogOpen] = useState(false);

//   // লোডিং স্টেট ম্যানেজমেন্ট
//   const [isUpdating, setIsUpdating] = useState(false);
//   const [isPassUpdating, setIsPassUpdating] = useState(false);

//   const [formData, setFormData] = useState({
//     name: user?.name || "",
//     phone: user?.phone || "",
//   });

//   const [passData, setPassData] = useState({
//     currentPassword: "",
//     newPassword: "",
//     confirmPassword: "",
//   });

//   const handleAvatarClick = () => fileInputRef.current?.click();

//   // ১. প্রোফাইল পিকচার আপলোড হ্যান্ডলার
//   const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const updateFormData = new FormData();
//       updateFormData.append("avatar", file);
//       const toastId = toast.loading("ছবি আপলোড হচ্ছে...");
//       try {
//         // @ts-ignore
//         await dispatch(updateAvatar(updateFormData)).unwrap();
//         toast.success("প্রোফাইল ছবি সফলভাবে আপডেট হয়েছে", { id: toastId });
//       } catch (err: any) {
//         toast.error(err || "ছবি আপলোড ব্যর্থ হয়েছে", { id: toastId });
//       }
//     }
//   };

//   // ২. প্রোফাইল তথ্য আপডেট হ্যান্ডলার (ভ্যালিডেশনসহ)
//   const handleUpdateProfile = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (formData.name.length < 3)
//       return toast.error("নাম অন্তত ৩ অক্ষরের হতে হবে");

//     setIsUpdating(true);
//     const toastId = toast.loading("তথ্য আপডেট হচ্ছে...");
//     try {
//       // @ts-ignore
//       await dispatch(
//         updateProfile({ name: formData.name, phone: formData.phone }),
//       ).unwrap();
//       toast.success("প্রোফাইল তথ্য আপডেট হয়েছে!", { id: toastId });
//       setIsEditDialogOpen(false);
//     } catch (err: any) {
//       toast.error(err || "আপডেট করতে সমস্যা হয়েছে", { id: toastId });
//     } finally {
//       setIsUpdating(false);
//     }
//   };

//   // ৩. পাসওয়ার্ড পরিবর্তন হ্যান্ডলার (নিখুঁত ভ্যালিডেশনসহ)
//   const handleUpdatePassword = async (e: React.FormEvent) => {
//     e.preventDefault();

//     // ভ্যালিডেশন লজিক
//     if (passData.newPassword.length < 6) {
//       return toast.error("নতুন পাসওয়ার্ড অন্তত ৬ অক্ষরের হতে হবে!");
//     }
//     if (passData.newPassword !== passData.confirmPassword) {
//       return toast.error("নতুন পাসওয়ার্ড দুটি মিলছে না!");
//     }
//     if (passData.currentPassword === passData.newPassword) {
//       return toast.error("পুরানো এবং নতুন পাসওয়ার্ড একই হতে পারবে না");
//     }

//     setIsPassUpdating(true);
//     const toastId = toast.loading("পাসওয়ার্ড পরিবর্তন হচ্ছে...");
//     try {
//       // @ts-ignore
//       await dispatch(
//         updatePassword({
//           currentPassword: passData.currentPassword,
//           newPassword: passData.newPassword,
//         }),
//       ).unwrap();

//       toast.success("পাসওয়ার্ড সফলভাবে পরিবর্তন হয়েছে!", { id: toastId });
//       setIsPassDialogOpen(false);
//       setPassData({
//         currentPassword: "",
//         newPassword: "",
//         confirmPassword: "",
//       });
//     } catch (err: any) {
//       toast.error(err || "পাসওয়ার্ড পরিবর্তনে সমস্যা হয়েছে", { id: toastId });
//     } finally {
//       setIsPassUpdating(false);
//     }
//   };

//   const handleLogout = () => {
//     dispatch(logoutUser());
//     toast.success("লগ আউট সফল হয়েছে");
//     navigate("/login");
//   };

//   return (
//     <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 pb-20">
//       {/* Header Card */}
//       <div className="relative bg-white rounded-[3rem] border border-gray-100 p-8 shadow-sm overflow-hidden">
//         <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl -mr-32 -mt-32"></div>
//         <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
//           <div className="relative">
//             <div className="w-32 h-32 md:w-44 md:h-44 rounded-[2.5rem] border-4 border-teal-50 p-1.5 shadow-xl bg-white overflow-hidden">
//               <img
//                 src={
//                   user?.avatar ||
//                   `https://ui-avatars.com/api/?name=${user?.name}&background=0d9488&color=fff&bold=true`
//                 }
//                 alt="Profile"
//                 className="w-full h-full object-cover rounded-[2rem]"
//               />
//             </div>
//             <input
//               type="file"
//               ref={fileInputRef}
//               onChange={handleFileChange}
//               className="hidden"
//               accept="image/*"
//             />
//             <button
//               onClick={handleAvatarClick}
//               className="absolute -bottom-2 -right-2 p-3 bg-[#051c1e] text-white rounded-2xl shadow-xl hover:bg-teal-600 transition-all active:scale-90"
//             >
//               <Camera className="w-5 h-5" />
//             </button>
//           </div>

//           <div className="flex-1 text-center md:text-left space-y-2">
//             <div className="flex flex-col md:flex-row md:items-center gap-3">
//               <h1 className="text-4xl font-black text-gray-900 tracking-tighter flex items-center justify-center md:justify-start gap-2">
//                 {user?.name}
//                 {user?.isVerified && (
//                   <BadgeCheck className="w-7 h-7 text-teal-500 fill-teal-50" />
//                 )}
//               </h1>
//               <span className="px-4 py-1.5 bg-[#051c1e] text-white text-[10px] font-black uppercase rounded-full tracking-widest shadow-lg">
//                 {role === "tenant"
//                   ? "ভাড়াটিয়া"
//                   : role === "landlord"
//                     ? "বাড়িওয়ালা"
//                     : "অ্যাডমিন"}
//               </span>
//             </div>
//             <p className="text-gray-400 font-medium flex items-center justify-center md:justify-start gap-2">
//               <Mail className="w-4 h-4" /> {user?.email}
//             </p>
//           </div>

//           <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
//             <DialogTrigger asChild>
//               <Button className="bg-teal-600 hover:bg-teal-700 h-14 rounded-2xl px-8 gap-2 font-black shadow-xl active:scale-95">
//                 <Edit3 className="w-5 h-5" /> প্রোফাইল এডিট
//               </Button>
//             </DialogTrigger>
//             <DialogContent className="sm:max-w-[425px] rounded-[2rem] border-none shadow-2xl p-8">
//               <DialogHeader>
//                 <DialogTitle className="text-2xl font-black text-gray-900 uppercase">
//                   তথ্য পরিবর্তন
//                 </DialogTitle>
//               </DialogHeader>
//               <form onSubmit={handleUpdateProfile} className="space-y-6 py-4">
//                 <div className="space-y-2">
//                   <Label className="font-bold text-gray-500">আপনার নাম</Label>
//                   <Input
//                     value={formData.name}
//                     onChange={(e) =>
//                       setFormData({ ...formData, name: e.target.value })
//                     }
//                     className="h-12 rounded-xl border-gray-100"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label className="font-bold text-gray-500">ফোন নম্বর</Label>
//                   <Input
//                     value={formData.phone}
//                     onChange={(e) =>
//                       setFormData({ ...formData, phone: e.target.value })
//                     }
//                     className="h-12 rounded-xl border-gray-100"
//                   />
//                 </div>
//                 <Button
//                   type="submit"
//                   disabled={isUpdating}
//                   className="w-full bg-[#051c1e] h-12 rounded-xl font-black"
//                 >
//                   {isUpdating ? (
//                     <Loader2 className="w-5 h-5 animate-spin" />
//                   ) : (
//                     "সেভ করুন"
//                   )}
//                 </Button>
//               </form>
//             </DialogContent>
//           </Dialog>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2 space-y-8">
//           <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-10">
//             <h3 className="text-xl font-black text-gray-900 border-l-4 border-teal-600 pl-4 uppercase tracking-tight">
//               যোগাযোগের তথ্য
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//               {[
//                 { label: "পূর্ণ নাম", value: user?.name, icon: User },
//                 { label: "ইমেইল অ্যাড্রেস", value: user?.email, icon: Mail },
//                 {
//                   label: "ফোন নম্বর",
//                   value: user?.phone || "সংযুক্ত নেই",
//                   icon: Phone,
//                 },
//                 { label: "বর্তমান শহর", value: "ঢাকা, বাংলাদেশ", icon: MapPin },
//               ].map((item, i) => (
//                 <div key={i} className="group cursor-default">
//                   <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 mb-2 transition-colors group-hover:text-teal-600 font-heading">
//                     <item.icon className="w-3 h-3" /> {item.label}
//                   </p>
//                   <p className="text-lg font-bold text-gray-800 bg-gray-50 p-4 rounded-2xl border border-transparent transition-all">
//                     {item.value}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="space-y-8">
//           <div className="bg-[#051c1e] p-8 rounded-[3rem] text-white shadow-2xl">
//             <h3 className="text-xl font-black mb-6 font-heading tracking-tight">
//               নিরাপত্তা সেটিং
//             </h3>
//             <div className="space-y-4">
//               <Dialog
//                 open={isPassDialogOpen}
//                 onOpenChange={setIsPassDialogOpen}
//               >
//                 <DialogTrigger asChild style={{ width: "100%" }}>
//                   <div className="w-full flex items-center justify-between p-5 bg-white/5 rounded-2xl hover:bg-white/10 transition-all border border-white/5 group cursor-pointer outline-none">
//                     <div className="flex items-center gap-3 text-sm font-bold tracking-tight">
//                       <Key className="w-5 h-5 text-teal-400" /> পাসওয়ার্ড
//                       পরিবর্তন
//                     </div>
//                     <ArrowRight className="w-4 h-4 text-gray-500 group-hover:translate-x-1 transition-transform" />
//                   </div>
//                 </DialogTrigger>
//                 <DialogContent className="sm:max-w-[425px] rounded-[2.5rem] border-none shadow-2xl p-8">
//                   <DialogHeader>
//                     <DialogTitle className="text-2xl font-black text-gray-900 uppercase">
//                       পাসওয়ার্ড পরিবর্তন
//                     </DialogTitle>
//                   </DialogHeader>
//                   <form
//                     onSubmit={handleUpdatePassword}
//                     className="space-y-4 py-4"
//                   >
//                     <div className="space-y-2">
//                       <Label className="font-bold text-gray-500 text-xs uppercase tracking-widest">
//                         বর্তমান পাসওয়ার্ড
//                       </Label>
//                       <Input
//                         type="password"
//                         required
//                         value={passData.currentPassword}
//                         onChange={(e) =>
//                           setPassData({
//                             ...passData,
//                             currentPassword: e.target.value,
//                           })
//                         }
//                         className="h-14 rounded-2xl border-gray-100 bg-gray-50"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <Label className="font-bold text-gray-500 text-xs uppercase tracking-widest">
//                         নতুন পাসওয়ার্ড
//                       </Label>
//                       <Input
//                         type="password"
//                         required
//                         value={passData.newPassword}
//                         onChange={(e) =>
//                           setPassData({
//                             ...passData,
//                             newPassword: e.target.value,
//                           })
//                         }
//                         className="h-14 rounded-2xl border-gray-100 bg-gray-50"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <Label className="font-bold text-gray-500 text-xs uppercase tracking-widest">
//                         নিশ্চিত করুন
//                       </Label>
//                       <Input
//                         type="password"
//                         required
//                         value={passData.confirmPassword}
//                         onChange={(e) =>
//                           setPassData({
//                             ...passData,
//                             confirmPassword: e.target.value,
//                           })
//                         }
//                         className="h-14 rounded-2xl border-gray-100 bg-gray-50"
//                       />
//                     </div>
//                     <Button
//                       type="submit"
//                       disabled={isPassUpdating}
//                       className="w-full bg-[#051c1e] hover:bg-teal-700 h-14 rounded-2xl font-black mt-2 active:scale-95 transition-all"
//                     >
//                       {isPassUpdating ? (
//                         <Loader2 className="w-5 h-5 animate-spin mx-auto" />
//                       ) : (
//                         "আপডেট করুন"
//                       )}
//                     </Button>
//                   </form>
//                 </DialogContent>
//               </Dialog>

//               <button
//                 onClick={handleLogout}
//                 className="w-full flex items-center justify-center gap-3 p-5 bg-red-500/10 text-red-400 rounded-2xl hover:bg-red-500 hover:text-white transition-all font-black border border-red-500/20 active:scale-95"
//               >
//                 <LogOut className="w-5 h-5" /> লগ আউট
//               </button>
//             </div>
//           </div>

//           <div
//             className={`p-8 rounded-[3rem] border-2 transition-all duration-500 ${user?.isVerified ? "bg-green-50/50 border-green-100" : "bg-amber-50/50 border-amber-100 animate-pulse"}`}
//           >
//             <div className="flex flex-col items-center text-center space-y-4">
//               <div
//                 className={`w-16 h-16 rounded-2xl flex items-center justify-center ${user?.isVerified ? "bg-green-500 text-white shadow-lg shadow-green-200" : "bg-amber-500 text-white shadow-lg shadow-amber-200"}`}
//               >
//                 {user?.isVerified ? (
//                   <ShieldCheck className="w-8 h-8" />
//                 ) : (
//                   <ShieldAlert className="w-8 h-8" />
//                 )}
//               </div>
//               <div>
//                 <h4
//                   className={`text-xl font-black ${user?.isVerified ? "text-green-700" : "text-amber-700"}`}
//                 >
//                   {user?.isVerified ? "ভেরিফাইড প্রোফাইল" : "অপেক্ষা করুন"}
//                 </h4>
//                 <p className="text-xs font-bold text-gray-500 mt-2 leading-relaxed">
//                   {user?.isVerified
//                     ? "আপনার অ্যাকাউন্টটি সম্পূর্ণ ভেরিফাইড।"
//                     : "আপনার এনআইডি কার্ডটি ভেরিফিকেশনের জন্য অপেক্ষায় আছে।"}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Camera,
  ShieldCheck,
  Key,
  LogOut,
  Edit3,
  BadgeCheck,
  ShieldAlert,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import {
  logoutUser,
  updateProfile,
  updateAvatar,
  updatePassword,
} from "../../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const role = user?.role || "tenant";

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isPassDialogOpen, setIsPassDialogOpen] = useState(false);

  // লোডিং স্টেট
  const [isUpdating, setIsUpdating] = useState(false);

  // প্রোফাইল ও পাসওয়ার্ড স্টেট
  const [formData, setFormData] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
  });
  const [passData, setPassData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // রিয়েল-টাইম এরর স্টেট
  const [passErrors, setPassErrors] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  // 🔥 রিয়েল-টাইম পাসওয়ার্ড ভ্যালিডেশন লজিক
  useEffect(() => {
    let newErr = "";
    let confirmErr = "";

    if (passData.newPassword && passData.newPassword.length < 6) {
      newErr = "পাসওয়ার্ড অন্তত ৬ অক্ষরের হতে হবে";
    }
    if (
      passData.confirmPassword &&
      passData.newPassword !== passData.confirmPassword
    ) {
      confirmErr = "পাসওয়ার্ড দুটি মিলছে না";
    }

    setPassErrors({ newPassword: newErr, confirmPassword: confirmErr });
  }, [passData.newPassword, passData.confirmPassword]);

  const handleAvatarClick = () => fileInputRef.current?.click();

  // ১. ইমেজ আপলোড
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const updateFormData = new FormData();
      updateFormData.append("avatar", file);
      const toastId = toast.loading("ছবি আপলোড হচ্ছে...");
      try {
        // @ts-ignore
        await dispatch(updateAvatar(updateFormData)).unwrap();
        toast.success("প্রোফাইল ছবি আপডেট হয়েছে", { id: toastId });
      } catch (err: any) {
        toast.error(err || "ছবি আপলোড ব্যর্থ হয়েছে", { id: toastId });
      }
    }
  };

  // ২. প্রোফাইল তথ্য আপডেট
  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    const toastId = toast.loading("তথ্য আপডেট হচ্ছে...");
    try {
      // @ts-ignore
      await dispatch(updateProfile(formData)).unwrap();
      toast.success("প্রোফাইল আপডেট হয়েছে!", { id: toastId });
      setIsEditDialogOpen(false);
    } catch (err: any) {
      toast.error(err || "সমস্যা হয়েছে", { id: toastId });
    } finally {
      setIsUpdating(false);
    }
  };

  // ৩. পাসওয়ার্ড আপডেট (ক্লিন সাবমিশন)
  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (passErrors.newPassword || passErrors.confirmPassword) return;

    setIsUpdating(true);
    const toastId = toast.loading("পাসওয়ার্ড পরিবর্তন হচ্ছে...");
    try {
      // @ts-ignore
      await dispatch(
        updatePassword({
          currentPassword: passData.currentPassword,
          newPassword: passData.newPassword,
        }),
      ).unwrap();

      toast.success("পাসওয়ার্ড সফলভাবে পরিবর্তন হয়েছে!", { id: toastId });
      setIsPassDialogOpen(false);
      setPassData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (err: any) {
      toast.error(err || "পাসওয়ার্ড ভুল হয়েছে", { id: toastId });
    } finally {
      setIsUpdating(false);
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    toast.success("লগ আউট সফল হয়েছে");
    navigate("/login");
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 pb-20 px-4 md:px-0">
      {/* Header Card */}
      <div className="relative bg-white rounded-[3rem] border border-gray-100 p-8 shadow-sm overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl -mr-32 -mt-32 transition-transform group-hover:scale-110 duration-700"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="relative">
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-[2.5rem] border-4 border-teal-50 p-1.5 shadow-xl bg-white overflow-hidden">
              <img
                src={
                  user?.avatar ||
                  `https://ui-avatars.com/api/?name=${user?.name}&background=0d9488&color=fff&bold=true`
                }
                alt="Profile"
                className="w-full h-full object-cover rounded-[2rem]"
              />
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept="image/*"
            />
            <button
              onClick={handleAvatarClick}
              className="absolute -bottom-2 -right-2 p-3 bg-[#051c1e] text-white rounded-2xl shadow-xl hover:bg-teal-600 transition-all active:scale-90"
            >
              <Camera className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 text-center md:text-left space-y-2">
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <h1 className="text-4xl font-black text-gray-900 tracking-tighter flex items-center gap-2">
                {user?.name}{" "}
                {user?.isVerified && <BadgeCheck className="text-teal-500" />}
              </h1>
              <span className="px-4 py-1.5 bg-[#051c1e] text-white text-[10px] font-black uppercase rounded-full shadow-lg">
                {role === "tenant" ? "ভাড়াটিয়া" : "বাড়িওয়ালা"}
              </span>
            </div>
            <p className="text-gray-400 font-medium flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-4 h-4" /> {user?.email}
            </p>
          </div>
          <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-teal-600 hover:bg-teal-700 h-14 rounded-2xl px-8 font-black shadow-xl active:scale-95">
                <Edit3 className="w-5 h-5 mr-2" /> প্রোফাইল এডিট
              </Button>
            </DialogTrigger>
            <DialogContent className="rounded-[2rem] p-8 border-none shadow-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl font-black uppercase">
                  তথ্য পরিবর্তন
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleUpdateProfile} className="space-y-6 py-4">
                <div className="space-y-2">
                  <Label className="font-bold text-gray-500">আপনার নাম</Label>
                  <Input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="h-12 rounded-xl"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label className="font-bold text-gray-500">ফোন নম্বর</Label>
                  <Input
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="h-12 rounded-xl"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isUpdating}
                  className="w-full bg-[#051c1e] h-12 rounded-xl font-black"
                >
                  {isUpdating ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "সেভ করুন"
                  )}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="lg:col-span-2">
          <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm space-y-10">
            <h3 className="text-xl font-black text-gray-900 border-l-4 border-teal-600 pl-4 uppercase">
              যোগাযোগের তথ্য
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[
                { label: "পূর্ণ নাম", value: user?.name, icon: User },
                { label: "ইমেইল", value: user?.email, icon: Mail },
                { label: "ফোন", value: user?.phone || "নেই", icon: Phone },
                { label: "শহর", value: "ঢাকা", icon: MapPin },
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <p className="text-[10px] font-black text-gray-400 uppercase flex items-center gap-2">
                    <item.icon className="w-3 h-3" /> {item.label}
                  </p>
                  <p className="text-lg font-bold text-gray-800 bg-gray-50 p-4 rounded-2xl border border-transparent hover:border-teal-100 transition-all">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="space-y-8">
          <div className="bg-[#051c1e] p-8 rounded-[3rem] text-white shadow-2xl shadow-teal-900/30">
            <h3 className="text-xl font-black mb-6">নিরাপত্তা সেটিং</h3>
            <div className="space-y-4">
              <Dialog
                open={isPassDialogOpen}
                onOpenChange={setIsPassDialogOpen}
              >
                <DialogTrigger asChild style={{ width: "100%" }}>
                  <div className="w-full flex items-center justify-between p-5 bg-white/5 rounded-2xl hover:bg-white/10 border border-white/5 cursor-pointer transition-all">
                    <div className="flex items-center gap-3 text-sm font-bold">
                      <Key className="w-5 h-5 text-teal-400" /> পাসওয়ার্ড
                      পরিবর্তন
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-500" />
                  </div>
                </DialogTrigger>
                <DialogContent className="rounded-[2.5rem] border-none shadow-2xl p-8">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-black uppercase">
                      পাসওয়ার্ড পরিবর্তন
                    </DialogTitle>
                  </DialogHeader>
                  <form
                    onSubmit={handleUpdatePassword}
                    className="space-y-4 py-4"
                  >
                    <div>
                      <Label className="font-bold text-gray-500 text-[10px] uppercase">
                        বর্তমান পাসওয়ার্ড
                      </Label>
                      <Input
                        type="password"
                        required
                        value={passData.currentPassword}
                        onChange={(e) =>
                          setPassData({
                            ...passData,
                            currentPassword: e.target.value,
                          })
                        }
                        className="h-14 rounded-2xl bg-gray-50"
                      />
                    </div>
                    <div>
                      <Label className="font-bold text-gray-500 text-[10px] uppercase">
                        নতুন পাসওয়ার্ড
                      </Label>
                      <Input
                        type="password"
                        required
                        value={passData.newPassword}
                        onChange={(e) =>
                          setPassData({
                            ...passData,
                            newPassword: e.target.value,
                          })
                        }
                        className={`h-14 rounded-2xl bg-gray-50 ${passErrors.newPassword ? "border-red-400" : ""}`}
                      />
                      {passErrors.newPassword && (
                        <p className="text-[10px] text-red-500 font-bold mt-1 ml-2">
                          {passErrors.newPassword}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label className="font-bold text-gray-500 text-[10px] uppercase">
                        নিশ্চিত করুন
                      </Label>
                      <Input
                        type="password"
                        required
                        value={passData.confirmPassword}
                        onChange={(e) =>
                          setPassData({
                            ...passData,
                            confirmPassword: e.target.value,
                          })
                        }
                        className={`h-14 rounded-2xl bg-gray-50 ${passErrors.confirmPassword ? "border-red-400" : ""}`}
                      />
                      {passErrors.confirmPassword && (
                        <p className="text-[10px] text-red-500 font-bold mt-1 ml-2">
                          {passErrors.confirmPassword}
                        </p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      disabled={
                        isUpdating ||
                        !!passErrors.newPassword ||
                        !!passErrors.confirmPassword
                      }
                      className="w-full bg-[#051c1e] h-14 rounded-2xl font-black mt-2"
                    >
                      {isUpdating ? (
                        <Loader2 className="animate-spin" />
                      ) : (
                        "আপডেট করুন"
                      )}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-3 p-5 bg-red-500/10 text-red-400 rounded-2xl hover:bg-red-500 hover:text-white transition-all font-black border border-red-500/20 active:scale-95"
              >
                <LogOut className="w-5 h-5" /> লগ আউট
              </button>
            </div>
          </div>
          {/* Verification Status */}
          <div
            className={`p-8 rounded-[3rem] border-2 ${user?.isVerified ? "bg-green-50 border-green-100" : "bg-amber-50 border-amber-100 animate-pulse"}`}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center ${user?.isVerified ? "bg-green-500 text-white" : "bg-amber-500 text-white"}`}
              >
                {user?.isVerified ? (
                  <ShieldCheck className="w-8 h-8" />
                ) : (
                  <ShieldAlert className="w-8 h-8" />
                )}
              </div>
              <div>
                <h4
                  className={`text-xl font-black ${user?.isVerified ? "text-green-700" : "text-amber-700"}`}
                >
                  {user?.isVerified ? "ভেরিফাইড প্রোফাইল" : "অপেক্ষা করুন"}
                </h4>
                <p className="text-xs font-bold text-gray-500 mt-2">
                  {user?.isVerified
                    ? "আপনার অ্যাকাউন্ট সম্পূর্ণ ভেরিফাইড।"
                    : "আপনার এনআইডি ভেরিফিকেশন পেন্ডিং আছে।"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
