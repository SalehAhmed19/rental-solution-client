import {
  CalendarDays,
  DoorOpen,
  Wifi,
  HeadphonesIcon,
  ArrowUpRight,
} from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/card";

const features = [
  {
    title: "ফ্লেক্সিবল লিভিং",
    desc: "আপনার প্রয়োজন অনুযায়ী স্বল্প বা দীর্ঘ মেয়াদী চুক্তিতে বাসা ভাড়া নিন একদম ঝামেলাহীন ভাবে।",
    icon: <CalendarDays className="w-8 h-8" />,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "আধুনিক ফিটিংস",
    desc: "প্রতিটি বাসায় প্রিমিয়াম ওয়াশরুম ফিটিংস, মানসম্মত দরজা এবং জানালা আগে থেকেই সম্পন্ন করা আছে।",
    icon: <DoorOpen className="w-8 h-8" />, // আসবাবপত্রের বদলে দরজা/ফিটিংসের আইকন
    color: "bg-teal-50 text-teal-600",
  },
  {
    title: "হাই-স্পিড ইন্টারনেট",
    desc: "ওয়ার্ক ফ্রম হোম বা বিনোদনের জন্য প্রতিটি বাসায় থাকছে প্রি-ইনস্টল্ড সুপার ফাস্ট ওয়াইফাই সুবিধা।",
    icon: <Wifi className="w-8 h-8" />,
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "২৪/৭ কাস্টমার সাপোর্ট",
    desc: "যেকোনো সমস্যায় আমাদের ডেডিকেটেড সাপোর্ট টিম আপনার সেবায় সবসময় নিয়োজিত আছে।",
    icon: <HeadphonesIcon className="w-8 h-8" />,
    color: "bg-orange-50 text-orange-600",
  },
];

export default function FeatureSection() {
  return (
    <section className="px-6 py-24 mx-auto md:px-12 max-w-7xl">
      {/* হেডিং সেকশন */}
      <div className="max-w-3xl mx-auto mb-20 space-y-4 text-center">
        <h3 className="text-teal-600 font-bold uppercase tracking-[0.3em] text-sm">
          আমাদের সেবাসমূহ
        </h3>
        <h2 className="text-4xl font-black leading-tight text-gray-900 md:text-5xl font-heading">
          আপনার জীবনকে সহজ করতে <br /> আমরা দিচ্ছি সেরা সুবিধা
        </h2>
        <p className="text-lg font-medium text-gray-500">
          আধুনিক জীবনযাত্রার প্রতিটি প্রয়োজন মাথায় রেখেই আমাদের প্রতিটি বাসা ও
          সার্ভিস সাজানো হয়েছে।
        </p>
      </div>

      {/* ফিচার কার্ড গ্রিড */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="group relative border-none shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 rounded-[2.5rem] overflow-hidden bg-white hover:-translate-y-2"
          >
            <CardContent className="p-10 space-y-6">
              {/* আইকন কন্টেইনার */}
              <div
                className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110`}
              >
                {feature.icon}
              </div>

              <div className="space-y-3">
                <h4 className="text-2xl font-bold text-gray-900 transition-colors group-hover:text-teal-600">
                  {feature.title}
                </h4>
                <p className="font-medium leading-relaxed text-gray-500">
                  {feature.desc}
                </p>
              </div>

              {/* কার্ডের কোণায় অ্যারো বাটন */}
              <div className="absolute transition-all duration-500 opacity-0 bottom-6 right-8 group-hover:opacity-100 group-hover:right-6">
                <div className="p-2 text-white bg-gray-900 rounded-full">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
