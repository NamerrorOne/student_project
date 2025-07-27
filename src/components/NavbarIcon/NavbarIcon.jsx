import { NavbarCircleIcon } from "../NavbarCircleIcon/NavbarCircleIcon";
import "./NavbarIcon.css";

export const NavbarIcon = ({ iconType, src }) => {
  return (
    <>
      {iconType === "image" ? (
        <img src={src} alt="icon" />
      ) : iconType === "circle" ? (
        <NavbarCircleIcon value={7} />
      ) : null}
    </>
  );
};
