import {TweenLite} from 'gsap';
import {useCallback, useEffect, useRef} from 'react';

const useMousePosition = () => {
  const elementRef = useRef<HTMLButtonElement | null>(null);

  const toggleMenu = useCallback((open: boolean) => {
    if (elementRef.current) {
      TweenLite.to(elementRef.current, 0.5, {
        x: open ? '0.875rem' : '1.65rem',
      }).delay(0.7);
    }
  }, []);

  useEffect(() => {
    toggleMenu(false);
    function updateMousePosition(ev) {
      if (elementRef.current) {
        TweenLite.to(elementRef.current, 0.5, {
          y: ev.y - 16,
        });
      }
    }

    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return {elementRef, toggleMenu};
};

export default useMousePosition;
