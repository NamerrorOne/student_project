export interface IMovieBody {
  image: string;
  description: string;
  rating?: number;
  inFavor: boolean;
  janre: string[];
  duration: number;
  dateCreate: string;
  type: string;
}
