import dynamic from 'next/dynamic';

export const Modal = dynamic(() => import('./PopupModal'), {ssr: false});
