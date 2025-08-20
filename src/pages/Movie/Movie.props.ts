import { ReactNode } from "react";

export interface IMovieProps {
  title: string;
  description: string;
  rating: number;
  inFavor: boolean;
  type: string;
  dateCreate: string;
  duration: number;
  janre: string[];
  otzivi: ReactNode[];
  image: string;
  feedbackTitle: string;
  feedbackDate: string;
  feedbackText: string;
}
