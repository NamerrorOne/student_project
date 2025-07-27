import { NavbarItem } from "../../../components/NavbarItem/NavbarItem";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <NavbarItem
        isActive={true}
        text="Search films"
        onCLick={() => console.log("Search films")}
      />
      <NavbarItem
        hasIcon={true}
        iconType="circle"
        text="My films"
        onCLick={() => console.log("My films")}
      />
      <NavbarItem
        hasIcon={true}
        iconType="image"
        icon="./navbarIconDoor.svg"
        text="Log on"
        onCLick={() => console.log("SLog on")}
      />
    </div>
  );
};
