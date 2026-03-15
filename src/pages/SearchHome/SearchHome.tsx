// import React, { useState, useEffect, useMemo } from "react";
// import { useSearchParams, Link } from "react-router-dom";
// import {
//   Search,
//   MapPin,
//   Star,
//   ListFilter,
//   ArrowUpRight,
//   Bed,
//   Bath,
//   Loader2,
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
// import FAQ from "./FAQ";

// // RTK Query Hook
// import { useGetPropertiesQuery } from "@/redux/slices/propertyApi";

// // Leaflet Imports
// import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// // কাস্টম মার্কার আইকন
// const customIcon = L.divIcon({
//   className: "custom-div-icon",
//   html: `<div style="background-color: white; width: 45px; height: 45px; border-radius: 14px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(0,0,0,0.2); border: 2px solid #0d9488; transform: rotate(-45deg);"><div style="transform: rotate(45deg);"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div></div><div style="width: 0; height: 0; border-left: 8px solid transparent; border-right: 8px solid transparent; border-top: 10px solid #0d9488; margin-left: 14px; margin-top: -2px;"></div>`,
//   iconSize: [45, 55],
//   iconAnchor: [22, 55],
//   popupAnchor: [0, -50],
// });

// function RecenterMap({ coords }: { coords: [number, number] }) {
//   const map = useMap();
//   useEffect(() => {
//     map.flyTo(coords, 13);
//   }, [coords, map]);
//   return null;
// }

// export default function SearchHome() {
//   const [searchParams, setSearchParams] = useSearchParams();

//   // ১. এপিআই থেকে ডাটা ফেচ করা
//   const {
//     data: response,
//     isLoading,
//     isError,
//   } = useGetPropertiesQuery(undefined);
//   const allProperties = response?.data || [];

//   console.log(allProperties);

//   const initialLocation = searchParams.get("location") || "";
//   const initialType = searchParams.get("type") || "";
//   const initialBudget = searchParams.get("budget") || "";

//   const [searchTerm, setSearchTerm] = useState(initialLocation);
//   const [selectedType, setSelectedType] = useState(initialType);
//   const [sortOrder, setSortOrder] = useState("latest");

//   // ২. ফিল্টারিং লজিক (রিয়েল ডাটার ওপর ভিত্তি করে)
//   const filteredResults = useMemo(() => {
//     return allProperties
//       .filter((p: any) => {
//         const matchLocation =
//           p.address.area.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           p.title.toLowerCase().includes(searchTerm.toLowerCase());
//         const matchType = selectedType
//           ? p.features.propertyType === selectedType
//           : true;

//         let matchBudget = true;
//         if (initialBudget) {
//           const [min, max] = initialBudget.split("-").map(Number);
//           matchBudget = p.price >= min && p.price <= (max || 9999999);
//         }

//         return matchLocation && matchType && matchBudget;
//       })
//       .sort((a: any, b: any) => {
//         if (sortOrder === "price-low") return a.price - b.price;
//         return (
//           new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
//         );
//       });
//   }, [allProperties, searchTerm, selectedType, initialBudget, sortOrder]);

//   const mapCenter: [number, number] =
//     filteredResults.length > 0
//       ? [
//           filteredResults[0].location.coordinates[1],
//           filteredResults[0].location.coordinates[0],
//         ]
//       : [23.8103, 90.4125];

//   const handleSearchClick = () => {
//     setSearchParams({
//       location: searchTerm,
//       type: selectedType,
//       budget: initialBudget,
//     });
//   };

//   return (
//     <div className="flex flex-col h-screen overflow-hidden bg-white font-heading">
//       {/* Header */}
//       <header className="z-50 flex-none px-6 py-4 border-b border-gray-100 bg-white/80 backdrop-blur-md">
//         <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center gap-4">
//           <div className="flex items-center flex-1 w-full px-4 py-2 border border-gray-200 bg-gray-50 rounded-2xl">
//             <div className="flex items-center flex-1 gap-3 px-3 border-r border-gray-200">
//               <Search className="w-4 h-4 text-teal-600" />
//               <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 placeholder="এলাকা বা বাসার নাম..."
//                 className="w-full text-sm font-medium bg-transparent outline-none"
//               />
//             </div>
//             <Button
//               onClick={handleSearchClick}
//               className="h-10 px-6 text-white bg-teal-600 hover:bg-teal-700 rounded-xl"
//             >
//               সার্চ
//             </Button>
//           </div>
//           <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
//             {["family", "bachelor", "sublet", "office"].map((f) => (
//               <Button
//                 key={f}
//                 variant={selectedType === f ? "default" : "secondary"}
//                 onClick={() => setSelectedType(selectedType === f ? "" : f)}
//                 className={`h-10 px-5 text-xs font-black uppercase rounded-xl ${selectedType === f ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-700"}`}
//               >
//                 {f}
//               </Button>
//             ))}
//           </div>
//         </div>
//       </header>

