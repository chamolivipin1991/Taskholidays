/* ===========================
   HERO IMAGE
=========================== */
export interface DestinationImage {
  folder: string;
  file: string;
  alt: string;
}

/* ===========================
   SHORT ITINERARY
=========================== */
export interface ShortItineraryDay {
  day: string;
  title: string;
  location: string;
  stay?: string;
  sightSeeing?: string;
  breakfastNextDay?: boolean;
}

/* ===========================
   HOTEL (AS PER DATA)
=========================== */
export interface PackageHotel {
  location: string;
  duration: string;
  durationNumber: number[];
  hotelName: string;
  star: number;
  category: string;
  facilities: string[];
  checkInTime: string;
  checkoutTime: string;
  stayLink: string;
}

/* ===========================
   CRUISE
=========================== */
export interface Cruise {
  day: number;
  location: string;
  category: string;
  name: string;
}

/* ===========================
   SIGHTSEEING ITEM
=========================== */
export interface SightseeingItem {
  name: string;
  detail: string;
}

/* ===========================
   DETAILED ITINERARY
=========================== */
export interface DetailedItineraryDay {
  day: string;
  location: string;
  stay: string;
  title: string;
  itineraryPoints: string[];
  sightseeingLocation: string;
  sightseeingItems: SightseeingItem[];
  instruction: string;
  note: string[];
  inclusions: string;
}

/* ===========================
   TRAVEL PACKAGE (EXACT MATCH)
=========================== */
export interface TravelPackage {
  packageId: string;
  title: string;
  duration: string;
  shortItinerary: ShortItineraryDay[];
  hotels: PackageHotel[];
  cruise: Cruise[];
  detailedItinerary: DetailedItineraryDay[];
  tripExclusions: string[];
  popular?: boolean;
}

/* ===========================
   DESTINATION
=========================== */
export interface Destination {
  id: number;
  slug: string;
  title: string;
  description: string;
  heroImage: DestinationImage;
  bestSeason: string[];
  tags: string[];
  packages: TravelPackage[];
}
