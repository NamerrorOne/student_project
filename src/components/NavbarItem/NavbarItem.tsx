import { FC } from "react";
import styles from "./NavbarItem.module.css";
import cn from "classnames";
import { INavbarItem } from "./NavbarItem.props";

export const NavbarItem: FC<INavbarItem> = ({
  href,
  icon,
  text,
  isActive = false,
  onClick,
}) => {
  return (
    <a onClick={onClick} href={href} className={styles.navbarItem}>
      <span
        className={cn(
          styles.navbarItemText,
          isActive && styles.navbarItemTextActive,
        )}
      >
        {text}
      </span>
      {icon && icon}
    </a>
  );
};
