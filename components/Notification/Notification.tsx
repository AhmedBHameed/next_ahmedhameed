import React from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

const Notification = () => {
  return <ToastContainer position="bottom-right" rtl={true} />;
};

export {toast};
export default Notification;
