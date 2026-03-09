// import React from "react";
// import {
//   MapPin,
//   Bed,
//   Bath,
//   Layers,
//   Wifi,
//   Wind,
//   ShieldCheck,
//   ArrowLeft,
//   Share2,
//   Heart,
//   Zap,
//   Car,
//   Coffee,
//   Star,
//   Navigation,
//   School,
//   ShoppingBag,
//   Hospital,
//   TrainFront,
// } from "lucide-react";
// import { Button } from "../../components/ui/button";
// import { Badge } from "../../components/ui/badge"; // Badge ইমপোর্ট ঠিক করা হয়েছে
// import { useParams, useNavigate } from "react-router-dom"; // useNavigate যোগ করা হয়েছে
// import { properties } from "../../assets/data";

// export default function PropertyDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const details = properties.find((prop) => prop.id === parseInt(id || "0"));

//   // গুগল ম্যাপস এমবেড ইউআরএল (এখানে আপনার প্রপার্টির লোকেশন অনুযায়ী কোঅর্ডিনেট সেট করতে পারেন)
//   const mapUrl =
//     "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14594.13593006249!2d90.38575085!3d23.87063295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4127928229d%3A0x6d9f75f106d75c02!2sSector%204%2C%20Uttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd";

//   return (
//     <div className="min-h-screen pb-20 bg-white">
//       {/* 1. Gallery Header (আপনার আগের কোড অনুযায়ী...) */}
//       <section className="relative px-6 py-6 max-w-[1400px] mx-auto">
//         <div className="flex items-center justify-between mb-6">
//           <Button
//             variant="ghost"
//             onClick={() => navigate(-1)}
//             className="gap-2 font-bold text-gray-600 rounded-full"
//           >
//             <ArrowLeft className="w-4 h-4" /> ব্যাক টু সার্চ
//           </Button>
//           <div className="flex gap-3">
//             <Button variant="outline" size="icon" className="rounded-full">
//               <Share2 className="w-4 h-4" />
//             </Button>
//             <Button
//               variant="outline"
//               size="icon"
//               className="text-red-500 rounded-full"
//             >
//               <Heart className="w-4 h-4" />
//             </Button>
//           </div>
//         </div>

//         <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
//           <div className="relative col-span-2 row-span-2 overflow-hidden cursor-pointer group">
//             <img
//               src={
//                 details?.img ||
//                 "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
//               }
//               className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
//               alt="Main"
//             />
//           </div>
//           <div className="col-span-1 row-span-1 overflow-hidden">
//             <img
//               src="https://images.unsplash.com/photo-1484154218962-a197022b5858"
//               className="object-cover w-full h-full"
//               alt="Kitchen"
//             />
//           </div>
//           <div className="col-span-1 row-span-1 overflow-hidden">
//             <img
//               src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
//               className="object-cover w-full h-full"
//               alt="Bedroom"
//             />
//           </div>
//           <div className="relative col-span-2 row-span-1 overflow-hidden">
//             <img
//               src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a"
//               className="object-cover w-full h-full"
//               alt="Bathroom"
//             />
//             <div className="absolute inset-0 flex items-center justify-center transition-colors cursor-pointer bg-black/40 hover:bg-black/50">
//               <span className="text-xl font-black text-white">+১২টি ছবি</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 2. Main Content */}
//       <main className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 mt-12">
//         <div className="space-y-12 lg:col-span-2">
//           {/* Title & Amenities (আপনার কোড অনুযায়ী...) */}
//           <div className="space-y-6">
//             <div className="flex flex-wrap gap-3">
//               <Badge className="bg-teal-50 text-teal-700 border-teal-100 px-4 py-1.5 rounded-full font-bold">
//                 ভেরিফাইড লিস্টিং
//               </Badge>
//               <Badge className="bg-blue-50 text-blue-700 border-blue-100 px-4 py-1.5 rounded-full font-bold">
//                 নতুন ফিটিংস
//               </Badge>
//             </div>
//             <h1 className="text-4xl font-black leading-tight text-gray-900 md:text-5xl">
//               {details?.title}
//             </h1>

//             <div className="flex flex-wrap items-center gap-8 py-6 border-gray-100 border-y">
//               <div className="flex items-center gap-3">
//                 <div className="p-3 bg-gray-50 rounded-2xl">
//                   <Bed className="w-6 h-6 text-teal-600" />
//                 </div>
//                 <div>
//                   <p className="text-xs font-bold text-gray-400 uppercase">
//                     বেডরুম
//                   </p>
//                   <p className="text-lg font-black">
//                     {details?.beds || "০৩"} টি
//                   </p>
//                 </div>
//               </div>
//               {/* বাথরুম এবং আয়তন এখানে থাকবে... */}
//             </div>
//           </div>

