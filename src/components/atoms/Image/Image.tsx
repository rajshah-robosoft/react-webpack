import React from "react";

export interface ImageInterface {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  className?: string;
}

const Image = (rest: ImageInterface) => {
  return <img {...rest} />;
};

export default Image;
