import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import {toast, ToastContainer} from 'react-toastify';

// import styled from 'styled-components';

// const NotificationContainer = styled(ToastContainer)`
//   // .Toastify__toast-container {
//   // }
//   // .Toastify__toast {
//   // }
//   // .Toastify__toast--error {
//   // }
//   // .Toastify__toast--warning {
//   // }
//   // .Toastify__toast--success {
//   // }
//   // .Toastify__toast-body {
//   // }
//   // .Toastify__progress-bar {
//   // }
// `;

const Notification = () => (
  <ToastContainer position="bottom-right" rtl={false} />
);

export {toast};
export default Notification;
