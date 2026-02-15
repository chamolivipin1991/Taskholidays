// utils/adapters/packageAdapter.ts
import { Destination, TravelPackage } from "@/types/destination";
import { UIPackage } from "@/types/package";
import slugify from "slugify"; // or any slug utility

export function adaptDestinationsToPackages(
  destinations: Destination[],
): UIPackage[] {
  const packages: UIPackage[] = [];

  for (const dest of destinations) {
    for (const pkg of dest.packages) {
      // Generate a duration slug from the duration string
      const durationSlug = slugify(pkg.duration, { lower: true });

      // Build includes array from available data
      const includes: string[] = [];

      // Add hotel information
      pkg.hotels.forEach((hotel) => {
        includes.push(
          `Accommodation at ${hotel.hotelName} (${hotel.category})`,
        );
      });

      // Add cruise information
      pkg.cruise.forEach((cruise) => {
        includes.push(`Cruise: ${cruise.name} (${cruise.category})`);
      });

      // Add general inclusions (can be customized based on your business logic)
      includes.push("Meals as per itinerary");
      includes.push("Sightseeing as per itinerary");
      includes.push("All taxes & transportation");

      // You might also extract inclusions from detailedItinerary if available
      // pkg.detailedItinerary.forEach(day => {
      //   if (day.inclusions) includes.push(day.inclusions);
      // });

      packages.push({
        id: pkg.packageId, // packageId is already a string
        title: pkg.title,
        location: dest.title, // use destination title as location
        destinationSlug: dest.slug,
        description: dest.description, // or a more specific description if available
        duration: pkg.duration,
        durationSlug: durationSlug,
        includes: includes,
        popular: pkg.popular || false,
        tags: dest.tags, // inherit tags from destination
        // price is not present in TravelPackage; leave undefined
      });
    }
  }

  return packages;
}
