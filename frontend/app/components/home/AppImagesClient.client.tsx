"use client";

import { CldImage } from "next-cloudinary";
import { useMemo } from "react";

type Props = {
  publicId: string | null; // e.g., "bali/bali_taskholidays_2_tlfcoa"
  alt: string;
  priority?: boolean;
};

/**
 * Remove the Cloudinary suffix (last underscore‑separated part) from the publicId.
 * Example: "bali/bali_taskholidays_2_tlfcoa" → "bali/bali_taskholidays_2"
 */
// function cleanPublicIdForLocal(publicId: string): string {
//   return publicId.replace(/_[^_/]+$/, "");
// }
function cleanPublicIdForLocal(publicId: string): string {
  // Only remove Cloudinary hash (6+ random chars at end)
  return publicId.replace(/_[a-z0-9]{6,}$/, "");
}

export default function AppImagesClient({ publicId, alt, priority }: Props) {
  const isDev = process.env.NODE_ENV === "development";

  const localSrc = useMemo(() => {
    if (!publicId) return null;
    const cleanId = cleanPublicIdForLocal(publicId);
    // Assume all local images are .jpg – adjust if you have mixed extensions
    return `/images/destinations/${cleanId}.jpg`;
  }, [publicId]);

  if (!publicId) return null;

  if (isDev) {
    // Local development: use a standard img tag with fill behaviour
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

  // Production / staging: use Cloudinary (original publicId with suffix)
  return (
    <CldImage
      src={publicId}
      fill
      sizes="(max-width: 768px) 100vw, 33vw"
      alt={alt}
      priority={priority}
    />
  );
}
