import React, { useEffect } from "react";
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
  // Handle ESC key press to close modal
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    // Prevent body scroll when modal is open
    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Don't render anything if modal is not open
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop/Overlay */}
      <div
        className={styles.modal__backdrop}
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className={styles.modal} role="dialog" aria-modal="true">
        <div
          className={`${styles.modal__container} ${styles[`modal__container--${size}`]} ${className}`}
          onClick={handleBackdropClick}
        >
          {/* Modal Content */}
          <div
            className={styles.modal__content}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
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
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 6L6 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 6L18 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                )}
              </div>
            )}

            {/* Modal Body */}
            <div className={styles.modal__body}>{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppModal;
