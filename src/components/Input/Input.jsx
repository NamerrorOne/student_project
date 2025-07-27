import "./Input.css";

export const Input = ({ isIconShow, placeholder }) => {
  return (
    <div className="input-wrapper">
      {isIconShow && (
        <img
          className="input-icon"
          src="./inputSearchIcon.svg"
          alt="search icon"
        />
      )}
      <input
        placeholder={placeholder}
        className="input-inner"
        type="text"
      ></input>
    </div>
  );
};
