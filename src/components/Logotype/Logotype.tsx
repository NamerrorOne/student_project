import { FC } from "react";
import styles from "./Logotype.module.css";
import { ILogotypeProps } from "./Logotype.props";

export const Logotype: FC<ILogotypeProps> = () => {
  return <img className={styles.logotype} src="./headerIcon.svg"></img>;
};
