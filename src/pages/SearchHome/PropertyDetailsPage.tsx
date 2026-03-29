import React from "react";
import {
  MapPin,
  Bed,
  Bath,
  Layers,
  Wifi,
  ShieldCheck,
  ArrowLeft,
  Share2,
  Heart,
  Zap,
  Car,
  Navigation,
  Star,
  Flame,
  Check,
  Loader2,
  LayoutGrid,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetPropertyByIdQuery,
  useToggleSavePropertyMutation,
} from "../../redux/slices/propertyApi";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { updateSavedProperties } from "../../redux/slices/authSlice";
import { toast } from "sonner";

export default function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // ১. Redux থেকে ডাটা এবং ইউজার স্টেট আনা
  const { data: response, isLoading, isError } = useGetPropertyByIdQuery(id);
  const [toggleSave, { isLoading: isSaving }] = useToggleSavePropertyMutation();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();
  const details = response?.data;

  // ২. ইউজার এই বাসাটি সেভ করেছে কি না চেক করা
  const isSaved = user?.savedProperties?.includes(id as string);

  // ৩. সেভ হ্যান্ডলার
  const handleSaveToggle = async () => {
    if (!isAuthenticated) {
      return toast.error("সেভ করতে আগে লগইন করুন!");
    }
    try {
      // এপিআই কল থেকে রেজাল্ট নিন
      const result = await toggleSave(id).unwrap();

      // 🔥 ম্যাজিক লাইন: ব্যাকএন্ড থেকে আসা নতুন লিস্ট দিয়ে রিডাক্স স্টেট আপডেট
      if (result.success && result.savedProperties) {
        dispatch(updateSavedProperties(result.savedProperties));

        toast.success(
          isSaved
            ? "পছন্দের তালিকা থেকে সরানো হয়েছে"
            : "সফলভাবে সেভ করা হয়েছে!",
        );
      }
    } catch (err: any) {
      toast.error(err?.data?.message || "সমস্যা হয়েছে, আবার চেষ্টা করুন");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <Loader2 className="w-12 h-12 animate-spin text-teal-600" />
        <p className="font-black uppercase text-xs tracking-widest text-gray-400">
          বাসার তথ্য লোড হচ্ছে...
        </p>
      </div>
    );
  }

  if (isError || !details) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-black text-gray-900">
          দুঃখিত, তথ্য পাওয়া যায়নি!
        </h2>
        <Button onClick={() => navigate(-1)}>পেছনে ফিরে যান</Button>
      </div>
    );
  }

  // 🔥 ম্যাপ ফিক্স: GeoJSON [longitude, latitude] ফরম্যাট থেকে ডাটা নেওয়া
  // MongoDB তে সাধারণত [Long, Lat] থাকে, তাই index ০ হলো Longitude এবং ১ হলো Latitude
  const lng = details?.location?.coordinates?.[0] || 90.4125;
  const lat = details?.location?.coordinates?.[1] || 23.8103;

  // Google Maps Embed URL (এই ফরম্যাটটি iframe এর জন্য সঠিক)
  const embedMapUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  // গুগল ম্যাপ অ্যাপে বা নতুন ট্যাবে দেখার জন্য ডাইরেক্ট লিঙ্ক
  const googleMapsAppUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  return (
    <div className="min-h-screen pb-20 bg-white font-heading">
      {/* 1. Gallery Header & Actions */}
      <section className="relative px-6 py-6 max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="gap-2 font-bold text-gray-600 rounded-full hover:bg-gray-100"
          >
            <ArrowLeft className="w-4 h-4" /> ব্যাক টু সার্চ
          </Button>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-gray-100"
            >
              <Share2 className="w-4 h-4" />
            </Button>

            <Button
              variant={isSaved ? "default" : "outline"}
              onClick={handleSaveToggle}
              disabled={isSaving}
              className={`gap-2 h-11 px-6 rounded-full transition-all duration-300 font-black uppercase tracking-tighter ${
                isSaved
                  ? "bg-red-50 text-red-500 border border-red-200 hover:bg-red-100 shadow-sm"
                  : "bg-white border-gray-200 text-gray-600 hover:border-red-200 hover:text-red-500 hover:bg-red-50"
              }`}
            >
              {isSaving ? (
                <Loader2 className="w-4 h-4 animate-spin text-red-500" />
              ) : (
                <>
                  <Heart
                    className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                      isSaved ? "fill-red-500 text-red-500" : ""
                    }`}
                  />
                  {isSaved ? "সেভ করা হয়েছে" : "সেভ করুন"}
                </>
              )}
            </Button>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="relative col-span-2 row-span-2 overflow-hidden group">
            <img
              src={
                details?.images?.[0] ||
                "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
              }
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
              alt="Main"
            />
          </div>
          <div className="col-span-1 row-span-1 overflow-hidden">
            <img
              src={details?.images?.[1] || details?.images?.[0]}
              className="object-cover w-full h-full"
              alt="View 1"
            />
          </div>
          <div className="col-span-1 row-span-1 overflow-hidden">
            <img
              src={details?.images?.[2] || details?.images?.[0]}
              className="object-cover w-full h-full"
              alt="View 2"
            />
          </div>
          <div className="relative col-span-2 row-span-1 overflow-hidden">
            <img
              src={details?.images?.[3] || details?.images?.[0]}
              className="object-cover w-full h-full"
              alt="View 3"
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
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-teal-50 text-teal-700 border-teal-100 px-4 py-1.5 rounded-full font-bold capitalize">
                {details?.features?.propertyType}
              </Badge>
              {details?.isApproved && (
                <Badge className="bg-blue-50 text-blue-700 border-blue-100 px-4 py-1.5 rounded-full font-bold">
                  ভেরিফাইড লিস্টিং
                </Badge>
              )}
            </div>

            <h1 className="text-4xl font-black leading-tight text-gray-900 uppercase md:text-5xl tracking-tighter">
              {details?.title}
            </h1>

            <div className="flex flex-wrap items-center gap-8 py-6 border-gray-100 border-y">
              <StatItem
                icon={<Bed />}
                label="বেডরুম"
                value={`${details?.features?.bedrooms} টি`}
              />
              <StatItem
                icon={<Bath />}
                label="বাথরুম"
                value={`${details?.features?.bathrooms} টি`}
              />
              <StatItem
                icon={<LayoutGrid />}
                label="বারান্দা"
                value={`${details?.features?.balcony} টি`}
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-black text-gray-900 italic">
              বাসার বর্ণনা
            </h3>
            <p className="text-lg font-medium leading-relaxed text-gray-500">
              {details?.description}
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-black text-gray-900">
              সুযোগ-সুবিধাসমূহ
            </h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {details?.features?.hasLift && (
                <AmenityItem icon={<Layers />} label="লিফট সুবিধা" />
              )}
              {details?.features?.hasGenerator && (
                <AmenityItem icon={<Zap />} label="জেনারেটর" />
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
              <AmenityItem icon={<Wifi />} label="ইন্টারনেট" />
              <AmenityItem icon={<ShieldCheck />} label="২৪/৭ নিরাপত্তা" />
            </div>
          </div>

          {/* 📍 ম্যাপ সেকশন (ফিক্সড) */}
          <section className="pt-12 space-y-10 border-t border-gray-100">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="space-y-3">
                <h3 className="text-3xl font-black tracking-tight text-gray-900 italic">
                  লোকেশন ও এলাকা
                </h3>
                <p className="flex items-center gap-2 font-medium text-gray-500">
                  <MapPin className="w-4 h-4 text-teal-600" />{" "}
                  {details?.address?.fullAddress}
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() => window.open(googleMapsAppUrl, "_blank")}
                className="h-12 gap-2 font-bold border-gray-200 rounded-2xl hover:bg-teal-600 hover:text-white"
              >
                <Navigation className="w-4 h-4" /> গুগল ম্যাপে দেখুন
              </Button>
            </div>

            <div className="relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50 group">
              <iframe
                title="Property Map"
                src={embedMapUrl}
                className="w-full h-full transition-all duration-700 border-0 grayscale hover:grayscale-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </section>
        </div>

        {/* Sidebar Pricing Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 bg-white border border-gray-100 p-10 rounded-[3rem] shadow-2xl space-y-8">
            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-4xl font-black text-teal-700">
                  ৳{details?.price?.toLocaleString()}
                </p>
                <p className="text-sm font-bold text-gray-400">
                  প্রতি মাসে (ফিক্সড)
                </p>
              </div>
              <Badge className="bg-yellow-50 text-yellow-700 border-none px-3 py-1 gap-1">
                <Star className="w-3 h-3 fill-yellow-600" /> ৪.৯
              </Badge>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between p-4 bg-gray-50 rounded-2xl font-bold">
                <span className="text-gray-400">সার্ভিস চার্জ</span>
                <span>৳{details?.serviceCharge?.toLocaleString() || "০"}</span>
              </div>
              <div className="flex justify-between p-4 bg-gray-50 rounded-2xl font-bold">
                <span className="text-gray-400">এলাকা</span>
                <span>{details?.address?.area}</span>
              </div>
            </div>

            <div className="pt-4 space-y-4">
              <Button className="w-full h-16 text-lg font-black text-white bg-teal-600 shadow-xl hover:bg-teal-700 rounded-2xl active:scale-95 transition-all">
                মালিকের সাথে কথা বলুন
              </Button>

              <button
                onClick={handleSaveToggle}
                disabled={isSaving}
                className={`w-full flex items-center justify-center gap-2 font-black uppercase text-[12px] tracking-widest py-4 border-t border-gray-100 transition-all duration-300 rounded-b-2xl ${
                  isSaved
                    ? "text-red-500 bg-red-50 hover:bg-red-100"
                    : "text-gray-500 hover:text-red-500 hover:bg-red-50"
                }`}
              >
                {isSaving ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <Heart
                      className={`w-4 h-4 transition-transform ${isSaved ? "fill-red-500 scale-110" : ""}`}
                    />
                    {isSaved
                      ? "আপনার পছন্দের তালিকায় আছে"
                      : "পরের জন্য তুলে রাখুন"}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// --- Helper Components ---
function StatItem({ icon, label, value }: any) {
  return (
    <div className="flex items-center gap-3 italic">
      <div className="p-3 bg-gray-50 rounded-2xl text-teal-600">{icon}</div>
      <div>
        <p className="text-[10px] font-black text-gray-400 uppercase">
          {label}
        </p>
        <p className="text-lg font-black tracking-tighter">{value}</p>
      </div>
    </div>
  );
}

function AmenityItem({ icon, label }: any) {
  return (
    <div className="flex items-center gap-4 p-5 rounded-3xl bg-gray-50 hover:bg-teal-50 transition-colors group">
      <div className="text-teal-600 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <span className="font-bold text-gray-700 text-sm">{label}</span>
    </div>
  );
}
