import styles from "./ShortItinerary.module.css";

import { ShortItineraryDay } from "@/types/package";
import { LocationIcon, StayIcon } from "@/assets/icons/icons";

interface Props {
  days: ShortItineraryDay[];
}

export default function ShortItinerary({ days }: Props) {
  return (
    <div className="common__container">
      <h3 className="common__title">Short Itinerary</h3>

      {days.map((day) => (
        <div key={day.day} className={styles.short_itinerary__item}>
          <div className={styles.short_itinerary__content}>
            <h4 className={styles.short_itinerary__day}>
              Day {day.day}: {day.title}
            </h4>

            <p className={styles.short_itinerary__location}>
              <LocationIcon fill="var( --color-text-primary)" size={20} />
              {day.location}
            </p>

            {day.stay && (
              <p className={styles.short_itinerary__stay}>
                <StayIcon fill="var( --color-text-primary)" size={20} />{" "}
                {day.stay}
              </p>
            )}
          </div>

          {day.breakfastNextDay && (
            <span className={styles.short_itinerary__badge}>
              Breakfast Next Day
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
