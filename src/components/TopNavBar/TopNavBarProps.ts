interface TopNavBarProps {
  appName: string;
  apiVersion?: string;
  uiVersion: string;
  onToggleClicked?: (() => void) | undefined;
  // onBackHome: () => void;
}
export default TopNavBarProps;
