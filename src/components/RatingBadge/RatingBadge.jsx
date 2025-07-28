import "./RatingBadge.css";

export const RatingBadge = ({ rating }) => {
  return (
    <div className="rating-badge">
      <img className="rating-badge__icon" src="./star.svg" alt="rating-icon" />
      <span className="rating-badge__count">{rating}</span>
    </div>
  );
};
