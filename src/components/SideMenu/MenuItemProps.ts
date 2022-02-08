import { ReactNode } from 'react';

interface MenuItemProps {
  link: string;
  name: string;
  icon: ReactNode;
  allowedSubMenuPages?: string[];
  subMenuItems?: MenuItemProps[];
}
export default MenuItemProps;
