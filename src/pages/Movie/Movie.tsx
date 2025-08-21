import styles from "./Movie.module.css";
import { MovieHeader } from "../../components/MovieHeader/MovieHeader";
import { MovieBody } from "../../components/MovieBody/MovieBody";
import { MovieFeedback } from "../../components/MovieFeedback/MovieFeedback";

const MOVIE_MOCK_DATA = {
  feedbackTitle: "Not as good as infinity war..",
  feedbackDate: "2019-04-12",
  feedbackText:
    "But its a pretty good film. A bit of a mess in some parts, lacking the cohesive and effortless feel infinity war somehow managed to accomplish. Some silly plot holes and characters that could've been cut (Ahem, captain marvel and thanos). The use of Captain marvel in this film was just ridiculous. Shes there at the start, bails for some reason? And then pops up at the end to serve no purpose but deux ex machina a space ship...",
  title: "Avengers: Endgame",
  description:
    "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
  rating: 8.3,
  image: "/shangChiFilm.png",
  inFavor: false,
  createdAt: "2019-04-24",
  type: "Movie",
  duration: 181,
  janre: ["Adventure", "Science Fiction", "Action"],
};

export const Movie = () => {
  return (
    <div className={styles.wrapper}>
      <MovieHeader title={MOVIE_MOCK_DATA.title} />
      <MovieBody
        image={MOVIE_MOCK_DATA.image}
        description={MOVIE_MOCK_DATA.description}
        rating={MOVIE_MOCK_DATA.rating}
        inFavor={MOVIE_MOCK_DATA.inFavor}
        janre={MOVIE_MOCK_DATA.janre}
        duration={MOVIE_MOCK_DATA.duration}
        dateCreate={MOVIE_MOCK_DATA.createdAt}
        type={MOVIE_MOCK_DATA.type}
      />
      <MovieFeedback
        title={MOVIE_MOCK_DATA.feedbackTitle}
        text={MOVIE_MOCK_DATA.feedbackText}
        date={MOVIE_MOCK_DATA.feedbackDate}
      />
    </div>
  );
};
