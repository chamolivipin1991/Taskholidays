"use client";

import { useEffect, useState } from "react";
import type { PackagesData } from "@/types/destination";

import SectionTitle from "@/components/shared/SectionTitle";
import AppImagesClient from "../home/AppImagesClient.client";
import { destinationImages } from "@/assets/images";
import styles from "./ListingBanner.module.css";

type Props = {
  dest: PackagesData;
};

const ListingBanner = ({ dest }: Props) => {
  const [imagePath, setImagePath] = useState<string | null>(null);

  useEffect(() => {
    const images = destinationImages[dest.slug];
    if (!images?.length) return;
    const randomIndex = Math.floor(Math.random() * images.length);
    const filename = images[randomIndex];
    setImagePath(`destinations/${dest.slug}/${filename}`);
  }, [dest.slug]);

  if (!imagePath) return null; // or a placeholder

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

      <AppImagesClient imagePath={imagePath} alt={dest.title} priority />
    </div>
  );
};

export default ListingBanner;
