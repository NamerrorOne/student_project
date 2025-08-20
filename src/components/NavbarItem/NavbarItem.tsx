import { FC } from "react";
import styles from "./NavbarItem.module.css";
import cn from "classnames";
import { INavbarItem } from "./NavbarItem.props";
import { NavLink } from "react-router-dom";

export const NavbarItem: FC<INavbarItem> = ({ href, icon, text, onClick }) => {
  return (
    <NavLink onClick={onClick} to={href} className={styles.navbarItem}>
      {({ isActive }) => (
        <>
          <span
            className={cn(
              styles.navbarItemText,
              isActive && styles.navbarItemTextActive,
            )}
          >
            {text}
          </span>
          {icon && icon}
        </>
      )}
    </NavLink>
  );
};
