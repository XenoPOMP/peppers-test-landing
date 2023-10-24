import { Defined } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC } from 'react';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = 'default',
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
        'bg-[#13b79e] text-white rounded-[.5em] py-[.5em] px-[2em]',
        styles.uiButton,
        partialStyles[variant]?.className,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
