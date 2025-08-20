import { IMovieProps } from "./Movie.props";
import styles from "./Movie.module.css";
import { MovieHeader } from "../../components/MovieHeader/MovieHeader";
import { MovieBody } from "../../components/MovieBody/MovieBody";
import { MovieFeedback } from "../../components/MovieFeedback/MovieFeedback";

export const Movie = (props: IMovieProps) => {
  return (
    <div className={styles.wrapper}>
      <MovieHeader title={props.title} />
      <MovieBody
        image={props.image}
        description={props.description}
        rating={props.rating}
        inFavor={props.inFavor}
        janre={props.janre}
        duration={props.duration}
        dateCreate={props.dateCreate}
        type={props.type}
      />
      <MovieFeedback
        title={props.feedbackTitle}
        text={props.feedbackText}
        date={props.feedbackDate}
      />
    </div>
  );
};
