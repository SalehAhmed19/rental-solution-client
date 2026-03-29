import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Sparkles,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppDispatch, useAppSelector } from "@/redux/hooks"; // আপনার তৈরি হুক
import { loginUser } from "@/redux/slices/authSlice"; // আপনার তৈরি স্লাইস
import { toast } from "sonner"; // নোটিফিকেশনের জন্য

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading } = useAppSelector((state) => state.auth);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ১. বেসিক ভ্যালিডেশন
    if (!email || !password) {
      return toast.error("ইমেইল এবং পাসওয়ার্ড প্রদান করুন।");
    }

    // ২. রিডাক্স থাঙ্ক কল করা
    const resultAction = await dispatch(loginUser({ email, password }));

    // ৩. রেসপন্স অনুযায়ী অ্যাকশন নেওয়া
    if (loginUser.fulfilled.match(resultAction)) {
      toast.success("লগইন সফল হয়েছে!");
      navigate("/"); // আপনার হোম বা ড্যাশবোর্ড রাউট
    } else {
      // থাঙ্ক থেকে আসা এরর মেসেজ দেখানো
      toast.error((resultAction.payload as string) || "লগইন ব্যর্থ হয়েছে");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fcfcfc] px-6">
      <div className="w-full max-w-[450px] space-y-8">
        {/* Logo & Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
            <Sparkles className="w-3 h-3" /> স্বাগতম নব ঠিকানায়
          </div>
          <h1 className="text-4xl font-black text-gray-900">
            লগইন <span className="text-teal-600">করুন</span>
          </h1>
          <p className="text-gray-500 font-medium">
            আপনার পছন্দের বাসাটি খুঁজে পেতে লগইন করুন
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] border border-gray-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-gray-400 tracking-widest ml-1">
                ইমেইল ঠিকানা
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@mail.com"
                  className="h-14 pl-12 rounded-2xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-gray-400 tracking-widest ml-1">
                পাসওয়ার্ড
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="h-14 pl-12 pr-12 rounded-2xl border-gray-100 bg-gray-50/50 focus:bg-white transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-teal-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-xs font-bold text-teal-600 hover:underline"
              >
                পাসওয়ার্ড ভুলে গেছেন?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-16 rounded-2xl bg-[#051c1e] hover:bg-black text-white font-black text-lg shadow-xl shadow-teal-900/10 gap-3 transition-all active:scale-95 disabled:opacity-70"
            >
              {loading ? (
                <>
                  লোড হচ্ছে... <Loader2 className="w-5 h-5 animate-spin" />
                </>
              ) : (
                <>
                  প্রবেশ করুন <ArrowRight className="w-6 h-6" />
                </>
              )}
            </Button>
          </form>
        </div>

        {/* Footer Link */}
        <p className="text-center text-gray-500 font-medium">
          নতুন ইউজার?{" "}
          <Link
            to="/authentication/signup"
            className="text-teal-600 font-black hover:underline"
          >
            অ্যাকাউন্ট তৈরি করুন
          </Link>
        </p>
      </div>
    </div>
  );
}
