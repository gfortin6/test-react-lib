import React from 'react';

export interface ToastProps {
  toastTitle: string;
  toastBody: string | undefined;
}

const Toast: React.FC<ToastProps> = ({ toastTitle, toastBody }) => {
  return (
    <div>
      <h4>{toastTitle}</h4>
      {toastBody ? <p>{toastBody}</p> : ''}
    </div>
  );
};
export default Toast;
