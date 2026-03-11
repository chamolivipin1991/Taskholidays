import Link from "next/link";

import styles from "./Footer.module.css";

import FooterTextAnimation from "@/components/shared/FooterTextAnimation";

import AppImage from "@/components/shared/AppImage";

import brandLogoImg from "@/assets/images/taskholiday_logo.png";

import { LocationIcon, MailIcon, CallIcon } from "@/assets/icons/icons";
import SocialConnect from "@/components/shared/SocialConnect";

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
              {/* <h4 className={styles.footer__heading}>Quick Links</h4> */}
              <ul className={styles.footer__list}>
                <li>
                  <Link href="/packages/andaman">Andaman</Link>
                </li>
                <li>
                  <Link href="/packages/kerala">Kerala</Link>
                </li>
                <li>
                  <Link href="/packages/rajasthan">Rajasthan</Link>
                </li>
                <li>
                  <Link href="/packages/ladakh">Ladakh</Link>
                </li>
                <li>
                  <Link href="/packages/bali">Bali</Link>
                </li>
                <li>
                  <Link href="/packages/dubai">Dubai</Link>
                </li>
              </ul>
            </div>

            <div className={styles.footer__linksColumn}>
              {/* <h4 className={styles.footer__heading}>Support</h4> */}
              <h6 className={styles.getintouch_heading}>
                Get in touch with us
              </h6>
              <p className={styles.getintouch_values}>
                <span className={styles.getintouch_valuesIcon}>
                  <LocationIcon fill="var(--color-bg-primary)" size={34} />
                </span>{" "}
                Gurugram, Haryana, India
              </p>
              <p className={styles.getintouch_values}>
                <span className={styles.getintouch_valuesIcon}>
                  <MailIcon fill="var(--color-bg-primary)" size={34} />
                </span>{" "}
                example@gmail.com
              </p>
              <p className={styles.getintouch_values}>
                <span className={styles.getintouch_valuesIcon}>
                  <CallIcon fill="var(--color-bg-primary)" size={34} />
                </span>{" "}
                8888888888
              </p>

              <SocialConnect />
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
            <Link href="/about" aria-label="tnc">
              About Us
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
