"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./PackagesSection.module.css";
import { CalendarIcon } from "@/assets/icons/icons";
import SectionTitle from "@/components/shared/SectionTitle";
import EnquiryModal from "@/components/form/EnquiryModal";

import { destinations } from "@/data/destinations";
import { adaptDestinationsToPackages } from "@/utils/adapters/packageAdapter";
import { UIPackage } from "@/types/package";
import { EnquiryFormValues } from "@/components/form/EnquiryForm";
import { Filter } from "@/types/filter";
/* ---------------- FILTER CONFIG ---------------- */

export const filters: Filter[] = [
  { id: "all", label: "All Locations" },

  ...destinations.map((destination) => ({
    id: destination.slug,
    label: destination.title,
  })),
];

/* ---------------- COMPONENT ---------------- */

export default function PackagesSection() {
  const router = useRouter();
  /* -------- DATA ADAPTATION -------- */

  const allPackages: UIPackage[] = useMemo(
    () => adaptDestinationsToPackages(destinations),
    [],
  );

  /* -------- STATE -------- */

  const [activeFilter, setActiveFilter] = useState("all");
  const [visiblePackages, setVisiblePackages] = useState<UIPackage[]>(
    allPackages.slice(0, 3),
  );
  const [showAll, setShowAll] = useState(false);

  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryInitialValues, setEnquiryInitialValues] =
    useState<Partial<EnquiryFormValues>>();

  /* -------- FILTER HANDLER -------- */

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId);
    setShowAll(false);

    if (filterId === "all") {
      setVisiblePackages(allPackages.slice(0, 3));
      return;
    }

    const filtered = allPackages.filter(
      (pkg) => pkg.destinationSlug === filterId,
    );

    setVisiblePackages(filtered);
  };

  /* -------- LOAD MORE / LESS -------- */

  const handleLoadMore = () => {
    setVisiblePackages(allPackages);
    setShowAll(true);
  };

  const handleShowLess = () => {
    setVisiblePackages(allPackages.slice(0, 3));
    setShowAll(false);
  };

  /* -------- ENQUIRY HANDLER -------- */

  const handleBookNow = (pkg: UIPackage) => {
    setEnquiryInitialValues({
      destination: {
        value: pkg.destinationSlug,
        label: pkg.location,
      },
      packageDuration: pkg.duration,
    });
    setIsEnquiryOpen(true);
  };

  const handleEnquirySubmit = (data: EnquiryFormValues) => {
    console.log("Enquiry Submitted:", data);
  };

  /* -------- PRICE FORMATTER -------- */

  const formatPrice = (price?: number) => {
    if (!price) return "On Request";
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  /* ---------------- RENDER ---------------- */

  const handleViewDetails = (pkg: UIPackage) => {
    router.push(`/packages/${pkg.destinationSlug}/details/${pkg.durationSlug}`);
  };

  return (
    <>
      <section
        className={`${styles.packagesSection} section_white__spacing`}
        aria-labelledby="packages-heading"
      >
        <div className="container">
          <SectionTitle
            heading="Handpicked Packages"
            subheading="Carefully curated travel experiences designed for comfort, adventure, and unforgettable memories."
            backgroundText="Packages"
          />

          {/* ---------- FILTER NAVIGATION ---------- */}
          <nav
            className={styles.filterNav}
            aria-label="Filter packages by category"
          >
            <ul className={styles.filterList} role="list">
              {filters.map((filter) => (
                <li key={filter.id}>
                  <button
                    className={`${styles.filterButton} ${
                      activeFilter === filter.id
                        ? styles.filterButtonActive
                        : ""
                    }`}
                    onClick={() => handleFilterClick(filter.id)}
                    aria-pressed={activeFilter === filter.id}
                  >
                    {filter.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---------- PACKAGES GRID ---------- */}
          <div className={styles.packagesGrid}>
            {visiblePackages.length > 0 ? (
              visiblePackages.map((pkg) => (
                <article
                  key={pkg.id}
                  className={`${styles.packageCard} ${
                    pkg.popular ? styles.packageCardPopular : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className={styles.popularBadge}>Popular</div>
                  )}

                  <div className={styles.packageHeader}>
                    <h3 className={styles.packageTitle}>
                      {pkg.title},{" "}
                      <span className={styles.packageLocation}>
                        {pkg.location}
                      </span>
                    </h3>
                    <p className={styles.packageDescription}>
                      {pkg.description}
                    </p>
                  </div>

                  <div className={styles.packageDetails}>
                    <div className={styles.duration}>
                      <CalendarIcon className={styles.icon} />
                      <span>{pkg.duration}</span>
                    </div>

                    <ul className={styles.includesList}>
                      {pkg.includes.map((item, index) => (
                        <li key={index} className={styles.includesItem}>
                          <CalendarIcon className={styles.checkIcon} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={styles.packageFooter}>
                      <div className={styles.price}>
                        <span className={styles.priceLabel}>per person</span>
                        <span className={styles.priceValue}>
                          {formatPrice(pkg.price)}
                        </span>
                      </div>

                      <div className={styles.actionButtons}>
                        <button
                          className={styles.viewButton}
                          onClick={() => handleViewDetails(pkg)}
                        >
                          View Details
                        </button>

                        <button
                          className={styles.bookButton}
                          onClick={() => handleBookNow(pkg)}
                        >
                          Book Now
                        </button>
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

          {/* ---------- LOAD MORE / LESS ---------- */}
          {activeFilter === "all" && allPackages.length > 3 && (
            <div className={styles.loadMoreContainer}>
              {!showAll ? (
                <button
                  className={styles.loadMoreButton}
                  onClick={handleLoadMore}
                >
                  View All Packages ({allPackages.length - 3} more)
                </button>
              ) : (
                <button
                  className={styles.loadMoreButton}
                  onClick={handleShowLess}
                >
                  Show Less
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ---------- ENQUIRY MODAL ---------- */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        initialValues={enquiryInitialValues}
        onSubmit={handleEnquirySubmit}
        showDateFields={true}
        size="medium"
      />
    </>
  );
}
