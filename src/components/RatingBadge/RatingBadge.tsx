import { FC } from "react";
import styles from "./RatingBadge.module.css";
import { IRatingBadge } from "./RatingBadge.props";

export const RatingBadge: FC<IRatingBadge> = ({ rating }) => {
  return (
    <div className={styles.ratingBadge}>
      <img
        className={styles.ratingBadgeIcon}
        src="./star.svg"
        alt="rating-icon"
      />
      <span className={styles.ratingBadgeCount}>{rating || "n/a"}</span>
    </div>
  );
};
