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
  imagePublicId: string | null;
}
