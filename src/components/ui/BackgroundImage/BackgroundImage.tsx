import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import styles from './BackgroundImage.module.scss';
import type { BackgroundImageProps } from './BackgroundImage.props';

/**
 * Background image component. Needs to be placed inside
 * __relative__ container.
 *
 * @param className
 * @param [objectFit='cover']
 * @param style
 * @param props
 * @constructor
 */
const BackgroundImage: FC<BackgroundImageProps> = ({
  className,
  objectFit = 'cover',
  style,
  ...props
}) => {
  return (
    <Image
      className={cn(styles.background, 'select-none', className)}
      style={{
        ...style,
        objectFit,
      }}
      {...props}
    />
  );
};

export default BackgroundImage;
