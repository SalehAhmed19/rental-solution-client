// import React, { useState, useEffect, useCallback } from "react";
// import {
//   Building2,
//   MapPin,
//   Bed,
//   Bath,
//   ImagePlus,
//   ArrowRight,
//   ArrowLeft,
//   Zap,
//   Car,
//   Flame,
//   X,
//   Loader2,
// } from "lucide-react";
// import { Button } from "../../components/ui/button";
// import { Input } from "../../components/ui/input";
// import { Textarea } from "../../components/ui/textarea";
// import { Badge } from "../../components/ui/badge";
// import { Progress } from "../../components/ui/progress";
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   useMap,
//   useMapEvents,
// } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import debounce from "lodash.debounce";
// import { usePostAdMutation } from "../../redux/slices/propertyApi";
// import { toast } from "sonner";
// import { useNavigate } from "react-router-dom";

// // কাস্টম মার্কার আইকন
// const houseIcon = new L.Icon({
//   iconUrl: "https://cdn-icons-png.flaticon.com/512/619/619153.png",
//   iconSize: [50, 50],
//   iconAnchor: [25, 50],
// });

// function MapUpdater({ center }: { center: { lat: number; lng: number } }) {
//   const map = useMap();
//   useEffect(() => {
//     if (center.lat && center.lng) {
//       map.flyTo([center.lat, center.lng], 16, { animate: true });
//     }
//   }, [center, map]);
//   return null;
// }

// export default function AdPost() {
//   const [step, setStep] = useState(1);
//   const totalSteps = 4;
//   const navigate = useNavigate();
//   const [postAd, { isLoading }] = usePostAdMutation();

//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     price: "",
//     serviceCharge: "0",
//     propertyType: "family",
//     bedrooms: "",
//     bathrooms: "",
//     balcony: "0",
//     area: "",
//     fullAddress: "",
//     hasLift: false,
//     hasGenerator: false,
//     hasParking: false,
//     hasGasConnection: false,
//     coordinates: { lat: 23.8103, lng: 90.4125 },
//     images: [] as File[],
//   });

//   // --- কারেন্ট লোকেশন হ্যান্ডলার ---
//   // const handleGetCurrentLocation = () => {
//   //   if (!navigator.geolocation) {
//   //     toast.error("আপনার ব্রাউজারটি লোকেশন সাপোর্ট করে না!");
//   //     return;
//   //   }

//   //   toast.info("আপনার অবস্থান খোঁজা হচ্ছে...");

//   //   navigator.geolocation.getCurrentPosition(
//   //     async (position) => {
//   //       const { latitude, longitude } = position.coords;
//   //       setFormData((prev) => ({
//   //         ...prev,
//   //         coordinates: { lat: latitude, lng: longitude },
//   //       }));

//   //       try {
//   //         const res = await fetch(
//   //           `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
//   //         );
//   //         const data = await res.json();
//   //         if (data) {
//   //           setFormData((prev) => ({
//   //             ...prev,
//   //             fullAddress: data.display_name || "",
//   //             area:
//   //               data.address?.suburb ||
//   //               data.address?.neighbourhood ||
//   //               data.address?.city ||
//   //               "",
//   //           }));
//   //           toast.success("লোকেশন লোড হয়েছে!");
//   //         }
//   //       } catch (err) {
//   //         console.error("Geocoding error:", err);
//   //       }
//   //     },
//   //     (error) => {
//   //       toast.error("লোকেশন অ্যাক্সেস করতে সমস্যা হয়েছে!");
//   //     },
//   //   );
//   // };
//   const handleGetCurrentLocation = () => {
//     if (!navigator.geolocation) {
//       toast.error("আপনার ব্রাউজারটি লোকেশন সাপোর্ট করে না!");
//       return;
//     }

//     toast.info("আপনার অবস্থান খোঁজা হচ্ছে...");

//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         const { latitude, longitude } = position.coords;

//         setFormData((prev) => ({
//           ...prev,
//           coordinates: { lat: latitude, lng: longitude },
//         }));

//         try {
//           const res = await fetch(
//             `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
//           );
//           const data = await res.json();

//           if (data && data.address) {
//             // এলাকা বের করার জন্য সিরিয়াল চেক (যেটা আগে পাবে সেটা নিবে)
//             const detectedArea =
//               data.address.suburb ||
//               data.address.neighbourhood ||
//               data.address.residential ||
//               data.address.village ||
//               data.address.city_district ||
//               data.address.town ||
//               "";

