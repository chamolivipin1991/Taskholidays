"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./PackageGallery.module.css";
import AppImagesClient from "@/components/home/AppImagesClient.client";
import { AppDotsIcon, ArrowIcon, CloseIcon } from "@/assets/icons/icons";

interface Props {
  publicIds: string[];
  alt?: string;
}

export default function PackageGallery({
  publicIds,
  alt = "Package image",
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % publicIds.length);
  }, [publicIds.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + publicIds.length) % publicIds.length);
  }, [publicIds.length]);

  useEffect(() => {
    if (!isModalOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, goToNext, goToPrev]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!publicIds || publicIds.length === 0) return null;

  const sideImages = publicIds.slice(0, 5);

  return (
    <>
      <div className={styles.gallery}>
        <div className={styles.gallery__grid}>
          {sideImages.map((publicId, index) => (
            <div
              key={index}
              className={`${styles.gallery__item} ${styles[`gallery__item___position${index}`]}`}
              style={{ gridArea: `item${index}` }}
              onClick={() => openModal(index)}
            >
              <AppImagesClient
                publicId={publicId}
                alt={`${alt} ${index + 1}`}
                priority={index === 0}
              />
            </div>
          ))}

          {publicIds.length > 5 && (
            <button
              className={styles.gallery__overlay}
              onClick={() => openModal(5)}
            >
              <AppDotsIcon fill="var( --color-text-primary)" size={26} />
              {/* {publicIds.length - 5} */}
              Show All Photos
            </button>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.gallery__modalOverlay} onClick={closeModal}>
          <div
            className={styles.gallery__modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.gallery__modalClose}
              onClick={closeModal}
              aria-label="Close"
            >
              <CloseIcon fill="var(--color-text-inverse)" size={26} />
            </button>
            <button
              className={`${styles.gallery__modalNav} ${styles.gallery__modalNav___prev}`}
              onClick={goToPrev}
              aria-label="Previous image"
            >
              <ArrowIcon fill="var(--color-text-inverse)" size={40} />
            </button>
            <button
              className={`${styles.gallery__modalNav} ${styles.gallery__modalNav___next}`}
              onClick={goToNext}
              aria-label="Next image"
            >
              <ArrowIcon fill="var(--color-text-inverse)" size={40} />
            </button>
            <div className={styles.gallery__modalImageWrapper}>
              <AppImagesClient
                publicId={publicIds[currentIndex]}
                alt={`${alt} ${currentIndex + 1}`}
                priority
              />
            </div>
            <div className={styles.gallery__modalCounter}>
              {currentIndex + 1} / {publicIds.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
