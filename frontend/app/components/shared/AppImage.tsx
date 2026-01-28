import Image, { ImageProps } from "next/image";
import type { StaticImageData } from "next/image";
import React from "react";

interface AppImageProps extends Omit<ImageProps, "src" | "alt"> {
  src: string | StaticImageData;
  alt: string;
  wrapperClassName?: string;
}

const AppImage: React.FC<AppImageProps> = ({
  src,
  alt,
  wrapperClassName = "",
  ...imageProps
}) => {
  return (
    <div className={wrapperClassName}>
      <Image src={src} alt={alt} {...imageProps} />
    </div>
  );
};

export default AppImage;
