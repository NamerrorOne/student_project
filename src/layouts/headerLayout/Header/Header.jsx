import { Logotype } from "../../../components/Logotype/Logotype";
import { Navbar } from "../Navbar/Navbar";
import "./Header.css";

export const Header = () => {
  const src = "./headerIcon.svg";

  return (
    <header className="header">
      <Logotype onClick={() => console.log("Header icon clicked")} src={src} />
      <Navbar />
    </header>
  );
};
