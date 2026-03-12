// প্রয়োজনে আপনার তৈরি করা User ইন্টারফেসটি ইমপোর্ট করে নিতে পারেন
// import { User } from "./auth";

export interface PropertyAddress {
  area: string;
  fullAddress: string;
}

export interface PropertyLocation {
  type: "Point";
  coordinates: [number, number]; // [longitude, latitude]
}

export interface PropertyFeatures {
  bedrooms: number;
  bathrooms: number;
  balcony: number;
  propertyType: "family" | "bachelor" | "sublet" | "office";
  hasLift: boolean;
  hasGenerator: boolean;
  hasParking: boolean;
  hasGasConnection: boolean;
}

export interface Property {
  _id: string; // MongoDB এর ডিফল্ট আইডি
  id?: string; // ফ্রন্টএন্ডের সুবিধার জন্য

  // ownerId শুধু আইডি (string) হতে পারে, আবার populate করলে পুরো User অবজেক্টও হতে পারে
  ownerId: string | any; // 'any' এর জায়গায় 'User' ইন্টারফেস বসাতে পারেন যদি ইমপোর্ট করেন

  title: string;
  description: string;
  price: number;
  serviceCharge: number;

  address: PropertyAddress;
  location: PropertyLocation;

  images: string[]; // Cloudinary Image URL এর অ্যারে

  features: PropertyFeatures;

  status: "available" | "rented";
  isApproved: boolean;
  isFeatured: boolean;

  savedBy: string[]; // ইউজারদের আইডির অ্যারে

  createdAt: string; // API থেকে ডেটগুলো সাধারণত ISO স্ট্রিং হিসেবে আসে
  updatedAt: string;
}
