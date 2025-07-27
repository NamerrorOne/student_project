import { NavbarIcon } from "../NavbarIcon/NavbarIcon";
import "./NavbarItem.css";

export const NavbarItem = ({
  text,
  hasIcon,
  icon,
  isActive,
  onCLick,
  iconType,
}) => {
  const textStyle = isActive
    ? "navbar-item__text navbar-item__text_active"
    : "navbar-item__text ";
  return (
    <div onClick={onCLick} className="navbar-item">
      <p className={textStyle}>{text}</p>
      {hasIcon ? <NavbarIcon iconType={iconType} src={icon} /> : null}
    </div>
  );
};
