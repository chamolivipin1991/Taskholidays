"use client";

import React, { useState } from "react";
import styles from "./PackagesSection.module.css";
import { CalendarIcon } from "@/assets/icons/icons";
import SectionTitle from "@/components/shared/SectionTitle";

// Types
interface Package {
  id: number;
  title: string;
  location: string;
  description: string;
  duration: string;
  includes: string[];
  travelDates: string;
  bookingDeadline: string;
  price: number;
  popular?: boolean;
  tags: string[]; // Add tags for filtering
}

interface Filter {
  id: string;
  label: string;
}

// Updated Data with tags
const packagesData: Package[] = [
  {
    id: 1,
    title: "Santorini",
    location: "Greece",
    description:
      "Experience the charm of whitewashed villages, crystal-clear waters, and breathtaking sunsets.",
    duration: "7 Days and 6 Nights",
    includes: ["Return international flight", "Hotel stay"],
    travelDates: "May – October 2025",
    bookingDeadline: "Book by 30 April 2025",
    price: 2799,
    popular: true,
    tags: ["europe", "beach", "island"], // Added tags
  },
  {
    id: 2,
    title: "Sahara Desert",
    location: "Morocco",
    description:
      "Embark on an unforgettable journey through the mesmerizing Sahara Desert.",
    duration: "5 Days and 4 Nights",
    includes: ["Guided desert tours", "Camel rides"],
    travelDates: "October – April 2025",
    bookingDeadline: "Book by 15 September 2025",
    price: 1499,
    tags: ["africa", "desert", "adventure"],
  },
  {
    id: 3,
    title: "Maldives",
    location: "Indian Ocean",
    description:
      "Relax in paradise on the serene beaches of the Maldives. Enjoy crystal-clear waters.",
    duration: "6 Days and 5 Nights",
    includes: ["Return flights", "Luxury resort stay"],
    travelDates: "Year-round availability",
    bookingDeadline: "Book by 30 June 2025",
    price: 2199,
    tags: ["asia", "beach", "luxury"],
  },
];

// Mock more packages for demonstration
const additionalPackages: Package[] = [
  {
    id: 4,
    title: "London",
    location: "United Kingdom",
    description:
      "Explore historical landmarks, world-class museums, and vibrant culture in the heart of London.",
    duration: "5 Days and 4 Nights",
    includes: [
      "Return flights",
      "City center hotel",
      "Hop-on hop-off bus tour",
    ],
    travelDates: "March – December 2025",
    bookingDeadline: "Book by 28 February 2025",
    price: 1899,
    tags: ["europe", "city", "culture"],
  },
  {
    id: 5,
    title: "Barcelona",
    location: "Spain",
    description:
      "Discover Gaudí's masterpieces, Mediterranean beaches, and vibrant Spanish culture.",
    duration: "6 Days and 5 Nights",
    includes: [
      "Return flights",
      "Beachfront accommodation",
      "Sagrada Familia tickets",
    ],
    travelDates: "April – November 2025",
    bookingDeadline: "Book by 31 March 2025",
    price: 1999,
    tags: ["europe", "beach", "culture"],
  },
  {
    id: 6,
    title: "Paris",
    location: "France",
    description:
      "Romantic getaway to the City of Lights with iconic landmarks and exquisite cuisine.",
    duration: "4 Days and 3 Nights",
    includes: [
      "Return flights",
      "Hotel near Eiffel Tower",
      "Seine River cruise",
    ],
    travelDates: "Year-round availability",
    bookingDeadline: "Book 60 days in advance",
    price: 1699,
    popular: true,
    tags: ["europe", "city", "romantic"],
  },
  {
    id: 7,
    title: "New York",
    location: "USA",
    description:
      "Experience the energy of the Big Apple with Broadway shows and iconic skyline views.",
    duration: "7 Days and 6 Nights",
    includes: [
      "Return flights",
      "Times Square hotel",
      "Statue of Liberty tour",
    ],
    travelDates: "All year",
    bookingDeadline: "Book 90 days in advance",
    price: 2499,
    tags: ["north america", "city", "shopping"],
  },
  {
    id: 8,
    title: "Dubai",
    location: "UAE",
    description:
      "Luxury desert oasis with futuristic architecture and world-class shopping.",
    duration: "5 Days and 4 Nights",
    includes: ["Return flights", "5-star hotel", "Desert safari with dinner"],
    travelDates: "October – April 2026",
    bookingDeadline: "Book by 30 September 2025",
    price: 2299,
    tags: ["middle east", "desert", "luxury"],
  },
  {
    id: 9,
    title: "Sydney",
    location: "Australia",
    description:
      "Explore iconic Opera House, beautiful harbors, and stunning beaches down under.",
    duration: "8 Days and 7 Nights",
    includes: ["Return flights", "Harbor view hotel", "BridgeClimb experience"],
    travelDates: "September – April 2026",
    bookingDeadline: "Book by 31 August 2025",
    price: 2999,
    tags: ["australia", "beach", "adventure"],
  },
];

