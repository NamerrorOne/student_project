import { FC } from "react";
import styles from "./RatingBadge.module.css";
import { IRatingBadge } from "./RatingBadge.props";
import cn from "classnames";

export const RatingBadge: FC<IRatingBadge> = ({ rating, additionalStyles }) => {
  return (
    <div className={cn(styles.ratingBadge, additionalStyles)}>
      <img
        className={styles.ratingBadgeIcon}
        src="/star.svg"
        alt="rating-icon"
      />
      <span className={styles.ratingBadgeCount}>{rating || "n/a"}</span>
    </div>
  );
};