//       <main className="flex flex-1 overflow-hidden">
//         {/* Listings */}
//         <div className="w-full px-6 py-8 overflow-y-auto lg:w-3/5 no-scrollbar bg-gray-50/50">
//           <div className="max-w-[1000px] mx-auto space-y-12">
//             {isLoading ? (
//               <div className="py-20 flex flex-col items-center justify-center gap-4">
//                 <Loader2 className="w-10 h-10 animate-spin text-teal-600" />
//                 <p className="font-black text-xs uppercase tracking-widest text-gray-400">
//                   বাসা লোড হচ্ছে...
//                 </p>
//               </div>
//             ) : isError ? (
//               <div className="py-20 text-center text-red-500 font-bold uppercase">
//                 ডাটা লোড করতে সমস্যা হয়েছে!
//               </div>
//             ) : (
//               <>
//                 <div className="flex items-center justify-between px-2">
//                   <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">
//                     {filteredResults.length} টি বাসা পাওয়া গেছে{" "}
//                     {searchTerm && (
//                       <span className="text-teal-600"> — {searchTerm}</span>
//                     )}
//                   </p>
//                   <Select onValueChange={setSortOrder} defaultValue="latest">
//                     <SelectTrigger className="w-[180px] border-none bg-transparent font-bold text-gray-700 uppercase text-[10px]">
//                       <SelectValue placeholder="সর্টিং" />
//                     </SelectTrigger>
//                     <SelectContent className="rounded-2xl">
//                       <SelectItem value="latest">লেটেস্ট</SelectItem>
//                       <SelectItem value="price-low">
//                         ভাড়া: কম থেকে বেশি
//                       </SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <div className="grid grid-cols-1 gap-8">
//                   {filteredResults.map((property: any) => (
//                     <Link
//                       to={`/properties/details/${property._id}`}
//                       key={property._id}
//                     >
//                       <Card className="group flex flex-col md:flex-row bg-white border-none rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
//                         <div className="relative w-full md:w-[320px] h-[240px] md:h-auto overflow-hidden shrink-0">
//                           <img
//                             src={property.images[0]}
//                             alt={property.title}
//                             className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
//                           />
//                           <div className="absolute top-4 left-4 bg-teal-600 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter shadow-xl">
//                             Verified
//                           </div>
//                         </div>
//                         <CardContent className="flex flex-col justify-between flex-1 p-8">
//                           <div className="space-y-4">
//                             <div className="flex items-center justify-between">
//                               <span className="flex items-center gap-1.5 text-teal-600 font-black text-[10px] uppercase tracking-widest">
//                                 <MapPin className="w-3 h-3" />{" "}
//                                 {property.address.area}
//                               </span>
//                               <div className="flex items-center gap-1 bg-yellow-50 px-2 py-0.5 rounded-full">
//                                 <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
//                                 <span className="text-[10px] font-black">
//                                   4.8
//                                 </span>
//                               </div>
//                             </div>
//                             <h3 className="text-2xl font-black text-gray-900 group-hover:text-teal-600 transition-colors uppercase tracking-tighter line-clamp-1">
//                               {property.title}
//                             </h3>
//                             <div className="flex gap-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
//                               <div className="flex items-center gap-2">
//                                 <Bed className="w-4 h-4 text-teal-600" />{" "}
//                                 {property.features.bedrooms} বেড
//                               </div>
//                               <div className="flex items-center gap-2">
//                                 <Bath className="w-4 h-4 text-teal-600" />{" "}
//                                 {property.features.bathrooms} বাথ
//                               </div>
//                             </div>
//                           </div>
//                           <div className="flex items-center justify-between pt-6 mt-4 border-t border-gray-50">
//                             <span className="text-2xl font-black text-teal-700 italic">
//                               ৳{property.price.toLocaleString()}
//                             </span>
//                             <div className="flex items-center gap-1 text-[10px] font-black text-teal-600 uppercase tracking-widest">
//                               ডিটেইলস <ArrowUpRight className="w-4 h-4" />
//                             </div>
//                           </div>
//                         </CardContent>
//                       </Card>
//                     </Link>
//                   ))}
//                 </div>
//               </>
//             )}
//             <FAQ />
//           </div>
//         </div>

