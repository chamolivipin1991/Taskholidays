import TypewriterText from "../shared/TypewriterText";
import styles from "./Banner.module.css";
import TwoStepEnquiryForm from "@/components/form/TwoStepEnquiryForm";
import AppImagesClient from "@/components/home/AppImagesClient.client";
import { destinationImages } from "@/assets/images";

// Slugs of destinations to feature in the banner
const DESTINATION_SLUGS = ["bali", "kerala", "andaman", "rajasthan"];

// Build an array of publicIds (e.g., "bali/bali_taskholidays_1_siucth")
const bannerPublicIds = DESTINATION_SLUGS.map((slug) => {
  const images = destinationImages[slug];
  if (!images?.length) return null;
  // Use the first image from each destination's list
  return `${slug}/${images[0]}`;
}).filter(Boolean) as string[];

const Banner = () => {
  // Pick a random publicId from the list
  const randomIndex = Math.floor(Math.random() * bannerPublicIds.length);
  const randomPublicId = bannerPublicIds[randomIndex] ?? null;

  // Fallback if no images are available (should not happen)
  if (!randomPublicId) {
    return null;
  }

  return (
    <section className={styles.banner__wrapper}>
      {/* Image component that handles dev vs. prod */}
      <AppImagesClient
        publicId={randomPublicId}
        alt="Discover breathtaking travel destinations"
        priority
      />

      <div className={styles.banner__overlay}></div>

      <div className={styles.banner__content}>
        <p className={styles.banner__subtitle}>DISCOVER YOUR NEXT</p>

        <h1 className={styles.banner__title}>
          <TypewriterText
            words={["ADVENTURE", "HONEYMOON", "FRIENDS", "FAMILY", "ESCAPE"]}
          />
        </h1>

        <p className={styles.banner__subtitle}>TRIP</p>

        <p className={styles.banner__description}>
          Experience the magic of exploring the world's most breathtaking
          destinations with our custom-designed travel packages.
        </p>
      </div>

      <div className={styles.banner__searchFormWrapper}>
        <div className={styles.banner__searchFormContainer}>
          <TwoStepEnquiryForm />
        </div>
      </div>
    </section>
  );
};

export default Banner;
