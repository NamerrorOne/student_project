import type { IButtonProps } from "./Button.props";
import type { FC } from "react";
import styles from "./Button.module.css";

export const Button: FC<IButtonProps> = ({ text, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};
