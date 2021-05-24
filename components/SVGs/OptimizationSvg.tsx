import {memo} from 'react';

const Optimization: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
    <style type="text/css">
      {
        '\n\t.st0{display:none;}\n\t.st1{display:inline;}\n\t.st2{fill:none;stroke:#B3B3B3;stroke-width:0.1;stroke-miterlimit:10;}\n'
      }
    </style>
    <g className="st0">
      <g className="st1">
        <rect className="st2" height={60} width={60} x={2} y={2} />
        <line className="st2" x1={32} x2={32} y1={2} y2={62} />
        <line className="st2" x1={62} x2={2} y1={32} y2={32} />
        <line className="st2" x1={2} x2={62} y1={2} y2={62} />
        <rect className="st2" height={44} width={44} x={10} y={10} />
        <line className="st2" x1={62} x2={2} y1={2} y2={62} />
        <line className="st2" x1={2} x2={32} y1={32} y2={2} />
        <line className="st2" x1={32} x2={62} y1={2} y2={32} />
        <line className="st2" x1={62} x2={32} y1={32} y2={62} />
        <line className="st2" x1={32} x2={2} y1={62} y2={32} />
        <circle className="st2" cx={32} cy={32} r={21} />
      </g>
    </g>
    <path d="M58,2H6C3.8,2,2,3.8,2,6v52c0,2.2,1.8,4,4,4h52c2.2,0,4-1.8,4-4V6C62,3.8,60.2,2,58,2z M59,4c0.6,0,1,0.4,1,1s-0.4,1-1,1  s-1-0.4-1-1S58.4,4,59,4z M56,4c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S55.4,4,56,4z M53,4c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1  S52.4,4,53,4z M60,58c0,1.1-0.9,2-2,2H6c-1.1,0-2-0.9-2-2V12h2.8c0.8,0,1.4-0.4,1.8-1.1l0.9-1.8c0.3-0.7,1-1.1,1.8-1.1h7.5  c0.8,0,1.5,0.4,1.8,1.1l0.9,1.8c0.3,0.7,1,1.1,1.8,1.1H60V58z" />
    <circle cx={12} cy={11} r={1} />
    <circle cx={15} cy={11} r={1} />
    <circle cx={18} cy={11} r={1} />
    <path d="M32,26c6.5,0,12.5,2.4,17,6.8c4.1,4,6.5,9.3,6.9,15.2H8.1C8.5,42.1,11,36.8,15,32.8C19.5,28.4,25.5,26,32,26 M32,24  C17.6,24,6,35,6,50h52C58,35,46.4,24,32,24L32,24z" />
    <polygon points="31,28 33,28 32,30 " />
    <polygon points="35.1,28.2 37.1,28.6 35.7,30.4 " />
    <polygon points="39.1,29.2 41,30 39.3,31.4 " />
    <polygon points="42.8,31 44.5,32.1 42.6,33.2 " />
    <polygon points="46.1,33.4 47.6,34.9 45.4,35.6 " />
    <polygon points="48.9,36.5 50,38.2 47.8,38.4 " />
    <polygon points="51,40 51.8,41.9 49.6,41.7 " />
    <polygon points="52.4,43.9 52.8,45.9 50.6,45.3 " />
    <polygon points="26.9,28.6 28.9,28.2 28.3,30.4 " />
    <polygon points="23,30 24.9,29.2 24.7,31.4 " />
    <polygon points="19.5,32.1 21.2,31 21.4,33.2 " />
    <polygon points="16.4,34.9 17.9,33.4 18.6,35.6 " />
    <polygon points="14,38.2 15.1,36.5 16.2,38.4 " />
    <polygon points="12.2,41.9 13,40 14.4,41.7 " />
    <polygon points="11.2,45.9 11.6,43.9 13.4,45.3 " />
    <path d="M49,43.4l-15.8-1.8c-1.2-0.1-2.2,0.8-2.2,2V44c0,1.2,1.1,2.2,2.3,2L49,43.4z" />
    <text
      fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      fontSize="5px"
      fontWeight="bold"
      x={0}
      y={79}
    >
      Created by I Putu Kharismayadi
    </text>
    <text
      fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
      fontSize="5px"
      fontWeight="bold"
      x={0}
      y={84}
    >
      from the Noun Project
    </text>
  </svg>
);

const OptimizationSvg = memo(Optimization);
export {OptimizationSvg};
