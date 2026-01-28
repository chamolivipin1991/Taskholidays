import React from "react";

import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  heading: string;
  subheading: string;
  backgroundText?: string;
}

const SectionTitle = ({
  heading,
  subheading,
  backgroundText = "",
}: SectionTitleProps) => {
  return (
    <div className={styles.sectionTitle}>
      <div className={styles.sectionTitle__headingWrapper}>
        <h2 className={styles.sectionTitle__heading}>{heading}</h2>
        <p className={styles.sectionTitle__bgText}>{backgroundText}</p>
      </div>

      <p className={styles.sectionTitle__subheading}>{subheading}</p>
    </div>
  );
};

export default SectionTitle;
