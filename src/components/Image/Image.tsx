import React from 'react';

export interface ImageProps {
  path: string;
  alt?: string;
}

const Image: React.FC<ImageProps> = ({ path, alt }) => {
  return <img src={path} alt={alt} title={alt} />;
};

export default Image;