//             setFormData((prev) => ({
//               ...prev,
//               fullAddress: data.display_name || "",
//               area: detectedArea, // এখন আর ফাঁকা থাকবে না
//             }));

//             toast.success(`${detectedArea} এলাকাটি শনাক্ত করা হয়েছে!`);
//           }
//         } catch (err) {
//           console.error("Geocoding error:", err);
//           toast.error("ঠিকানা খুঁজে পেতে সমস্যা হয়েছে।");
//         }
//       },
//       (error) => {
//         toast.error("লোকেশন অ্যাক্সেস করতে সমস্যা হয়েছে!");
//       },
//       { enableHighAccuracy: true }, // আরও নিখুঁত লোকেশনের জন্য
//     );
//   };

//   const searchLocation = async (query: string) => {
//     if (!query || query.length < 4) return;
//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query + ", Dhaka, Bangladesh")}&limit=1`,
//       );
//       const data = await response.json();
//       if (data && data.length > 0) {
//         setFormData((prev) => ({
//           ...prev,
//           coordinates: {
//             lat: parseFloat(data[0].lat),
//             lng: parseFloat(data[0].lon),
//           },
//         }));
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const debouncedSearch = useCallback(debounce(searchLocation, 1000), []);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
//   ) => {
//     const { name, value, type } = e.target as HTMLInputElement;
//     setFormData((prev) => ({
//       ...prev,
//       [name]:
//         type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
//     }));
//     if (name === "area" || (name === "fullAddress" && value.length > 8)) {
//       debouncedSearch(value);
//     }
//   };

//   const handleSubmit = async () => {
//     const data = new FormData();
//     data.append("title", formData.title);
//     data.append("description", formData.description);
//     data.append("price", formData.price);
//     data.append("serviceCharge", formData.serviceCharge);

//     // মঙ্গুস মডেল অনুযায়ী অ্যাড্রেস অবজেক্ট
//     data.append("address[area]", formData.area);
//     data.append("address[fullAddress]", formData.fullAddress);

//     // ফিচারস অবজেক্ট
//     data.append("features[propertyType]", formData.propertyType);
//     data.append("features[bedrooms]", formData.bedrooms);
//     data.append("features[bathrooms]", formData.bathrooms);
//     data.append("features[balcony]", formData.balcony);
//     data.append("features[hasLift]", String(formData.hasLift));
//     data.append("features[hasGenerator]", String(formData.hasGenerator));
//     data.append("features[hasParking]", String(formData.hasParking));
//     data.append(
//       "features[hasGasConnection]",
//       String(formData.hasGasConnection),
//     );

//     const coords = [formData.coordinates.lng, formData.coordinates.lat];
//     data.append(
//       "location",
//       JSON.stringify({ type: "Point", coordinates: coords }),
//     );

//     formData.images.forEach((file) => data.append("images", file));

//     try {
//       const response = await postAd(data).unwrap();
//       if (response.success) {
//         toast.success("বিজ্ঞাপনটি সফলভাবে জমা হয়েছে!");
//         navigate("/dashboard/my-ads");
//       }
//     } catch (err: any) {
//       toast.error(err?.data?.message || "বিজ্ঞাপন পোস্ট করতে সমস্যা হয়েছে");
//     }
//   };

