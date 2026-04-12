"use client";

import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { UIPackage } from "@/types/package";
import styles from "./PackageList.module.css";
import {
  CheckIcon,
  HotelIcon,
  MealIcon,
  CruiseIcon,
  SightseeingIcon,
  TransportIcon,
} from "@/assets/icons/icons";
import Button from "@/components/form/Button";
import EnquiryModal from "@/components/form/EnquiryModal";
import AppImagesClient from "@/components/home/AppImagesClient.client";
import { useEnquiryModal } from "@/hooks/useEnquiryModal";
import { formatPrice } from "@/utils/formatPrice";
import { destinationImages } from "@/assets/images";

type Props = {
  packages: UIPackage[];
  destinationTitle: string;
};

// Icon mapping – match inclusion strings exactly as they appear in pkg.includes
const inclusionIconMap: Record<
  string,
  React.ComponentType<{ size?: number; fill?: string }>
> = {
  Accommodation: HotelIcon,
  Breakfast: MealIcon,
  "Cruise Tickets": CruiseIcon,
  Sightseeing: SightseeingIcon,
  Transport: TransportIcon,
};

export default function PackageList({ packages, destinationTitle }: Props) {
  const router = useRouter();
  const { isOpen, initialValues, openEnquiry, closeEnquiry } =
    useEnquiryModal();

  // Pre‑compute a random image path for each package
  const packageImages = useMemo(() => {
    return packages.map((pkg) => {
      const images = destinationImages[pkg.destinationSlug];
      if (!images?.length) return null; // fallback handled below
      const randomIndex = Math.floor(Math.random() * images.length);
      const filename = images[randomIndex];
      return `destinations/${pkg.destinationSlug}/${filename}`;
    });
  }, [packages]);

  const handleEnquiry = (pkg: UIPackage) => {
    openEnquiry({
      destination: { value: pkg.destinationSlug, label: pkg.location },
      packageDuration: { value: pkg.duration, label: pkg.duration },
    });
  };

  const handleViewDetails = (pkg: UIPackage) => {
    router.push(`/packages/${pkg.destinationSlug}/details/${pkg.packageId}`);
  };

  return (
    <>
      <div className={styles.packageList}>
        {packages.length > 0 ? (
          packages.map((pkg, index) => {
            const imagePath = packageImages[index] ?? null; // fallback to null
            console.log("--------------", pkg);
            return (
              <article
                key={pkg.id}
                className={`${styles.packageList__card} ${pkg.popular ? styles["packageList_card__popular"] : ""}`}
              >
                <div className={styles.packageList__imageWrapper}>
                  {imagePath ? (
                    <AppImagesClient
                      imagePath={imagePath}
                      alt={pkg.title}
                      priority={false}
                    />
                  ) : (
                    // Optional: a placeholder div or image
                    <div className={styles.placeholderImage}>No Image</div>
                  )}
                  <p
                    className={`${pkg.popular ? styles["packageList_popular__package"] : "packageList_simple__package"}`}
                  >
                    Popular
                  </p>
                </div>
                <div className={styles.packageList__content}>
                  <div>
                    <div className={styles.packageList__header}>
                      <h3 className={styles.packageList__title}>{pkg.title}</h3>
                      {/* <span className={styles.packageList__duration}>
                        {pkg.duration}
                      </span> */}
                    </div>
                    <p className={styles.packageList__description}>
                      {pkg.description}
                    </p>
                    <div className={styles.packageList__includesWrapper}>
                      <ul className={styles.packageList__includes}>
                        {pkg.includes.map((item, i) => {
                          const IconComponent =
                            inclusionIconMap[item] || CheckIcon;
                          return (
                            <li
                              key={i}
                              className={styles.packageList__includesItem}
                            >
                              <IconComponent
                                fill="var(--color-brand-primary)"
                                size={22}
                              />
                              <span
                                className={styles.packageList__includesItemText}
                              >
                                {item}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className={styles.packageList__footer}>
                    <div>
                      <div className={styles.packageList__price}>
                        {formatPrice(pkg.price)}
                      </div>
                      <div className={styles.packageList__taxNote}>
                        Includes Taxes & Fees
                      </div>
                    </div>
                    <div className={styles.packageList__actions}>
                      <Button
                        variant="activeLine"
                        text="View Details"
                        onClick={() => handleViewDetails(pkg)}
                      />
                      <Button
                        variant="dark"
                        text="Enquiry Now"
                        onClick={() => handleEnquiry(pkg)}
                      />
                    </div>
                  </div>
                </div>
              </article>
            );
          })
        ) : (
          <div className={styles.packageList__empty}>
            <h3>No packages available for {destinationTitle}</h3>
            <p>Check back soon or contact us for custom packages.</p>
          </div>
        )}
      </div>

      <EnquiryModal
        isOpen={isOpen}
        onClose={closeEnquiry}
        initialValues={initialValues}
        onSubmit={(data) => console.log("Enquiry Submitted:", data)}
        showDateFields
        size="medium"
      />
    </>
  );
}
