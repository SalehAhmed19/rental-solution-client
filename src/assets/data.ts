export interface Property {
  _id: string; // MongoDB ObjectId
  ownerId: string; // Reference to User
  title: string;
  description: string;
  price: number;
  serviceCharge: number;
  address: {
    area: string; // যেমন: Mirpur, Uttara
    fullAddress: string;
  };
  location: {
    type: "Point";
    coordinates: [number, number]; // [longitude, latitude]
  };
  images: string[]; // Cloudinary বা অন্যান্য ইমেজ URL-এর অ্যারে
  features: {
    bedrooms: number;
    bathrooms: number;
    balcony: number;
    propertyType: "family" | "bachelor" | "sublet" | "office";
    hasLift: boolean;
    hasGenerator: boolean;
    hasParking: boolean;
    hasGasConnection: boolean;
  };
  status: "available" | "rented";
  createdAt: string; // ISO Date String
  updatedAt: string; // ISO Date String
}

export const properties: Property[] = [
  {
    _id: "65e8f1a2b3c4d5e6f7a8b901", // MongoDB ObjectId format
    ownerId: "65e8f0f1a2b3c4d5e6f7a8b9",
    title: "উত্তরা সেক্টর-৪ এ প্রিমিয়াম ফ্ল্যাট",
    description:
      "উত্তরা সেক্টর ৪-এর একদম শান্ত এবং নিরাপদ এলাকায় অবস্থিত। নতুন রঙের কাজ এবং প্রিমিয়াম স্যানিটারি ফিটিংস সম্পন্ন করা হয়েছে। পর্যাপ্ত আলো-বাতাস চলাচলের সুবিধা রয়েছে।",
    price: 35000,
    serviceCharge: 5000,
    address: {
      area: "Uttara",
      fullAddress: "হাউজ নং ১৫, রোড ০৪, সেক্টর ০৪, উত্তরা, ঢাকা",
    },
    location: {
      type: "Point",
      coordinates: [90.3995, 23.8759], // [longitude, latitude] for Uttara
    },
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1000",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=600",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=600",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800",
    ],
    features: {
      bedrooms: 3,
      bathrooms: 2,
      balcony: 2,
      propertyType: "family",
      hasLift: true,
      hasGenerator: true,
      hasParking: true,
      hasGasConnection: true,
    },
    status: "available",
    createdAt: "2026-03-01T10:00:00.000Z",
    updatedAt: "2026-03-05T12:00:00.000Z",
  },
  {
    _id: "65e8f1a2b3c4d5e6f7a8b902",
    ownerId: "65e8f0f1a2b3c4d5e6f7a8b9",
    title: "ধানমন্ডি লেক ভিউ অ্যাপার্টমেন্ট",
    description:
      "লেকের একদম কাছে মনোরম পরিবেশে আধুনিক এই অ্যাপার্টমেন্টটি ভাড়ার জন্য প্রস্তুত। জিম এবং আধুনিক লিফট সুবিধা সহ সার্বক্ষণিক নিরাপত্তা ব্যবস্থা রয়েছে।",
    price: 55000,
    serviceCharge: 7000,
    address: {
      area: "Dhanmondi",
      fullAddress: "রোড নং ৮/এ, ধানমন্ডি, ঢাকা",
    },
    location: {
      type: "Point",
      coordinates: [90.3742, 23.7461], // [longitude, latitude] for Dhanmondi
    },
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1000",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=600",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
    ],
    features: {
      bedrooms: 4,
      bathrooms: 3,
      balcony: 3,
      propertyType: "family",
      hasLift: true,
      hasGenerator: true,
      hasParking: true,
      hasGasConnection: false,
    },
    status: "available",
    createdAt: "2026-03-02T09:00:00.000Z",
    updatedAt: "2026-03-06T11:00:00.000Z",
  },
];
