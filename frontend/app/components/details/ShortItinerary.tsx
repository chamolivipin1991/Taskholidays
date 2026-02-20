import styles from "./ShortItinerary.module.css";

import { ShortItineraryDay } from "@/types/package";

interface Props {
  days: ShortItineraryDay[];
}

export default function ShortItinerary({ days }: Props) {
  return (
    <div className={styles.short_itinerary}>
      <h3 className={styles.short_itinerary__title}>Short Itinerary</h3>

      {days.map((day) => (
        <div key={day.day} className={styles.short_itinerary__item}>
          <div className={styles.short_itinerary__content}>
            <h4 className={styles.short_itinerary__day}>
              Day {day.day}: {day.title}
            </h4>

            <p className={styles.short_itinerary__location}>{day.location}</p>

            {day.stay && (
              <p className={styles.short_itinerary__stay}>Stay: {day.stay}</p>
            )}
          </div>

          {day.breakfastNextDay && (
            <span className={styles.short_itinerary__badge}>
              Breakfast Included
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
