import "./Logotype.css";

export const Logotype = () => {
  const src = "./headerIcon.svg";
  const handleClick = () => {
    console.log("header logotype clicked");
  };
  return <img onClick={handleClick} className="logotype" src={src}></img>;
};
