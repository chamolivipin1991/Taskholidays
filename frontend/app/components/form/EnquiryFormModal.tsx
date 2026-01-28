"use client";

import styles from "./EnquiryFormModal.module.css";

interface EnquiryPopupProps {
  month: { label: string; value: number };
  year: { label: string; value: number };
  onClose: () => void;
}

const EnquiryFormModal = ({ month, year, onClose }: EnquiryPopupProps) => {
  return (
    <div className={styles.popup}>
      <div className={styles.popup__overlay} onClick={onClose} />

      <div className={styles.popup__content}>
        <button className={styles.popup__close} onClick={onClose}>
          ×
        </button>

        <h2 className={styles.popup__title}>Tell us more about your trip</h2>

        <p className={styles.popup__subtitle}>
          Travel month:{" "}
          <strong>
            {month.label} {year.label}
          </strong>
        </p>

        {/* PART-2 form fields go here */}
      </div>
    </div>
  );
};

export default EnquiryFormModal;
