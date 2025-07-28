import "./FavoriteButton.css";

export const FavoriteButton = ({ isFavorite }) => {
  return (
    <>
      {isFavorite && (
        <div className="favor-row">
          <img className="favor-row__icon" src="./bookmark.svg"></img>
          <span className="favor-row__text">In saved</span>
        </div>
      )}
      {!isFavorite && (
        <div className="unfavor-row">
          <img className="favor-row__icon" src="./like.svg"></img>
          <span className="favor-row__text">Save film</span>
        </div>
      )}
    </>
  );
};
