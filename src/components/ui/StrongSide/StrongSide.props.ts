import { ComponentProps } from 'react';

export interface StrongSideProps
  extends Omit<ComponentProps<'article'>, 'children'> {
  heading?: string;
  desc?: string;
  icon?: 'like' | 'gps' | 'bell' | 'catalog';
}
