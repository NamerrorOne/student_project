import "./RatingBadge.css";

export const RatingBadge = ({ rating }) => {
  const iconSrc = "./star.svg";
  return (
    <div className="rating-badge">
      <img className="rating-badge__icon" src={iconSrc} alt="rating-icon" />
      <span className="rating-badge__count">{rating}</span>
    </div>
  );
};
