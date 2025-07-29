import styles from "./Input.module.css";

export const Input = ({ isIconShow, placeholder }) => {
  return (
    <div className={styles["input-wrapper"]}>
      {isIconShow && (
        <img
          className={styles["input-icon"]}
          src="./inputSearchIcon.svg"
          alt="search icon"
        />
      )}
      <input
        placeholder={placeholder}
        className={styles["input-inner"]}
        type="text"
      ></input>
    </div>
  );
};
