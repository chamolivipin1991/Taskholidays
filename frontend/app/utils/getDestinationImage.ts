import { destinationImages } from "@/assets/images";

export function getDestinationImage(slug: string) {
  const images = destinationImages[slug];

  if (!images || images.length === 0) return null;

  // deterministic index from slug
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash << 5) - hash + slug.charCodeAt(i);
    hash |= 0;
  }

  const index = Math.abs(hash) % images.length;
  return images[index];
}
