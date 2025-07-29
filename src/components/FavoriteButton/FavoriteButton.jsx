import styles from "./FavoriteButton.module.css";

export const FavoriteButton = ({ isFavorite }) => {
  return (
    <>
      {isFavorite && (
        <div className={styles["favor-row"]}>
          <img className={styles["favor-row__icon"]} src="./bookmark.svg"></img>
          <span className={styles["favor-row__text"]}>In saved</span>
        </div>
      )}
      {!isFavorite && (
        <div className={styles["unfavor-row"]}>
          <img className={styles["favor-row__icon"]} src="./like.svg"></img>
          <span className={styles["favor-row__text"]}>Save film</span>
        </div>
      )}
    </>
  );
};
