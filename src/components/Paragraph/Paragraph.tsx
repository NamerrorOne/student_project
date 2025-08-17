import { FC } from "react";
import styles from "./Paragraph.module.css";
import cn from "classnames";
import { IParagraphProps } from "./Paragraph.props";

export const Paragraph: FC<IParagraphProps> = ({ text, fontSize }) => {
  return (
    <p
      className={cn(styles.paragraph, fontSize === "lg" && styles.paragraphLg)}
    >
      {text}
    </p>
  );
};
