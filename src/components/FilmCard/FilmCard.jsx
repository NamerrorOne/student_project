import styles from "./FilmCard.module.css";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { RatingBadge } from "../RatingBadge/RatingBadge";

export const FilmCard = ({ img, title, rating, isFavorite }) => {
  return (
    <div className={styles.filmCard}>
      <div className={styles.filmCardImageWrapper}>
        <img
          className={styles.filmCardImage}
          src={img}
          alt="film poster image"
        />
        <RatingBadge rating={rating} />
      </div>
      <span className={styles.filmCardTitle}>{title}</span>
      <div className={styles.favorRowWrapper}>
        <FavoriteButton isFavorite={isFavorite} />
      </div>
    </div>
  );
};
