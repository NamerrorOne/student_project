import { Logotype } from "../../../components/Logotype/Logotype";
import { Navbar } from "../Navbar/Navbar";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <Logotype />
      <Navbar />
    </header>
  );
};
