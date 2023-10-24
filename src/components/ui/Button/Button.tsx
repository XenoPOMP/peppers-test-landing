import cn from 'classnames';
import { FC } from 'react';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn('bg-[#13b79e] text-white rounded-[.5em]', className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
