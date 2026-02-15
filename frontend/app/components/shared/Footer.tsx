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
                  <Link href="/packages/andaman">Andaman</Link>
                </li>
                <li>
                  <Link href="/packages/kerala">Kerala</Link>
                </li>
              </ul>
            </div>

            <div className={styles.footer__linksColumn}>
              <h4 className={styles.footer__heading}>Destinations</h4>
              <ul className={styles.footer__list}>
                <li>
                  <Link href="/packages/bali">Bali</Link>
                </li>
                <li>
                  <Link href="/packages/dubai">Dubai</Link>
                </li>
              </ul>
            </div>

            <div className={styles.footer__linksColumn}>
              <h4 className={styles.footer__heading}>Support</h4>
              <ul className={styles.footer__list}>
                <li>
                  <Link href="/packages/rajasthan">Rajasthan</Link>
                </li>
                <li>
                  <Link href="/packages/ladakh">Ladakh</Link>
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
            <Link href="/" aria-label="home">
              Home
            </Link>
            <span>|</span>
            <Link href="/tnc" aria-label="tnc">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Background Word */}
      <FooterTextAnimation />
    </footer>
  );
};

export default Footer;
