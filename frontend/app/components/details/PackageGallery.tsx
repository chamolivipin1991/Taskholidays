// components/details/PackageGallery.tsx
"use client";

import styles from "./PackageGallery.module.css";
import AppImagesClient from "@/components/home/AppImagesClient.client";

interface Props {
  publicIds: string[]; // array of Cloudinary public IDs
  alt?: string;
}

export default function PackageGallery({
  publicIds,
  alt = "Package image",
}: Props) {
  if (!publicIds || publicIds.length === 0) return null;

  const mainImage = publicIds[0];
  const sideImages = publicIds.slice(1, 5); // show up to 4 side images

  return (
    <div className={styles.gallery}>
      <div className={styles.gallery__grid}>
        {/* Main Large Image */}
        <div className={styles.gallery__main}>
          <AppImagesClient
            publicId={mainImage}
            alt={alt}
            priority={true} // main image can be priority
          />
        </div>

        {/* Right 4 Grid Images */}
        <div className={styles.gallery__side}>
          {sideImages.map((publicId, index) => (
            <div key={index} className={styles.gallery__side_item}>
              <AppImagesClient
                publicId={publicId}
                alt={`${alt} ${index + 1}`}
                priority={false}
              />
            </div>
          ))}

          {publicIds.length > 5 && (
            <div className={styles.gallery__overlay}>
              +{publicIds.length - 5} more
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
