"use client";

import { useRouter } from "next/navigation";
import { UIPackage } from "@/types/package";
import styles from "./PackageList.module.css";
import { CheckIcon } from "@/assets/icons/icons";
import Button from "@/components/form/Button";
import EnquiryModal from "@/components/form/EnquiryModal";
import AppImagesClient from "@/components/home/AppImagesClient.client";
import { useEnquiryModal } from "@/hooks/useEnquiryModal";
import { formatPrice } from "@/utils/formatPrice";

type Props = {
  packages: UIPackage[];
  destinationTitle: string;
};

export default function PackageList({ packages, destinationTitle }: Props) {
  const router = useRouter();
  const { isOpen, initialValues, openEnquiry, closeEnquiry } =
    useEnquiryModal();

  const handleEnquiry = (pkg: UIPackage) => {
    openEnquiry({
      destination: { value: pkg.destinationSlug, label: pkg.location },
      packageDuration: pkg.duration,
    });
  };

  const handleViewDetails = (pkg: UIPackage) => {
    router.push(`/packages/${pkg.destinationSlug}/details/${pkg.packageId}`);
  };

  return (
    <>
      <div className={styles.packageList}>
        {packages.length > 0 ? (
          packages.map((pkg) => (
            <article
              key={pkg.id}
              className={`${styles.packageList__card} ${pkg.popular ? styles["packageList__card--popular"] : ""}`}
            >
              <div className={styles.packageList__imageWrapper}>
                <AppImagesClient
                  publicId={pkg.imagePublicId}
                  alt={pkg.title}
                  priority={false}
                />
              </div>
              <div className={styles.packageList__content}>
                <div>
                  <div className={styles.packageList__header}>
                    <h3 className={styles.packageList__title}>{pkg.title}</h3>
                    <span className={styles.packageList__duration}>
                      {pkg.duration}
                    </span>
                  </div>
                  <p className={styles.packageList__description}>
                    {pkg.description}
                  </p>
                  <ul className={styles.packageList__includes}>
                    {pkg.includes.slice(0, 4).map((item, index) => (
                      <li
                        key={index}
                        className={styles.packageList__includesItem}
                      >
                        <CheckIcon size={16} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
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
          ))
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
