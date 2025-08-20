import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { Paragraph } from "../Paragraph/Paragraph";
import { RatingBadge } from "../RatingBadge/RatingBadge";
import styles from "./MovieBody.module.css";
import { IMovieBody } from "./MovieBody.props";

export const MovieBody = ({
  image,
  description,
  rating,
  inFavor,
  janre,
  duration,
  dateCreate,
  type,
}: IMovieBody) => {
  return (
    <div className={styles.body}>
      <img className={styles.image} src={image} alt="movie-image" />
      <div className={styles.info}>
        <Paragraph
          fontSize="lg"
          text={description}
          additionalStyles={styles.description}
        />
        <div className={styles.interactiveRow}>
          <RatingBadge rating={rating} />
          <FavoriteButton isFavorite={inFavor} />
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoItemTitle}>Type</span>
          <span className={styles.infoItemValue}>{type}</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoItemTitle}>Date </span>
          <span className={styles.infoItemValue}>{dateCreate}</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoItemTitle}>Duration</span>
          <span className={styles.infoItemValue}>{duration}</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoItemTitle}>Janre</span>
          <span className={styles.infoItemValue}>
            {janre?.map((janr) => janr)?.join(", ")}
          </span>
        </div>
      </div>
    </div>
  );
};
