import styles from "./HotelsSection.module.css";

export default function HotelsSection({ hotels }: { hotels: any[] }) {
  return (
    <div className="common__container">
      <h3 className="common__title">Hotels</h3>

      {hotels.map((hotel, index) => (
        <div key={index} className={styles.hotels__card}>
          <div className={styles.hotels__info}>
            <h4 className={styles.hotels__name}>{hotel.hotelName}</h4>
            <p className={styles.hotels__location}>{hotel.location}</p>
            <p className={styles.hotels__meta}>
              {hotel.duration} • {hotel.category}
            </p>
          </div>
          <div className={styles.hotels__stars__container}>
            <div className={styles.hotels__stars}>{"★".repeat(hotel.star)}</div>
            <a
              href={hotel.stayLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.hotels__link}
            >
              View Hotel
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
