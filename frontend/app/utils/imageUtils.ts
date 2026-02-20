import { destinationImages } from "@/assets/images";

/**
 * Returns a random publicId from the first image of each destination in the given slugs.
 * If no slugs are provided, uses all available destinations from destinationImages.
 * Returns null if no images are found.
 */
export function getRandomDestinationFirstImage(
  slugs?: string[],
): string | null {
  const targetSlugs = slugs ?? Object.keys(destinationImages);
  const candidates: string[] = [];

  for (const slug of targetSlugs) {
    const images = destinationImages[slug];
    if (images && images.length > 0) {
      candidates.push(`${slug}/${images[0]}`);
    }
  }

  if (candidates.length === 0) return null;
  return candidates[Math.floor(Math.random() * candidates.length)];
}
