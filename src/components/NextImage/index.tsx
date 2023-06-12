import Image, { type ImageProps } from 'next/image';
import type { FC } from 'react';

const NextImage: FC<ImageProps> = ({ ...props }) => {
  return <Image {...props} alt={props.alt} />;
};

export default NextImage;
