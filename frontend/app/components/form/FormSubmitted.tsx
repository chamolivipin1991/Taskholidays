"use client";

import React from "react";
import styles from "./FormSubmitted.module.css";

import { CheckIcon } from "@/assets/icons/icons";

export interface FormSubmittedProps {
  heading?: string;
  subheading?: string;
}

const FormSubmitted: React.FC<FormSubmittedProps> = ({
  heading = "Thank You!",
  subheading = "Your enquiry has been submitted successfully. We'll get back to you soon.",
}) => {
  return (
    <div className={styles.form_submitted}>
      <div className={styles.form_submitted__icon}>
        <CheckIcon fill="var( --color-bg-primary)" size={60} />
      </div>
      <h2 className={styles.form_submitted__heading}>{heading}</h2>
      <p className={styles.form_submitted__subheading}>{subheading}</p>
    </div>
  );
};

export default FormSubmitted;
