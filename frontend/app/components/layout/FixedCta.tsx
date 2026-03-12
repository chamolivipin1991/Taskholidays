"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowIcon } from "@/assets/icons/icons";
import PlanTripModal from "@/components/form/PlanTripModal";
import { EnquiryFormValues } from "@/components/form/EnquiryForm";
import styles from "./FixedCta.module.css";

const SCROLL_THRESHOLD = 40; // percentage

export default function FixedCta() {
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

  const handleFormSubmit = (data: EnquiryFormValues) => {
    console.log("Form submitted from fixed CTA:", data);
    // Handle API submission
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;

      if (maxScroll <= 0) {
        setIsVisible(false);
        return;
      }

      const scrolledPercent = (currentScrollY / maxScroll) * 100;
      const scrollingUp = currentScrollY < lastScrollY.current;

      // Show only when scrolling up AND scrolled past threshold
      if (scrollingUp && scrolledPercent >= SCROLL_THRESHOLD) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${styles.fixedCta_wrapper} ${
        isVisible ? styles.visible : ""
      }`}
    >
      <PlanTripModal
        onFormSubmit={handleFormSubmit}
        modalTitle="Plan Your Perfect Trip"
        modalSize="large"
        variant="dark"
        text="Plan Your Trip"
        className={styles.fixedCta}
        icon={
          <ArrowIcon
            className={styles.ctaIcon}
            fill="var(--color-text-inverse)"
            size={24}
          />
        }
      />
    </div>
  );
}
