// import React, { useState } from "react";
// import {
//   Search,
//   MapPin,
//   Calendar,
//   Filter,
//   Star,
//   ListFilter,
//   Heart,
//   ArrowUpRight,
//   Bed,
//   Bath,
//   Layers,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../../components/ui/select";
// import { Link } from "react-router-dom";
// import { properties } from "../../assets/data";
// import FAQ from "./FAQ";

// // Leaflet Imports
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// // কাস্টম মার্কার আইকন সেটআপ
// const customIcon = L.divIcon({
//   className: "custom-div-icon",
//   html: `
//     <div style="
//       background-color: white;
//       width: 45px;
//       height: 45px;
//       border-radius: 14px;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       box-shadow: 0 10px 25px rgba(0,0,0,0.2);
//       border: 2px solid #0d9488;
//       transform: rotate(-45deg);
//       transition: all 0.3s ease;
//     ">
//       <div style="transform: rotate(45deg);">
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
//           <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
//           <polyline points="9 22 9 12 15 12 15 22"></polyline>
//         </svg>
//       </div>
//     </div>
//     <div style="
//       width: 0;
//       height: 0;
//       border-left: 8px solid transparent;
//       border-right: 8px solid transparent;
//       border-top: 10px solid #0d9488;
//       margin-left: 14px;
//       margin-top: -2px;
//     "></div>
//   `,
//   iconSize: [45, 55],
//   iconAnchor: [22, 55],
//   popupAnchor: [0, -50],
// });

// const center: [number, number] = [23.8103, 90.4125]; // ঢাকা সেন্টার

// export default function SearchHome() {
//   return (
//     <div className="flex flex-col h-screen overflow-hidden bg-white">
//       {/* Header Section */}
//       <header className="z-50 flex-none px-6 py-4 border-b border-gray-100 bg-white/80 backdrop-blur-md">
//         <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center gap-4">
//           <div className="flex items-center flex-1 w-full px-4 py-2 transition-all border border-gray-200 bg-gray-50 rounded-2xl focus-within:ring-2 focus-within:ring-teal-500/20 focus-within:border-teal-500">
//             <div className="flex items-center flex-1 gap-3 px-3 border-r border-gray-200">
//               <Search className="w-4 h-4 text-teal-600" />
//               <input
//                 type="text"
//                 placeholder="এলাকা বা বাসার নাম..."
//                 className="w-full text-sm font-medium bg-transparent outline-none"
//               />
//             </div>
//             <Button className="h-10 px-6 text-white bg-teal-600 shadow-lg hover:bg-teal-700 rounded-xl">
//               সার্চ
//             </Button>
//           </div>
//           <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
//             {["ব্যাচেলর", "ফ্যামিলি", "সাবলেট", "অফিস"].map((f) => (
//               <Button
//                 key={f}
//                 variant="secondary"
//                 className="h-10 px-5 text-xs font-bold capitalize bg-gray-100 rounded-xl hover:bg-teal-50 hover:text-teal-700"
//               >
//                 {f}
//               </Button>
//             ))}
//           </div>
//         </div>
//       </header>

//       <main className="flex flex-1 overflow-hidden">
//         {/* Left Side: Property Listings */}
//         <div className="w-full px-6 py-8 overflow-y-auto lg:w-3/5 no-scrollbar bg-gray-50/50">
//           <div className="max-w-[1000px] mx-auto space-y-12">
//             <div className="flex items-center justify-between px-2">
//               <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">
//                 {properties.length} টি বাসা খুঁজে পাওয়া গেছে{" "}
//                 <span className="text-teal-600">— ঢাকা</span>
//               </p>
//               <div className="flex items-center gap-2 group">
//                 <ListFilter className="w-4 h-4 text-gray-400" />
//                 <Select defaultValue="latest">
//                   <SelectTrigger className="w-[180px] border-none bg-transparent font-bold text-gray-700">
//                     <SelectValue placeholder="সর্টিং" />
//                   </SelectTrigger>
//                   <SelectContent className="rounded-2xl">
//                     <SelectItem value="latest">সর্টিং: লেটেস্ট</SelectItem>
//                     <SelectItem value="price-low">
//                       ভাড়া: কম থেকে বেশি
//                     </SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>

