import { InputHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isIconShow?: boolean;
  isValid?: boolean;
  ref?: React.Ref<HTMLInputElement>;
}
