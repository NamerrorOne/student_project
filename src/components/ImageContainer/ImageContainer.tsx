import { FC } from "react";
import { IImageContainerProps } from "./ImageContainer.props";

export const ImageContainer: FC<IImageContainerProps> = ({ src }) => {
  return <img src={src}></img>;
};
