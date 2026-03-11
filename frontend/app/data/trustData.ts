// trustData.ts
export interface TrustItem {
  id: number;
  title: string;
  description: string;
  icon: string; // path to image in public folder
}

export const trustItems: TrustItem[] = [
  {
    id: 1,
    title: "Expertly Curated Packages",
    description: "Carefully designed itineraries tailored to your preferences.",
    icon: "/icons/travel_package.png", // adjust path
  },
  {
    id: 2,
    title: "24/7 Customer Support",
    description: "We’re here to assist you anytime, anywhere.",
    icon: "/icons/customer_support.png",
  },
  {
    id: 3,
    title: "Hassle-Free Booking",
    description: "Easy and secure booking process.",
    icon: "/icons/easy_booking.png",
  },
  {
    id: 4,
    title: "Travel Insurance Included",
    description: "Comprehensive coverage for peace of mind.",
    icon: "/icons/travel_insurance.png",
  },
];

export const centerImage = {
  src: "/images/tourist-presenting-trust.png", // adjust path
  alt: "Traveler exploring destination",
};
