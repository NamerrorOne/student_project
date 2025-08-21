import styles from "./FilmCard.module.css";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { RatingBadge } from "../RatingBadge/RatingBadge";
import { FC, MouseEvent } from "react";
import { IFilmCardProps } from "./FilmCard.props";
import { Link } from "react-router-dom";

export const FilmCard: FC<IFilmCardProps> = ({
  img,
  title,
  rating,
  isFavorite,
  id,
}) => {
  const onFavoriteClick = (e:MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <Link to={`/movie/${id}`} className={styles.filmCard}>
      <div className={styles.filmCardImageWrapper}>
        <img
          className={styles.filmCardImage}
          src={img}
          alt="film poster image"
        />
        <RatingBadge rating={rating} className={styles.stylesForBadge} />
      </div>
      <span className={styles.filmCardTitle}>{title}</span>
      <div className={styles.favorRowWrapper}>
        <FavoriteButton onClick={onFavoriteClick} isFavorite={isFavorite} />
      </div>
    </Link>
  );
};
