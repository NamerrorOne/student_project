import { ValueIndicatorBadge } from "../../../components/ValueIndicatorBadge/ValueIndicatorBadge";
import { NavbarItem } from "../../../components/NavbarItem/NavbarItem";
import "./Navbar.css";
import { LoginBadge } from "../../../components/LoginBadge/LoginBadge";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <NavbarItem text="Search films" isActive />
      <NavbarItem text="My films" icon={<ValueIndicatorBadge value={7} />} />
      <NavbarItem
        text="Log in"
        icon={<LoginBadge src="./navbarIconDoor.svg" />}
      />
    </nav>
  );
};
