// types/package.ts
export interface UIPackage {
  id: string; // ✅ must be string
  title: string;
  location: string;
  destinationSlug: string;
  description: string;
  duration: string;
  durationSlug: string;
  includes: string[]; // ✅ must be string[]
  price?: number;
  popular?: boolean;
  tags?: string[];
}
