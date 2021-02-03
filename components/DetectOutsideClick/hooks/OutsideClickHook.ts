import {useEffect, MutableRefObject} from 'react';

export const useOutsideClick = (ref: MutableRefObject<HTMLDivElement>, onOutsideClick: () => void) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    }

    if (ref.current) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => ref.current && document.removeEventListener('mousedown', handleClickOutside);
  }, [ref]);
};
