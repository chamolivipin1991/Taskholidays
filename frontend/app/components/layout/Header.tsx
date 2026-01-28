"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowIcon } from "@/assets/icons/icons";
import brandLogoImg from "@/assets/images/taskholiday_logo.png";
import AppImage from "@/components/shared/AppImage";
import Button from "@/components/form/Button";

import styles from "./Header.module.css";

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
          <Button
            variant="dark"
            text="Plan Your Trip"
            onClick={() => handleScroll("plan-trip")}
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
            text="☰"
            onClick={() => setIsOpen(true)}
            className={styles.header__menuButton}
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
          text="✕"
          onClick={() => setIsOpen(false)}
          className={styles.header__close}
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
