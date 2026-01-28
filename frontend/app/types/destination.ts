import { StaticImageData } from "next/image";

export interface Hotel {
  id: number;
  name: string;
  location: string;
  starRating: 1 | 2 | 3 | 4 | 5;
  category?: "standard" | "deluxe" | "premium" | "luxury";
  images?: string[];
  facilities?: string[];
  checkInTime?: string;
  checkOutTime?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  location: string;
  hotels: Hotel[];
  activities?: string[];
}

export interface TravelPackage {
  id: number;
  name: string;
  duration: string; // e.g. "5 Days / 4 Nights"
  images: string[];
  inclusions: string[];
  exclusions?: string[];
  itinerary: ItineraryDay[];
  startingPrice?: number;
}

export interface Destination {
  id: number;
  slug: string;
  title: string;
  description: string;
  heroImage: StaticImageData;
  packages?: TravelPackage[];
  bestSeason?: string[];
  tags?: string[];
}
