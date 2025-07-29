import styles from "./ValueIndicatorBadge.module.css";

export const ValueIndicatorBadge = ({ value }) => {
  return <div className={styles.circleIcon}>{value}</div>;
};
