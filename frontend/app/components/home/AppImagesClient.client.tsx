"use client";

import { CldImage } from "next-cloudinary";
import { useMemo } from "react";

type Props = {
  publicId: string | null; // e.g., "bali/bali_taskholidays_2_tlfcoa"
  alt: string;
  priority?: boolean;
};

/**
 * Remove the Cloudinary suffix (last underscore‑separated part of 6+ alphanumeric chars)
 * from the publicId. Example: "bali/bali_taskholidays_2_tlfcoa" → "bali/bali_taskholidays_2"
 */
function cleanPublicId(publicId: string): string {
  return publicId.replace(/_[a-z0-9]{6,}$/, "");
}

export default function AppImagesClient({ publicId, alt, priority }: Props) {
  const isDev = process.env.NODE_ENV === "development";

  const basePublicId = useMemo(() => {
    if (!publicId) return null;
    return cleanPublicId(publicId);
  }, [publicId]);

  const localSrc = useMemo(() => {
    if (!basePublicId) return null;
    return `/images/destinations/${basePublicId}.jpg`;
  }, [basePublicId]);

  if (!publicId) return null;

  if (isDev) {
    // Local development: use local file
    return (
      <img
        src={localSrc!}
        alt={alt}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    );
  }

  // Production: use Cloudinary with the cleaned publicId
  return (
    <CldImage
      src={basePublicId!} // stripped suffix
      fill
      sizes="(max-width: 768px) 100vw, 33vw"
      alt={alt}
      priority={priority}
    />
  );
}
