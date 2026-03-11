import styles from "./Testimonials.module.css";

import AppImage from "@/components/shared/AppImage";
import SectionTitle from "@/components/shared/SectionTitle";
import { QuoteIcon, ProfileIcon } from "@/assets/icons/icons";

// Import the data and type
import { testimonialsData } from "@/data/testimonialsData"; // adjust path if needed

export default function Testimonials() {
  return (
    <section className={`section_white__spacing ${styles["testimonials"]}`}>
      <div className="container">
        <SectionTitle
          heading="Happy Customers"
          subheading="Handpicked travel experiences to the most iconic, breathtaking, and
        exciting locations. Choose your next adventure and start making memories
        today."
          backgroundText="Reviews"
        />
        <div className={styles["testimonials__grid"]}>
          {testimonialsData.map((item, i) => (
            <article key={i} className={styles["testimonials__card"]}>
              <div className={styles["testimonials__user"]}>
                {/* Avatar (commented out, using ProfileIcon) */}
                {item.avatar ? (
                  <AppImage
                    src={item.avatar}
                    alt={item.name}
                    width={80}
                    height={80}
                    className={styles["testimonials__avatar"]}
                  />
                ) : (
                  <div className={styles["testimonials__avatar"]}>
                    {item.name.slice(0, 1)}
                  </div>
                )}

                {/* Message */}
                <div className={styles["testimonials__meta"]}>
                  <span className={styles["testimonials__name"]}>
                    {item.name}
                  </span>

                  <QuoteIcon fill="var(--color-success)" size={70} />
                </div>
                <p className={styles["testimonials__message"]}>
                  {item.message}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
