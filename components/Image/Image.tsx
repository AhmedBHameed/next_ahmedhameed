import React, {useEffect, useState} from 'react';
import environment from '../../config/environment';

import {useWindowSize} from './hooks/useWindowSize';

const BREAK_POINTS = [375, 640, 768, 1024, 1280];

interface ImageProps {
  width?: number;
  height?: number;
  alt: string;
  src: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({src, className, alt, height, width}) => {
  const wSize = useWindowSize();
  const [imgUrl, setImgUrl] = useState('');

  useEffect(() => {
    switch (true) {
      case wSize.width >= BREAK_POINTS[4]:
        setImgUrl(`${width ? `&width=${width}` : `&width=${BREAK_POINTS[4]}`}`);
        break;

      case wSize.width >= BREAK_POINTS[3]:
        setImgUrl(`${width ? `&width=${width}` : `&width=${BREAK_POINTS[3]}`}`);
        break;

      case wSize.width >= BREAK_POINTS[2]:
        setImgUrl(`${width ? `&width=${width}` : `&width=${BREAK_POINTS[2]}`}`);
        break;

      case wSize.width >= BREAK_POINTS[1]:
        setImgUrl(`${width ? `&width=${width}` : `&width=${BREAK_POINTS[1]}`}`);
        break;

      case wSize.width >= BREAK_POINTS[0]:
        setImgUrl(`${width ? `&width=${width}` : `&width=${BREAK_POINTS[0]}`}`);
    }
  }, [wSize, width]);

  const baseUrl = `${environment.domain}/image?url=${src}`;

  return imgUrl ? (
    <img
      alt={alt}
      className={className}
      src={`${baseUrl}${imgUrl}${height ? `&height=${height}` : ''}`}
      style={{maxWidth: width ? 'unset' : '100%', width: width ? width : 'auto'}}
    />
  ) : (
    <></>
  );
};

export default Image;