const allPackages = [...packagesData, ...additionalPackages];

const filters: Filter[] = [
  { id: "all", label: "All Locations" },
  { id: "london", label: "London" },
  { id: "spain", label: "Spain" },
  { id: "paris", label: "Paris" },
  { id: "new-york", label: "New York" },
  { id: "dubai", label: "Dubai" },
  { id: "sydney", label: "Sydney" },
  { id: "manchester", label: "Manchester" },
  { id: "rome", label: "Rome" },
  { id: "istanbul", label: "Istanbul" },
  { id: "bangkok", label: "Bangkok" },
  { id: "greece", label: "Greece" },
  { id: "morocco", label: "Morocco" },
  { id: "maldives", label: "Maldives" },
];

// Mapping filter IDs to package tags/locations
const filterMapping: Record<string, string[]> = {
  all: [], // Special case - shows all
  london: ["london", "united kingdom"],
  spain: ["spain", "barcelona"],
  paris: ["paris", "france"],
  "new-york": ["new york", "usa", "north america"],
  dubai: ["dubai", "uae", "middle east"],
  sydney: ["sydney", "australia"],
  manchester: ["united kingdom", "europe"], // Approximation
  rome: ["italy", "europe"], // Approximation
  istanbul: ["turkey", "middle east"], // Approximation
  bangkok: ["thailand", "asia"], // Approximation
  greece: ["greece", "santorini"],
  morocco: ["morocco", "africa"],
  maldives: ["maldives", "asia", "indian ocean"],
};

