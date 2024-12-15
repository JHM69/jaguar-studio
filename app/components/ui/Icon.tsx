
import React from 'react';

interface IconProps {
  src: string;
  alt: string;
}

const Icon: React.FC<IconProps> = ({ src, alt }) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className="w-4 h-4" />;
};

export default Icon;