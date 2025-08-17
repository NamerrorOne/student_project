import { FC } from "react";
import styles from "./ValueIndicatorBadge.module.css";
import { IValueIndicatorBadgeProps } from "./ValueIndicatorBadge.props";

export const ValueIndicatorBadge: FC<IValueIndicatorBadgeProps> = ({
  value,
}) => {
  return <div className={styles.circleIcon}>{value}</div>;
};
