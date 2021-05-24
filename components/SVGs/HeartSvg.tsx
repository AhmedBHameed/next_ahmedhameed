import {memo} from 'react';

const Heart: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    fill="currentColor"
    height="1em"
    viewBox="0 0 64 64"
    width="1em"
    x="0px"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    y="0px"
    {...props}
  >
    <path d="M52.3,14.9c-2.4-2.4-5.6-3.7-9-3.7c-3.4,0-6.6,1.3-9,3.7L32,17.3l-2.4-2.4c-2.4-2.4-5.6-3.7-9-3.7c-3.4,0-6.6,1.3-9,3.7  c-4.9,5-4.9,13,0,17.9l19.6,19.6c0,0,0,0,0,0c0.2,0.2,0.4,0.3,0.7,0.3c0,0,0,0,0,0h0c0,0,0,0,0,0c0,0,0,0,0,0c0.2,0,0.5-0.1,0.7-0.3  c0,0,0,0,0,0l19.6-19.6C57.2,27.9,57.2,19.9,52.3,14.9z M51,24.5L51,24.5c-0.6,0-1-0.4-1-1c-0.1-1.7-0.8-3.2-1.9-4.4  c-1.1-1.1-2.6-1.8-4.1-1.9c-0.5,0-1-0.5-0.9-1.1c0-0.5,0.5-1,1.1-0.9c2,0.2,4,1.1,5.4,2.5c1.5,1.5,2.4,3.6,2.5,5.7  C52,24,51.6,24.5,51,24.5z" />
  </svg>
);

const HeartSvg = memo(Heart);
export {HeartSvg};
