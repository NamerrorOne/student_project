import { FC } from "react";
import styles from "./FavoriteButton.module.css";
import { IFavoriteButtonProps } from "./FavoriteButton.props";

export const FavoriteButton: FC<IFavoriteButtonProps> = ({ isFavorite }) => {
  return (
    <>
      {isFavorite && (
        <div className={styles.favorRow}>
          <img className={styles.favorRowIcon} src="./bookmark.svg"></img>
          <span className={styles.favorRowText}>In saved</span>
        </div>
      )}
      {!isFavorite && (
        <div className={styles.unfavorRow}>
          <img className={styles.favorRowIcon} src="./like.svg"></img>
          <span className={styles.favorRowText}>Save film</span>
        </div>
      )}
    </>
  );
};
