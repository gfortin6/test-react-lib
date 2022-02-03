import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { UIVariant } from '../../enums/UIVariant';
import '../../styles/component/layout.scss';
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';
import Toast from '../Toast/Toast';

export interface LayoutProps {
  isLoading: boolean;
  isAlertToShow: boolean;
  alertHeader: string;
  alertMessage?: string | undefined;
  alertVariant: UIVariant;
}

const Layout: React.FC<LayoutProps> = ({
  isLoading,
  isAlertToShow,
  alertHeader,
  alertMessage,
  alertVariant,
  children,
}) => {
  if (isAlertToShow && alertHeader !== '') {
    // dispatch(handleDisableAlertAction());
    const toastComponent = <Toast toastTitle={alertHeader} toastBody={alertMessage} />;
    switch (alertVariant) {
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
      {/* <TopNavBar /> */}

      <ToastContainer position="top-left" autoClose={false} newestOnTop={false} closeOnClick rtl={false} draggable />
      {isLoading && <Loading />}

      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
