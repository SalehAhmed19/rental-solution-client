import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "আবাস প্ল্যাটফর্মে বাসা খোঁজা কি নিরাপদ?",
    answer:
      "জি, অবশ্যই। আমরা প্রতিটি লিস্টিং ম্যানুয়ালি ভেরিফাই করি এবং মালিকের এনআইডি (NID) যাচাই করার চেষ্টা করি। আমাদের প্ল্যাটফর্মে কোনো ফেক বা ভুয়া লিস্টিং অ্যালাউ করা হয় না।",
  },
  {
    question: "বাসা ভাড়ার ক্ষেত্রে কোনো ব্রোকার ফি দিতে হবে?",
    answer:
      "না, আবাস একটি সরাসরি ভাড়াটিয়া-মালিক সংযোগ মাধ্যম। এখানে কোনো ব্রোকার বা মিডিয়া ফি নেই। আপনি সরাসরি মালিকের সাথে কথা বলে বাসা ভাড়া নিতে পারবেন।",
  },
  {
    question: "আমি কি এলাকা ভিত্তিক ফিল্টার ব্যবহার করতে পারব?",
    answer:
      "হ্যাঁ, আমাদের অ্যাডভান্স সার্চ অপশনে আপনি ঢাকা শহরের নির্দিষ্ট এলাকা, বাজেট, এবং বেডরুমের সংখ্যা অনুযায়ী নিখুঁতভাবে ফিল্টার করতে পারবেন।",
  },
  {
    question: "ভেরিফাইড লিস্টিং বলতে কী বোঝায়?",
    answer:
      "যেসব লিস্টিংয়ের পাশে 'Verified' ব্যাজ থাকে, সেগুলোর ছবি এবং তথ্য আমাদের টিম সরেজমিনে অথবা ভিডিও কলের মাধ্যমে নিশ্চিত করেছে।",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 px-6 bg-gray-50/50 rounded-[3rem] mt-20 max-w-[1400px] mx-auto overflow-hidden relative">
      {/* Background Decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/5 rounded-full blur-[100px]"></div>

      <div className="flex flex-col gap-16 lg:flex-row">
        {/* Left Side: Header */}
        <div className="w-full space-y-6 lg:w-1/3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white shadow-sm border border-gray-100 rounded-full text-teal-600 text-xs font-bold uppercase tracking-widest">
            <HelpCircle className="w-4 h-4" />
            সহায়তা কেন্দ্র
          </div>
          <h2 className="text-4xl font-black leading-tight text-gray-900 md:text-5xl font-heading">
            সাধারণ কিছু <br />
            <span className="italic text-teal-600">জিজ্ঞাসা</span>
          </h2>
          <p className="text-lg font-medium leading-relaxed text-gray-500">
            আপনার মনে থাকা সাধারণ প্রশ্নগুলোর উত্তর এখানে পেতে পারেন। আরও
            বিস্তারিত জানতে আমাদের সাথে যোগাযোগ করুন।
          </p>
          <div className="pt-4">
            <div className="flex items-center gap-3 text-sm font-bold tracking-tighter text-gray-400 uppercase">
              <Sparkles className="w-4 h-4 text-teal-400" />
              টেকএক্স ব্যুরো (TechXbureau) প্রজেক্ট
            </div>
          </div>
        </div>

        {/* Right Side: Accordion Grid */}
        <div className="w-full lg:w-2/3">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border-none rounded-3xl px-8 py-2 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] transition-all"
              >
                <AccordionTrigger className="py-6 text-lg font-bold text-left text-gray-800 md:text-xl hover:text-teal-600 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-lg font-medium leading-relaxed text-gray-500">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
