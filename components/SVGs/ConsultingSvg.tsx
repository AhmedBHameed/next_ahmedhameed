import {memo} from 'react';

const Consulting: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    fill="currentColor"
    height="1em"
    viewBox="0 0 100 100"
    width="1em"
    x="0px"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    y="0px"
    {...props}
  >
    <polygon points="51.9,34.3 47.7,37.3 46.8,40.8 52.5,36.8 " />
    <path d="M52.8,38l-5.2,3.7l2.6,2.3c0,0,0.1,0,0.1,0c0,0,0.1,0,0.1,0l3-3c0,0,0.1-0.1,0-0.2L52.8,38z" />
    <path d="M49.2,31.1l-1.1,4.5l3.5-2.5l-0.5-2l1.5-1.7c0-0.1,0.1-0.1,0-0.2L51.7,27c0-0.1-0.1-0.1-0.2-0.1h-2.8  c-0.1,0-0.1,0-0.2,0.1l-0.9,2.2c0,0.1,0,0.1,0,0.2L49.2,31.1z" />
    <path d="M46.1,45l-5.3-18.1h-0.4c-4.8,0-8.7,3.9-8.7,8.7V45H46.1z" />
    <path d="M50.2,3.3c-5.5,0-10,4.5-10,10c0,5.5,4.5,10,10,10c5.5,0,10-4.5,10-10C60.2,7.8,55.7,3.3,50.2,3.3z M50.2,21.2  c-4.3,0-7.8-3.5-7.8-7.8c0-0.7,0.1-1.3,0.2-1.9c0.9,0.4,2.6,1.1,4.5,1.1c1.4,0,2.8-0.3,4.2-1.3c0.1-0.1,3.6-2.6,6.3-0.1  c0.2,0.7,0.3,1.5,0.3,2.2C58,17.7,54.5,21.2,50.2,21.2z" />
    <path d="M94.9,37.1v30.4h-5.8c1.1-1.1,1.9-2.7,1.9-4.4V41.3c0-3.4-2.8-6.2-6.2-6.2s-6.2,2.8-6.2,6.2v18.5l-18.4-1.4  c-1.3-0.1-2.6,0.4-3.5,1.2c-1,0.9-1.5,2.1-1.5,3.4v30c0,2.6,2.1,4.7,4.7,4.7s4.7-2.1,4.7-4.7V68.1l3.4,0.2v28.8h4.2V71.7h22.9v25.5  h4.2V37.1H94.9z" />
    <rect height={5.2} width={47.3} x={26.5} y={48.5} />
    <circle cx={80} cy={25} r={7.9} />
    <path d="M40.1,58.4l-18.5,0.8V41.3c0-3.4-2.8-6.2-6.2-6.2s-6.2,2.8-6.2,6.2v21.8c0,1.7,0.7,3.3,1.9,4.4H5.2V37.1H1  v60.1h4.2V71.7h22.9v25.5h4.2V68.1l3.4-0.1V93c0,2.6,2.1,4.7,4.7,4.7S45,95.6,45,93v-30c0-1.3-0.5-2.5-1.4-3.4  C42.6,58.8,41.4,58.4,40.1,58.4z" />
    <circle cx={20.1} cy={25} r={7.9} />
    <path d="M59.9,26.9h-0.3L54.1,45h14.5v-9.3C68.6,30.8,64.7,26.9,59.9,26.9z M64.9,36.7h-4.7v-1.5h4.7V36.7z" />
    <text
      fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      fontSize="5px"
      fontWeight="bold"
      x={0}
      y={115}
    >
      Created by Aneeque Ahmed
    </text>
    <text
      fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      fontSize="5px"
      fontWeight="bold"
      x={0}
      y={120}
    >
      from the Noun Project
    </text>
  </svg>
);

const ConsultingSvg = memo(Consulting);
export {ConsultingSvg};
