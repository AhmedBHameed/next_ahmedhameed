import React from 'react';

interface SquaresCanvasProps {
  className?: string;
  id?: string;
}

const SquaresCanvas: React.FC<SquaresCanvasProps> = ({className, id}) => {
  return (
    <svg
      className={className}
      width={404}
      height={384}
      fill="none"
      viewBox="0 0 404 384"
    >
      <defs>
        <pattern
          id={id}
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect
            x={0}
            y={0}
            width={4}
            height={4}
            className="text-gray-200"
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect width={404} height={384} fill={`url(#${id})`} />
    </svg>
  );
};

export default SquaresCanvas;
