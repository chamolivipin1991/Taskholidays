import type { Destination } from "@/types/destination";

/* ---------- HELPERS ---------- */

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/* ---------- ADAPTER ---------- */

type PackageFromDestination = NonNullable<Destination["packages"]>[number];

export function adaptDestinationsToPackages(destinations: Destination[]) {
  return destinations.flatMap((destination) => {
    if (!destination.packages) return [];

    return destination.packages.map((pkg: PackageFromDestination) => ({
      id: pkg.id,
      title: pkg.name,
      location: destination.title,
      destinationSlug: destination.slug,
      description: destination.description,
      duration: pkg.duration,
      durationSlug: slugify(pkg.duration),
      includes: pkg.inclusions,
      price: pkg.price,
      popular: pkg.popular ?? false,
      tags: destination.tags ?? [],
    }));
  });
}
