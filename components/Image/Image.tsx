import React, {useEffect, useState} from 'react';

import environment from '../../config/environment';
import {useWindowSize} from './hooks/useWindowSize';

const BREAK_POINTS = [375, 640, 768, 1024, 1280];

interface ImageProps {
  width?: number | string;
  height?: number | string;
  alt: string;
  src: string;
  fit?: boolean;
  className?: string;
}

const Image: React.FC<ImageProps> = ({src, className, alt, height, width, fit}) => {
  const wSize = useWindowSize();
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    switch (true) {
      case !fit && wSize.width >= BREAK_POINTS[4]:
        setImgUrl(`${width ? `&width=${width}` : `&width=${BREAK_POINTS[4]}`}`);
        break;

      case !fit && wSize.width >= BREAK_POINTS[3]:
        setImgUrl(`${width ? `&width=${width}` : `&width=${BREAK_POINTS[3]}`}`);
        break;

      case !fit && wSize.width >= BREAK_POINTS[2]:
        setImgUrl(`${width ? `&width=${width}` : `&width=${BREAK_POINTS[2]}`}`);
        break;

      case !fit && wSize.width >= BREAK_POINTS[1]:
        setImgUrl(`${width ? `&width=${width}` : `&width=${BREAK_POINTS[1]}`}`);
        break;

      case !fit && wSize.width >= BREAK_POINTS[0]:
        setImgUrl(`${width ? `&width=${width}` : `&width=${BREAK_POINTS[0]}`}`);
        break;

      default:
        setImgUrl(`&width=${BREAK_POINTS[3]}`);
    }
  }, [wSize, width]);

  const baseUrl = `${environment.domain}/nodeys/image?url=${src}`;

  return imgUrl ? (
    <img
      alt={alt}
      className={className}
      src={`${baseUrl}${imgUrl}${fit ? '' : `&height=${height}`}`}
      style={{maxWidth: fit ? '100%' : 'unset', width: fit ? '100%' : width}}
    />
  ) : (
    <></>
  );
};

export default Image;
