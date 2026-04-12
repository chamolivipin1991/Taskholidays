import styles from "./PackageHero.module.css";
import { formatPrice } from "@/utils/formatPrice";

interface Props {
  title: string;
  destination: string;
  duration: string;
  showPopular?: boolean;
  price: number;
}

export default function PackageHero({
  title,
  destination,
  duration,
  showPopular,
  price,
}: Props) {
  return (
    <div className={styles.package_hero}>
      <h1 className={styles.package_hero__title}>{title}</h1>

      <div className={styles.package_hero__tags}>
        <span
          className={`${styles.package_hero__tag} ${styles.package_hero__tag__destination}`}
        >
          {destination}
        </span>

        <span
          className={`${styles.package_hero__tag} ${styles.package_hero__tag__duration}`}
        >
          {duration}
        </span>

        {showPopular && (
          <span
            className={`${styles.package_hero__tag} ${styles.package_hero__tag__popular}`}
          >
            Popular
          </span>
        )}
      </div>
      <div className={styles.package_price__wrapper}>
        <span>Package Price :</span>
        <span className={styles.package_price__card}>{formatPrice(price)}</span>
      </div>
    </div>
  );
}
