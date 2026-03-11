"use client";

import React, {
  useState,
  useEffect,
  ReactNode,
  useCallback,
  useRef,
} from "react";
import { createPortal } from "react-dom";
import styles from "./SlidingModalPanel.module.css";
import { TermsIcon, CloseIcon } from "@/assets/icons/icons";

interface SlidingModalPanelProps {
  children: ReactNode;
  buttonIcon?: ReactNode;
  buttonAriaLabel?: string;
  panelTitle?: string;
  /**
   * Percentage of the viewport height that must be scrolled before the button appears.
   * For example, 50 means the button becomes visible after scrolling 50% of the window height.
   * Set to 0 to always show the button (default).
   */
  scrollThreshold?: number; // 0–100, default 0
}

const SlidingModalPanel: React.FC<SlidingModalPanelProps> = ({
  children,
  buttonIcon = <TermsIcon size={30} fill="white" />,
  buttonAriaLabel = "Open panel",
  panelTitle,
  scrollThreshold = 0,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(scrollThreshold === 0);

  const thresholdRef = useRef(scrollThreshold);
  useEffect(() => {
    thresholdRef.current = scrollThreshold;
  }, [scrollThreshold]);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Scroll detection – now based on viewport height, like FloatingWhatsAppButton
  useEffect(() => {
    if (scrollThreshold === 0) {
      setIsButtonVisible(true);
      return;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      // Convert threshold percentage to a multiplier (e.g., 50 → 0.5)
      const thresholdMultiplier = thresholdRef.current / 100;
      setIsButtonVisible(scrollY > viewportHeight * thresholdMultiplier);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [scrollThreshold]);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  // Prevent background scroll when panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // The button is always rendered, but its visibility is controlled via CSS class
  const button = (
    <div
      className={`${styles.floating_button} ${
        isButtonVisible ? styles.visible : ""
      }`}
    >
      <button
        className={styles.floating_button__icon}
        onClick={handleOpen}
        aria-label={buttonAriaLabel}
        aria-expanded={isOpen}
      >
        {buttonIcon}
      </button>
      <p className={styles.floating_button__text}>Terms and conditions</p>
    </div>
  );

  const panel = (
    <>
      <div
        className={`${styles.panel_overlay} ${isOpen ? styles.open : ""}`}
        onClick={handleClose}
        aria-hidden="true"
      />
      <div
        className={`${styles.panel} ${isOpen ? styles.open : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={panelTitle || buttonAriaLabel}
      >
        <button
          className={styles.close_button}
          onClick={handleClose}
          aria-label="Close"
        >
          <CloseIcon fill="var(--color-text-primary)" size={26} />
        </button>
        <div className={styles.panel_content}>{children}</div>
      </div>
    </>
  );

  return (
    <>
      {button}
      {mounted && createPortal(panel, document.body)}
    </>
  );
};

export default SlidingModalPanel;
