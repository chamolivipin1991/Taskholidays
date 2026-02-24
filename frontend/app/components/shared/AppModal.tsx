"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./AppModal.module.css";

interface AppModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  showCloseButton?: boolean;
  closeOnBackdropClick?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
}

const AppModal: React.FC<AppModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  showCloseButton = true,
  closeOnBackdropClick = true,
  size = "medium",
  className = "",
}) => {
  const [mounted, setMounted] = useState(false);

  // Prevent SSR issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle ESC key + body scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  const modalContent = (
    <>
      {/* Backdrop */}
      <div className={styles.modal__backdrop} onClick={handleBackdropClick} />

      {/* Modal Wrapper */}
      <div className={styles.modal} role="dialog" aria-modal="true">
        <div
          className={`${styles.modal__container} ${
            styles[`modal__container--${size}`]
          } ${className}`}
        >
          <div
            className={styles.modal__content}
            onClick={(e) => e.stopPropagation()}
          >
            {(title || showCloseButton) && (
              <div className={styles.modal__header}>
                {title && <h2 className={styles.modal__title}>{title}</h2>}

                {showCloseButton && (
                  <button
                    type="button"
                    className={styles.modal__close}
                    onClick={onClose}
                    aria-label="Close modal"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M18 6L6 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6 6L18 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                )}
              </div>
            )}

            <div className={styles.modal__body}>{children}</div>
          </div>
        </div>
      </div>
    </>
  );

  return createPortal(modalContent, document.body);
};

export default AppModal;
