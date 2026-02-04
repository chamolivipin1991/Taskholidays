import Image from "next/image";
import TypewriterText from "../shared/TypewriterText";
import styles from "./Banner.module.css";
import TwoStepEnquiryForm from "@/components/form/TwoStepEnquiryForm";

const bannerImages = [
  "/images/destinations/bali/bali_taskholidays_1.jpg",
  "/images/destinations/kerala/kerala_taskholidays_1.jpg",
  "/images/destinations/andaman/andaman_taskholidays_1.jpg",
  "/images/destinations/rajasthan/rajasthan_taskholidays_1.jpg",
];

function getRandomBannerImage(images: string[]) {
  return images[Math.floor(Math.random() * images.length)];
}

const Banner = () => {
  const bannerImage = getRandomBannerImage(bannerImages);

  return (
    <section className={styles.banner__wrapper}>
      <Image
        src={bannerImage}
        alt="Discover breathtaking travel destinations"
        fill
        priority
        sizes="100vw"
        className={styles.banner__image}
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
