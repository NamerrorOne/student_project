import { FilmCard } from "../../components/FilmCard/FilmCard";
import { INITIAL_MOCK_DATA } from "../../initialData";
import styles from "./MovieGrid.module.css";

export const MovieGrid = () => {
  return (
    <div className={styles["movieGridWrapper"]}>
      {INITIAL_MOCK_DATA.map((movie) => (
        <FilmCard
          title={movie.title}
          key={movie.id}
          img={movie.img}
          isFavorite={movie.isFavorite}
          rating={movie.rating}
        />
      ))}
    </div>
  );
};
