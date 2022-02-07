import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { SideMenu, TopNavBar } from '..';
import { UIVariant } from '../../enums/UIVariant';
import '../../styles/component/layout.scss';
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';
import { SideMenuProps } from '../SideMenu/SideMenu';
import Toast from '../Toast/Toast';
import { TopNavBarProps } from '../TopNavBar/TopNavBar';

export interface LayoutProps {
  hasSideMenu: boolean;
  isLoading: boolean;
  isAlertToShow: boolean;
  alertHeader: string;
  alertMessage?: string | undefined;
  alertVariant: UIVariant;
  topNavBar: TopNavBarProps;
  sideMenu: SideMenuProps;
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
        {!props.hasSideMenu && props.children}
        {props.hasSideMenu && (
          <div className="layout-container">
            <div className="layout-content-left">
              <SideMenu
                portalURL={''}
                isCollapsed={false}
                isToggled={false}
                allowedPages={[]}
                menuItems={[]}
                onLoggedOut={function (): void {
                  throw new Error('Function not implemented.');
                }}
                onToggleChange={function (): void {
                  throw new Error('Function not implemented.');
                }}
                onCollapseChange={function (): void {
                  throw new Error('Function not implemented.');
                }}
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
