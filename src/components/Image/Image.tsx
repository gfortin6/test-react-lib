import React from 'react';
import ImageProps from './ImageProps';

const Image: React.FC<ImageProps> = ({ path, alt }) => {
  return <img src={path} alt={alt} title={alt} />;
};

export default Image;
