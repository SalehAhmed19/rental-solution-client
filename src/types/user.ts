export interface CloudinaryImage {
  url: string;
  public_id: string;
}

export interface User {
  _id?: string; // MongoDB এর ডিফল্ট আইডি
  id?: string; // ফ্রন্টএন্ডের সুবিধার জন্য
  name: string;
  email: string;
  role: "tenant" | "landlord" | "admin";
  phone: string;
  isVerified: boolean;
  verificationStatus: "pending" | "approved" | "rejected" | "unsubmitted";

  // NID ইমেজের জন্য স্ট্রাকচার
  nidImages?: {
    front: CloudinaryImage;
    back: CloudinaryImage;
  };

  // 🔥 সেভ করা বাসাগুলোর আইডি ধরে রাখার জন্য
  savedProperties: string[];

  createdAt?: string;
  updatedAt?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  email: string;
  password: string;
}
