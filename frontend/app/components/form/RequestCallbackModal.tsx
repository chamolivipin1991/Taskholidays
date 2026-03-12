"use client";

import React, { useEffect, useState, useRef } from "react";
import AppModal from "@/components/shared/AppModal";
import RequestCallBack from "./RequestCallBack";
import FormSubmitted from "@/components/form/FormSubmitted";
import styles from "./RequestCallbackModal.module.css";

const COOLDOWN_KEY = "requestCallbackLastClosed";
const COOLDOWN_MS = 60 * 60 * 1000; // 1 hour
const SUCCESS_DISPLAY_MS = 4000; // 2 seconds

export default function RequestCallbackModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<"form" | "success">("form");
  const [cooldownActive, setCooldownActive] = useState(false);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Check sessionStorage for last closed time on mount
  useEffect(() => {
    const stored = sessionStorage.getItem(COOLDOWN_KEY);
    if (stored) {
      const lastClosed = parseInt(stored, 10);
      const now = Date.now();
      if (now - lastClosed < COOLDOWN_MS) {
        setCooldownActive(true);
        return;
      }
    }
    setCooldownActive(false);
  }, []);

  // Scroll listener – only active if cooldown is not active and modal not already open
  useEffect(() => {
    if (cooldownActive) return;

    const handleScroll = () => {
      if (isOpen) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      if (maxScroll <= 0) return;

      const scrolledPercent = (scrollY / maxScroll) * 100;
      if (scrolledPercent >= 70) {
        setIsOpen(true);
        setStep("form"); // ensure we start with form
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // check initial scroll position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [cooldownActive, isOpen]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const handleFormSuccess = () => {
    setStep("success");
    // Auto-close after success delay
    closeTimerRef.current = setTimeout(() => {
      handleClose();
    }, SUCCESS_DISPLAY_MS);
  };

  const handleClose = () => {
    setIsOpen(false);
    setStep("form"); // reset for next open
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    // Store close timestamp in sessionStorage
    sessionStorage.setItem(COOLDOWN_KEY, Date.now().toString());
    setCooldownActive(true);
  };

  const handleManualClose = () => {
    // Called when user clicks X or backdrop
    handleClose();
  };

  return (
    <AppModal
      isOpen={isOpen}
      onClose={handleManualClose}
      title={"Request a Callback"} // hide title on success
      size="small"
      closeOnBackdropClick
      showCloseButton={true} // hide close button on success (user must wait or auto-close)
    >
      <div className={styles.modalContent}>
        {step === "form" ? (
          <>
            <p className="modal_notification">
              Leave your number and we'll call you back shortly.
            </p>
            <RequestCallBack onSuccess={handleFormSuccess} />
          </>
        ) : (
          <FormSubmitted
            heading="Thank You!"
            subheading="We'll call you back shortly."
          />
        )}
      </div>
    </AppModal>
  );
}
