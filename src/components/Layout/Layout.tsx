import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { TopNavBar } from '..';
import { UIVariant } from '../../enums/UIVariant';
import '../../styles/component/layout.scss';
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';
import Toast from '../Toast/Toast';
import { TopNavBarProps } from '../TopNavBar/TopNavBar';

export interface LayoutProps {
  isLoading: boolean;
  isAlertToShow: boolean;
  alertHeader: string;
  alertMessage?: string | undefined;
  alertVariant: UIVariant;
  topNavBar: TopNavBarProps;
}

const Layout: React.FC<LayoutProps> = (props) => {
  if (props.isAlertToShow) {
    // dispatch(handleDisableAlertAction());
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
      />

      <ToastContainer position="top-left" autoClose={false} newestOnTop={false} closeOnClick rtl={false} draggable />
      {props.isLoading && <Loading />}

      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
