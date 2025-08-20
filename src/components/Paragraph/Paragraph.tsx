import { FC } from "react";
import styles from "./Paragraph.module.css";
import cn from "classnames";
import { IParagraphProps } from "./Paragraph.props";

export const Paragraph: FC<IParagraphProps> = ({
  text,
  fontSize = "md",
  additionalStyles,
}) => {
  return (
    <p
      className={cn(
        styles.paragraph,
        fontSize === "lg" && styles.paragraphLg,
        fontSize === "md" && styles.paragraphMd,
        additionalStyles,
      )}
    >
      {text}
    </p>
  );
};
