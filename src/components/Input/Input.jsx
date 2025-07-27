import "./Input.css";

export const Input = ({ showImage, showPlaceholder, placeholderText }) => {
  const placeholder = showPlaceholder ? placeholderText : null;

  return (
    <div className="input-wrapper">
      {showImage ? (
        <img
          className="input-icon"
          src="./inputSearchIcon.svg"
          alt="search icon"
        />
      ) : null}
      <input
        placeholder={placeholder}
        className="input-inner"
        type="text"
      ></input>
    </div>
  );
};
