import { MouseEventHandler } from "react";

export interface IFavoriteButtonProps {
  isFavorite?: boolean;
  onClick?: MouseEventHandler<HTMLDivElement> | undefined;
}
