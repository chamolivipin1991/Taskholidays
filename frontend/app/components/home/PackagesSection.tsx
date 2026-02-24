"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./PackagesSection.module.css";
import { CalendarIcon, CheckIcon } from "@/assets/icons/icons";
import SectionTitle from "@/components/shared/SectionTitle";
import EnquiryModal from "@/components/form/EnquiryModal";
import Button from "@/components/form/Button";

import { packagesdata } from "@/data/packages-data";
import { EnquiryFormValues } from "@/components/form/EnquiryForm";
import { Filter } from "@/types/filter";
import AppImagesClient from "@/components/home/AppImagesClient.client";
import { destinationImages } from "@/assets/images";
import { UIPackage } from "@/types/package";
import { useEnquiryModal } from "@/hooks/useEnquiryModal";
import { formatPrice } from "@/utils/formatPrice";

export const filters: Filter[] = [
  { id: "all", label: "All Locations" },
  ...packagesdata.map((destination) => ({
    id: destination.slug,
    label: destination.title,
  })),
];

export default function PackagesSection() {
  const router = useRouter();
  const { isOpen, initialValues, openEnquiry, closeEnquiry } =
    useEnquiryModal();

  const allPackages: UIPackage[] = useMemo(() => {
    const packages: UIPackage[] = [];
    packagesdata.forEach((destination) => {
      if (!destination.packages?.length) return;
      const destSlug = destination.slug;
      const images = destinationImages[destSlug] || [];
      destination.packages.forEach((pkg, pkgIndex) => {
        const includes = [];
        if (pkg.hotels?.length) includes.push("Accommodation");
        if (pkg.shortItinerary?.some((day) => day.breakfastNextDay))
          includes.push("Breakfast");
        if (pkg.cruise?.length) includes.push("Cruise Tickets");
        if (pkg.detailedItinerary?.length) includes.push("Sightseeing");
        includes.push("Transport");

        let imagePath: string | null = null;
        if (images.length) {
          const imageIndex = pkgIndex % images.length;
          const filename = images[imageIndex];
          imagePath = `destinations/${destSlug}/${filename}`;
        }

        packages.push({
          id: `${destination.id}-${pkg.packageId}`,
          title: pkg.title,
          location: destination.title,
          description: destination.description,
          duration: pkg.duration,
          includes,
          price: 25000, // TODO: make dynamic
          popular: pkg.popular ?? false,
          destinationSlug: destSlug,
          packageId: pkg.packageId,
          shortItinerary: pkg.shortItinerary,
          imagePath, // renamed and prefixed
        });
      });
    });
    return packages.sort((a, b) => {
      if (a.popular && !b.popular) return -1;
      if (!a.popular && b.popular) return 1;
      return 0;
    });
  }, []);

  const [activeFilter, setActiveFilter] = useState("all");
  const [visiblePackages, setVisiblePackages] = useState(
    allPackages.slice(0, 3),
  );
  const [showAll, setShowAll] = useState(false);

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId);
    setShowAll(false);
    if (filterId === "all") {
      setVisiblePackages(allPackages.slice(0, 3));
    } else {
      setVisiblePackages(
        allPackages.filter((pkg) => pkg.destinationSlug === filterId),
      );
    }
  };

  const handleLoadMore = () => {
    setVisiblePackages(allPackages);
    setShowAll(true);
  };

  const handleShowLess = () => {
    setVisiblePackages(allPackages.slice(0, 3));
    setShowAll(false);
  };

  const handleBookNow = (pkg: UIPackage) => {
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
      <section className={`${styles.packagesSection} section_white__spacing`}>
        <div className="container">
          <SectionTitle
            heading="Handpicked Packages"
            subheading="Carefully curated travel experiences designed for comfort, adventure, and unforgettable memories."
            backgroundText="Packages"
          />
          <nav className={styles.filterNav}>
            <ul className={styles.filterList}>
              {filters.map((filter) => (
                <li key={filter.id}>
                  <Button
                    variant={
                      activeFilter === filter.id ? "dark" : "darkBordered"
                    }
                    onClick={() => handleFilterClick(filter.id)}
                    text={filter.label}
                  />
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.packagesGrid}>
            {visiblePackages.length ? (
              visiblePackages.map((pkg) => (
                <article
                  key={pkg.id}
                  className={`${styles.packageCard} ${pkg.popular ? styles.packageCardPopular : ""}`}
                >
                  {pkg.popular && (
                    <div className={styles.popularBadge}>Popular</div>
                  )}
                  <div className={styles.packageHeader}>
                    {pkg.imagePath ? (
                      <AppImagesClient
                        imagePath={pkg.imagePath}
                        alt={pkg.location}
                        priority={false}
                      />
                    ) : (
                      <div className={styles.placeholderImage}>No Image</div>
                    )}
                  </div>
                  <div className={styles.packageDetails}>
                    <h3 className={styles.packageTitle}>
                      {pkg.title},{" "}
                      <span className={styles.packageLocation}>
                        {pkg.location}
                      </span>
                    </h3>
                    <p className={styles.packageDescription}>
                      {pkg.description}
                    </p>
                    <div className={styles.duration}>
                      <CalendarIcon className={styles.icon} />
                      <span>{pkg.duration}</span>
                    </div>
                    <ul className={styles.includesList}>
                      {pkg.includes.slice(0, 4).map((item, index) => (
                        <li key={index} className={styles.includesItem}>
                          <CheckIcon size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                      {pkg.includes.length > 4 && (
                        <li className={styles.includesItem}>
                          <CheckIcon size={16} />
                          <span>+{pkg.includes.length - 4} more</span>
                        </li>
                      )}
                    </ul>
                    <div className={styles.packageFooter}>
                      <div className={styles.actionButtons}>
                        <Button
                          variant="activeLine"
                          onClick={() => handleViewDetails(pkg)}
                          text="View Details"
                        />
                        <Button
                          variant="dark"
                          onClick={() => handleBookNow(pkg)}
                          text="Book Now"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <p className={styles.noResults}>
                No packages found for this filter.
              </p>
            )}
          </div>

          {activeFilter === "all" && allPackages.length > 3 && (
            <div className={styles.loadMoreContainer}>
              {!showAll ? (
                <Button
                  variant="darkBordered"
                  onClick={handleLoadMore}
                  text={`View All Packages (${allPackages.length - 3} more)`}
                />
              ) : (
                <Button
                  variant="darkBordered"
                  onClick={handleShowLess}
                  text="Show Less"
                />
              )}
            </div>
          )}
        </div>
      </section>

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
