import { useNavigate } from "react-router-dom";
import { MapPin, ArrowRight, Compass, Building2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";
import { properties } from "../../../../assets/data";

// লোকেশন অনুযায়ী ডামি ইমেজ ম্যাপ
const locationImages: Record<string, { img: string; tag: string }> = {
  Uttara: {
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
    tag: "শান্ত এলাকা",
  },
  Dhanmondi: {
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
    tag: "কালচারাল হাব",
  },
  Mirpur: {
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800",
    tag: "সাশ্রয়ী",
  },
  Banani: {
    img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=800",
    tag: "লাক্সারি",
  },
  Bashundhara: {
    img: "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=800",
    tag: "আধুনিক",
  },
  Badda: {
    img: "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=800",
    tag: "সেন্ট্রাল",
  },
};

export default function LocationCarousel() {
  const navigate = useNavigate();

  // --- ডাইনামিক লোকেশন ডাটা জেনারেট করা ---
  const dynamicLocations = Object.entries(
    properties.reduce((acc: Record<string, number>, curr) => {
      const area = curr.address.area;
      acc[area] = (acc[area] || 0) + 1;
      return acc;
    }, {}),
  ).map(([name, count]) => ({
    name,
    properties: `${count}+ বাসা`,
    img:
      locationImages[name]?.img ||
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=800",
    tag: locationImages[name]?.tag || "জনপ্রিয়",
  }));

  const handleLocationClick = (locationName: string) => {
    navigate(`/search?location=${locationName}`);
  };

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50/40 rounded-full blur-[140px] -z-10 translate-x-1/3 -translate-y-1/3"></div>

      <div className="px-6 mx-auto max-w-7xl md:px-12">
        <div className="flex flex-col justify-between gap-8 mb-16 md:flex-row md:items-end">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-teal-50 text-teal-700 rounded-2xl text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
              <Compass className="w-4 h-4 animate-spin-slow" />
              সেরা এলাকা নির্বাচন করুন
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-gray-900 leading-[1.1]">
              ঢাকার সেরা লোকেশনে <br />
              <span className="text-teal-600">আপনার স্বপ্নের ঠিকানা</span>
            </h2>
          </div>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-4 md:-ml-6">
            {dynamicLocations.map((loc, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3"
                onClick={() => handleLocationClick(loc.name)}
              >
                <div className="group relative h-[480px] rounded-[3rem] overflow-hidden cursor-pointer shadow-2xl shadow-gray-200/40 transition-all duration-700 hover:-translate-y-4">
                  <img
                    src={loc.img}
                    alt={loc.name}
                    className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 transition-opacity bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100"></div>

                  <div className="absolute top-6 right-6 px-4 py-1.5 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-[10px] font-bold uppercase tracking-widest">
                    {loc.tag}
                  </div>

                  <div className="absolute bottom-0 left-0 w-full p-10">
                    <div className="flex items-center gap-3 mb-3 text-teal-400">
                      <div className="p-2 rounded-lg bg-teal-400/20 backdrop-blur-sm">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold tracking-wide">
                        {loc.properties}
                      </span>
                    </div>
                    <h4 className="mb-6 text-4xl font-bold tracking-tight text-white font-heading">
                      {loc.name}
                    </h4>
                    <div className="flex items-center gap-3 px-6 py-3 text-sm font-bold text-gray-900 transition-all duration-500 transform translate-y-12 bg-white shadow-xl opacity-0 w-fit rounded-2xl group-hover:translate-y-0 group-hover:opacity-100">
                      বাসাগুলো দেখুন <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center justify-end gap-4 mt-12">
            <CarouselPrevious className="static text-teal-700 transition-all translate-y-0 border-2 w-14 h-14 border-teal-600/20 hover:bg-teal-600 hover:text-white rounded-2xl" />
            <CarouselNext className="static text-teal-700 transition-all translate-y-0 border-2 w-14 h-14 border-teal-600/20 hover:bg-teal-600 hover:text-white rounded-2xl" />
          </div>
        </Carousel>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
      `}</style>
    </section>
  );
}
