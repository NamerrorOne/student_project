import { Button } from "../../components/Button/Button";
import { FilmCard } from "../../components/FilmCard/FilmCard";
import { Input } from "../../components/Input/Input";
import { MovieGrid } from "../../components/MovieGrid/MovieGrid";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import { Title } from "../../components/Title/Title";
import { INITIAL_MOCK_DATA } from "../../initialData";
import { IMovie } from "../../models/movie.model";
import styles from "./Search.module.css";

export const Search = () => {
  return (
    <>
      <Title text="Поиск" />
      <Paragraph
        text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."
        fontSize="lg"
      />
      <Button text="Search" />
      <Input isIconShow placeholder="enter text" />
      <MovieGrid />
    </>
  );
};
