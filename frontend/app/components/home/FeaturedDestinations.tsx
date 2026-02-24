import Link from "next/link";
import SectionTitle from "@/components/shared/SectionTitle";
import { ArrowIcon } from "@/assets/icons/icons";
import { packagesdata } from "@/data/packages-data";
import type { PackagesData } from "@/types/destination";
import { destinationImages } from "@/assets/images";
import styles from "./FeaturedDestinations.module.css";

// Lazy load client component
import AppImagesClient from "./AppImagesClient.client";

const layoutByIndex: Record<number, { tall?: boolean; small?: boolean }> = {
  1: { tall: true },
  5: { small: true },
};

function stableSortDestinations<T extends PackagesData>(items: T[]): T[] {
  return [...items].sort((a, b) => a.title.localeCompare(b.title));
}

// 🔁 Random image picker
function getDestinationImage(slug: string): string | null {
  const images = destinationImages[slug];
  if (!images?.length) return null;
  const randomIndex = Math.floor(Math.random() * images.length);
  const filename = images[randomIndex];
  return `destinations/${slug}/${filename}`;
}

export default function FeaturedDestinationsServer() {
  const sortedDestinations = stableSortDestinations(packagesdata);

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
          const imagePath = getDestinationImage(destination.slug);

          return (
            <Link
              key={destination.id}
              href={`/packages/${destination.slug}`}
              className={`${styles.destination_card}
                ${layout.tall ? styles.destination_card__tall : ""}
                ${layout.small ? styles.destination_card__small : ""}
              `}
            >
              <AppImagesClient
                imagePath={imagePath!}
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
