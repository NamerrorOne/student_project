import styles from "./Logotype.module.css";

export const Logotype = () => {
  return (
    <img
      onClick={null}
      className={styles['logotype']}
      src="./headerIcon.svg"
    ></img>
  );
};
