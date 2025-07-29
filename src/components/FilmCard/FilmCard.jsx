import styles from "./FilmCard.module.css";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { RatingBadge } from "../RatingBadge/RatingBadge";

export const FilmCard = ({ img, title, rating, isFavorite }) => {
  return (
    <div className={styles["film-card"]}>
      <div className={styles["film-card__image-wrapper"]}>
        <img
          className={styles["film-card__image"]}
          src={img}
          alt="film poster image"
        />
        <RatingBadge rating={rating} />
      </div>
      <span className={styles["film-card__title"]}>{title}</span>
      <div className={styles["favor-row__wrapper"]}>
        <FavoriteButton isFavorite={isFavorite} />
      </div>
    </div>
  );
};
