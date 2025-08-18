import { FC } from "react";
import styles from "./Input.module.css";
import cn from "classnames";
import { IInputProps } from "./Input.props";

export const Input: FC<IInputProps> = ({
  isIconShow,
  placeholder,
  isValid = true,
  name,
  value,
  onChange,
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
        placeholder={placeholder}
        className={styles.inputInner}
        type="text"
        name={name}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};
