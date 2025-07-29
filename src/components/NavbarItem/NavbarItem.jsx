import styles from "./NavbarItem.module.css";
import cn from "classnames";

export const NavbarItem = ({ href, icon, text, isActive }) => {
  return (
    <a href={href} className={styles["navbarItem"]}>
      <span
        className={cn(styles["navbarItemText"], {
          [styles["navbarItemTextActive"]]: isActive,
        })}
      >
        {text}
      </span>
      {icon && icon}
    </a>
  );
};
