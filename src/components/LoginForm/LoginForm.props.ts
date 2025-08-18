import { IUser } from "../../models/user.model";

export interface ILoginForm {
  onSubmit: (data: IUser) => void;
}
