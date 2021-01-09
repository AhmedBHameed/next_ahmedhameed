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
  }, [tipRef.current]);

  const close = useCallback(() => {
    if (tipRef.current) {
      tipRef.current.style.opacity = '1';
    }
  }, [tipRef.current]);

  return (
    <div className="relative flex" onMouseEnter={open} onMouseLeave={close}>
      <div
        ref={tipRef}
        style={{left: '100%', opacity: 1}}
        className="absolute whitespace-no-wrap bg-gradient-to-r from-black to-gray-700 text-white px-4 py-2 rounded flex items-center transition-all duration-150"
      >
        <div className="absolute h-auto left-0 bottom-full bg-red-300">
          {label}
          <svg className="h-2" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve">
            <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
          </svg>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Tooltip;
