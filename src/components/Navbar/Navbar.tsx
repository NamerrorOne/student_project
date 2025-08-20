import { ValueIndicatorBadge } from "../ValueIndicatorBadge/ValueIndicatorBadge";
import { NavbarItem } from "../NavbarItem/NavbarItem";
import styles from "./Navbar.module.css";
import { ImageContainer } from "../ImageContainer/ImageContainer";
import { UserContext } from "../../context/user-context";
import { FC, useContext } from "react";
import { INavbarProps } from "./Navbar.props";

export const Navbar: FC<INavbarProps> = ({ onClick }) => {
  const { userName } = useContext(UserContext);

  return (
    <>
      <nav className={styles.navbar}>
        <NavbarItem href="/" text="Search films" isActive />
        <NavbarItem
          href="/films"
          text="My films"
          icon={<ValueIndicatorBadge value={7} />}
        />
        {userName && (
          <NavbarItem
            href="/currentUser"
            text={userName}
            icon={<ImageContainer src="/userIcon.svg" />}
          />
        )}
        <NavbarItem
          href="/login"
          text={userName ? "Log out" : "Log in"}
          icon={<ImageContainer src="/navbarIconDoor.svg" />}
          onClick={onClick}
        />
      </nav>
    </>
  );
};
