import { FC } from "react";
import styles from "./RatingBadge.module.css";
import { IRatingBadge } from "./RatingBadge.props";
import cn from "classnames";

export const RatingBadge: FC<IRatingBadge> = ({ rating, className }) => {
  return (
    <div className={cn(styles.ratingBadge, className)}>
      <img
        className={styles.ratingBadgeIcon}
        src="/star.svg"
        alt="rating-icon"
      />
      <span className={styles.ratingBadgeCount}>{rating || "n/a"}</span>
    </div>
  );
};
