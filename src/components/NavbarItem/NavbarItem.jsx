import "./NavbarItem.css";

export const NavbarItem = ({ href, icon, text, isActive }) => {
  const textStyle = isActive
    ? "navbar-item__text navbar-item__text_active"
    : "navbar-item__text";

  return (
    <a href={href} className="navbar-item">
      <p className={textStyle}>{text}</p>
      {icon && icon}
    </a>
  );
};
