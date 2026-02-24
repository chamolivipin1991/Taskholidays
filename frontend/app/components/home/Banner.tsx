import TypewriterText from "../shared/TypewriterText";
import styles from "./Banner.module.css";
import TwoStepEnquiryForm from "@/components/form/TwoStepEnquiryForm";
import AppImagesClient from "@/components/home/AppImagesClient.client";
import { destinationImages } from "@/assets/images";

// Slugs of destinations to feature in the banner
const DESTINATION_SLUGS = ["bali", "kerala", "andaman", "rajasthan"];

/**
 * Pick a random image from a random destination.
 * Returns a path like "destinations/bali/bali_taskholidays_3.jpg"
 */
function getRandomHeroImage(): string | null {
  // Pick a random destination from the list
  const randomSlug =
    DESTINATION_SLUGS[Math.floor(Math.random() * DESTINATION_SLUGS.length)];
  const images = destinationImages[randomSlug];
  if (!images?.length) return null;

  // Pick a random image from that destination
  const randomImage = images[Math.floor(Math.random() * images.length)];
  return `destinations/${randomSlug}/${randomImage}`;
}

const Banner = () => {
  const imagePath = getRandomHeroImage();

  // Fallback (should never happen with valid data)
  if (!imagePath) return null;

  return (
    <section className={styles.banner__wrapper}>
      <AppImagesClient
        imagePath={imagePath}
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
