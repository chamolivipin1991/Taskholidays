export interface UIPackage {
  id: number;
  title: string;
  location: string;
  destinationSlug: string;
  description: string;
  duration: string;
  durationSlug: string; // 👈 ADD THIS
  includes: string[];
  price?: number;
  popular?: boolean;
  tags?: string[];
}
