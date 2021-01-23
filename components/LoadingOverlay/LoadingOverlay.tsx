import {keyframes} from '@emotion/react';
import styled from '@emotion/styled';

const moveDot1 = keyframes`
  from, 0%, to {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
`;

const moveDot3 = keyframes`
  from, 0%, to {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
`;

const moveDot2 = keyframes`
  from, 0%, to {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(24px, 0);
  }
`;

const Dot = styled.div({
  animationTimingFunction: 'cubic-bezier(0, 1, 1, 0)',
  '& div:nth-of-type(1)': {
    left: '8px',
    animation: `${moveDot1} 0.6s infinite`,
  },
  '& div:nth-of-type(2)': {
    left: '8px',
    animation: `${moveDot2} 0.6s infinite`,
  },
  '& div:nth-of-type(3)': {
    left: '32px',
    animation: `${moveDot2} 0.6s infinite`,
  },
  '& div:nth-of-type(4)': {
    left: '56px',
    animation: `${moveDot3} 0.6s infinite`,
  },
});

interface LoadingOverlayProps {
  label?: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({label}) => {
  return (
    <div
      className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center"
      style={{background: 'rgba(0, 0, 0, 0.85)'}}
    >
      <div className="bg-white border py-2 px-5 rounded-lg flex items-center flex-col">
        <Dot className="loader-dots block relative w-20 h-5 mt-2">
          <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
          <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
          <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
          <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-green-500"></div>
        </Dot>
        <div className="text-gray-500 text-xs font-light mt-2 text-center">{label ?? 'Please wait...'}</div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
