import { FC } from "react";
import styles from "./Title.module.css";
import { ITitleProps } from "./Title.props";

export const Title: FC<ITitleProps> = ({ text }) => {
  return <h1 className={styles.title}>{text}</h1>;
};
