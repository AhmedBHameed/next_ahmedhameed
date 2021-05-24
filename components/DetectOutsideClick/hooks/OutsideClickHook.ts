import {MutableRefObject, useEffect} from 'react';

export const useOutsideClick = (
  ref: MutableRefObject<HTMLDivElement>,
  onOutsideClick: () => void
) => {
  useEffect(() => {
    const element = ref.current;
    function handleClickOutside(event: MouseEvent) {
      if (element && !element.contains(event.target as Node)) {
        onOutsideClick();
      }
    }

    if (element) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () =>
      element && document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, onOutsideClick]);
};
