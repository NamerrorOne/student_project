import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import { MovieGrid } from "../../components/MovieGrid/MovieGrid";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import { Title } from "../../components/Title/Title";

import styles from "./Search.module.css";

export const Search = () => {
  return (
    <div className={styles.searchWrapper}>
      <Title text="Поиск" />
      <Paragraph
        text="Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."
        fontSize="lg"
        className={styles.paragraph}
      />
      <div className={styles.interactiveRow}>
        <Input className={styles.input} isIconShow placeholder="enter text" />
        <Button text="Search" />
      </div>
      <div className={styles.movieGridWrapper}>
        <MovieGrid />
      </div>
    </div>
  );
};
