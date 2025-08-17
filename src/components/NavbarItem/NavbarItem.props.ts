export interface INavbarItem {
  href: string;
  icon?: React.ReactNode;
  text: string;
  isActive?: boolean;
  onClick?: () => void;
}
