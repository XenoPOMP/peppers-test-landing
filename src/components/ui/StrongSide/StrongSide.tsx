import cn from 'classnames';
import { FC } from 'react';

import { FuturaBookPT } from '@/src/fonts/futura-font-familiy';

import styles from './StrongSide.module.scss';
import { StrongSideProps } from './StrongSide.props';

const StrongSide: FC<StrongSideProps> = ({
  className,
  heading,
  desc,
  icon,
  ...props
}) => {
  return (
    <article className={cn(styles.strongSide)} {...props}>
      <div className={cn(styles.iconHolder)}></div>

      <footer className={cn(styles.sideBlockFooter)}>
        <h2>{heading}</h2>

        <p className={cn(styles.under, FuturaBookPT.className)}>{desc}</p>
      </footer>
    </article>
  );
};

export default StrongSide;
