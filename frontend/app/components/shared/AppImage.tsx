"use client";

import Image, { StaticImageData } from "next/image";

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
