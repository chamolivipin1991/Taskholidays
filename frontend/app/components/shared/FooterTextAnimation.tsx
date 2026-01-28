"use client";
import React from "react";
import { useEffect, useState } from "react";
import styles from "./FooterTextAnimation.module.css";

const BACKGROUND_WORDS = [
  "ADVENTURE",
  "EXPLORE",
  "JOURNEY",
  "DISCOVER",
  "TRAVEL",
];

const ANIMATION_DURATION = 4000;

export default function FooterTextAnimation() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setWordIndex((prev) =>
          prev === BACKGROUND_WORDS.length - 1 ? 0 : prev + 1
        );
        setIsAnimating(false);
      }, 900); // must match animation duration
    }, ANIMATION_DURATION);

    return () => clearInterval(interval);
  }, []);

  const currentWord = BACKGROUND_WORDS[wordIndex];
  const nextWord = BACKGROUND_WORDS[(wordIndex + 1) % BACKGROUND_WORDS.length];

  return (
    <div className={styles.footer__backgroundText}>
      <span className={styles.footer__slot}>
        {/* Current word */}
        <span className={styles.footer__word}>
          {currentWord.split("").map((char, index) => (
            <span
              key={`current-${index}`}
              className={`${styles.footer__char} ${
                isAnimating ? styles["footer__char--exit"] : ""
              }`}
              style={{ ["--char-delay" as any]: `${index * 60}ms` }}
            >
              {char}
            </span>
          ))}
        </span>

        {/* Next word */}
        <span className={styles.footer__word}>
          {nextWord.split("").map((char, index) => (
            <span
              key={`next-${index}`}
              className={`${styles.footer__char} ${
                isAnimating ? styles["footer__char--enter"] : ""
              }`}
              style={{ ["--char-delay" as any]: `${index * 60}ms` }}
            >
              {char}
            </span>
          ))}
        </span>
      </span>
    </div>
  );
}
