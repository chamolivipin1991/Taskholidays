import React from "react";
import AppImage from "@/components/shared/AppImage";
import SectionTitle from "@/components/shared/SectionTitle";
import { ArrowIcon } from "@/assets/icons/icons";
import Link from "next/link";
import { destinations } from "@/data/destinations";
import type { Destination } from "@/types/destination";

import styles from "./FeaturedDestinations.module.css";

import { resolveDestinationImage } from "@/utils/getImageUrl";

/**
 * Slot-based layout config (UI driven, not data driven)
 */
const layoutByIndex: Record<number, { tall?: boolean; small?: boolean }> = {
  1: { tall: true },
  5: { small: true },
};

/**
 * Deterministic shuffle based on a seed (SSR/CSR consistent)
 * Uses Fisher-Yates algorithm with a pseudo-random generator
 */
function deterministicShuffle<T>(
  array: T[],
  seed: string = "featured-destinations",
): T[] {
  const result = [...array];

  // Create a simple deterministic pseudo-random number generator
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash = hash & hash;
  }

  // Simple PRNG
  function seededRandom() {
    hash = (hash * 9301 + 49297) % 233280;
    return hash / 233280;
  }

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

/**
 * Sort destinations by a stable order (e.g., alphabetical or by priority)
 */
function stableSortDestinations<T extends Destination>(destinations: T[]): T[] {
  return [...destinations].sort((a, b) => {
    // Sort by id or title for stable ordering
    return a.title.localeCompare(b.title);
    // OR: return a.id - b.id; // if you want to sort by ID
  });
}

const FeaturedDestinations = () => {
  // Use stable sort instead of random shuffle for hydration safety
  const sortedDestinations = stableSortDestinations(destinations);

  // OR: Use deterministic shuffle with a fixed seed
  // const shuffledDestinations = deterministicShuffle(destinations, "homepage");

  return (
    <section
      className={`${styles.destinations} container section_white__spacing`}
    >
      <SectionTitle
        heading="Featured Destinations"
        subheading="Handpicked travel experiences to the most iconic, breathtaking, and
        exciting locations. Choose your next adventure and start making memories
        today."
        backgroundText="Destination"
      />

      <div className={styles.destinations__grid}>
        {sortedDestinations.map((destination: Destination, index: number) => {
          const layout = layoutByIndex[index] || {};

          return (
            <Link
              key={destination.id}
              href={`/packages/${destination.slug}`}
              className={`${styles.destination_card}
                  ${layout.tall ? styles.destination_card__tall : ""}
                  ${layout.small ? styles.destination_card__small : ""}
                `}
              aria-label={`View packages for ${destination.title}`}
            >
              {/* <AppImage
                src={resolveDestinationImage(
                  destination.heroImage.folder,
                  destination.heroImage.file,
                  "w_1200,q_auto,f_auto",
                )}
                alt={destination.heroImage.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
              /> */}
              <AppImage
                src={resolveDestinationImage(
                  destination.heroImage.folder,
                  destination.heroImage.file,
                  "q_auto,f_auto", // Remove width transformation here
                )}
                alt={destination.heroImage.alt}
                width={1200}
                height={800} // Add height for better performance
                sizes="(max-width: 768px) 100vw, 33vw"
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
};

export default FeaturedDestinations;
