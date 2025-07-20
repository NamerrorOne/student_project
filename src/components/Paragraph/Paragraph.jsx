import "./Paragraph.css";

export const Paragraph = ({ text, fontSize }) => {
  const fontSizeStyle = fontSize == "lg" ? "paragraph--lg" : "";
  return <p className={`paragraph ${fontSizeStyle}`}>{text}</p>;
};
