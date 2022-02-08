import MenuItemProps from './MenuItemProps';

interface SideMenuProps {
  portalURL: string;
  isCollapsed: boolean;
  isToggled: boolean;
  allowedPages: string[];
  menuItems: MenuItemProps[];
  onLoggedOut: () => void;
  onToggleChange: () => void;
  onCollapseChange: () => void;
}
export default SideMenuProps;