//         {/* Map */}
//         <div className="relative z-0 hidden h-full lg:block lg:w-2/5 bg-[#f8fafc]">
//           <MapContainer
//             center={mapCenter}
//             zoom={13}
//             style={{ height: "100%", width: "100%" }}
//           >
//             <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
//             <RecenterMap coords={mapCenter} />
//             {filteredResults.map((p: any) => (
//               <Marker
//                 key={p._id}
//                 position={[
//                   p.location.coordinates[1],
//                   p.location.coordinates[0],
//                 ]}
//                 icon={customIcon}
//               >
//                 <Popup>
//                   <div className="p-0 overflow-hidden bg-white rounded-xl w-[200px] font-heading">
//                     <img
//                       src={p.images[0]}
//                       className="object-cover w-full h-24"
//                       alt="House"
//                     />
//                     <div className="p-3">
//                       <p className="text-[10px] font-black uppercase truncate">
//                         {p.title}
//                       </p>
//                       <p className="text-sm font-black text-teal-700 mt-1 italic">
//                         ৳{p.price.toLocaleString()}
//                       </p>
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
import { useSearchParams, Link } from "react-router-dom";
import {
  Search,
  MapPin,
  Star,
  ArrowUpRight,
  Bed,
  Bath,
  Loader2,
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
import FAQ from "./FAQ";

// RTK Query Hook
import { useGetPropertiesQuery } from "@/redux/slices/propertyApi";

// Leaflet Imports
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// কাস্টম মার্কার আইকন
const customIcon = L.divIcon({
  className: "custom-div-icon",
  html: `<div style="background-color: white; width: 45px; height: 45px; border-radius: 14px; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 25px rgba(0,0,0,0.2); border: 2px solid #0d9488; transform: rotate(-45deg);"><div style="transform: rotate(45deg);"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0d9488" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div></div>`,
  iconSize: [45, 55],
  iconAnchor: [22, 55],
  popupAnchor: [0, -50],
});

function RecenterMap({ coords }: { coords: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(coords, 13);
  }, [coords, map]);
  return null;
}

