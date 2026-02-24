"use client";

import Image from "next/image";
import styles from "./AppImagesClient.module.css";

type Props = {
  imagePath: string; // e.g. "ladakh/ladakh_taskholidays_1.jpg"
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
};

export default function AppImagesClient({
  imagePath,
  alt,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 33vw",
  className = "",
}: Props) {
  return (
    <Image
      src={`/images/${imagePath}`}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={`${styles.image} ${className}`}
    />
  );
}
