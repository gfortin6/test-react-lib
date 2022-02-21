import ImageProps from '../Image/ImageProps';

interface TopNavBarProps {
  appName: string;
  apiVersion?: string;
  uiVersion: string;
  brandLogo: ImageProps;
  onToggleClicked?: (() => void) | undefined;
  onBackHome: () => void;
}
export default TopNavBarProps;
