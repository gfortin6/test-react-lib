import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { SideMenu, TopNavBar, TopNavBarProps } from '..';
import { UIVariant } from '../../enums/UIVariant';
import '../../styles/component/layout.scss';
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';
import SideMenuProps from '../SideMenu/SideMenuProps';
import Toast from '../Toast/Toast';

export interface LayoutProps {
  isLoading: boolean;
  isAlertToShow: boolean;
  alertHeader: string;
  alertMessage?: string | undefined;
  alertVariant: UIVariant;

  // appName: string;
  // apiVersion?: string;
  // uiVersion: string;
  // onToggleClicked?: (() => void) | undefined;

  // portalURL: string;
  // isCollapsed: boolean;
  // isToggled: boolean;
  // allowedPages: string[];
  // menuItems: MenuItem[];
  // onLoggedOut: () => void;
  // onToggleChange: () => void;
  // onCollapseChange: () => void;

  topNavBar: TopNavBarProps;
  sideMenu?: SideMenuProps;
}

const Layout: React.FC<LayoutProps> = (props) => {
  if (props.isAlertToShow) {
    const toastComponent = <Toast toastTitle={props.alertHeader} toastBody={props.alertMessage} />;
    switch (props.alertVariant) {
      case UIVariant.SUCCESS:
        toast.success(toastComponent, {
          toastId: 'successToast',
          autoClose: 10000,
          theme: 'colored',
        });
        break;
      case UIVariant.WARNING:
        toast.warn(toastComponent, {
          toastId: 'warningToast',
          autoClose: 10000,
          theme: 'colored',
        });
        break;
      case UIVariant.DANGER:
        toast.error(toastComponent, {
          toastId: 'errorToast',
          autoClose: 10000,
          theme: 'colored',
        });
        break;
      case UIVariant.INFO:
        toast.info(toastComponent, {
          toastId: 'infoToast',
          autoClose: 10000,
          theme: 'colored',
        });
        break;
      default:
        toast(toastComponent, {
          toastId: 'defaultToast',
          autoClose: 10000,
          theme: 'colored',
        });
    }
  }

  return (
    <>
      <TopNavBar
        appName={props.topNavBar.appName}
        apiVersion={props.topNavBar.apiVersion}
        uiVersion={props.topNavBar.uiVersion}
        onToggleClicked={props.topNavBar.onToggleClicked}
      />

      <ToastContainer position="top-left" autoClose={false} newestOnTop={false} closeOnClick rtl={false} draggable />
      {props.isLoading && <Loading />}

      <main>
        {!props.sideMenu && props.children}
        {props.sideMenu && (
          <div className="layout-container">
            <div className="layout-content-left">
              <SideMenu
                portalURL={props.sideMenu.portalURL}
                isCollapsed={props.sideMenu.isCollapsed}
                isToggled={props.sideMenu.isToggled}
                allowedPages={props.sideMenu.allowedPages}
                menuItems={props.sideMenu.menuItems}
                onLoggedOut={props.sideMenu.onLoggedOut}
                onToggleChange={props.sideMenu.onToggleChange}
                onCollapseChange={props.sideMenu.onCollapseChange}
              />
            </div>
            <div className="layout-content-right">{props.children}</div>
          </div>
        )}
      </main>
      <Footer isMenuCollapsed={false} />
    </>
  );
};

export default Layout;