//           {/* Description */}
//           <div className="space-y-6">
//             <h3 className="text-2xl font-black text-gray-900">বাসার বর্ণনা</h3>
//             <p className="text-lg font-medium leading-relaxed text-gray-500">
//               এই অ্যাপার্টমেন্টটি উত্তরা সেক্টর ৪-এর একদম শান্ত এবং নিরাপদ
//               এলাকায় অবস্থিত। বাসার প্রতিটি ঘর থেকে পর্যাপ্ত আলো-বাতাস চলাচলের
//               সুবিধা রয়েছে।
//             </p>
//           </div>

//           {/* 📍 ৩. নিউ ম্যাপ সেকশন (গুগল ম্যাপস ইমপ্লিমেন্টেশন) */}
//           <section className="pt-12 space-y-10 border-t border-gray-100">
//             <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
//               <div className="space-y-3">
//                 <h3 className="text-3xl font-black tracking-tight text-gray-900">
//                   লোকেশন ও এলাকা
//                 </h3>
//                 <p className="flex items-center gap-2 font-medium text-gray-500">
//                   <MapPin className="w-4 h-4 text-teal-600" />{" "}
//                   {details?.location || "উত্তরা সেক্টর ৪, রোড ১২, ঢাকা"}
//                 </p>
//               </div>
//               <Button
//                 variant="outline"
//                 className="h-12 gap-2 font-bold transition-all border-gray-200 rounded-2xl hover:bg-teal-600 hover:text-white"
//               >
//                 <Navigation className="w-4 h-4" /> গুগল ম্যাপে দেখুন
//               </Button>
//             </div>

//             <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//               {/* ম্যাপ কন্টেইনার */}
//               <div className="relative h-[450px] lg:col-span-2 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
//                 <iframe
//                   title="Property Location"
//                   src={mapUrl}
//                   className="w-full h-full transition-all duration-700 border-0 grayscale hover:grayscale-0"
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>

//                 {/* কাস্টম ওভারলে পিন (Optional) */}
//                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
//                   <div className="relative flex items-center justify-center">
//                     <div className="absolute w-16 h-16 rounded-full bg-teal-500/20 animate-ping"></div>
//                     <div className="p-3 bg-teal-600 border-2 border-white shadow-2xl rounded-2xl">
//                       <MapPin className="w-6 h-6 text-white" />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* কাছাকাছি ল্যান্ডমার্কস */}
//               <div className="p-8 space-y-8 bg-gray-50 rounded-[3rem] lg:col-span-1">
//                 <h4 className="text-xl font-black text-gray-900">
//                   কাছাকাছি যা আছে
//                 </h4>
//                 <div className="space-y-6">
//                   {[
//                     {
//                       icon: <TrainFront />,
//                       label: "উত্তরা মেট্রো স্টেশন",
//                       dist: "৫ মিনিট",
//                       color: "text-blue-600",
//                     },
//                     {
//                       icon: <School />,
//                       label: "মাইলস্টোন কলেজ",
//                       dist: "১০ মিনিট",
//                       color: "text-purple-600",
//                     },
//                     {
//                       icon: <ShoppingBag />,
//                       label: "রাজলক্ষ্মী কমপ্লেক্স",
//                       dist: "৮ মিনিট",
//                       color: "text-orange-600",
//                     },
//                     {
//                       icon: <Hospital />,
//                       label: "কুয়েত মৈত্রী হাসপাতাল",
//                       dist: "১৫ মিনিট",
//                       color: "text-red-600",
//                     },
//                   ].map((item, i) => (
//                     <div
//                       key={i}
//                       className="flex items-center justify-between group"
//                     >
//                       <div className="flex items-center gap-4">
//                         <div
//                           className={`p-3 bg-white rounded-xl shadow-sm ${item.color} group-hover:scale-110 transition-transform`}
//                         >
//                           {item.icon}
//                         </div>
//                         <span className="font-bold text-gray-700 transition-colors group-hover:text-teal-700">
//                           {item.label}
//                         </span>
//                       </div>
//                       <span className="text-xs font-black text-gray-400 uppercase">
//                         {item.dist}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* Right Side: Sidebar (আপনার কোড অনুযায়ী...) */}
//         <div className="lg:col-span-1">
//           <div className="sticky top-28 bg-white border border-gray-100 p-10 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] space-y-8">
//             <div>
//               <p className="text-3xl font-black text-teal-700">
//                 ৳{details?.price || "৩৫,০০০"}
//               </p>
//               <p className="text-sm italic font-bold text-gray-400">
//                 প্রতি মাসে (ফিক্সড)
//               </p>
//             </div>
//             {/* বাটন এবং অন্যান্য ডিটেইলস... */}
//             <div className="pt-4 space-y-4">
//               <Button className="w-full h-16 text-lg font-black text-white bg-teal-600 shadow-xl hover:bg-teal-700 rounded-2xl">
//                 মালিকের সাথে কথা বলুন
//               </Button>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