//             {/* লিস্টিং কার্ডস */}
//             <div className="grid grid-cols-1 gap-8">
//               {properties.map((property) => (
//                 <Link to={`/search/${property._id}`} key={property._id}>
//                   <Card className="group flex flex-col md:flex-row bg-white border-none rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_-20px_rgba(0,0,0,0.12)] transition-all duration-500 overflow-hidden">
//                     <div className="relative w-full md:w-[320px] h-[240px] md:h-auto overflow-hidden shrink-0">
//                       <img
//                         src={property.images[0]}
//                         alt={property.title}
//                         className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
//                       />
//                       <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase text-teal-700 tracking-wider">
//                         {property.status === "available"
//                           ? "Verified"
//                           : "Rented"}
//                       </div>
//                     </div>
//                     <CardContent className="flex flex-col justify-between flex-1 p-8">
//                       <div className="space-y-4">
//                         <div className="flex items-center justify-between">
//                           <span className="flex items-center gap-1.5 text-teal-600 font-bold text-[10px] uppercase tracking-widest">
//                             <MapPin className="w-3 h-3" />{" "}
//                             {property.address.area}
//                           </span>
//                           <div className="flex items-center gap-1">
//                             <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
//                             <span className="text-xs font-black">4.8</span>
//                           </div>
//                         </div>
//                         <h3 className="text-2xl font-black text-gray-900 transition-colors group-hover:text-teal-600">
//                           {property.title}
//                         </h3>
//                         <div className="flex gap-4 text-xs font-bold text-gray-500">
//                           <div className="flex items-center gap-2">
//                             <Bed className="w-4 h-4" />{" "}
//                             {property.features.bedrooms} বেড
//                           </div>
//                           <div className="flex items-center gap-2">
//                             <Bath className="w-4 h-4" />{" "}
//                             {property.features.bathrooms} বাথ
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex items-center justify-between pt-6 mt-4 border-t border-gray-50">
//                         <span className="text-2xl font-black text-teal-700">
//                           ৳{property.price.toLocaleString()}
//                         </span>
//                         <div className="flex items-center gap-1 text-sm font-bold text-teal-600">
//                           ডিটেইলস <ArrowUpRight className="w-4 h-4" />
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </Link>
//               ))}
//             </div>
//             <FAQ />
//           </div>
//         </div>

//         {/* Right Side: High-End Leaflet Map */}
//         <div className="relative z-0 hidden h-full border-l border-gray-100 lg:block lg:w-2/5 bg-[#f8fafc]">
//           <MapContainer
//             center={center}
//             zoom={13}
//             style={{ height: "100%", width: "100%" }}
//             scrollWheelZoom={true}
//             className="premium-map"
//           >
//             {/* মডার্ন গ্রে-স্কেল ম্যাপ লেয়ার (CartoDB Positron - এটি অনেক ক্লিন) */}
//             <TileLayer
//               url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
//               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
//             />

//             {properties.map((p) => (
//               <Marker
//                 key={p._id}
//                 position={[
//                   p.location.coordinates[1],
//                   p.location.coordinates[0],
//                 ]}
//                 icon={customIcon} // এখানে নতুন প্রিমিয়াম আইকন কাজ করবে
//               >
//                 <Popup className="premium-popup">
//                   <div className="p-0 overflow-hidden bg-white rounded-2xl shadow-2xl w-[220px]">
//                     <div className="relative">
//                       <img
//                         src={p.images[0]}
//                         className="object-cover w-full h-28"
//                         alt="House"
//                       />
//                       <div className="absolute top-2 left-2 bg-teal-600 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-tighter">
//                         Verified
//                       </div>
//                     </div>
//                     <div className="p-3">
//                       <p className="text-[11px] font-black text-gray-900 uppercase truncate">
//                         {p.title}
//                       </p>
//                       <div className="flex items-center justify-between mt-2">
//                         <p className="text-sm font-black text-teal-700">
//                           ৳{p.price.toLocaleString()}
//                         </p>
//                         <div className="flex items-center gap-1 bg-yellow-50 px-1.5 py-0.5 rounded-md">
//                           <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
//                           <span className="text-[10px] font-bold text-yellow-700">
//                             4.8
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </Popup>
//               </Marker>
//             ))}
//           </MapContainer>
//         </div>
//       </main>
//     </div>
//   );
// }

