import { FC } from "react";
import { Logotype } from "../../../components/Logotype/Logotype";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Header.module.css";
import { IHeaderProps } from "./Header..props";

export const Header: FC<IHeaderProps> = ({ onClick }) => {
  return (
    <header className={styles.header}>
      <Logotype />
      <Navbar onClick={onClick} />
    </header>
  );
};
