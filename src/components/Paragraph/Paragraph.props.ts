type FontSizeType = "lg" | "md";

export interface IParagraphProps {
  text: string;
  fontSize?: FontSizeType;
  additionalStyles?: any;
}
