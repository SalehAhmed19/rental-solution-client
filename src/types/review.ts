export interface Review {
  _id: string; // MongoDB default ID
  propertyId: string | any; // 'any' if populated with Property object
  tenantId: string | any; // 'any' if populated with User object
  rating: number; // 1 to 5
  comment?: string; // Optional comment
  createdAt: string; // ISO string from timestamps
  updatedAt: string;
}

export interface PlatformReview {
  _id: string;
  userId: {
    name: string;
    image: string;
    occupation?: string; // যেমন: "ছাত্র", "ব্যাংকার" ইত্যাদি
  };
  rating: number;
  comment: string;
  createdAt: string;
}
