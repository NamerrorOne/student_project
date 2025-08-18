import { ReactNode } from "react";

export interface INavbarItem {
  href: string;
  icon?: ReactNode;
  text: string;
  isActive?: boolean;
  onClick?: () => void;
}
