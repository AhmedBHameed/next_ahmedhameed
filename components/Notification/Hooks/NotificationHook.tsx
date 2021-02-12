import {useCallback} from 'react';
import {toast, ToastOptions, TypeOptions} from 'react-toastify';

import NotificationDismissButton from '../NotificationDismissButton';
import ToastMessage from '../ToastMessage';

interface NotificationMessage {
  type: TypeOptions;
  message: string | React.ReactNode;
}

const useNotification = () => {
  const triggerNotification = useCallback((data: NotificationMessage, config?: ToastOptions) => {
    toast(<ToastMessage message={data.message} />, {
      ...config,
      type: data.type,
      closeButton: <NotificationDismissButton />,
    });
  }, []);

  return {
    triggerNotification,
  };
};

export default useNotification;
