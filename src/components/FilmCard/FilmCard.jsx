import "./FilmCard.css";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { RatingBadge } from "../RatingBadge/RatingBadge";

export const FilmCard = ({ img, title, rating, isFavorite }) => {
  return (
    <div className="film-card">
      <div className="film-card__image-wrapper">
        <img className="film-card__image" src={img} alt="" />
        <RatingBadge rating={rating} />
      </div>
      <span className="film-card__title">{title}</span>
      <div className="favor-row__wrapper">
        <FavoriteButton isFavorite={isFavorite} />
      </div>
    </div>
  );
};
