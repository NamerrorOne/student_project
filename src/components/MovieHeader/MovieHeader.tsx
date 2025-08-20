import styles from "./MovieHeader.module.css";
import { IMovieHeader } from "./MovieHeader.props";

export const MovieHeader = ({ title }: IMovieHeader) => {
  return (
    <div className={styles.header}>
      <span className={styles.headling}>Search films</span>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};
