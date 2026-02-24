// utils/adapters/packageAdapter.ts
import { PackagesData } from "@/types/destination"; // correct import
import { UIPackage } from "@/types/package";
import { destinationImages } from "@/assets/images"; // adjust path as needed

export function adaptDestinationsToPackages(
  destinations: PackagesData[], // use PackagesData
): UIPackage[] {
  const packages: UIPackage[] = [];

  destinations.forEach((destination) => {
    const destSlug = destination.slug;
    const images = destinationImages[destSlug] || [];

    destination.packages.forEach((pkg, index) => {
      // Build includes list
      const includes = [];
      if (pkg.hotels?.length) includes.push("Accommodation");
      if (pkg.shortItinerary?.some((day) => day.breakfastNextDay))
        includes.push("Breakfast");
      if (pkg.cruise?.length) includes.push("Cruise Tickets");
      if (pkg.detailedItinerary?.length) includes.push("Sightseeing");
      includes.push("Transport");

      // Determine image path (with destinations/ prefix)
      let imagePath: string | null = null;
      if (images.length) {
        const imageIndex = index % images.length;
        const filename = images[imageIndex];
        imagePath = `destinations/${destSlug}/${filename}`; // full path
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
        packageId: pkg.packageId,
        shortItinerary: pkg.shortItinerary,
        imagePath, // ✅ use imagePath, not imagePublicId
      });
    });
  });

  return packages;
}
