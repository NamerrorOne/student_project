import { ValueIndicatorBadge } from "../../../components/ValueIndicatorBadge/ValueIndicatorBadge";
import { NavbarItem } from "../../../components/NavbarItem/NavbarItem";
import styles from "./Navbar.module.css";
import { ImageContainer } from "../../../components/ImageContainer/ImageContainer";

export const Navbar = ({ onClick, userName }) => {
  return (
    <>
      <nav className={styles.navbar}>
        <NavbarItem href="#" text="Search films" isActive />
        <NavbarItem
          href="#"
          text="My films"
          icon={<ValueIndicatorBadge value={7} />}
        />
        {userName && (
          <NavbarItem
            href="#"
            text={userName}
            icon={<ImageContainer src="./userIcon.svg" />}
          />
        )}
        <NavbarItem
          href="#"
          text={userName ? "Log out" : "Log in"}
          icon={<ImageContainer src="./navbarIconDoor.svg" />}
          onClick={onClick}
        />
      </nav>
    </>
  );
};
