import { Paragraph } from "../Paragraph/Paragraph";
import styles from "./MovieFeedback.module.css";
import { IMovieFeedback } from "./MovieFeedback.props";
export const MovieFeedback = ({ title, text, date }: IMovieFeedback) => {
  return (
    <>
      <span className={styles.headling}>Отзывы</span>
      <div className={styles.feedback}>
        <div className={styles.feedbackHeader}>
          <span className={styles.feedbackHeaderTitle}>{title}</span>
          <span className={styles.feedbackHeaderDate}>{date}</span>
        </div>
        <Paragraph fontSize="lg" text={text} />
      </div>
    </>
  );
};