//   function LocationPicker() {
//     useMapEvents({
//       click(e) {
//         setFormData((prev) => ({ ...prev, coordinates: e.latlng }));
//       },
//     });
//     return <Marker position={formData.coordinates} icon={houseIcon} />;
//   }

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       setFormData((prev) => ({
//         ...prev,
//         images: [...prev.images, ...Array.from(e.target.files!)],
//       }));
//     }
//   };

//   const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
//   const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

//   return (
//     <div className="min-h-screen bg-[#fcfcfc] py-16 px-6 overflow-y-auto">
//       <div className="max-w-4xl mx-auto font-heading">
//         <div className="mb-10 space-y-4">
//           <Badge className="bg-teal-50 text-teal-700 border-teal-100 uppercase font-black">
//             ধাপ {step} / {totalSteps}
//           </Badge>
//           <h1 className="text-4xl font-black text-gray-900">
//             আপনার বাসার <span className="text-teal-600">বিজ্ঞাপন দিন</span>
//           </h1>
//           <Progress
//             value={(step / totalSteps) * 100}
//             className="h-2 bg-teal-100"
//           />
//         </div>

//         <div className="bg-white rounded-[3rem] shadow-2xl border border-gray-50 p-8 md:p-14 relative z-0">
//           <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
//             {step === 1 && (
//               <div className="space-y-8 animate-in fade-in duration-500">
//                 <Input
//                   name="title"
//                   value={formData.title}
//                   onChange={handleChange}
//                   placeholder="বিজ্ঞাপনের শিরোনাম"
//                   className="h-14 rounded-2xl"
//                 />
//                 <Textarea
//                   name="description"
//                   value={formData.description}
//                   onChange={handleChange}
//                   placeholder="বিস্তারিত বর্ণনা"
//                   className="min-h-[120px] rounded-3xl"
//                 />
//                 <div className="grid grid-cols-2 gap-6">
//                   <Input
//                     name="price"
//                     type="number"
//                     value={formData.price}
//                     onChange={handleChange}
//                     placeholder="ভাড়া (৳)"
//                     className="h-14 rounded-2xl font-black text-teal-700"
//                   />
//                   <Input
//                     name="serviceCharge"
//                     type="number"
//                     value={formData.serviceCharge}
//                     onChange={handleChange}
//                     placeholder="সার্ভিস চার্জ (৳)"
//                     className="h-14 rounded-2xl"
//                   />
//                 </div>
//               </div>
//             )}

//             {step === 2 && (
//               <div className="space-y-8 animate-in fade-in duration-500">
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                   {["family", "bachelor", "sublet", "office"].map((type) => (
//                     <label
//                       key={type}
//                       className={`flex flex-col items-center p-6 border-2 rounded-[2rem] cursor-pointer transition-all ${formData.propertyType === type ? "border-teal-500 bg-teal-50 shadow-lg" : "border-gray-100"}`}
//                     >
//                       <input
//                         type="radio"
//                         className="hidden"
//                         checked={formData.propertyType === type}
//                         onChange={() =>
//                           setFormData((p) => ({ ...p, propertyType: type }))
//                         }
//                       />
//                       <Building2
//                         className={`w-6 h-6 mb-2 ${formData.propertyType === type ? "text-teal-600" : "text-gray-300"}`}
//                       />
//                       <span className="text-[10px] font-black uppercase">
//                         {type}
//                       </span>
//                     </label>
//                   ))}
//                 </div>
//                 <div className="grid grid-cols-3 gap-6">
//                   <Input
//                     name="bedrooms"
//                     type="number"
//                     value={formData.bedrooms}
//                     onChange={handleChange}
//                     placeholder="বেডরুম"
//                     className="h-14 rounded-2xl"
//                   />
//                   <Input
//                     name="bathrooms"
//                     type="number"
//                     value={formData.bathrooms}
//                     onChange={handleChange}
//                     placeholder="বাথরুম"
//                     className="h-14 rounded-2xl"
//                   />
//                   <Input
//                     name="balcony"
//                     type="number"
//                     value={formData.balcony}
//                     onChange={handleChange}
//                     placeholder="বারান্দা"
//                     className="h-14 rounded-2xl"
//                   />
//                 </div>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
//                   {[
//                     { id: "hasLift", label: "লিফট", icon: Zap },
//                     { id: "hasParking", label: "পার্কিং", icon: Car },
//                     { id: "hasGasConnection", label: "গ্যাস", icon: Flame },
//                     { id: "hasGenerator", label: "জেনারেটর", icon: Zap },
//                   ].map((item) => (
//                     <label
//                       key={item.id}
//                       className="flex items-center gap-2 cursor-pointer group"
//                     >
//                       <input
//                         type="checkbox"
//                         name={item.id}
//                         checked={(formData as any)[item.id]}
//                         onChange={handleChange}
//                         className="w-5 h-5 accent-teal-600 rounded"
//                       />
//                       <span className="text-sm font-bold text-gray-600 group-hover:text-teal-600">
//                         {item.label}
//                       </span>
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {step === 3 && (
//               <div className="space-y-8 animate-in fade-in duration-500">
//                 <div className="grid grid-cols-2 gap-6">
//                   <Input
//                     name="area"
//                     value={formData.area}
//                     onChange={handleChange}
//                     placeholder="এলাকা (যেমন: Mirpur 10)"
//                     className="h-14 rounded-2xl"
//                   />
//                   <Input
//                     name="fullAddress"
//                     value={formData.fullAddress}
//                     onChange={handleChange}
//                     placeholder="সম্পূর্ণ ঠিকানা"
//                     className="h-14 rounded-2xl"
//                   />
//                 </div>
//                 <div className="relative">
//                   <Button
//                     type="button"
//                     onClick={handleGetCurrentLocation}
//                     className="absolute top-4 right-4 z-[1000] bg-white text-teal-600 hover:bg-teal-50 shadow-2xl rounded-2xl font-black text-xs gap-2 border-2 border-teal-100 h-12"
//                   >
//                     <MapPin className="w-4 h-4 fill-teal-100" /> আমার লোকেশন
//                     ব্যবহার করুন
//                   </Button>
//                   <div className="relative h-80 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl z-0">
//                     <MapContainer
//                       center={formData.coordinates}
//                       zoom={13}
//                       style={{ height: "100%", width: "100%" }}
//                     >
//                       {/* <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
//                       <TileLayer
//                         url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
//                         attribution="&copy; Google"
//                       />
//                       <MapUpdater center={formData.coordinates} />
//                       <LocationPicker />
//                     </MapContainer>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {step === 4 && (
//               <div className="space-y-8 animate-in fade-in duration-500">
//                 <div className="border-4 border-dashed border-gray-50 rounded-[3.5rem] p-16 text-center relative group hover:border-teal-100 transition-colors">
//                   <input
//                     type="file"
//                     multiple
//                     onChange={handleImageChange}
//                     className="absolute inset-0 opacity-0 cursor-pointer"
//                   />
//                   <ImagePlus className="w-12 h-12 text-gray-200 mx-auto" />
//                   <h3 className="text-xl font-black text-gray-900 mt-4">
//                     বাসার ছবি আপলোড করুন
//                   </h3>
//                 </div>
//                 <div className="flex gap-2 overflow-x-auto pb-4">
//                   {formData.images.map((img, i) => (
//                     <div
//                       key={i}
//                       className="relative w-24 h-24 flex-shrink-0 group"
//                     >
//                       <img
//                         src={URL.createObjectURL(img)}
//                         className="object-cover w-full h-full rounded-xl border"
//                       />
//                       <button
//                         onClick={() =>
//                           setFormData((p) => ({
//                             ...p,
//                             images: p.images.filter((_, idx) => idx !== i),
//                           }))
//                         }
//                         className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100"
//                       >
//                         <X className="w-3 h-3" />
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             <div className="flex justify-between items-center pt-8 border-t border-gray-50">
//               <Button
//                 type="button"
//                 onClick={prevStep}
//                 disabled={step === 1}
//                 variant="ghost"
//                 className="h-14 px-8 rounded-2xl font-bold gap-2"
//               >
//                 <ArrowLeft className="w-5 h-5" /> পেছনে
//               </Button>
//               <Button
//                 type="button"
//                 onClick={step === totalSteps ? handleSubmit : nextStep}
//                 disabled={isLoading}
//                 className={`h-16 px-12 rounded-2xl font-black text-white shadow-xl transition-all ${step === totalSteps ? "bg-teal-600 hover:bg-teal-700" : "bg-[#051c1e] hover:bg-black"}`}
//               >
//                 {isLoading ? (
//                   <Loader2 className="w-6 h-6 animate-spin" />
//                 ) : step === totalSteps ? (
//                   "বিজ্ঞাপন প্রকাশ করুন"
//                 ) : (
//                   "পরবর্তী ধাপ"
//                 )}
//                 {!isLoading && <ArrowRight className="ml-2 w-6 h-6" />}
//               </Button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect, useCallback } from "react";
import {
  Building2,
  MapPin,
  Bed,
  Bath,
  ImagePlus,
  ArrowRight,
  ArrowLeft,
  Zap,
  Car,
  Flame,
  X,
  Loader2,
  Info,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Badge } from "../../components/ui/badge";
import { Progress } from "../../components/ui/progress";
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
import { usePostAdMutation } from "../../redux/slices/propertyApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const houseIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/619/619153.png",
  iconSize: [50, 50],
  iconAnchor: [25, 50],
});

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
  const navigate = useNavigate();
  const [postAd, { isLoading }] = usePostAdMutation();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    serviceCharge: "0",
    propertyType: "family",
    bedrooms: "",
    bathrooms: "",
    balcony: "0",
    area: "",
    fullAddress: "",
    addressDetails: "", // বিস্তারিত ঠিকানার জন্য নতুন স্টেট
    hasLift: false,
    hasGenerator: false,
    hasParking: false,
    hasGasConnection: false,
    coordinates: { lat: 23.8103, lng: 90.4125 },
    images: [] as File[],
  });

  const handleGetCurrentLocation = () => {
    if (!navigator.geolocation) {
      toast.error("আপনার ব্রাউজারটি লোকেশন সাপোর্ট করে না!");
      return;
    }
    toast.info("আপনার অবস্থান খোঁজা হচ্ছে...");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setFormData((prev) => ({
          ...prev,
          coordinates: { lat: latitude, lng: longitude },
        }));

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
          );
          const data = await res.json();
          if (data && data.address) {
            const detectedArea =
              data.address.suburb ||
              data.address.neighbourhood ||
              data.address.residential ||
              data.address.village ||
              data.address.city_district ||
              "";
            setFormData((prev) => ({
              ...prev,
              fullAddress: data.display_name || "",
              area: detectedArea,
            }));
            toast.success(`${detectedArea} শনাক্ত করা হয়েছে!`);
          }
        } catch (err) {
          toast.error("ঠিকানা খুঁজে পেতে সমস্যা হয়েছে।");
        }
      },
      () => toast.error("লোকেশন অ্যাক্সেস করতে সমস্যা হয়েছে!"),
      { enableHighAccuracy: true },
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async () => {
    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("serviceCharge", formData.serviceCharge);
    data.append("address[area]", formData.area);
    data.append("address[fullAddress]", formData.fullAddress);
    data.append("address[addressDetails]", formData.addressDetails); // ব্যাকএন্ডে পাঠানো হচ্ছে

    data.append("features[propertyType]", formData.propertyType);
    data.append("features[bedrooms]", formData.bedrooms);
    data.append("features[bathrooms]", formData.bathrooms);
    data.append("features[balcony]", formData.balcony);
    data.append("features[hasLift]", String(formData.hasLift));
    data.append("features[hasGenerator]", String(formData.hasGenerator));
    data.append("features[hasParking]", String(formData.hasParking));
    data.append(
      "features[hasGasConnection]",
      String(formData.hasGasConnection),
    );

    const coords = [formData.coordinates.lng, formData.coordinates.lat];
    data.append(
      "location",
      JSON.stringify({ type: "Point", coordinates: coords }),
    );
    formData.images.forEach((file) => data.append("images", file));

    try {
      const response = await postAd(data).unwrap();
      if (response.success) {
        toast.success("বিজ্ঞাপনটি সফলভাবে জমা হয়েছে!");
        navigate("/dashboard/my-ads");
      }
    } catch (err: any) {
      toast.error(err?.data?.message || "বিজ্ঞাপন পোস্ট করতে সমস্যা হয়েছে");
    }
  };

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

  return (
    <div className="min-h-screen bg-[#fcfcfc] py-16 px-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto font-heading">
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
            {step === 1 && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <Input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="বিজ্ঞাপনের শিরোনাম"
                  className="h-14 rounded-2xl"
                />
                <Textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="বিস্তারিত বর্ণনা"
                  className="min-h-[120px] rounded-3xl"
                />
                <div className="grid grid-cols-2 gap-6">
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

            {step === 2 && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["family", "bachelor", "sublet", "office"].map((type) => (
                    <label
                      key={type}
                      className={`flex flex-col items-center p-6 border-2 rounded-[2rem] cursor-pointer transition-all ${formData.propertyType === type ? "border-teal-500 bg-teal-50 shadow-lg" : "border-gray-100"}`}
                    >
                      <input
                        type="radio"
                        className="hidden"
                        checked={formData.propertyType === type}
                        onChange={() =>
                          setFormData((p) => ({ ...p, propertyType: type }))
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
                <div className="grid grid-cols-3 gap-6">
                  <Input
                    name="bedrooms"
                    type="number"
                    value={formData.bedrooms}
                    onChange={handleChange}
                    placeholder="বেডরুম"
                    className="h-14 rounded-2xl"
                  />
                  <Input
                    name="bathrooms"
                    type="number"
                    value={formData.bathrooms}
                    onChange={handleChange}
                    placeholder="বাথরুম"
                    className="h-14 rounded-2xl"
                  />
                  <Input
                    name="balcony"
                    type="number"
                    value={formData.balcony}
                    onChange={handleChange}
                    placeholder="বারান্দা"
                    className="h-14 rounded-2xl"
                  />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                  {[
                    { id: "hasLift", label: "লিফট" },
                    { id: "hasParking", label: "পার্কিং" },
                    { id: "hasGasConnection", label: "গ্যাস" },
                    { id: "hasGenerator", label: "জেনারেটর" },
                  ].map((item) => (
                    <label
                      key={item.id}
                      className="flex items-center gap-2 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        name={item.id}
                        checked={(formData as any)[item.id]}
                        onChange={handleChange}
                        className="w-5 h-5 accent-teal-600 rounded"
                      />
                      <span className="text-sm font-bold text-gray-600 group-hover:text-teal-600">
                        {item.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-2">
                      এলাকা
                    </label>
                    <Input
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      placeholder="যেমন: মিরপুর ১০"
                      className="h-14 rounded-2xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-2">
                      বিস্তারিত ঠিকানা (ঐচ্ছিক)
                    </label>
                    <Input
                      name="addressDetails"
                      value={formData.addressDetails}
                      onChange={handleChange}
                      placeholder="পাড়া, মহল্লা বা বাসার নম্বর"
                      className="h-14 rounded-2xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-2">
                    সম্পূর্ণ ঠিকানা (অটোমেটিক)
                  </label>
                  <Input
                    name="fullAddress"
                    value={formData.fullAddress}
                    onChange={handleChange}
                    placeholder="ম্যাপ থেকে ঠিকানা আসবে..."
                    className="h-14 rounded-2xl bg-gray-50"
                  />
                </div>

                <div className="relative">
                  <Button
                    type="button"
                    onClick={handleGetCurrentLocation}
                    className="absolute top-4 right-4 z-[1000] bg-white text-teal-600 hover:bg-teal-50 shadow-2xl rounded-2xl font-black text-xs gap-2 border-2 border-teal-100 h-12"
                  >
                    <MapPin className="w-4 h-4" /> কারেন্ট লোকেশন ব্যবহার করুন
                  </Button>
                  <div className="relative h-80 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl z-0">
                    <MapContainer
                      center={formData.coordinates}
                      zoom={13}
                      style={{ height: "100%", width: "100%" }}
                    >
                      <TileLayer
                        url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                        attribution="&copy; Google"
                      />
                      <MapUpdater center={formData.coordinates} />
                      <LocationPicker />
                    </MapContainer>
                  </div>
                  <div className="flex items-center gap-2 mt-3 text-gray-400">
                    <Info className="w-4 h-4 text-teal-500" />
                    <p className="text-[11px] font-bold italic">
                      ম্যাপে আপনার বাসার ওপর ক্লিক করে পিন বসান।
                    </p>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="border-4 border-dashed border-gray-50 rounded-[3.5rem] p-16 text-center relative group hover:border-teal-100 transition-colors">
                  <input
                    type="file"
                    multiple
                    onChange={handleImageChange}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <ImagePlus className="w-12 h-12 text-gray-200 mx-auto" />
                  <h3 className="text-xl font-black text-gray-900 mt-4">
                    বাসার ছবি আপলোড করুন
                  </h3>
                </div>
                <div className="flex gap-2 overflow-x-auto pb-4">
                  {formData.images.map((img, i) => (
                    <div
                      key={i}
                      className="relative w-24 h-24 flex-shrink-0 group"
                    >
                      <img
                        src={URL.createObjectURL(img)}
                        className="object-cover w-full h-full rounded-xl border"
                      />
                      <button
                        onClick={() =>
                          setFormData((p) => ({
                            ...p,
                            images: p.images.filter((_, idx) => idx !== i),
                          }))
                        }
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-between items-center pt-8 border-t border-gray-50">
              <Button
                type="button"
                onClick={() => setStep((s) => Math.max(s - 1, 1))}
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
                    ? handleSubmit
                    : () => setStep((s) => Math.min(s + 1, totalSteps))
                }
                disabled={isLoading}
                className={`h-16 px-12 rounded-2xl font-black text-white shadow-xl transition-all ${step === totalSteps ? "bg-teal-600 hover:bg-teal-700" : "bg-[#051c1e] hover:bg-black"}`}
              >
                {isLoading ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : step === totalSteps ? (
                  "বিজ্ঞাপন প্রকাশ করুন"
                ) : (
                  "পরবর্তী ধাপ"
                )}
                {!isLoading && <ArrowRight className="ml-2 w-6 h-6" />}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
