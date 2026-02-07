"use client";

import Image, { StaticImageData } from "next/image";
import { CldImage } from "next-cloudinary";

type Props = {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  className?: string;
  priority?: boolean;
};

export default function AppImage({
  src,
  alt,
  width,
  height,
  fill,
  sizes,
  className,
  priority,
}: Props) {
  // Local image → Next Image
  if (typeof src !== "string") {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        sizes={sizes}
        className={className}
        priority={priority}
      />
    );
  }

  // Cloudinary image → CldImage
  return (
    <CldImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      sizes={sizes}
      className={className}
      priority={priority}
      quality="auto"
      format="auto"
    />
  );
}
