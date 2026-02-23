import styles from "./CruiseIncluded.module.css";
import { LocationIcon } from "@/assets/icons/icons"; // StayIcon is no longer needed

interface CruiseItem {
  day: number;
  location: string; // e.g. "Port Blair - Havelock Island"
  category: string; // e.g. "Base Category"
  name: string; // e.g. "Premium Category @ Makruzz"
}

interface Props {
  cruise?: CruiseItem[]; // optional, defaults to empty array
}

export default function CruiseIncluded({ cruise = [] }: Props) {
  if (!cruise.length) return null;

  return (
    <div className="common__container">
      <h3 className="common__title">Cruises Included</h3>

      {cruise.map((item) => (
        <div key={item.day} className={styles.cruise_included__item}>
          <div className={styles.cruise_included__content}>
            <h4 className={styles.cruise_included__day}>
              Day {item.day}: {item.location}
            </h4>

            <p className={styles.cruise_included__location}>
              <LocationIcon fill="var(--color-text-primary)" size={20} />
              {item.name} ({item.category})
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
