import { memo } from "react";

const Cross: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    fill="currentColor"
    height="1em"
    viewBox="0 0 24 24"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 18L18 6M6 6l12 12"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </svg>
);

const CrossSvg = memo(Cross);
export { CrossSvg };
