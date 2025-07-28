import { FilmCard } from "../../components/FilmCard/FilmCard";
import "./MovieGrid.css";

export const MovieGrid = () => {
  const INITIAL_MOCK_DATA = [
    {
      id: 0,
      img: "./shangChiFilm.png",
      title: "Shang-chi legend",
      inFavor: true,
      rating: 74,
    },
    {
      id: 1,
      img: "./shangChiFilm.png",
      title: "Shang-chi legend",
      inFavor: false,
      rating: 141,
    },
    {
      id: 2,
      img: "./shangChiFilm.png",
      title: "Shang-chi legend",
      inFavor: false,
      rating: 511,
    },
    {
      id: 3,
      img: "./shangChiFilm.png",
      title: "Shang-chi legend",
      inFavor: false,
      rating: 53,
    },
    {
      id: 4,
      img: "./shangChiFilm.png",
      title: "Shang-chi legend",
      inFavor: true,
      rating: 52,
    },
    {
      id: 5,
      img: "./shangChiFilm.png",
      title: "Shang-chi legend",
      inFavor: false,
      rating: 3,
    },
    {
      id: 6,
      img: "./shangChiFilm.png",
      title: "Shang-chi legend",
      inFavor: false,
      rating: 94,
    },
    {
      id: 7,
      img: "./shangChiFilm.png",
      title: "Shang-chi legend",
      inFavor: false,
      rating: 981,
    },
    {
      id: 8,
      img: "./shangChiFilm.png",
      title: "Shang-chi legend",
      inFavor: false,
    },
    {
      id: 9,
      img: "./shangChiFilm.png",
      title: "Shang-chi legend",
      inFavor: false,
    },
    {
      id: 10,
      img: "./shangChiFilm.png",
      title: "Shang-chi legend",
      inFavor: false,
    },
    {
      id: 11,
      img: "./shangChiFilm.png",
      title: "Shang-chi legend",
      inFavor: false,
    },
  ];

  return (
    <div className="movie-grid__wrapper">
      {INITIAL_MOCK_DATA.map((movie) => (
        <FilmCard
          title={movie.title}
          key={movie.id}
          img={movie.img}
          inFavor={movie.inFavor}
          rating={movie.rating}
        />
      ))}
    </div>
  );
};
