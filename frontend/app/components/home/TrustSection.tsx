import styles from "./TrustSection.module.css";
import AppImage from "@/components/shared/AppImage";
import SectionTitle from "../shared/SectionTitle";

// Import internal data
import { trustItems, centerImage } from "@/data/trustData";

export default function TrustSection() {
  return (
    <section className={styles["trust"]}>
      <div className="container">
        <SectionTitle
          heading="Why Choose Us"
          subheading="Handpicked travel experiences to the most iconic, breathtaking, and
        exciting locations. Choose your next adventure and start making memories
        today."
          backgroundText="Trust"
        />
        <div className={styles["trust__grid"]}>
          <div className={styles["trust_image__wrapper"]}>
            <AppImage
              src={centerImage.src}
              alt={centerImage.alt}
              fill
              className={styles["trust__image"]}
              priority
            />
          </div>

          <div className={styles["trust__column"]}>
            {trustItems.map((item) => (
              <div key={item.id} className={styles["trust__card"]}>
                <div className={styles["trust__icon"]}>
                  <AppImage
                    src={item.icon}
                    alt={item.title}
                    fill
                    className={styles["trust__icons"]}
                    priority
                  />
                </div>
                <div className={styles["trust__content"]}>
                  <h4 className={styles["trust__title"]}>{item.title}</h4>
                  <p className={styles["trust__desc"]}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
