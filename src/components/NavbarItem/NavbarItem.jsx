import styles from "./NavbarItem.module.css";
import cn from "classnames";

export const NavbarItem = ({
  href,
  icon,
  text,
  isActive,
  handleLogOut = null,
}) => {
  const click = (e) => {
    e.preventDefault();
    handleLogOut();
  };

  return (
    <a onClick={click} href={href} className={styles.navbarItem}>
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
