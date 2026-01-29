"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowIcon, BurgerMenuIcon, CloseIcon } from "@/assets/icons/icons";
import brandLogoImg from "@/assets/images/taskholiday_logo.png";
import AppImage from "@/components/shared/AppImage";
import Button from "@/components/form/Button";

import styles from "./Header.module.css";
import PlanTripModal from "@/components/form/PlanTripModal";

import { EnquiryFormValues } from "@/components/form/EnquiryForm";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    setIsOpen(false);

    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleFormSubmit = (data: EnquiryFormValues) => {
    console.log("Form submitted from header:", data);
    // Handle API submission
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__container}>
          {/* Logo */}
          <div className={styles.header__logo}>
            <Link href="/" aria-label="Go to homepage">
              <AppImage src={brandLogoImg} alt="Task Holidays" width={220} />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className={styles.header__nav}>
            <Button
              variant="darkLine"
              text="Destinations"
              onClick={() => handleScroll("featuredDestinations")}
            />
            <Button
              variant="darkLine"
              text="Packages"
              onClick={() => handleScroll("packagesSection")}
            />
          </nav>

          {/* CTA */}
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
          />

          {/* Mobile Menu Button */}
          <Button
            variant="simple"
            text=""
            onClick={() => setIsOpen(true)}
            className={styles.header__menuButton}
            icon={
              <BurgerMenuIcon
                className={styles.header__ctaIcon}
                fill="var(--color-brand-primary)"
                size={48}
              />
            }
          />
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`${styles.header__overlay} ${
          isOpen ? styles["header__overlay--visible"] : ""
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Drawer */}
      <aside
        className={`${styles.header__drawer} ${
          isOpen ? styles["header__drawer--open"] : ""
        }`}
      >
        <Button
          variant="simple"
          text=""
          onClick={() => setIsOpen(false)}
          className={styles.header__close}
          icon={
            <CloseIcon
              className={styles.header__ctaIcon}
              fill="var(--color-brand-primary)"
              size={48}
            />
          }
        />

        <nav className={styles.header__drawerNav}>
          <Button
            variant="darkLine"
            text="Home"
            onClick={() => handleScroll("home")}
          />
          <Button
            variant="darkLine"
            text="Destination"
            onClick={() => handleScroll("destination")}
          />
          <Button
            variant="darkLine"
            text="Packages"
            onClick={() => handleScroll("packages")}
          />
          <Button
            variant="darkLine"
            text="Contact"
            onClick={() => handleScroll("contact")}
          />
          <Button
            variant="dark"
            text="Plan Your Trip"
            onClick={() => handleScroll("plan-trip")}
            className={styles.header__drawerCta}
            icon={<span>→</span>}
          />
        </nav>
      </aside>
    </>
  );
};

export default Header;
