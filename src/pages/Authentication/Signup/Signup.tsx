// import React, { useState } from "react";
// import {
//   User,
//   Mail,
//   Lock,
//   ShieldCheck,
//   ArrowRight,
//   ArrowLeft,
//   Upload,
//   CheckCircle2,
//   UserCircle2,
//   Building2,
//   ImagePlus,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Progress } from "@/components/ui/progress";

// export default function Signup() {
//   const [step, setStep] = useState(1);
//   const [role, setRole] = useState<"tenant" | "landlord" | null>(null);

//   const nextStep = () => setStep(step + 1);
//   const prevStep = () => setStep(step - 1);

//   return (
//     <div className="min-h-screen bg-[#fcfcfc] flex items-center justify-center px-6 py-12">
//       <div className="w-full max-w-[550px] space-y-8">
//         {/* Step Progress */}
//         <div className="space-y-4 text-center">
//           <h1 className="text-3xl font-black text-gray-900">
//             অ্যাকাউন্ট <span className="text-teal-600">তৈরি করুন</span>
//           </h1>
//           <Progress value={(step / 3) * 100} className="h-2 bg-teal-100" />
//           <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
//             ধাপ {step} / 3
//           </p>
//         </div>

//         <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] border border-gray-100">
//           {/* STEP 1: Basic Info */}
//           {step === 1 && (
//             <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
//               <div className="space-y-4">
//                 <div className="space-y-2">
//                   <label className="text-[10px] font-black uppercase text-gray-400 ml-1">
//                     পূর্ণ নাম
//                   </label>
//                   <div className="relative">
//                     <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                     <Input
//                       placeholder="আপনার নাম"
//                       className="h-14 pl-12 rounded-2xl border-gray-100 bg-gray-50/50"
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-[10px] font-black uppercase text-gray-400 ml-1">
//                     ইমেইল
//                   </label>
//                   <div className="relative">
//                     <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                     <Input
//                       type="email"
//                       placeholder="example@mail.com"
//                       className="h-14 pl-12 rounded-2xl border-gray-100 bg-gray-50/50"
//                     />
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-[10px] font-black uppercase text-gray-400 ml-1">
//                     পাসওয়ার্ড
//                   </label>
//                   <div className="relative">
//                     <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
//                     <Input
//                       type="password"
//                       placeholder="••••••••"
//                       className="h-14 pl-12 rounded-2xl border-gray-100 bg-gray-50/50"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <Button
//                 onClick={nextStep}
//                 className="w-full h-16 rounded-2xl bg-[#051c1e] text-white font-black text-lg gap-2"
//               >
//                 পরবর্তী ধাপ <ArrowRight className="w-5 h-5" />
//               </Button>
//             </div>
//           )}

//           {/* STEP 2: Role Selection */}
//           {step === 2 && (
//             <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
//               <div className="grid grid-cols-1 gap-4">
//                 <button
//                   onClick={() => setRole("tenant")}
//                   className={`flex items-center gap-6 p-6 rounded-[2rem] border-2 transition-all ${role === "tenant" ? "border-teal-500 bg-teal-50 shadow-lg" : "border-gray-100 bg-white hover:bg-gray-50"}`}
//                 >
//                   <div
//                     className={`w-16 h-16 rounded-2xl flex items-center justify-center ${role === "tenant" ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-400"}`}
//                   >
//                     <UserCircle2 className="w-8 h-8" />
//                   </div>
//                   <div className="text-left">
//                     <h4 className="font-black text-gray-900">ভাড়াটিয়া</h4>
//                     <p className="text-xs text-gray-400 font-medium italic">
//                       আমি বাসা ভাড়া নিতে চাই
//                     </p>
//                   </div>
//                 </button>

//                 <button
//                   onClick={() => setRole("landlord")}
//                   className={`flex items-center gap-6 p-6 rounded-[2rem] border-2 transition-all ${role === "landlord" ? "border-blue-500 bg-blue-50 shadow-lg" : "border-gray-100 bg-white hover:bg-gray-50"}`}
//                 >
//                   <div
//                     className={`w-16 h-16 rounded-2xl flex items-center justify-center ${role === "landlord" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-400"}`}
//                   >
//                     <Building2 className="w-8 h-8" />
//                   </div>
//                   <div className="text-left">
//                     <h4 className="font-black text-gray-900">বাড়ির মালিক</h4>
//                     <p className="text-xs text-gray-400 font-medium italic">
//                       আমি বাসা ভাড়া দিতে চাই
//                     </p>
//                   </div>
//                 </button>
//               </div>
//               <div className="flex gap-4">
//                 <Button
//                   variant="ghost"
//                   onClick={prevStep}
//                   className="h-16 flex-1 rounded-2xl font-bold"
//                 >
//                   পেছনে
//                 </Button>
//                 <Button
//                   disabled={!role}
//                   onClick={nextStep}
//                   className="h-16 flex-[2] rounded-2xl bg-[#051c1e] text-white font-black"
//                 >
//                   চালিয়ে যান
//                 </Button>
//               </div>
//             </div>
//           )}

