import styles from "./RatingBadge.module.css";

export const RatingBadge = ({ rating }) => {
  return (
    <div className={styles["rating-badge"]}>
      <img
        className={styles["rating-badge__icon"]}
        src="./star.svg"
        alt="rating-icon"
      />
      <span className={styles["rating-badge__count"]}>{rating}</span>
    </div>
  );
};
