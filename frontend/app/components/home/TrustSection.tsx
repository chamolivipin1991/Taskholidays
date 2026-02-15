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
  icon: TrustIcon;
}

export interface TrustSectionProps {
  leftItems: TrustItem[];
  rightItems: TrustItem[];
  centerImage: {
    src: StaticImageData;
    alt: string;
  };
}

export default function TrustSection({
  leftItems,
  rightItems,
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
          {/* LEFT COLUMN */}
          <div className={styles["trust__column"]}>
            {leftItems.map((item) => (
              <div key={item.id} className={styles["trust__card"]}>
                <div className={styles["trust__icon"]}>
                  {typeof item.icon === "function" ? (
                    <item.icon width={20} height={20} />
                  ) : (
                    <AppImage
                      src={item.icon as StaticImageData}
                      alt={item.title}
                      width={20}
                      height={20}
                    />
                  )}
                </div>

                <h4 className={styles["trust__title"]}>{item.title}</h4>
                <p className={styles["trust__desc"]}>{item.description}</p>
              </div>
            ))}
          </div>

          {/* CENTER IMAGE */}
          <div className={styles["trust__image-wrapper"]}>
            <AppImage
              src={centerImage.src}
              alt={centerImage.alt}
              fill
              // wrapperClassName={styles["trust__image-container"]}
              className={styles["trust__image"]}
              priority
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className={styles["trust__column"]}>
            {rightItems.map((item) => (
              <div key={item.id} className={styles["trust__card"]}>
                <div className={styles["trust__icon"]}>
                  {typeof item.icon === "function" ? (
                    <item.icon width={20} height={20} />
                  ) : (
                    <AppImage
                      src={item.icon as StaticImageData}
                      alt={item.title}
                      width={20}
                      height={20}
                    />
                  )}
                </div>

                <h4 className={styles["trust__title"]}>{item.title}</h4>
                <p className={styles["trust__desc"]}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