import React from "react";
import {
  MapPin,
  Bed,
  Bath,
  Layers,
  Wifi,
  Wind,
  ShieldCheck,
  ArrowLeft,
  Share2,
  Heart,
  Zap,
  Car,
  Coffee,
  Star,
  Navigation,
  School,
  ShoppingBag,
  Hospital,
  TrainFront,
  LayoutGrid,
  Flame,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { useParams, useNavigate } from "react-router-dom";
import { properties } from "../../assets/data"; // আপনার ডামি বা রিয়েল ডাটা সোর্স

export default function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // আপনার স্কিমা অনুযায়ী ডাটা খুঁজে বের করা
  const details = properties.find((prop) => prop._id === id);

  // GeoJSON coordinates থেকে ম্যাপ ইউআরএল (Longitude, Latitude)
  const [lng, lat] = details?.location?.coordinates || [90.4125, 23.8103];
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.254272231177!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd`;

  return (
    <div className="min-h-screen pb-20 bg-white">
      {/* 1. Premium Gallery Header */}
      <section className="relative px-6 py-6 max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="gap-2 font-bold text-gray-600 rounded-full"
          >
            <ArrowLeft className="w-4 h-4" /> ব্যাক টু সার্চ
          </Button>
          <div className="flex gap-3">
            <Button variant="outline" size="icon" className="rounded-full">
              <Share2 className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="text-red-500 rounded-full"
            >
              <Heart className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* ইমেজ অ্যারে থেকে ডাইনামিক ছবি (Cloudinary URLs) */}
        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="relative col-span-2 row-span-2 overflow-hidden cursor-pointer group">
            <img
              src={
                details?.images?.[0] ||
                "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
              }
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              alt="Main"
            />
          </div>
          <div className="col-span-1 row-span-1 overflow-hidden">
            <img
              src={
                details?.images?.[1] ||
                "https://images.unsplash.com/photo-1484154218962-a197022b5858"
              }
              className="object-cover w-full h-full"
              alt="Kitchen"
            />
          </div>
          <div className="col-span-1 row-span-1 overflow-hidden">
            <img
              src={
                details?.images?.[2] ||
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
              }
              className="object-cover w-full h-full"
              alt="Bedroom"
            />
          </div>
          <div className="relative col-span-2 row-span-1 overflow-hidden">
            <img
              src={
                details?.images?.[3] ||
                "https://images.unsplash.com/photo-1584622650111-993a426fbf0a"
              }
              className="object-cover w-full h-full"
              alt="Bathroom"
            />
            <div className="absolute inset-0 flex items-center justify-center transition-colors cursor-pointer bg-black/40 hover:bg-black/50">
              <span className="text-xl font-black text-white">
                +{details?.images?.length || 0} টি ছবি
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content & Sidebar */}
      <main className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 mt-12">
        <div className="space-y-12 lg:col-span-2">
          {/* Title & Stats from Schema */}
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-teal-50 text-teal-700 border-teal-100 px-4 py-1.5 rounded-full font-bold capitalize">
                {details?.features?.propertyType}
              </Badge>
              {details?.status === "available" && (
                <Badge className="bg-blue-50 text-blue-700 border-blue-100 px-4 py-1.5 rounded-full font-bold">
                  ভেরিফাইড লিস্টিং
                </Badge>
              )}
            </div>

            <h1 className="text-4xl font-black leading-tight text-gray-900 uppercase md:text-5xl font-heading">
              {details?.title}
            </h1>

            <div className="flex flex-wrap items-center gap-8 py-6 border-gray-100 border-y">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gray-50 rounded-2xl">
                  <Bed className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">
                    বেডরুম
                  </p>
                  <p className="text-lg font-black">
                    {details?.features?.bedrooms} টি
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gray-50 rounded-2xl">
                  <Bath className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">
                    বাথরুম
                  </p>
                  <p className="text-lg font-black">
                    {details?.features?.bathrooms} টি
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gray-50 rounded-2xl">
                  <LayoutGrid className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase">
                    বারান্দা
                  </p>
                  <p className="text-lg font-black">
                    {details?.features?.balcony} টি
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-gray-900">বাসার বর্ণনা</h3>
            <p className="text-lg font-medium leading-relaxed text-gray-500">
              {details?.description}
            </p>
          </div>

          {/* Amenities Grid from Boolean Values in Schema */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black text-gray-900">
              সুযোগ-সুবিধাসমূহ
            </h3>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
              {details?.features?.hasLift && (
                <AmenityItem icon={<Layers />} label="লিফট সুবিধা" />
              )}
              {details?.features?.hasGenerator && (
                <AmenityItem icon={<Zap />} label="জেনারেটর ব্যাকআপ" />
              )}
              {details?.features?.hasParking && (
                <AmenityItem icon={<Car />} label="কার পার্কিং" />
              )}
              {details?.features?.hasGasConnection && (
                <AmenityItem
                  icon={<Flame className="text-orange-500" />}
                  label="গ্যাস সংযোগ"
                />
              )}
              <AmenityItem icon={<Wifi />} label="হাই-স্পিড ইন্টারনেট" />
              <AmenityItem icon={<ShieldCheck />} label="২৪/৭ নিরাপত্তা" />
            </div>
          </div>

          {/* 3. Map Section from GeoJSON */}
          <section className="pt-12 space-y-10 border-t border-gray-100">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="space-y-3">
                <h3 className="text-3xl font-black tracking-tight text-gray-900">
                  লোকেশন ও এলাকা
                </h3>
                <p className="flex items-center gap-2 font-medium text-gray-500">
                  <MapPin className="w-4 h-4 text-teal-600" />{" "}
                  {details?.address?.fullAddress}
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() =>
                  window.open(`https://www.google.com/maps?q=${lat},${lng}`)
                }
                className="h-12 gap-2 font-bold border-gray-200 rounded-2xl hover:bg-teal-600 hover:text-white"
              >
                <Navigation className="w-4 h-4" /> গুগল ম্যাপে দেখুন
              </Button>
            </div>

            <div className="relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
              <iframe
                title="map"
                src={mapUrl}
                className="w-full h-full transition-all duration-700 border-0 grayscale hover:grayscale-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="p-3 bg-teal-600 border-2 border-white shadow-2xl rounded-2xl animate-bounce">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Side: Sticky Pricing Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-white border border-gray-100 p-10 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] space-y-8">
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-3xl font-black text-teal-700">
                  ৳{details?.price?.toLocaleString()}
                </p>
                <p className="text-sm italic font-bold tracking-tight text-gray-400 capitalize">
                  {details?.status}
                </p>
              </div>
              <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-50">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-black">৪.৯</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border border-gray-100 rounded-2xl bg-gray-50">
                <span className="text-sm font-bold text-gray-500">
                  সার্ভিস চার্জ
                </span>
                <span className="font-bold text-gray-900">
                  ৳{details?.serviceCharge?.toLocaleString() || "০"}
                </span>
              </div>
              <div className="flex items-center justify-between p-4 border border-gray-100 rounded-2xl bg-gray-50">
                <span className="text-sm font-bold text-gray-500">লোকেশন</span>
                <span className="font-bold text-gray-900">
                  {details?.address?.area}
                </span>
              </div>
            </div>

            <div className="pt-4 space-y-4">
              <Button className="w-full h-16 text-lg font-black text-white bg-teal-600 shadow-xl hover:bg-teal-700 rounded-2xl">
                মালিকের সাথে কথা বলুন
              </Button>
              <Button
                variant="outline"
                className="w-full h-16 text-lg font-bold text-gray-700 border-gray-200 rounded-2xl"
              >
                বাসাটি দেখতে যান
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Helper Component for Amenities
function AmenityItem({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4 p-5 transition-colors rounded-3xl bg-gray-50 hover:bg-teal-50 group">
      <div className="text-teal-600 transition-transform group-hover:scale-110">
        {icon}
      </div>
      <span className="font-bold text-gray-700">{label}</span>
    </div>
  );
}