import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom"; // URL থেকে ডাটা পড়ার জন্য
import {
  Search,
  MapPin,
  Star,
  ListFilter,
  ArrowUpRight,
  Bed,
  Bath,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { properties } from "../../assets/data";
import FAQ from "./FAQ";

// Leaflet Imports
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// কাস্টম মার্কার আইকন (আগের মতোই)
const customIcon = L.divIcon({
  className: "custom-div-icon",
  html: `<div style="background-color: white; width: 45px; height: 45px; border-radius: 14px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(0,0,0,0.2); border: 2px solid #0d9488; transform: rotate(-45deg);"><div style="transform: rotate(45deg);"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div></div><div style="width: 0; height: 0; border-left: 8px solid transparent; border-right: 8px solid transparent; border-top: 10px solid #0d9488; margin-left: 14px; margin-top: -2px;"></div>`,
  iconSize: [45, 55],
  iconAnchor: [22, 55],
  popupAnchor: [0, -50],
});

// ম্যাপ রিলোভ করার জন্য হেল্পার কম্পোনেন্ট
function RecenterMap({ coords }: { coords: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(coords, 13);
  }, [coords, map]);
  return null;
}

export default function SearchHome() {
  const [searchParams, setSearchParams] = useSearchParams();

  // ১. URL থেকে ডিফল্ট ভ্যালুগুলো নেওয়া
  const initialLocation = searchParams.get("location") || "";
  const initialType = searchParams.get("type") || "";
  const initialBudget = searchParams.get("budget") || "";

  // ২. লোকাল স্টেট (যাতে এই পেজেও সার্চ করা যায়)
  const [searchTerm, setSearchTerm] = useState(initialLocation);
  const [selectedType, setSelectedType] = useState(initialType);
  const [sortOrder, setSortOrder] = useState("latest");

  // ৩. ডাইনামিক ফিল্টারিং লজিক
  const filteredResults = useMemo(() => {
    return properties
      .filter((p) => {
        const matchLocation =
          p.address.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchType = selectedType
          ? p.features.propertyType === selectedType
          : true;

        // বাজেট ফিল্টার লজিক (ব্যানার থেকে আসা রেঞ্জ অনুযায়ী)
        let matchBudget = true;
        if (initialBudget) {
          const [min, max] = initialBudget.split("-").map(Number);
          matchBudget = p.price >= min && p.price <= (max || 9999999);
        }

        return matchLocation && matchType && matchBudget;
      })
      .sort((a, b) => {
        if (sortOrder === "price-low") return a.price - b.price;
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });
  }, [searchTerm, selectedType, initialBudget, sortOrder]);

  // ম্যাপের সেন্টার নির্ধারণ (প্রথম রেজাল্ট অনুযায়ী)
  const mapCenter: [number, number] =
    filteredResults.length > 0
      ? [
          filteredResults[0].location.coordinates[1],
          filteredResults[0].location.coordinates[0],
        ]
      : [23.8103, 90.4125];

  const handleSearchClick = () => {
    setSearchParams({
      location: searchTerm,
      type: selectedType,
      budget: initialBudget,
    });
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-white">
      {/* Header Section */}
      <header className="z-50 flex-none px-6 py-4 border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center flex-1 w-full px-4 py-2 border border-gray-200 bg-gray-50 rounded-2xl focus-within:ring-2 focus-within:ring-teal-500/20">
            <div className="flex items-center flex-1 gap-3 px-3 border-r border-gray-200">
              <Search className="w-4 h-4 text-teal-600" />
              <input
                type="text"
                value={searchTerm} // হোমপেজের সার্চ এখানে ডিফল্ট বসবে
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="এলাকা বা বাসার নাম..."
                className="w-full text-sm font-medium bg-transparent outline-none"
              />
            </div>
            <Button
              onClick={handleSearchClick}
              className="h-10 px-6 text-white bg-teal-600 shadow-lg hover:bg-teal-700 rounded-xl"
            >
              সার্চ
            </Button>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {["family", "bachelor", "sublet", "office"].map((f) => (
              <Button
                key={f}
                variant={selectedType === f ? "default" : "secondary"}
                onClick={() => setSelectedType(selectedType === f ? "" : f)}
                className={`h-10 px-5 text-xs font-bold capitalize rounded-xl ${
                  selectedType === f
                    ? "bg-teal-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-teal-50"
                }`}
              >
                {f === "family"
                  ? "ফ্যামিলি"
                  : f === "bachelor"
                    ? "ব্যাচেলর"
                    : f === "sublet"
                      ? "সাবলেট"
                      : "অফিস"}
              </Button>
            ))}
          </div>
        </div>
      </header>

      <main className="flex flex-1 overflow-hidden">
        {/* Left Side: Property Listings */}
        <div className="w-full px-6 py-8 overflow-y-auto lg:w-3/5 no-scrollbar bg-gray-50/50">
          <div className="max-w-[1000px] mx-auto space-y-12">
            <div className="flex items-center justify-between px-2">
              <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                {filteredResults.length} টি বাসা খুঁজে পাওয়া গেছে
                {searchTerm && (
                  <span className="text-teal-600"> — {searchTerm}</span>
                )}
              </p>
              <div className="flex items-center gap-2 group">
                <ListFilter className="w-4 h-4 text-gray-400" />
                <Select onValueChange={setSortOrder} defaultValue="latest">
                  <SelectTrigger className="w-[180px] border-none bg-transparent font-bold text-gray-700">
                    <SelectValue placeholder="সর্টিং" />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl">
                    <SelectItem value="latest">সর্টিং: লেটেস্ট</SelectItem>
                    <SelectItem value="price-low">
                      ভাড়া: কম থেকে বেশি
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* লিস্টিং কার্ডস (ফিল্টারড রেজাল্ট অনুযায়ী) */}
            <div className="grid grid-cols-1 gap-8">
              {filteredResults.map((property) => (
                <Link to={`/search/${property._id}`} key={property._id}>
                  <Card className="group flex flex-col md:flex-row bg-white border-none rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                    <div className="relative w-full md:w-[320px] h-[240px] md:h-auto overflow-hidden shrink-0">
                      <img
                        src={property.images[0]}
                        alt={property.title}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase text-teal-700">
                        Verified
                      </div>
                    </div>
                    <CardContent className="flex flex-col justify-between flex-1 p-8">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-teal-600 font-bold text-[10px] uppercase tracking-widest">
                            <MapPin className="w-3 h-3" />{" "}
                            {property.address.area}
                          </span>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                            <span className="text-xs font-black">4.8</span>
                          </div>
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 group-hover:text-teal-600 transition-colors">
                          {property.title}
                        </h3>
                        <div className="flex gap-4 text-xs font-bold text-gray-500">
                          <div className="flex items-center gap-2">
                            <Bed className="w-4 h-4" />{" "}
                            {property.features.bedrooms} বেড
                          </div>
                          <div className="flex items-center gap-2">
                            <Bath className="w-4 h-4" />{" "}
                            {property.features.bathrooms} বাথ
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-6 mt-4 border-t border-gray-50">
                        <span className="text-2xl font-black text-teal-700">
                          ৳{property.price.toLocaleString()}
                        </span>
                        <div className="flex items-center gap-1 text-sm font-bold text-teal-600 uppercase">
                          ডিটেইলস <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}

              {filteredResults.length === 0 && (
                <div className="py-20 text-center space-y-4">
                  <div className="text-5xl">🏘️</div>
                  <h3 className="text-xl font-bold text-gray-400">
                    দুঃখিত, কোনো বাসা খুঁজে পাওয়া যায়নি!
                  </h3>
                  <Button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedType("");
                    }}
                    variant="outline"
                  >
                    সবগুলো দেখুন
                  </Button>
                </div>
              )}
            </div>
            <FAQ />
          </div>
        </div>

        {/* Right Side: Map */}
        <div className="relative z-0 hidden h-full lg:block lg:w-2/5 bg-[#f8fafc]">
          <MapContainer
            center={mapCenter}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
            <RecenterMap coords={mapCenter} />
            {filteredResults.map((p) => (
              <Marker
                key={p._id}
                position={[
                  p.location.coordinates[1],
                  p.location.coordinates[0],
                ]}
                icon={customIcon}
              >
                <Popup>
                  <div className="p-0 overflow-hidden bg-white rounded-xl w-[200px]">
                    <img
                      src={p.images[0]}
                      className="object-cover w-full h-24"
                      alt="House"
                    />
                    <div className="p-3">
                      <p className="text-[10px] font-black uppercase truncate">
                        {p.title}
                      </p>
                      <p className="text-sm font-black text-teal-700 mt-1">
                        ৳{p.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </main>
    </div>
  );
}