//           {/* STEP 3: NID Verification (Front & Back) */}
//           {step === 3 && (
//             <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
//               <div className="text-center space-y-2">
//                 <h3 className="text-xl font-black text-gray-900">
//                   NID ভেরিফিকেশন
//                 </h3>
//                 <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
//                   পরিচয়পত্রের দুই পাশের ছবি আপলোড করুন
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Front Side Upload */}
//                 <div className="group relative">
//                   <label className="text-[10px] font-black uppercase text-teal-600 mb-2 block ml-2">
//                     Front Part (সামনের দিক)
//                   </label>
//                   <div className="aspect-[1.6/1] bg-gray-50 rounded-[2rem] border-2 border-dashed border-gray-100 flex flex-col items-center justify-center space-y-3 hover:border-teal-400 hover:bg-teal-50/50 transition-all relative overflow-hidden">
//                     <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-teal-600 group-hover:scale-110 transition-transform">
//                       <ImagePlus className="w-6 h-6" />
//                     </div>
//                     <span className="text-[10px] font-bold text-gray-400 uppercase">
//                       ফাইল সিলেক্ট করুন
//                     </span>
//                     <input
//                       type="file"
//                       className="absolute inset-0 opacity-0 cursor-pointer"
//                     />
//                   </div>
//                 </div>

//                 {/* Back Side Upload */}
//                 <div className="group relative">
//                   <label className="text-[10px] font-black uppercase text-blue-600 mb-2 block ml-2">
//                     Back Part (পেছনের দিক)
//                   </label>
//                   <div className="aspect-[1.6/1] bg-gray-50 rounded-[2rem] border-2 border-dashed border-gray-100 flex flex-col items-center justify-center space-y-3 hover:border-blue-400 hover:bg-blue-50/50 transition-all relative overflow-hidden">
//                     <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
//                       <ImagePlus className="w-6 h-6" />
//                     </div>
//                     <span className="text-[10px] font-bold text-gray-400 uppercase">
//                       ফাইল সিলেক্ট করুন
//                     </span>
//                     <input
//                       type="file"
//                       className="absolute inset-0 opacity-0 cursor-pointer"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Security Note */}
//               <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 flex items-start gap-3">
//                 <div className="p-1.5 bg-emerald-500 rounded-full text-white mt-1">
//                   <ShieldCheck className="w-3 h-3" />
//                 </div>
//                 <p className="text-[11px] text-emerald-800 font-medium leading-relaxed">
//                   আপনার তথ্য **TechXbureau** এর সিকিউর সার্ভারে এনক্রিপ্টেড
//                   অবস্থায় থাকবে। শুধুমাত্র ভেরিফাইড ইউজাররাই সরাসরি যোগাযোগের
//                   সুযোগ পাবেন।
//                 </p>
//               </div>

//               <div className="flex gap-4">
//                 <Button
//                   variant="ghost"
//                   onClick={prevStep}
//                   className="h-16 flex-1 rounded-2xl font-bold"
//                 >
//                   পেছনে
//                 </Button>
//                 <Button className="h-16 flex-[2] rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-black text-lg shadow-xl shadow-teal-500/20 active:scale-95 transition-all">
//                   রেজিস্ট্রেশন সম্পন্ন করুন
//                 </Button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import {
  User as UserIcon,
  Mail,
  Lock,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  UserCircle2,
  Building2,
  ImagePlus,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { useAppDispatch } from "@/redux/hooks"; // Redux Hook
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner"; // নোটিফিকেশনের জন্য

