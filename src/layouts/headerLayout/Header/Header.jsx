import { Logotype } from "../../../components/Logotype/Logotype";
import { Navbar } from "../Navbar/Navbar";
import styles from "./Header.module.css";

export const Header = ({ handleLogOut, isLogined, userName }) => {
  return (
    <header className={styles.header}>
      <Logotype />
      <Navbar
        handleLogOut={handleLogOut}
        isLogined={isLogined}
        userName={userName}
      />
    </header>
  );
};
