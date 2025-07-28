import "./FavorRow.css";

export const FavorRow = ({ text, icon, inFavor }) => {
  const style = inFavor ? "favor-row" : "unfavor-row";

  return (
    <div className={style}>
      <img className="favor-row__icon" src={icon}></img>
      <span className="favor-row__counter">{text}</span>
    </div>
  );
};
