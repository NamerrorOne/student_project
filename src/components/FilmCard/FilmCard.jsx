import "./FilmCard.css";
import { FavorRow } from "../FavorRow/FavorRow";
import { RatingBadge } from "../RatingBadge/RatingBadge";

export const FilmCard = ({ img, title, rating, inFavor }) => {
  return (
    <div className="film-card">
      <div className="film-card__image-wrapper">
        <img className="film-card__image" src={img} alt="" />
        <RatingBadge rating={rating} />
      </div>
      <h6 className="film-card__title">{title}</h6>
      <div className="favor-row__wrapper">
        {inFavor ? (
          <FavorRow icon="./bookmark.svg" text="In saved" inFavor={inFavor} />
        ) : (
          <FavorRow icon="./like.svg" text="Save this film" inFavor={inFavor} />
        )}
      </div>
    </div>
  );
};
