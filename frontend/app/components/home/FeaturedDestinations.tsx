import React from "react";
import AppImage from "@/components/shared/AppImage";
import SectionTitle from "@/components/shared/SectionTitle";
import { ArrowIcon } from "@/assets/icons/icons";

import { destinations } from "@/data/destinations";
import type { Destination } from "@/types/destination";

import styles from "./FeaturedDestinations.module.css";

/**
 * UI-only layout configuration
 * Keeps core destination data clean
 */
const layoutConfig: Record<string, { tall?: boolean; small?: boolean }> = {
  kerala: { tall: true },
  dubai: { small: true },
};

const FeaturedDestinations = () => {
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
        {destinations.map((destination: Destination) => {
          const layout = layoutConfig[destination.slug] || {};

          return (
            <article
              key={destination.id}
              className={`${styles.destination_card}
                ${layout.tall ? styles.destination_card__tall : ""}
                ${layout.small ? styles.destination_card__small : ""}
              `}
            >
              <AppImage
                src={destination.heroImage}
                alt={destination.title}
                fill
                wrapperClassName={styles.destination_card__imagewrapper}
                className={styles.destination_card__image}
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
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedDestinations;
