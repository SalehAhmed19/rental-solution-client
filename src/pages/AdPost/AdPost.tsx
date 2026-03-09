import React, { useState, useEffect, useCallback } from "react";
import {
  Building2,
  MapPin,
  Bed,
  Bath,
  LayoutGrid,
  ImagePlus,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Zap,
  Car,
  Flame,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Badge } from "../../components/ui/badge";
import { Progress } from "../../components/ui/progress";
// Leaflet Imports
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import debounce from "lodash.debounce";

// ৩ডি হাউজ আইকন (লুক উন্নত করা হয়েছে)
const houseIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/619/619153.png",
  iconSize: [50, 50],
  iconAnchor: [25, 50],
});

// ম্যাপ ভিউ আপডেট করার হেল্পার (স্মার্টলি লোকেশনে মুভ করবে)
function MapUpdater({ center }: { center: { lat: number; lng: number } }) {
  const map = useMap();
  useEffect(() => {
    if (center.lat && center.lng) {
      map.flyTo([center.lat, center.lng], 16, { animate: true });
    }
  }, [center, map]);
  return null;
}

export default function AdPost() {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    serviceCharge: "",
    propertyType: "family",
    bedrooms: "",
    bathrooms: "",
    balcony: "",
    area: "",
    fullAddress: "",
    coordinates: { lat: 23.8103, lng: 90.4125 },
    images: [] as File[],
  });

  // --- Geocoding Logic ---
  // --- Geocoding Logic (সংশোধিত) ---
  const searchLocation = async (query: string) => {
    if (!query || query.length < 4) return;

    // সম্পূর্ণ ঠিকানাকে ছোট করে সার্চ করা যাতে ম্যাপ সহজে খুঁজে পায়
    const searchQuery = query.split(",").slice(-2).join(", "); // শেষের ২-৩টি অংশ নেয় (যেমন: সেক্টর ৪, উত্তরা)

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery + ", Dhaka, Bangladesh")}&limit=1`,
      );
      const data = await response.json();

      if (data && data.length > 0) {
        setFormData((prev) => ({
          ...prev,
          coordinates: {
            lat: parseFloat(data[0].lat),
            lng: parseFloat(data[0].lon),
          },
        }));
      }
    } catch (err) {
      console.error("Geocoding Error:", err);
    }
  };

  const debouncedSearch = useCallback(debounce(searchLocation, 1000), []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // এলাকা বা ঠিকানা পরিবর্তনের সাথে সাথে ম্যাপ আপডেট
    if (name === "area") {
      debouncedSearch(value);
    } else if (name === "fullAddress" && value.length > 10) {
      // সম্পূর্ণ ঠিকানার ক্ষেত্রে অন্তত ১০ অক্ষর হলে সার্চ শুরু হবে
      debouncedSearch(value);
    }
  };

  // লোকেশন সিলেক্টর কম্পোনেন্ট
  function LocationPicker() {
    useMapEvents({
      click(e) {
        setFormData((prev) => ({ ...prev, coordinates: e.latlng }));
      },
    });
    return <Marker position={formData.coordinates} icon={houseIcon} />;
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...Array.from(e.target.files!)],
      }));
    }
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-[#fcfcfc] py-16 px-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 space-y-4">
          <Badge className="bg-teal-50 text-teal-700 border-teal-100 uppercase font-black">
            ধাপ {step} / {totalSteps}
          </Badge>
          <h1 className="text-4xl font-black text-gray-900">
            আপনার বাসার <span className="text-teal-600">বিজ্ঞাপন দিন</span>
          </h1>
          <Progress
            value={(step / totalSteps) * 100}
            className="h-2 bg-teal-100"
          />
        </div>

        <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-50 p-8 md:p-14 relative z-0">
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-gray-400 tracking-widest">
                    বিজ্ঞাপনের শিরোনাম
                  </label>
                  <Input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="যেমন: উত্তরা সেক্টর ৪ এ ৩ বেডরুমের ফ্ল্যাট"
                    className="h-14 rounded-2xl border-gray-100"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase text-gray-400 tracking-widest">
                    বিস্তারিত বর্ণনা
                  </label>
                  <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="আপনার বাসা সম্পর্কে বিস্তারিত লিখুন..."
                    className="min-h-[120px] rounded-3xl"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="ভাড়া (৳)"
                    className="h-14 rounded-2xl font-black text-teal-700"
                  />
                  <Input
                    name="serviceCharge"
                    type="number"
                    value={formData.serviceCharge}
                    onChange={handleChange}
                    placeholder="সার্ভিস চার্জ (৳)"
                    className="h-14 rounded-2xl"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Features */}
            {step === 2 && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["family", "bachelor", "sublet", "office"].map((type) => (
                    <label
                      key={type}
                      className={`flex flex-col items-center p-6 border-2 rounded-[2rem] cursor-pointer transition-all ${formData.propertyType === type ? "border-teal-500 bg-teal-50 shadow-lg" : "border-gray-100 hover:bg-gray-50"}`}
                    >
                      <input
                        type="radio"
                        className="hidden"
                        checked={formData.propertyType === type}
                        onChange={() =>
                          setFormData((prev) => ({
                            ...prev,
                            propertyType: type,
                          }))
                        }
                      />
                      <Building2
                        className={`w-6 h-6 mb-2 ${formData.propertyType === type ? "text-teal-600" : "text-gray-300"}`}
                      />
                      <span className="text-[10px] font-black uppercase">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Input
                    name="bedrooms"
                    type="number"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    placeholder="বেডরুম সংখ্যা"
                    className="h-14 rounded-2xl"
                  />
                  <Input
                    name="bathrooms"
                    type="number"
                    value={formData.bathrooms}
                    onChange={handleChange}
                    placeholder="বাথরুম সংখ্যা"
                    className="h-14 rounded-2xl"
                  />
                  <Input
                    name="balcony"
                    type="number"
                    value={formData.balcony}
                    onChange={handleChange}
                    placeholder="বারান্দা সংখ্যা"
                    className="h-14 rounded-2xl"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Map & Location (ম্যাপ ফিক্স করা হয়েছে) */}
            {step === 3 && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    placeholder="এলাকা (যেমন: উত্তরা)"
                    className="h-14 rounded-2xl"
                  />
                  <Input
                    name="fullAddress"
                    value={formData.fullAddress}
                    onChange={handleChange}
                    placeholder="সম্পূর্ণ ঠিকানা"
                    className="h-14 rounded-2xl"
                  />
                </div>
                <div className="relative h-80 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl z-0">
                  <MapContainer
                    center={formData.coordinates}
                    zoom={13}
                    style={{ height: "100%", width: "100%" }}
                  >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <MapUpdater center={formData.coordinates} />
                    <LocationPicker />
                  </MapContainer>
                  <div className="absolute bottom-4 left-4 z-[1000] bg-white/90 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-tighter shadow-md flex items-center gap-2">
                    <MapPin className="w-3 h-3 text-teal-600" /> পিনটি সঠিক
                    জায়গায় বসান
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Images */}
            {step === 4 && (
              <div className="space-y-8 animate-in fade-in duration-500 text-center">
                <div className="border-4 border-dashed border-gray-50 rounded-[3.5rem] p-16 space-y-4 hover:border-teal-100 transition-colors relative">
                  <input
                    type="file"
                    multiple
                    onChange={handleImageChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <ImagePlus className="w-12 h-12 text-gray-200 mx-auto" />
                  <h3 className="text-xl font-black text-gray-900">
                    বাসার ছবি আপলোড করুন
                  </h3>
                  <Button
                    variant="outline"
                    className="rounded-full font-bold pointer-events-none"
                  >
                    ফাইল সিলেক্ট করুন
                  </Button>
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {formData.images.map((img, i) => (
                    <div
                      key={i}
                      className="w-20 h-20 bg-gray-50 rounded-xl flex-shrink-0 overflow-hidden border border-gray-100"
                    >
                      <img
                        src={URL.createObjectURL(img)}
                        className="object-cover w-full h-full"
                        alt="preview"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center pt-8 border-t border-gray-50">
              <Button
                type="button"
                onClick={prevStep}
                disabled={step === 1}
                variant="ghost"
                className="h-14 px-8 rounded-2xl font-bold gap-2"
              >
                <ArrowLeft className="w-5 h-5" /> পেছনে
              </Button>
              <Button
                type="button"
                onClick={
                  step === totalSteps
                    ? () => console.log("Final Data:", formData)
                    : nextStep
                }
                className={`h-16 px-12 rounded-2xl font-black text-white transition-all active:scale-95 ${step === totalSteps ? "bg-teal-600 hover:bg-teal-700" : "bg-[#051c1e] hover:bg-black"}`}
              >
                {step === totalSteps ? "বিজ্ঞাপন প্রকাশ করুন" : "পরবর্তী ধাপ"}
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
