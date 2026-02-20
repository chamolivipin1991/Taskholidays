import styles from "./HotelsSection.module.css";

export default function HotelsSection({ hotels }: { hotels: any[] }) {
  return (
    <div className={styles.hotels}>
      <h3 className={styles.hotels__title}>Hotels</h3>

      {hotels.map((hotel, index) => (
        <div key={index} className={styles.hotels__card}>
          <div className={styles.hotels__info}>
            <h4 className={styles.hotels__name}>{hotel.hotelName}</h4>
            <p className={styles.hotels__location}>{hotel.location}</p>
            <p className={styles.hotels__meta}>
              {hotel.duration} • {hotel.category}
            </p>
          </div>

          <div className={styles.hotels__stars}>{"★".repeat(hotel.star)}</div>
        </div>
      ))}
    </div>
  );
}
