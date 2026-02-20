import styles from "./PackageOverview.module.css";

export default function PackageOverview({
  description,
}: {
  description: string;
}) {
  return (
    <div className={styles.package_overview}>
      <h2 className={styles.package_overview__title}>Package Overview</h2>
      <p className={styles.package_overview__description}>{description}</p>
    </div>
  );
}
