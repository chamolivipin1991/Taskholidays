import type { StaticImageData } from "next/image";
import styles from "./TrustSection.module.css";
import AppImage from "@/components/shared/AppImage";
import SectionTitle from "../shared/SectionTitle";

import { ComponentType, SVGProps } from "react";

export type TrustIcon =
  | StaticImageData
  | ComponentType<SVGProps<SVGSVGElement>>;

export interface TrustItem {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface TrustSectionProps {
  trustItems: TrustItem[];

  centerImage: {
    src: string;
    alt: string;
  };
}

export default function TrustSection({
  trustItems,

  centerImage,
}: TrustSectionProps) {
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
