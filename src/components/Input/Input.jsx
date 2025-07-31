import styles from "./Input.module.css";
import cn from "classnames";

export const Input = ({
  isIconShow,
  placeholder,
  isValid = true,
  ...props
}) => {
  return (
    <div className={cn(styles.inputWrapper, !isValid && styles.invalid)}>
      {isIconShow && (
        <img
          className={styles.inputIcon}
          src="./inputSearchIcon.svg"
          alt="search icon"
        />
      )}
      <input
        {...props}
        placeholder={placeholder}
        className={styles.inputInner}
        type="text"
      ></input>
    </div>
  );
};