export default function SearchHome() {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    data: response,
    isLoading,
    isError,
  } = useGetPropertiesQuery(undefined);

  const allProperties = response?.data || [];

  const initialLocation = searchParams.get("location") || "";
  const initialType = searchParams.get("type") || "";
  const initialBudget = searchParams.get("budget") || "";

  const [searchTerm, setSearchTerm] = useState(initialLocation);
  const [selectedType, setSelectedType] = useState(initialType);
  const [sortOrder, setSortOrder] = useState("latest");

  const filteredResults = useMemo(() => {
    if (!Array.isArray(allProperties)) return [];

    return allProperties
      .filter((p: any) => {
        const matchLocation =
          p.address?.area?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          false ||
          p.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          false;

        const matchType = selectedType
          ? p.features?.propertyType?.toLowerCase() ===
            selectedType.toLowerCase()
          : true;

        let matchBudget = true;
        if (initialBudget) {
          const [min, max] = initialBudget.split("-").map(Number);
          matchBudget = p.price >= min && p.price <= (max || 9999999);
        }

        return matchLocation && matchType && matchBudget;
      })
      .sort((a: any, b: any) => {
        if (sortOrder === "price-low") return a.price - b.price;
        return (
          new Date(b.createdAt || 0).getTime() -
          new Date(a.createdAt || 0).getTime()
        );
      });
  }, [allProperties, searchTerm, selectedType, initialBudget, sortOrder]);

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
    <div className="flex flex-col h-screen overflow-hidden bg-white font-heading">
      <header className="z-50 flex-none px-6 py-4 border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center gap-4">
          <div className="flex items-center flex-1 w-full px-4 py-2 border border-gray-200 bg-gray-50 rounded-2xl">
            <div className="flex items-center flex-1 gap-3 px-3 border-r border-gray-200">
              <Search className="w-4 h-4 text-teal-600" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="এলাকা বা বাসার নাম..."
                className="w-full text-sm font-medium bg-transparent outline-none"
              />
            </div>
            <Button
              onClick={handleSearchClick}
              className="h-10 px-6 text-white bg-teal-600 hover:bg-teal-700 rounded-xl"
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
                className={`h-10 px-5 text-xs font-black uppercase rounded-xl transition-all ${selectedType === f ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-700"}`}
              >
                {f}
              </Button>
            ))}
          </div>
        </div>
      </header>

      <main className="flex flex-1 overflow-hidden">
        <div className="w-full px-6 py-8 overflow-y-auto lg:w-3/5 no-scrollbar bg-gray-50/50">
          <div className="max-w-[1000px] mx-auto space-y-12">
            {isLoading ? (
              <div className="py-20 flex flex-col items-center justify-center gap-4">
                <Loader2 className="w-10 h-10 animate-spin text-teal-600" />
                <p className="font-black text-xs uppercase tracking-widest text-gray-400">
                  বাসা লোড হচ্ছে...
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between px-2">
                  <p className="text-[10px] font-black tracking-widest text-gray-400 uppercase">
                    {filteredResults.length} টি বাসা পাওয়া গেছে
                  </p>
                  <Select onValueChange={setSortOrder} defaultValue="latest">
                    <SelectTrigger className="w-[180px] border-none bg-transparent font-black text-gray-700 uppercase text-[10px]">
                      <SelectValue placeholder="সর্টিং" />
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl border-none shadow-2xl">
                      <SelectItem value="latest">লেটেস্ট</SelectItem>
                      <SelectItem value="price-low">
                        ভাড়া: কম থেকে বেশি
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 gap-8">
                  {filteredResults.map((property: any) => (
                    <Link
                      to={`/properties/details/${property._id}`}
                      key={property._id}
                    >
                      <Card className="group flex flex-col md:flex-row bg-white border-none rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
                        <div className="relative w-full md:w-[320px] h-[240px] md:h-auto overflow-hidden shrink-0">
                          <img
                            src={property.images[0]}
                            alt={property.title}
                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                          />
                          {property.isApproved && (
                            <div className="absolute top-4 left-4 bg-teal-600 text-white px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter shadow-xl">
                              Verified
                            </div>
                          )}
                        </div>
                        <CardContent className="flex flex-col justify-between flex-1 p-8">
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="flex items-center gap-1.5 text-teal-600 font-black text-[10px] uppercase tracking-widest">
                                <MapPin className="w-3 h-3" />{" "}
                                {property.address?.area}
                              </span>
                              <div className="flex items-center gap-1 bg-yellow-50 px-2 py-0.5 rounded-full">
                                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                                <span className="text-[10px] font-black">
                                  4.8
                                </span>
                              </div>
                            </div>
                            <h3 className="text-2xl font-black text-gray-900 group-hover:text-teal-600 transition-colors uppercase tracking-tighter line-clamp-1">
                              {property.title}
                            </h3>
                            <div className="flex gap-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                              <div className="flex items-center gap-2">
                                <Bed className="w-4 h-4 text-teal-600" />{" "}
                                {property.features?.bedrooms} বেড
                              </div>
                              <div className="flex items-center gap-2">
                                <Bath className="w-4 h-4 text-teal-600" />{" "}
                                {property.features?.bathrooms} বাথ
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between pt-6 mt-4 border-t border-gray-50">
                            <span className="text-2xl font-black text-teal-700 italic">
                              ৳{property.price?.toLocaleString()}
                            </span>
                            <div className="flex items-center gap-1 text-[10px] font-black text-teal-600 uppercase tracking-widest">
                              ডিটেইলস <ArrowUpRight className="w-4 h-4" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </>
            )}
            <FAQ />
          </div>
        </div>

        {/* --- Google Maps Style Map --- */}
        <div className="relative z-0 hidden h-full lg:block lg:w-2/5 bg-[#f8fafc] border-l border-gray-100 shadow-inner">
          <MapContainer
            center={mapCenter}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
            zoomControl={false}
          >
            <TileLayer
              url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
              attribution="&copy; Google Maps"
            />
            <RecenterMap coords={mapCenter} />
            {filteredResults.map((p: any) => (
              <Marker
                key={p._id}
                position={[
                  p.location.coordinates[1],
                  p.location.coordinates[0],
                ]}
                icon={customIcon}
              >
                <Popup>
                  <div className="p-0 overflow-hidden bg-white rounded-2xl w-[220px] font-heading shadow-xl">
                    <div className="relative h-28">
                      <img
                        src={p.images[0]}
                        className="object-cover w-full h-full"
                        alt="House"
                      />
                      <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-[10px] font-black text-teal-700">
                        ৳{p.price.toLocaleString()}
                      </div>
                    </div>
                    <div className="p-3 space-y-1">
                      <p className="text-[11px] font-black uppercase text-gray-800 truncate">
                        {p.title}
                      </p>
                      <div className="flex items-center gap-1 text-[10px] text-gray-400 font-bold">
                        <MapPin className="w-3 h-3 text-teal-500" />{" "}
                        {p.address?.area}
                      </div>
                      <Link
                        to={`/properties/details/${p._id}`}
                        className="block text-center mt-2 py-1.5 bg-teal-50 text-teal-600 text-[10px] font-black uppercase rounded-lg hover:bg-teal-600 hover:text-white transition-colors"
                      >
                        বিস্তারিত দেখুন
                      </Link>
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
