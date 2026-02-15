"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./PackagesSection.module.css";
import { CalendarIcon, CheckIcon } from "@/assets/icons/icons";
import SectionTitle from "@/components/shared/SectionTitle";
import EnquiryModal from "@/components/form/EnquiryModal";
import Button from "@/components/form/Button"; // ← import Button

import { destinations } from "@/data/destinations";
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

/* ---------------- TYPES ---------------- */
interface UIPackage {
  id: string;
  title: string;
  location: string;
  description: string;
  duration: string;
  includes: string[];
  price?: number;
  popular?: boolean;
  destinationSlug: string;
  packageId: string;
  shortItinerary?: any[];
}

/* ---------------- COMPONENT ---------------- */
export default function PackagesSection() {
  const router = useRouter();

  /* -------- DATA TRANSFORMATION -------- */
  const allPackages: UIPackage[] = useMemo(() => {
    const packages: UIPackage[] = [];

    destinations.forEach((destination) => {
      if (!destination.packages || destination.packages.length === 0) return;

      destination.packages.forEach((pkg) => {
        const includes: string[] = [];

        if (pkg.hotels && pkg.hotels.length > 0) {
          includes.push("Accommodation");
        }

        if (
          pkg.shortItinerary &&
          pkg.shortItinerary.some((day: any) => day.breakfastNextDay)
        ) {
          includes.push("Breakfast");
        }

        if (pkg.cruise && pkg.cruise.length > 0) {
          includes.push("Cruise Tickets");
        }

        if (pkg.detailedItinerary && pkg.detailedItinerary.length > 0) {
          includes.push("Sightseeing");
        }

        includes.push("Transport");

        const uiPackage: UIPackage = {
          id: `${destination.id}-${pkg.packageId}`,
          title: pkg.title,
          location: destination.title,
          description: destination.description,
          duration: pkg.duration,
          includes,
          price: 25000, // TODO: make dynamic
          popular: Math.random() > 0.5,
          destinationSlug: destination.slug,
          packageId: pkg.packageId,
          shortItinerary: pkg.shortItinerary,
        };

        packages.push(uiPackage);
      });
    });

    return packages;
  }, []);

  /* -------- STATE -------- */
  const [activeFilter, setActiveFilter] = useState("all");
  const [visiblePackages, setVisiblePackages] = useState<UIPackage[]>(
    allPackages.slice(0, 3),
  );
  const [showAll, setShowAll] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryInitialValues, setEnquiryInitialValues] =
    useState<Partial<EnquiryFormValues>>();

  /* -------- HANDLERS -------- */
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

  const handleLoadMore = () => {
    setVisiblePackages(allPackages);
    setShowAll(true);
  };

  const handleShowLess = () => {
    setVisiblePackages(allPackages.slice(0, 3));
    setShowAll(false);
  };

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

  const handleViewDetails = (pkg: UIPackage) => {
    router.push(`/packages/${pkg.destinationSlug}/details/${pkg.packageId}`);
  };

  const formatPrice = (price?: number) => {
    if (!price) return "On Request";
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  /* ---------------- RENDER ---------------- */
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
                  <Button
                    variant={
                      activeFilter === filter.id ? "dark" : "darkBordered"
                    }
                    onClick={() => handleFilterClick(filter.id)}
                    text={filter.label}
                    aria-pressed={activeFilter === filter.id}
                  />
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
                      {pkg.includes.slice(0, 4).map((item, index) => (
                        <li key={index} className={styles.includesItem}>
                          <CheckIcon className={styles.checkIcon} size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                      {pkg.includes.length > 4 && (
                        <li className={styles.includesItem}>
                          <CheckIcon className={styles.checkIcon} size={16} />
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

          {/* ---------- LOAD MORE / LESS ---------- */}
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
