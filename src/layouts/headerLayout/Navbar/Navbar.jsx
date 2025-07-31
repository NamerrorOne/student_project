import { ValueIndicatorBadge } from "../../../components/ValueIndicatorBadge/ValueIndicatorBadge";
import { NavbarItem } from "../../../components/NavbarItem/NavbarItem";
import styles from "./Navbar.module.css";
import { ImageContainer } from "../../../components/ImageContainer/ImageContainer";

export const Navbar = ({ handleLogOut, isLogined, userName }) => {
  return (
    <>
      {!isLogined && (
        <nav className={styles.navbar}>
          <NavbarItem href="#" text="Search films" isActive />
          <NavbarItem
            href="#"
            text="My films"
            icon={<ValueIndicatorBadge value={7} />}
          />
          <NavbarItem
            href="#"
            text="Log in"
            icon={<ImageContainer src="./navbarIconDoor.svg" />}
          />
        </nav>
      )}

      {isLogined && (
        <nav className={styles.navbar}>
          <NavbarItem href="#" text="Search films" isActive />
          <NavbarItem
            href="#"
            text="My films"
            icon={<ValueIndicatorBadge value={7} />}
          />
          <NavbarItem href="#" text={userName} icon={<ImageContainer />} />
          <NavbarItem
            href="#"
            text="Log out"
            icon={<ImageContainer src="./navbarIconDoor.svg" />}
            handleLogOut={handleLogOut}
          />
        </nav>
      )}
    </>
  );
};
