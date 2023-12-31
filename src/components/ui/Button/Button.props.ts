import { ComponentProps } from 'react';

export interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'default' | 'transparent';
  isRhomboid?: boolean;
  noHoverAnimation?: boolean;
}