export default function Signup() {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<"tenant" | "landlord" | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ১. ফর্ম স্টেট (ডিজাইন অনুযায়ী ডাটা ধরার জন্য)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  // ২. NID ইমেজ স্টেট
  const [nidFiles, setNidFiles] = useState<{
    front: File | null;
    back: File | null;
  }>({
    front: null,
    back: null,
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    side: "front" | "back",
  ) => {
    if (e.target.files && e.target.files[0]) {
      setNidFiles({ ...nidFiles, [side]: e.target.files[0] });
    }
  };

  // ৩. ফাইনাল সাইন-আপ হ্যান্ডলার (Updated for FormData)
  // const handleFinalSubmit = async () => {
  //   setLoading(true);
  //   try {
  //     // সাধারণ JSON-এর বদলে FormData ব্যবহার করতে হবে কারণ আমরা ফাইল পাঠাচ্ছি
  //     const data = new FormData();
  //     data.append("name", formData.name);
  //     data.append("email", formData.email);
  //     data.append("password", formData.password);
  //     data.append("phone", formData.phone);
  //     data.append("role", role as string);

  //     // ফাইলগুলো অ্যাপেন্ড করা (এই নামগুলো ব্যাকএন্ডের Multer-এর নামের সাথে মিলতে হবে)
  //     if (nidFiles.front) data.append("nidFront", nidFiles.front);
  //     if (nidFiles.back) data.append("nidBack", nidFiles.back);

  //     const response = await axios.post(
  //       "http://localhost:5000/api/v1/auth/signup",
  //       data,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data", // এটি ব্রাউজারকে বলবে যে এখানে ফাইল আছে
  //         },
  //         withCredentials: true,
  //       },
  //     );

  //     if (response.data.status === "success") {
  //       toast.success(
  //         "রেজিস্ট্রেশন সফল! অ্যাডমিন ভেরিফিকেশনের জন্য অপেক্ষা করুন।",
  //       );
  //       navigate("/");
  //     }
  //   } catch (error: any) {
  //     toast.error(
  //       error.response?.data?.message || "রেজিস্ট্রেশন ব্যর্থ হয়েছে।",
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // ৩. ফাইনাল সাইন-আপ হ্যান্ডলার
  const handleFinalSubmit = async () => {
    setLoading(true);
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("password", formData.password);
      data.append("phone", formData.phone);
      data.append("role", role as string);

      if (nidFiles.front) data.append("nidFront", nidFiles.front);
      if (nidFiles.back) data.append("nidBack", nidFiles.back);

      const response = await axios.post(
        "http://localhost:5000/api/v1/auth/signup",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        },
      );

      if (response.data.status === "success") {
        // ১. সাকসেস টোস্ট দেখানো
        toast.success(
          "রেজিস্ট্রেশন সফল! অ্যাডমিন ভেরিফিকেশনের জন্য অপেক্ষা করুন।",
          {
            duration: 6000, // ৬ সেকেন্ড থাকবে যেন ইউজার পড়তে পারে
            icon: <CheckCircle2 className="w-5 h-5 text-teal-500" />,
          },
        );

        // ২. ২ সেকেন্ড সময় দেওয়া যাতে ইউজার মেসেজটি দেখতে পায়, তারপর নেভিগেট করা
        setTimeout(() => {
          navigate("/authentication/login");
        }, 2500);
      }
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "রেজিস্ট্রেশন ব্যর্থ হয়েছে।",
        { duration: 4000 },
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-[550px] space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-black text-gray-900">
            অ্যাকাউন্ট <span className="text-teal-600">তৈরি করুন</span>
          </h1>
          <Progress value={(step / 3) * 100} className="h-2 bg-teal-100" />
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            ধাপ {step} / 3
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] border border-gray-100">
          {/* STEP 1: Basic Info */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400 ml-1">
                    পূর্ণ নাম
                  </label>
                  <div className="relative">
                    <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="আপনার নাম"
                      className="h-14 pl-12 rounded-2xl border-gray-100 bg-gray-50/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400 ml-1">
                    ইমেইল
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="example@mail.com"
                      className="h-14 pl-12 rounded-2xl border-gray-100 bg-gray-50/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400 ml-1">
                    মোবাইল নম্বর
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="01XXXXXXXXX"
                      className="h-14 pl-12 rounded-2xl border-gray-100 bg-gray-50/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-400 ml-1">
                    পাসওয়ার্ড
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="••••••••"
                      className="h-14 pl-12 rounded-2xl border-gray-100 bg-gray-50/50"
                    />
                  </div>
                </div>
              </div>
              <Button
                onClick={nextStep}
                className="w-full h-16 rounded-2xl bg-[#051c1e] text-white font-black text-lg gap-2"
              >
                পরবর্তী ধাপ <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          )}

          {/* STEP 2: Role Selection (আপনার অরিজিনাল ডিজাইন) */}
          {step === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="grid grid-cols-1 gap-4">
                <button
                  onClick={() => setRole("tenant")}
                  className={`flex items-center gap-6 p-6 rounded-[2rem] border-2 transition-all ${role === "tenant" ? "border-teal-500 bg-teal-50 shadow-lg" : "border-gray-100 bg-white hover:bg-gray-50"}`}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${role === "tenant" ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-400"}`}
                  >
                    <UserCircle2 className="w-8 h-8" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-black text-gray-900">ভাড়াটিয়া</h4>
                    <p className="text-xs text-gray-400 font-medium italic">
                      আমি বাসা ভাড়া নিতে চাই
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => setRole("landlord")}
                  className={`flex items-center gap-6 p-6 rounded-[2rem] border-2 transition-all ${role === "landlord" ? "border-blue-500 bg-blue-50 shadow-lg" : "border-gray-100 bg-white hover:bg-gray-50"}`}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${role === "landlord" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-400"}`}
                  >
                    <Building2 className="w-8 h-8" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-black text-gray-900">বাড়ির মালিক</h4>
                    <p className="text-xs text-gray-400 font-medium italic">
                      আমি বাসা ভাড়া দিতে চাই
                    </p>
                  </div>
                </button>
              </div>
              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  onClick={prevStep}
                  className="h-16 flex-1 rounded-2xl font-bold"
                >
                  পেছনে
                </Button>
                <Button
                  disabled={!role}
                  onClick={nextStep}
                  className="h-16 flex-[2] rounded-2xl bg-[#051c1e] text-white font-black"
                >
                  চালিয়ে যান
                </Button>
              </div>
            </div>
          )}

          {/* STEP 3: NID Upload (আপনার অরিজিনাল ডিজাইন) */}
          {step === 3 && (
            <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
              <div className="text-center space-y-2">
                <h3 className="text-xl font-black text-gray-900">
                  NID ভেরিফিকেশন
                </h3>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                  পরিচয়পত্রের দুই পাশের ছবি আপলোড করুন
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Front Side */}
                <div className="group relative">
                  <label className="text-[10px] font-black uppercase text-teal-600 mb-2 block ml-2">
                    Front Part (সামনের দিক)
                  </label>
                  <div
                    className={`aspect-[1.6/1] rounded-[2rem] border-2 border-dashed flex flex-col items-center justify-center space-y-3 transition-all relative overflow-hidden ${nidFiles.front ? "border-teal-500 bg-teal-50" : "border-gray-100 bg-gray-50 hover:border-teal-400"}`}
                  >
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-teal-600">
                      {nidFiles.front ? (
                        <CheckCircle2 className="w-6 h-6" />
                      ) : (
                        <ImagePlus className="w-6 h-6" />
                      )}
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase">
                      {nidFiles.front
                        ? nidFiles.front.name.slice(0, 15) + "..."
                        : "ফাইল সিলেক্ট করুন"}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, "front")}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Back Side */}
                <div className="group relative">
                  <label className="text-[10px] font-black uppercase text-blue-600 mb-2 block ml-2">
                    Back Part (পেছনের দিক)
                  </label>
                  <div
                    className={`aspect-[1.6/1] rounded-[2rem] border-2 border-dashed flex flex-col items-center justify-center space-y-3 transition-all relative overflow-hidden ${nidFiles.back ? "border-blue-500 bg-blue-50" : "border-gray-100 bg-gray-50 hover:border-blue-400"}`}
                  >
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600">
                      {nidFiles.back ? (
                        <CheckCircle2 className="w-6 h-6" />
                      ) : (
                        <ImagePlus className="w-6 h-6" />
                      )}
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 uppercase">
                      {nidFiles.back
                        ? nidFiles.back.name.slice(0, 15) + "..."
                        : "ফাইল সিলেক্ট করুন"}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, "back")}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 flex items-start gap-3">
                <div className="p-1.5 bg-emerald-500 rounded-full text-white mt-1">
                  <ShieldCheck className="w-3 h-3" />
                </div>
                <p className="text-[11px] text-emerald-800 font-medium leading-relaxed">
                  আপনার তথ্য **TechXbureau** এর সিকিউর সার্ভারে এনক্রিপ্টেড
                  অবস্থায় থাকবে।
                </p>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  onClick={prevStep}
                  className="h-16 flex-1 rounded-2xl font-bold"
                >
                  পেছনে
                </Button>
                <Button
                  onClick={handleFinalSubmit}
                  disabled={loading || !nidFiles.front || !nidFiles.back}
                  className="h-16 flex-[2] rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-black text-lg shadow-xl shadow-teal-500/20 active:scale-95 transition-all"
                >
                  {loading ? "প্রসেসিং হচ্ছে..." : "রেজিস্ট্রেশন সম্পন্ন করুন"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
