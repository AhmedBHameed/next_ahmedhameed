import {useRef} from 'react';
import {useOutsideClick} from './hooks/OutsideClickHook';

interface DetectOutsideClickProps {
  onOutsideClick?: () => void;
}

const DetectOutsideClick: React.FC<DetectOutsideClickProps> = ({onOutsideClick, children}) => {
  const divRef = useRef<HTMLDivElement | null>(null);
  useOutsideClick(divRef, onOutsideClick);

  return <div ref={divRef}>{children}</div>;
};

export default DetectOutsideClick;
