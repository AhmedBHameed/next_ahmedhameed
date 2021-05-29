import React from 'react';

import Typography from '../Typography/Typography';

interface ToastMessageProps {
  message: string | React.ReactNode;
}

const ToastMessage: React.FC<ToastMessageProps> = ({message}) =>
  typeof message === 'string' ? (
    <Typography>
      <p className="font-bold text-sm text-gray-50">{message}</p>
    </Typography>
  ) : (
    <>{message}</>
  );

export default ToastMessage;