export default function PackagesSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredPackages, setFilteredPackages] = useState<Package[]>(
    allPackages.slice(0, 3)
  ); // Show first 3 by default
  const [showAllPackages, setShowAllPackages] = useState(false);

  const handleFilterClick = (filterId: string) => {
    setActiveFilter(filterId);

    if (filterId === "all") {
      // Show first 3 packages for "All" to match the design
      setFilteredPackages(allPackages.slice(0, 3));
      setShowAllPackages(false);
      return;
    }

    const searchTerms = filterMapping[filterId] || [filterId.toLowerCase()];

    const filtered = allPackages.filter((pkg) => {
      // Check if package matches any of the search terms
      const packageText = `${pkg.title} ${pkg.location} ${pkg.tags.join(
        " "
      )}`.toLowerCase();

      return searchTerms.some(
        (term) =>
          packageText.includes(term.toLowerCase()) ||
          pkg.title.toLowerCase().includes(term.toLowerCase()) ||
          pkg.location.toLowerCase().includes(term.toLowerCase())
      );
    });

    setFilteredPackages(filtered);
    setShowAllPackages(false);
  };

  const handleLoadMore = () => {
    setShowAllPackages(true);
    if (activeFilter === "all") {
      setFilteredPackages(allPackages);
    } else {
      // Already filtered, show all filtered results
    }
  };

  const handleShowLess = () => {
    setShowAllPackages(false);
    if (activeFilter === "all") {
      setFilteredPackages(allPackages.slice(0, 3));
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section
      className={`${styles.packagesSection} section_white__spacing`}
      aria-labelledby="packages-heading"
    >
      <div className="container">
        <SectionTitle
          heading="Featured Destinations"
          subheading="Handpicked travel experiences to the most iconic, breathtaking, and
        exciting locations. Choose your next adventure and start making memories
        today."
          backgroundText="Destination"
        />

        {/* Filter Navigation */}
        <nav
          className={styles.filterNav}
          aria-label="Filter packages by location"
        >
          <ul className={styles.filterList} role="list">
            {filters.map((filter) => (
              <li key={filter.id}>
                <button
                  className={`${styles.filterButton} ${
                    activeFilter === filter.id ? styles.filterButtonActive : ""
                  }`}
                  onClick={() => handleFilterClick(filter.id)}
                  aria-pressed={activeFilter === filter.id}
                  aria-label={`Filter by ${filter.label}`}
                >
                  {filter.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Filter Results Info */}
        {activeFilter !== "all" && (
          <div className={styles.filterResultsInfo}>
            <p>
              Showing {filteredPackages.length} package
              {filteredPackages.length !== 1 ? "s" : ""} for "
              <span className={styles.filterName}>
                {filters.find((f) => f.id === activeFilter)?.label}
              </span>
              "
            </p>
          </div>
        )}

        {/* Packages Grid */}
        <div className={styles.packagesGrid}>
          {filteredPackages.length > 0 ? (
            filteredPackages.map((pkg) => (
              <article
                key={pkg.id}
                className={`${styles.packageCard} ${
                  pkg.popular ? styles.packageCardPopular : ""
                }`}
                aria-labelledby={`package-${pkg.id}-title`}
              >
                {pkg.popular && (
                  <div
                    className={styles.popularBadge}
                    aria-label="Popular package"
                  >
                    Popular
                  </div>
                )}

                <div className={styles.packageHeader}>
                  <h3
                    id={`package-${pkg.id}-title`}
                    className={styles.packageTitle}
                  >
                    {pkg.title},{" "}
                    <span className={styles.packageLocation}>
                      {pkg.location}
                    </span>
                  </h3>
                  <p className={styles.packageDescription}>{pkg.description}</p>
                </div>

                <div className={styles.packageDetails}>
                  <div className={styles.duration}>
                    <CalendarIcon className={styles.icon} />
                    <span>{pkg.duration}</span>
                  </div>

                  <ul className={styles.includesList} role="list">
                    {pkg.includes.map((item, index) => (
                      <li key={index} className={styles.includesItem}>
                        <CalendarIcon
                          className={styles.checkIcon}
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={styles.dateInfo}>
                    <div className={styles.dateItem}>
                      <CalendarIcon className={styles.icon} />
                      <div>
                        <span className={styles.dateLabel}>Travel Dates:</span>
                        <span className={styles.dateValue}>
                          {pkg.travelDates}
                        </span>
                      </div>
                    </div>
                    <div className={styles.dateItem}>
                      <CalendarIcon className={styles.icon} />
                      <div>
                        <span className={styles.dateLabel}>
                          Booking Deadline:
                        </span>
                        <span className={styles.dateValue}>
                          {pkg.bookingDeadline}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.packageFooter}>
                    <div className={styles.price}>
                      <span className={styles.priceLabel}>per person</span>
                      <span className={styles.priceValue}>
                        {formatPrice(pkg.price)}
                      </span>
                    </div>
                    <button
                      className={styles.bookButton}
                      aria-label={`Book ${pkg.title}, ${
                        pkg.location
                      } package for ${formatPrice(pkg.price)}`}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className={styles.noResults}>
              <p>
                No packages found for this destination. Please try another
                filter.
              </p>
            </div>
          )}
        </div>

        {/* Load More / Show Less buttons */}
        {activeFilter === "all" &&
          !showAllPackages &&
          allPackages.length > 3 && (
            <div className={styles.loadMoreContainer}>
              <button
                className={styles.loadMoreButton}
                onClick={handleLoadMore}
              >
                View All Packages ({allPackages.length - 3} more)
              </button>
            </div>
          )}

        {activeFilter === "all" && showAllPackages && (
          <div className={styles.loadMoreContainer}>
            <button className={styles.loadMoreButton} onClick={handleShowLess}>
              Show Less
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
