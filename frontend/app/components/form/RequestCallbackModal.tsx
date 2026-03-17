"use client";

import React, { useEffect, useState, useRef } from "react";
import AppModal from "@/components/shared/AppModal";
import RequestCallBack from "./RequestCallBack";
import FormSubmitted from "@/components/form/FormSubmitted";
import styles from "./RequestCallbackModal.module.css";

const COOLDOWN_KEY = "requestCallbackLastClosed";
const COOLDOWN_MS = 24 * 60 * 60 * 1000; // 24 hours
const TRIGGER_DELAY_MS = 60 * 1000; // 1 minute
const SUCCESS_DISPLAY_MS = 4000; // 4 seconds

export default function RequestCallbackModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<"form" | "success">("form");
  const [cooldownActive, setCooldownActive] = useState(false);
  const openTimerRef = useRef<NodeJS.Timeout | null>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Check localStorage for last closed time on mount
  useEffect(() => {
    const stored = localStorage.getItem(COOLDOWN_KEY);
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

  // Timer to open modal after 1 minute if cooldown is inactive and modal not open
  useEffect(() => {
    if (cooldownActive || isOpen) return;

    openTimerRef.current = setTimeout(() => {
      setIsOpen(true);
      setStep("form");
    }, TRIGGER_DELAY_MS);

    return () => {
      if (openTimerRef.current) {
        clearTimeout(openTimerRef.current);
        openTimerRef.current = null;
      }
    };
  }, [cooldownActive, isOpen]);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (openTimerRef.current) clearTimeout(openTimerRef.current);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const handleFormSuccess = () => {
    setStep("success");
    closeTimerRef.current = setTimeout(() => {
      handleClose();
    }, SUCCESS_DISPLAY_MS);
  };

  const handleClose = () => {
    setIsOpen(false);
    setStep("form");
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    // Store close timestamp in localStorage
    localStorage.setItem(COOLDOWN_KEY, Date.now().toString());
    setCooldownActive(true);
  };

  const handleManualClose = () => {
    handleClose();
  };

  return (
    <AppModal
      isOpen={isOpen}
      onClose={handleManualClose}
      title="Request a Callback"
      size="small"
      closeOnBackdropClick
      showCloseButton={true}
    >
      <div className={styles.modalContent}>
        {step === "form" ? (
          <>
            <p className="modal_notification">
              Share your phone number and preferred destination, and our travel
              expert will call you shortly.
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
