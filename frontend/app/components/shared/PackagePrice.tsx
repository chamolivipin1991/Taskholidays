import React from "react";
import { formatPrice } from "@/utils/formatPrice";

import styles from "./PackagePrice.module.css";

export default function PackagePrice({ price }: { price: number }) {
  return (
    <span className={styles.packagePrice_wrapper}>
      {formatPrice(price)}{" "}
      <span className={styles.packagePrice_perPerson}>/ per person</span>
      <span className={styles.packagePrice_includes}>
        Includes Taxes & Fees
      </span>
      <span className={styles.packagePrice_tnc}>
        * Prices may vary as per T&Cs.
      </span>
    </span>
  );
}
