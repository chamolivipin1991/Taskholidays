"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowIcon, BurgerMenuIcon, CloseIcon } from "@/assets/icons/icons";
import brandLogoImg from "@/assets/images/taskholiday_logo.png";
import AppImage from "@/components/shared/AppImage";
import Button, { ButtonVariant } from "@/components/form/Button";
import PlanTripModal from "@/components/form/PlanTripModal";
import styles from "./Header.module.css";

import { EnquiryFormValues } from "@/components/form/EnquiryForm";

/* ---------- TYPES (Serializable only) ---------- */
export interface HeaderNavItem {
  /** Display text */
  text: string;
  /** Optional href – renders as Next.js Link */
  href?: string;
  /** Optional element ID to scroll to (overrides href if both are present) */
  id?: string;
  /** Button variant – defaults to "darkLine" */
  variant?: ButtonVariant;
}

export interface HeaderProps {
  /** Navigation items for desktop & mobile drawer */
  navItems?: HeaderNavItem[];
  /** Optional custom logo component/element */
  logo?: React.ReactNode;
}

/* ---------- COMPONENT ---------- */
const Header = ({
  navItems,
  logo = (
    <Link href="/" aria-label="Go to homepage">
      <AppImage src={brandLogoImg} alt="Task Holidays" width={220} />
    </Link>
  ),
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Default navigation items (used when no navItems prop is provided)
  const defaultNavItems: HeaderNavItem[] = [
    { text: "Destinations", id: "featuredDestinations" },
    { text: "Packages", id: "packagesSection" },
  ];

  const items = navItems ?? defaultNavItems;

  // Smooth scroll to element by ID
  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Renders a single navigation item
  const renderNavItem = (
    item: HeaderNavItem,
    variant: ButtonVariant = "darkLine",
  ) => {
    const { text, href, id } = item;
    const buttonVariant = item.variant ?? variant;

    // 1. If ID is provided → scroll action
    if (id) {
      return (
        <Button
          key={text}
          variant={buttonVariant}
          text={text}
          onClick={() => handleScrollTo(id)}
        />
      );
    }

    // 2. If href is provided → Next.js Link
    if (href) {
      return (
        <Link key={text} href={href} passHref legacyBehavior>
          <Button variant={buttonVariant} text={text} />
        </Link>
      );
    }

    // 3. Fallback (should never happen) – render a disabled-looking button
    return <Button key={text} variant={buttonVariant} text={text} disabled />;
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
          <div className={styles.header__logo}>{logo}</div>

          {/* Desktop Navigation */}
          <nav className={styles.header__nav}>
            {items.map((item) => renderNavItem(item, "darkLine"))}
          </nav>

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
          {/* All navigation items (reuse same render logic) */}
          {items.map((item) => renderNavItem(item, "darkLine"))}

          {/* Dedicated CTA inside drawer */}
          <Button
            variant="dark"
            text="Plan Your Trip"
            onClick={() => handleScrollTo("plan-trip")}
            className={styles.header__drawerCta}
            icon={<span>→</span>}
          />
        </nav>
      </aside>
    </>
  );
};

export default Header;
