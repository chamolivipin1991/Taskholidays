import Link from "next/link";

import styles from "./Footer.module.css";

import FooterTextAnimation from "@/components/shared/FooterTextAnimation";

import AppImage from "@/components/shared/AppImage";

import brandLogoImg from "@/assets/images/taskholiday_logo.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Top */}
        <div className={styles.footer__top}>
          {/* Brand */}
          <div className={styles.footer__brand}>
            <div className={styles.footer__logo}>
              <Link href="/" aria-label="Go to homepage">
                <AppImage src={brandLogoImg} alt="Task Holidays" width={220} />
              </Link>
            </div>
            <p className={styles.footer__description}>
              Explore the world's hidden treasures, waiting to be discovered
              with us.
            </p>
          </div>

          {/* Links */}
          <div className={styles.footer__linksWrapper}>
            <div className={styles.footer__linksColumn}>
              <h4 className={styles.footer__heading}>Quick Links</h4>
              <ul className={styles.footer__list}>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Packages</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Plan Your Trip</a>
                </li>
              </ul>
            </div>

            <div className={styles.footer__linksColumn}>
              <h4 className={styles.footer__heading}>Destinations</h4>
              <ul className={styles.footer__list}>
                <li>
                  <a href="#">Exotic Beaches</a>
                </li>
                <li>
                  <a href="#">Cultural Capitals</a>
                </li>
                <li>
                  <a href="#">Adventure Escapes</a>
                </li>
                <li>
                  <a href="#">Family Vacations</a>
                </li>
                <li>
                  <a href="#">Luxury Travel</a>
                </li>
              </ul>
            </div>

            <div className={styles.footer__linksColumn}>
              <h4 className={styles.footer__heading}>Support</h4>
              <ul className={styles.footer__list}>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Anti-discrimination</a>
                </li>
                <li>
                  <a href="#">Disability Support</a>
                </li>
                <li>
                  <a href="#">Cancellation Options</a>
                </li>
                <li>
                  <a href="#">Report Neighborhood Concern</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.footer__divider} />

        {/* Bottom */}
        <div className={styles.footer__bottom}>
          <p className={styles.footer__copyright}>
            &copy; {new Date().getFullYear()} Task Holidays. All Rights Reserved
          </p>

          <div className={styles.footer__bottomLinks}>
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Background Word */}
      <FooterTextAnimation />
    </footer>
  );
};

export default Footer;
