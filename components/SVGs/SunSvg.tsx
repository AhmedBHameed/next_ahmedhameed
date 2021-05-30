import {memo} from 'react';

const Sun: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    height="1em"
    viewBox="0 0 501 501"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <path
        d="m438.016 414.5c-44.841 49.736-109.778 81-182.016 81-135.309 0-244.999-109.689-245-244.998-.001-135.239 110.431-245.362 245.669-245.001 122.779.328 224.324 90.971 241.705 208.999-13.325 18.869-20.478 41.402-20.478 64.502v75.498c-3.214 6.846-6.736 13.518-10.547 20l-7.074 3.617c-13.662 6.987-22.259 21.038-22.259 36.383z"
        fill="#3493f8"
      />
      <path
        d="m460.204 262.306c0 107.817-87.403 195.22-195.22 195.22s-195.22-87.403-195.22-195.22 87.403-195.22 195.22-195.22 195.22 87.403 195.22 195.22z"
        fill="#55a4f9"
      />
      <path
        d="m440 109.5c0 8.284-6.716 15-15 15h-100c-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15h100c8.284 0 15 6.716 15 15zm-165 305h-100c-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15h100c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15zm-159.781-194.248h-50c-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15h50c8.284 0 15-6.716 15-15 0-8.285-6.716-15-15-15z"
        fill="#86befb"
      />
      <path
        d="m240.676 39.558 33.109 67.38c1.393 2.835 5.034 3.684 7.537 1.757l94.693-72.884c3.951-3.041 9.432.941 7.76 5.638l-40.279 113.21c-.982 2.759.607 5.767 3.44 6.512l65.039 17.095c3.686.969 4.976 5.541 2.341 8.294l-43.67 45.611c-2.134 2.229-1.76 5.839.786 7.583l98.761 67.661c4.113 2.818 2.02 9.261-2.964 9.123l-119.892-3.318c-3.007-.083-5.407 2.489-5.115 5.483l7.054 72.352c.389 3.989-3.838 6.791-7.361 4.88l-60.001-32.559c-2.797-1.518-6.282-.071-7.181 2.982l-33.748 114.555c-1.409 4.783-8.183 4.783-9.592 0l-33.767-114.622c-.893-3.031-4.338-4.484-7.132-3.008l-61.864 32.683c-3.567 1.884-7.782-1.013-7.3-5.019l8.683-72.128c.365-3.032-2.05-5.68-5.102-5.596l-119.762 3.315c-4.984.138-7.077-6.305-2.964-9.123l98.034-67.163c2.775-1.901 2.919-5.946.285-8.039l-79.196-62.948c-3.696-2.938-1.636-8.889 3.085-8.914l99.266-.525c3.444-.018 5.839-3.431 4.684-6.676l-39.741-111.7c-1.671-4.697 3.809-8.679 7.76-5.638l94.693 72.884c2.503 1.927 6.144 1.078 7.537-1.757l33.109-67.38c1.831-3.728 7.144-3.728 8.975-.001z"
        fill="#ffa90b"
      />
      <path
        d="m414.315 186.56-43.67 45.611c-2.134 2.229-1.76 5.839.786 7.583l13.588 9.309c-8.765.949-17.668 1.437-26.686 1.437-119.301 0-218.685-85.27-240.532-198.188l73.254 56.383c2.503 1.927 6.144 1.078 7.537-1.757l33.108-67.38c1.831-3.727 7.144-3.727 8.975 0l33.109 67.38c1.393 2.835 5.034 3.684 7.537 1.757l94.693-72.884c3.951-3.041 9.432.941 7.76 5.638l-40.279 113.21c-.982 2.759.607 5.767 3.44 6.512l65.039 17.095c3.687.969 4.977 5.541 2.341 8.294z"
        fill="#ffc14f"
      />
      <path
        d="m351.188 236.425c0 63.513-51.487 115-115 115s-115-51.487-115-115 51.487-115 115-115 115 51.488 115 115z"
        fill="#fff36c"
      />
      <path
        d="m351.188 236.425c0 20.19-5.204 39.165-14.342 55.658-16.492 9.139-35.467 14.342-55.658 14.342-63.513 0-115-51.487-115-115 0-20.19 5.204-39.165 14.342-55.658 16.492-9.139 35.467-14.342 55.658-14.342 63.513 0 115 51.488 115 115z"
        fill="#fff68e"
      />
      <path
        d="m390 374.5h77.348c-8.426 14.33-18.267 27.727-29.332 40h-48.016c-11.046 0-20-8.954-20-20 0-11.046 8.954-20 20-20zm108.374-160h-228.374c-11.046 0-20 8.954-20 20 0 11.046 8.954 20 20 20h50c11.046 0 20 8.954 20 20 0 11.046-8.954 20-20 20h-140c-11.046 0-20 8.954-20 20 0 11.046 8.954 20 20 20h256.099c32.402 0 59.773-24.278 63.372-56.479 1.01-9.034 1.529-18.217 1.529-27.521 0-12.23-.896-24.251-2.626-36z"
        fill="#fff5f5"
      />
      <path
        d="m477.895 354.5h-147.895c-11.046 0-20-8.954-20-20 0-11.046 8.954-20 20-20h70c11.046 0 20-8.954 20-20 0-11.046 8.954-20 20-20h59.839c-2.757 28.361-10.35 55.306-21.944 80z"
        fill="#a7d0fc"
      />
    </g>
  </svg>
);

const SunSvg = memo(Sun);
export {SunSvg};
