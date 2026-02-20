"use client";

import { useEffect, useState } from "react";
import type { Destination } from "@/types/destination";

import SectionTitle from "@/components/shared/SectionTitle";
import AppImagesClient from "../home/AppImagesClient.client";
import styles from "./ListingBanner.module.css";

type Props = {
  dest: Destination;
};

const TOTAL_IMAGES = 7; // update when you add more images

const ListingBanner = ({ dest }: Props) => {
  const [publicId, setPublicId] = useState<string | null>(null);

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * TOTAL_IMAGES) + 1;

    // 👇 Cloudinary-style publicId
    // Example: bali/bali_taskholidays_2_tlfcoa
    const generatedPublicId = `${dest.slug}/${dest.slug}_taskholidays_${randomNumber}`;

    setPublicId(generatedPublicId);
  }, [dest.slug]);

  return (
    <div className={styles.listingBanner_wrapper}>
      <SectionTitle
        heading={`${dest.title} Packages`}
        subheading={`Handpicked travel experiences for ${dest.title}`}
        backgroundText="Packages"
        className={styles.listingBanner_headingWrapper}
        headingClassName={styles.listingBanner_heading}
        bgTextClassName={styles.listingBanner_headingBg}
      />

      {publicId && (
        <AppImagesClient publicId={publicId} alt={dest.title} priority />
      )}
    </div>
  );
};

export default ListingBanner;
