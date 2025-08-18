import { InputHTMLAttributes, RefObject } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isIconShow?: boolean;
  isValid?: boolean;
  ref?: RefObject<HTMLInputElement | null>;
}
