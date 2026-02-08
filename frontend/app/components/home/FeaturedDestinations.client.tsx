"use client";

import { CldImage } from "next-cloudinary";

type Props = {
  publicId: string | null;
  alt: string;
  priority?: boolean;
};

export default function FeaturedDestinationImage({
  publicId,
  alt,
  priority,
}: Props) {
  if (!publicId) return null;

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
