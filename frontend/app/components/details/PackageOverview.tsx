import styles from "./PackageOverview.module.css";

export default function PackageOverview({
  description,
}: {
  description: string;
}) {
  return (
    <div className="common__container">
      <h2 className="common__title">Package Overview</h2>
      <p className={styles.package_overview__description}>{description}</p>
    </div>
  );
}
