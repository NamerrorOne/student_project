import "./Logotype.css";

export const Logotype = ({ src, onClick }) => {
  return <img onClick={onClick} className="header-icon" src={src}></img>;
};
