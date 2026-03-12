"use client";

import { useEffect, useState } from "react";
import styles from "./FloatingWhatsAppButton.module.css";
import { ChatIcon } from "@/assets/icons/icons";
import AppImage from "./AppImage";

const whatsappIcon = "/icons/whatsapp_icon.png";

const FloatingWhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to check scroll position against viewport height
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        // Show button when user has scrolled past 50% of the first viewport
        setIsVisible(scrollY > viewportHeight * 0.5);
      }
    };

    // Initial check
    handleScroll();

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // recalc threshold on resize

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Prefilled message
  const MESSAGE =
    "Hello Task Holidays, I am looking for a customized holiday package. Please connect me with a travel expert to discuss itinerary and pricing.";
  const PHONE_NUMBER = 918826924076;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${encodeURIComponent(MESSAGE)}`;

  return (
    <div
      className={`${styles.whatsapp_button} ${isVisible ? `${styles.visible}` : ""}`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.whatsapp_button__icon} `}
        aria-label="Chat with us on WhatsApp"
      >
        <AppImage
          src={whatsappIcon}
          alt=""
          fill
          className={styles["whatsapp_button__image"]}
          priority={false}
        />
      </a>
      <p className={styles.whatsapp_button__text}>Plan Your Trip on WhatsApp</p>
    </div>
  );
};

export default FloatingWhatsAppButton;
