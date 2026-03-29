import { ArrowRight, Paintbrush, Droplets, Sparkles } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";

export default function BespokeSection() {
  return (
    <section className="relative px-6 py-32 overflow-visible bg-white md:px-12">
      {/* ব্যাকগ্রাউন্ডে বড় ডেকোরেটিভ এলিমেন্ট */}
      <div className="absolute w-64 h-64 rounded-full top-20 right-10 bg-teal-50 blur-3xl opacity-60 -z-10 animate-pulse"></div>

      <div className="mx-auto max-w-7xl">
        <div className="relative flex flex-col items-center gap-0 lg:flex-row">
          {/* =========================================
              Left Side: The "Floating Image Stack"
              ========================================= */}
          <div className="relative w-full lg:w-1/2 h-[500px] md:h-[600px] z-10">
            {/* মেইন ইমেজ - পোর্ট্রেট স্টাইল */}
            <div className="absolute top-0 left-0 w-4/5 h-[90%] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=800"
                className="object-cover w-full h-full transition-transform duration-1000 hover:scale-110"
                alt="Clean Living Room"
              />
            </div>

            {/* সেকেন্ডারি ইমেজ - ছোট এবং ওভারল্যাপ করা */}
            <div className="absolute -bottom-10 -right-4 w-3/5 h-1/2 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white z-20 hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1664227430687-9299c593e3da?q=80&w=600"
                className="object-cover w-full h-full"
                alt="Modern Bathroom Fittings"
              />
            </div>

            {/* এক্সপেরিয়েন্স ব্যাজ */}
            <div className="absolute top-1/2 -left-12 -translate-y-1/2 bg-[#0a4a4e] text-white p-8 rounded-[2.5rem] shadow-xl z-30 hidden xl:block rotate-[-10deg]">
              <Sparkles className="w-8 h-8 mb-2 text-teal-400" />
              <p className="text-2xl font-black">Ready</p>
              <p className="text-xs font-bold tracking-widest uppercase opacity-70">
                to move in
              </p>
            </div>
          </div>

          {/* =========================================
              Right Side: The "Bold Typography" Area
              ========================================= */}
          <div className="z-40 w-full mt-16 lg:w-1/2 lg:-ml-20 lg:mt-0">
            <div className="bg-white/80 backdrop-blur-md p-10 md:p-16 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] border border-gray-100">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <span className="w-12 h-px bg-teal-600"></span>
                  <span className="text-xs font-bold tracking-widest text-teal-600 uppercase">
                    আমাদের অঙ্গীকার
                  </span>
                </div>

                <h2 className="text-4xl md:text-6xl font-heading font-black text-gray-900 leading-[1.1]">
                  ঝকঝকে নতুন বাসার <br />
                  <span className="relative inline-block text-teal-600">
                    নিশ্চয়তা
                    <span className="absolute left-0 w-full h-3 bg-teal-100 rounded-full bottom-2 -z-10"></span>
                  </span>
                </h2>

                <p className="text-lg font-medium leading-relaxed text-gray-500 md:text-xl">
                  আপনার নতুন ঠিকানায় কোনো আপোষ নয়। আমরা দিচ্ছি ফ্রেশ পেইন্ট এবং
                  প্রিমিয়াম স্যানিটারি ফিটিংসের গ্যারান্টি।
                </p>

                {/* ইউনিক ফিচার গ্রিড */}
                <div className="grid grid-cols-1 gap-8 pt-4 md:grid-cols-2">
                  <div className="flex gap-4 group">
                    <div className="flex items-center justify-center w-12 h-12 text-teal-600 transition-all shrink-0 bg-teal-50 rounded-2xl group-hover:bg-teal-600 group-hover:text-white">
                      <Paintbrush className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">
                        নতুন রঙের দেয়াল
                      </h4>
                      <p className="text-sm text-gray-500">
                        ফ্রেশ পেইন্টেড ঝকঝকে দেয়াল
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 group">
                    <div className="flex items-center justify-center w-12 h-12 text-blue-600 transition-all shrink-0 bg-blue-50 rounded-2xl group-hover:bg-blue-600 group-hover:text-white">
                      <Droplets className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">আধুনিক ফিটিংস</h4>
                      <p className="text-sm text-gray-500">
                        সেরা স্যানিটারি সলিউশন
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Link to="/search">
                    <Button className="w-full md:w-auto bg-[#0a4a4e] hover:bg-black text-white h-20 rounded-[2rem] px-12 text-xl font-black transition-all group flex items-center justify-center gap-4 shadow-2xl shadow-teal-900/20">
                      বাসাটি দেখে নিন
                      <ArrowRight className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-3" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
