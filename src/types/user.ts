export interface CloudinaryImage {
  url: string;
  public_id: string;
}

export interface User {
  _id?: string;
  name: string;
  email: string;
  avatar?: string; // 🔥 এটি নিশ্চিত করুন
  role: "tenant" | "landlord" | "admin";
  phone: string;
  isVerified: boolean;
  verificationStatus: "pending" | "approved" | "rejected" | "unsubmitted";
  nidImages?: {
    front: CloudinaryImage;
    back: CloudinaryImage;
  };
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
