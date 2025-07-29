import styles from "./Paragraph.module.css";
import cn from "classnames";

export const Paragraph = ({ text, fontSize }) => {
  return (
    <p
      className={cn(
        styles["paragraph"],
        fontSize === "lg" && styles["paragraphLg"],
      )}
    >
      {text}
    </p>
  );
};
