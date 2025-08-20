import styles from "./FilmCard.module.css";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { RatingBadge } from "../RatingBadge/RatingBadge";
import { FC } from "react";
import { IFilmCardProps } from "./FilmCard.props";
import { Link } from "react-router-dom";

export const FilmCard: FC<IFilmCardProps> = ({
  img,
  title,
  rating,
  isFavorite,
  id,
}) => {
  return (
    <Link to={`/movie/${id}`}>
      <div className={styles.filmCard}>
        <div className={styles.filmCardImageWrapper}>
          <img
            className={styles.filmCardImage}
            src={img}
            alt="film poster image"
          />
          <RatingBadge
            rating={rating}
            additionalStyles={styles.stylesForBadge}
          />
        </div>
        <span className={styles.filmCardTitle}>{title}</span>
        <div className={styles.favorRowWrapper}>
          <FavoriteButton isFavorite={isFavorite} />
        </div>
      </div>
    </Link>
  );
};
