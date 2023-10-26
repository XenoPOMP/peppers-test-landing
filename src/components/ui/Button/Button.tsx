import { Defined } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC } from 'react';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = 'default',
  isRhomboid,
  noHoverAnimation,
  ...props
}) => {
  const partialStyles: Partial<
    Record<
      Defined<typeof variant>,
      {
        className?: string;
      }
    >
  > = {
    transparent: {
      className: cn(styles.transparent),
    },
  };

  return (
    <button
      className={cn(
        'bg-[#13b79e] text-white rounded-[.5em] select-none',
        isRhomboid ? styles.rhomboid : 'py-[.5em] px-[1.5em]',
        styles.uiButton,
        partialStyles[variant]?.className,
        noHoverAnimation && styles.noHoverAnimation,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
