import styles from "./NavbarItem.module.css";
import cn from "classnames";

export const NavbarItem = ({ href, icon, text, isActive }) => {
  return (
    <a href={href} className={styles["navbar-item"]}>
      <span
        className={cn(styles["navbar-item__text"], {
          [styles["navbar-item__text_active"]]: isActive,
        })}
      >
        {text}
      </span>
      {icon && icon}
    </a>
  );
};
