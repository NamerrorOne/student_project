import { FilmCard } from "../../components/FilmCard/FilmCard";
import { INITIAL_MOCK_DATA } from "../../initialData";
import { IMovie } from "../../models/movie.model";
import styles from "./MovieGrid.module.css";

export const MovieGrid = () => {
  return (
    <div className={styles.movieGridWrapper}>
      {INITIAL_MOCK_DATA.map((movie: IMovie) => (
        <FilmCard
          title={movie.title}
          key={movie.id}
          img={movie.img}
          isFavorite={movie.isFavorite}
          rating={movie.rating}
          id={movie.id}
        />
      ))}
    </div>
  );
};
