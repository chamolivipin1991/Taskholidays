// utils/adapters/packageAdapter.ts
import { Destination } from "@/types/destination";
import { UIPackage } from "@/types/package";
import { destinationImages } from "@/assets/images"; // adjust path as needed

export function adaptDestinationsToPackages(
  destinations: Destination[],
): UIPackage[] {
  const packages: UIPackage[] = [];

  destinations.forEach((destination) => {
    const destSlug = destination.slug;
    const images = destinationImages[destSlug] || [];

    destination.packages.forEach((pkg, index) => {
      // Build includes list (similar to PackagesSection)
      const includes = [];
      if (pkg.hotels?.length) includes.push("Accommodation");
      if (pkg.shortItinerary?.some((day) => day.breakfastNextDay))
        includes.push("Breakfast");
      if (pkg.cruise?.length) includes.push("Cruise Tickets");
      if (pkg.detailedItinerary?.length) includes.push("Sightseeing");
      includes.push("Transport");

      // Determine image public ID
      let imagePublicId = null;
      if (images.length) {
        const imageIndex = index % images.length;
        imagePublicId = `${destSlug}/${images[imageIndex]}`;
      }

      packages.push({
        id: `${destination.id}-${pkg.packageId}`,
        title: pkg.title,
        location: destination.title,
        description: destination.description,
        duration: pkg.duration,
        includes,
        price: 0, // TODO: make dynamic
        popular: pkg.popular ?? false,
        destinationSlug: destSlug,
        packageId: pkg.packageId, // ✅ crucial!
        shortItinerary: pkg.shortItinerary,
        imagePublicId,
      });
    });
  });

  return packages;
}
