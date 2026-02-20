import React from "react";
import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  heading: string;
  subheading: string;
  backgroundText?: string;
  className?: string; // root div
  headingClassName?: string; // for h2
  subheadingClassName?: string; // for subheading p
  bgTextClassName?: string;
}

const SectionTitle = ({
  heading,
  subheading,
  backgroundText = "",
  className = "",
  headingClassName = "",
  subheadingClassName = "",
  bgTextClassName = "",
}: SectionTitleProps) => {
  return (
    <div className={`${styles.sectionTitle} ${className}`.trim()}>
      <div className={styles.sectionTitle__headingWrapper}>
        <h2
          className={`${styles.sectionTitle__heading} ${headingClassName}`.trim()}
        >
          {heading}
        </h2>
        <p
          className={`${styles.sectionTitle__bgText} ${bgTextClassName}`.trim()}
        >
          {backgroundText}
        </p>
      </div>
      <p
        className={`${styles.sectionTitle__subheading} ${subheadingClassName}`.trim()}
      >
        {subheading}
      </p>
    </div>
  );
};

export default SectionTitle;
