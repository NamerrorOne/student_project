import "./Logotype.css";

export const Logotype = () => {
  const src = "./headerIcon.svg";
  const onClick = () => {
    console.log("header logotype clicked");
  };
  return <img onClick={onClick} className="logotype" src={src}></img>;
};
