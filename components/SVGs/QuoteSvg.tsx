import {memo} from 'react';

const Quote: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    fill="currentColor"
    height="1em"
    viewBox="0 0 298.667 298.667"
    width="1em"
    x="0px"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    y="0px"
    {...props}
  >
    <g>
      <g>
        <g>
          <polygon points="0,170.667 64,170.667 21.333,256 85.333,256 128,170.667 128,42.667 0,42.667  " />
          <polygon points="170.667,42.667 170.667,170.667 234.667,170.667 192,256 256,256 298.667,170.667 298.667,42.667  " />
        </g>
      </g>
    </g>
  </svg>
);

const QuoteSvg = memo(Quote);
export {QuoteSvg};
