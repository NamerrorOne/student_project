import styles from "./RatingBadge.module.css";

export const RatingBadge = ({ rating }) => {
  return (
    <div className={styles.ratingBadge}>
      <img
        className={styles.ratingBadgeIcon}
        src="./star.svg"
        alt="rating-icon"
      />
      <span className={styles.ratingBadgeCount}>{rating}</span>
    </div>
  );
};
