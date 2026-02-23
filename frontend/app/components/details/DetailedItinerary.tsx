import styles from "./DetailedItinerary.module.css";
import { LocationIcon, StayIcon } from "@/assets/icons/icons";

interface SightseeingItem {
  name: string;
  detail: string;
}

interface DayItinerary {
  day: string;
  location: string;
  stay: string;
  title: string;
  itineraryPoints: string[];
  sightseeingLocation: string;
  sightseeingItems: SightseeingItem[];
  instruction: string;
  note: string[];
  inclusions: string;
}

interface Props {
  detailedItinerary?: DayItinerary[];
}

export default function DetailedItinerary({ detailedItinerary = [] }: Props) {
  if (!detailedItinerary.length) return null;

  return (
    <div className="common__container">
      <h3 className="common__title">Detailed Itinerary</h3>

      {detailedItinerary.map((day) => (
        <div key={day.day} className={styles.detailed_itinerary__day_card}>
          {/* Day header with location and stay */}
          <div className={styles.detailed_itinerary__day_header}>
            <span className={styles.detailed_itinerary__day}>
              Day {day.day}: {day.title}
            </span>
            {day.location && (
              <span className={styles.detailed_itinerary__location}>
                <LocationIcon fill="var(--color-text-secondary)" size={18} />
                {day.location}
              </span>
            )}
            {day.stay && (
              <span className={styles.detailed_itinerary__stay}>
                <StayIcon fill="var(--color-text-secondary)" size={18} />
                {day.stay}
              </span>
            )}
          </div>

          {/* Itinerary Points */}
          {day.itineraryPoints?.length > 0 && (
            <>
              <h4 className={styles.detailed_itinerary__subtitle}>Itinerary</h4>
              <ul className={styles.detailed_itinerary__list}>
                {day.itineraryPoints.map((point, idx) => (
                  <li
                    key={idx}
                    className={styles.detailed_itinerary__list_item}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Sightseeing */}
          {day.sightseeingItems?.length > 0 && (
            <>
              <h4 className={styles.detailed_itinerary__subtitle}>
                Sightseeing{" "}
                {day.sightseeingLocation ? `at ${day.sightseeingLocation}` : ""}
              </h4>
              {day.sightseeingItems.map((item, idx) => (
                <div
                  key={idx}
                  className={styles.detailed_itinerary__sightseeing_item}
                >
                  <div className={styles.detailed_itinerary__sightseeing_name}>
                    {item.name}
                  </div>
                  {item.detail && (
                    <div
                      className={styles.detailed_itinerary__sightseeing_detail}
                    >
                      {item.detail}
                    </div>
                  )}
                </div>
              ))}
            </>
          )}

          {/* Instruction */}
          {day.instruction && (
            <div className={styles.detailed_itinerary__instruction}>
              {day.instruction}
            </div>
          )}

          {/* Notes */}
          {day.note?.length > 0 && (
            <>
              <h4 className={styles.detailed_itinerary__subtitle}>Note</h4>
              <ul className={styles.detailed_itinerary__list}>
                {day.note.map((noteText, idx) => (
                  <li
                    key={idx}
                    className={styles.detailed_itinerary__list_item}
                  >
                    {noteText}
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Inclusions */}
          {day.inclusions && (
            <div className={styles.detailed_itinerary__inclusions}>
              <strong>Inclusions:</strong> {day.inclusions}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
