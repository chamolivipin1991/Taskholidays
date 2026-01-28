import Image from "next/image";
import bannerImg from "@/assets/images/home_banner.jpg";
import TypewriterText from "../shared/TypewriterText";
import styles from "./Banner.module.css";
import TwoStepEnquiryForm from "@/components/form/TwoStepEnquiryForm";

const Banner = () => {
  return (
    <section className={styles.banner__wrapper}>
      <Image
        src={bannerImg}
        alt="Travel banner"
        fill
        priority
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
        <div className={styles.banner__searchFormWrapper}>
          {/* This will show the date selection form */}
          <TwoStepEnquiryForm />
        </div>
        <p className={styles.banner__description}>
          Experience the magic of exploring the world's most breathtaking
          destinations with our custom-designed travel packages.
        </p>
      </div>
    </section>
  );
};

export default Banner;
