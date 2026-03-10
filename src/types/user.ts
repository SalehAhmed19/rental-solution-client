export interface CloudinaryImage {
  url: string;
  public_id: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "tenant" | "landlord" | "admin";
  phone: string;
  isVerified: boolean;
  verificationStatus: "pending" | "approved" | "rejected" | "unsubmitted";
  // এনআইডি ইমেজের জন্য নতুন স্ট্রাকচার
  nidImages?: {
    front: CloudinaryImage;
    back: CloudinaryImage;
  };
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
