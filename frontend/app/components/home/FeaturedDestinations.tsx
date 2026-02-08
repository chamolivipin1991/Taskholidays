import Link from "next/link";
import SectionTitle from "@/components/shared/SectionTitle";
import { ArrowIcon } from "@/assets/icons/icons";

import { destinations } from "@/data/destinations";
import type { Destination } from "@/types/destination";
import { destinationImages } from "@/assets/images";

import styles from "./FeaturedDestinations.module.css";

/**
 * Slot-based layout config
 */
const layoutByIndex: Record<number, { tall?: boolean; small?: boolean }> = {
  1: { tall: true },
  5: { small: true },
};

/**
 * Stable sort
 */
function stableSortDestinations<T extends Destination>(items: T[]): T[] {
  return [...items].sort((a, b) => a.title.localeCompare(b.title));
}

/**
 * Deterministic image rotation
 */
function getDestinationImage(slug: string, index: number): string | null {
  const images = destinationImages[slug];
  if (!images?.length) return null;
  return images[index % images.length];
}

export default function FeaturedDestinationsServer() {
  const sortedDestinations = stableSortDestinations(destinations);

  return (
    <section
      className={`${styles.destinations} container section_white__spacing`}
    >
      <SectionTitle
        heading="Featured Destinations"
        subheading="Handpicked travel experiences to the most iconic, breathtaking, and exciting locations."
        backgroundText="Destination"
      />

      <div className={styles.destinations__grid}>
        {sortedDestinations.map((destination, index) => {
          const layout = layoutByIndex[index] || {};
          const imagePublicId = getDestinationImage(destination.slug, index);

          return (
            <Link
              key={destination.id}
              href={`/packages/${destination.slug}`}
              className={`${styles.destination_card}
                ${layout.tall ? styles.destination_card__tall : ""}
                ${layout.small ? styles.destination_card__small : ""}
              `}
            >
              {/* 👇 CLIENT IMAGE */}
              <FeaturedDestinationImage
                publicId={imagePublicId}
                alt={destination.heroImage.alt}
                priority={index < 2}
              />

              <div className={styles.destination_card__overlay}>
                <h3 className={styles.destination_card__title}>
                  {destination.title}
                </h3>
                <p className={styles.destination_card__description}>
                  {destination.description}
                </p>
              </div>

              <span className={styles.destination_card__icon}>
                <ArrowIcon fill="var(--color-text-primary)" size={20} />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

/**
 * Import CLIENT component lazily
 */
import FeaturedDestinationImage from "./FeaturedDestinations.client";
