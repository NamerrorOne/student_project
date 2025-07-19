import "./Paragraph.css";

export const Paragraph = ({ children: text, fontSize = ".8rem" }) => {
  const style = {
    fontSize: fontSize,
  };

  return (
    <p className="title__paragraph" style={style}>
      {text}
    </p>
  );
};
