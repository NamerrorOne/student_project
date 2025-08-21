import { FC } from "react";
import { Logotype } from "../Logotype/Logotype";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Header.module.css";
import { IHeaderProps } from "./Header.props";
import { Link } from "react-router-dom";

export const Header: FC<IHeaderProps> = ({ onClick }) => {
  return (
    <header className={styles.header}>
      <Link to={"/"}>
        <Logotype />
      </Link>
      <Navbar onClick={onClick} />
    </header>
  );
};
