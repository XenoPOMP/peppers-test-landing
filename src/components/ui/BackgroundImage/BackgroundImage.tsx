import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import styles from './BackgroundImage.module.scss';
import type { BackgroundImageProps } from './BackgroundImage.props';

const BackgroundImage: FC<BackgroundImageProps> = ({
  className,
  objectFit = 'cover',
  ...props
}) => {
  return (
    <Image
      className={cn(styles.background, 'select-none', className)}
      style={{
        objectFit,
      }}
      {...props}
    />
  );
};

export default BackgroundImage;
