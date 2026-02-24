import styles from "./Testimonials.module.css";

import AppImage from "@/components/shared/AppImage";

import type { StaticImageData } from "next/image";
import SectionTitle from "@/components/shared/SectionTitle";
import { QuoteIcon } from "@/assets/icons/icons";

export interface Testimonial {
  id: number;
  rating: number; // 1–5
  message: string;
  name: string;
  role: string;
  avatar: StaticImageData;
}

export interface TestimonialsProps {
  items: Testimonial[];
}

export default function Testimonials({ items }: TestimonialsProps) {
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
          {items.map((item) => (
            <article key={item.id} className={styles["testimonials__card"]}>
              {/* Rating */}
              {/* <div className={styles["testimonials__rating"]}>
                {Array.from({ length: item.rating }).map((_, index) => (
                  <span key={index} className={styles["testimonials__star"]}>
                    ★
                  </span>
                ))}
              </div> */}

              <div className={styles["testimonials__user"]}>
                <AppImage
                  src={item.avatar}
                  alt={item.name}
                  width={80}
                  height={80}
                  className={styles["testimonials__avatar"]}
                />
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
