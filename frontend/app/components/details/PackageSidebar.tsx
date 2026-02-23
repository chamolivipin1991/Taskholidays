"use client";
import PlanTripModal from "@/components/form/PlanTripModal";
import styles from "./PackageSidebar.module.css";
import { EnquiryFormValues } from "@/components/form/EnquiryForm";
import {
  ArrowIcon,
  BurgerMenuIcon,
  CloseIcon,
  CheckIcon,
} from "@/assets/icons/icons";

import Button from "@/components/form/Button";

export default function PackageSidebar({ includes, seasons, tags }: any) {
  const handleFormSubmit = (data: EnquiryFormValues) => {
    console.log("Form submitted from header:", data);
    // Handle API submission
  };

  return (
    <div className="common__container">
      <div className={styles.sidebar__card}>
        <h3 className="common__title">Package Includes</h3>

        <ul className={styles.sidebar__list}>
          {includes.map((item: string, i: number) => (
            <li key={i} className={styles.sidebar__item}>
              <CheckIcon fill="var( --color-text-primary)" size={20} /> {item}
            </li>
          ))}
        </ul>
        {/* Desktop CTA – Plan Your Trip */}
        <PlanTripModal
          onFormSubmit={handleFormSubmit}
          modalTitle="Plan Your Perfect Trip"
          modalSize="large"
          variant="dark"
          text="Plan Your Trip"
          className={styles.header__cta}
          icon={
            <ArrowIcon
              className={styles.header__ctaIcon}
              fill="var(--color-text-inverse)"
              size={24}
            />
          }
          // No onFormSubmit prop – modal handles its own submission
        >
          <Button
            variant="darkBorderedTheme"
            text="Send Enquiry"
            className={`${styles.sidebar__btn} ${styles.sidebar__btn_outline}`}
            icon={
              <ArrowIcon
                className={styles.header__ctaIcon}
                fill="var(  --color-brand-primary)"
                size={24}
              />
            }
          />
        </PlanTripModal>
      </div>

      <div className="{styles.sidebar__card}">
        <div className="common__container">
          <h4 className="common__title">Best Season</h4>

          <div className={styles.sidebar__tags}>
            {seasons?.map((season: string, i: number) => (
              <span key={i} className={styles.sidebar__tag}>
                {season}
              </span>
            ))}
          </div>
        </div>

        {tags?.length > 0 && (
          <div className="common__container">
            <h4 className="common__title">Tags</h4>
            <div className={styles.sidebar__tags}>
              {tags.map((tag: string, i: number) => (
                <span
                  key={i}
                  className={`${styles.sidebar__tag} ${styles.sidebar__tag_purple}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
