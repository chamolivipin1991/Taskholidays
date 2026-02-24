// types/package.ts
export interface UIPackage {
  id: string;
  title: string;
  location: string;
  description: string;
  duration: string;
  includes: string[];
  price?: number;
  popular?: boolean;
  destinationSlug: string;
  packageId: string;
  shortItinerary?: any[];
  imagePath: string | null; // changed from imagePublicId
}

export interface ShortItineraryDay {
  day: string;
  title: string;
  location: string;
  stay?: string;
  breakfastNextDay?: boolean;
}
