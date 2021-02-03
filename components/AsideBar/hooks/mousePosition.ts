import {TweenLite} from 'gsap';
import {useEffect, useRef, useState} from 'react';

const useMousePosition = ({isRtl}: {isRtl: boolean}) => {
  const [isMenuOpen, toggleMenu] = useState(false);
  const burgerButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const sign = isRtl ? '-' : '';
    if (burgerButtonRef.current) {
      TweenLite.to(burgerButtonRef.current, 0.5, {
        x: isMenuOpen ? `${sign}0.875rem` : `${sign}1.65rem`,
      }).delay(0.7);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    toggleMenu(false);
    function updateMousePosition(event) {
      if (burgerButtonRef.current) {
        TweenLite.to(burgerButtonRef.current, 0.5, {
          y: event.y - 16,
        });
      }
    }

    window.addEventListener('mousemove', updateMousePosition, false);

    return () => window.removeEventListener('mousemove', updateMousePosition, false);
  }, []);

  return {burgerButtonRef, isMenuOpen, toggleMenu};
};

export default useMousePosition;
