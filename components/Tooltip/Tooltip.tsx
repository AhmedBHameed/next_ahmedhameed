import {useCallback, useRef} from 'react';

interface TooltipProps {
  label: string;
}

const Tooltip: React.FC<TooltipProps> = ({children, label}) => {
  const tipRef = useRef<HTMLDivElement | null>(null);

  const open = useCallback(() => {
    if (tipRef.current) {
      tipRef.current.style.opacity = '1';
    }
  }, []);

  const close = useCallback(() => {
    if (tipRef.current) {
      tipRef.current.style.opacity = '1';
    }
  }, []);

  return (
    <div className="relative flex" onMouseEnter={open} onMouseLeave={close}>
      <div
        className="absolute whitespace-no-wrap bg-gradient-to-r from-black to-gray-700 text-white px-4 py-2 rounded flex items-center transition-all duration-150"
        ref={tipRef}
        style={{left: '100%', opacity: 1}}
      >
        <div className="absolute h-auto left-0 bottom-full bg-red-300">
          {label}
          <svg
            className="h-2"
            viewBox="0 0 255 255"
            x="0px"
            xmlSpace="preserve"
            y="0px"
          >
            <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
          </svg>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Tooltip;
