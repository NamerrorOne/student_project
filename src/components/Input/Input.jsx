import styles from "./Input.module.css";

export const Input = ({ isIconShow, placeholder }) => {
  return (
    <div className={styles["inputWrapper"]}>
      {isIconShow && (
        <img
          className={styles["inputIcon"]}
          src="./inputSearchIcon.svg"
          alt="search icon"
        />
      )}
      <input
        placeholder={placeholder}
        className={styles["inputInner"]}
        type="text"
      ></input>
    </div>
  );
};
