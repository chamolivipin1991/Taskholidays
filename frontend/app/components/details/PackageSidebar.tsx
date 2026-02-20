import styles from "./PackageSidebar.module.css";

export default function PackageSidebar({ includes, seasons, tags }: any) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__card}>
        <h3 className={styles.sidebar__title}>Package Includes</h3>

        <ul className={styles.sidebar__list}>
          {includes.map((item: string, i: number) => (
            <li key={i} className={styles.sidebar__item}>
              ✓ {item}
            </li>
          ))}
        </ul>

        <button
          className={`${styles.sidebar__btn} ${styles.sidebar__btn_primary}`}
        >
          Book Now
        </button>

        <button
          className={`${styles.sidebar__btn} ${styles.sidebar__btn_outline}`}
        >
          Send Enquiry
        </button>
      </div>

      <div className={styles.sidebar__card}>
        <h4 className={styles.sidebar__sub_title}>Best Season</h4>

        <div className={styles.sidebar__tags}>
          {seasons?.map((season: string, i: number) => (
            <span key={i} className={styles.sidebar__tag}>
              {season}
            </span>
          ))}
        </div>

        {tags?.length > 0 && (
          <>
            <h4 className={styles.sidebar__sub_title}>Tags</h4>
            <div className={styles.sidebar__tags}>
              {tags.map((tag: string, i: number) => (
                <span
                  key={i}
                  className={`${styles.sidebar__tag} ${styles.sidebar__tag_purple}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
