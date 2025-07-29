import { Logotype } from "../../../components/Logotype/Logotype";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles['header']}>
      <Logotype />
      <Navbar />
    </header>
  );
};
