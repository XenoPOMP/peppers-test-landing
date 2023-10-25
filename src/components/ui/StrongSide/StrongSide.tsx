import { Defined } from '@xenopomp/advanced-types';
import { isUndefined } from '@xenopomp/advanced-utils';
import cn from 'classnames';
import Image from 'next/image';
import { FC, ReactNode } from 'react';

import { FuturaBookPT } from '@/src/fonts/futura-font-familiy';
import bellIcon from '@/task/design/images/bell.svg';
import gpsIcon from '@/task/design/images/geo.svg';
import likeIcon from '@/task/design/images/like.svg';
import catalogIcon from '@/task/design/images/sheet.svg';

import styles from './StrongSide.module.scss';
import { StrongSideProps } from './StrongSide.props';

const StrongSide: FC<StrongSideProps> = ({
  className,
  heading,
  desc,
  icon,
  ...props
}) => {
  const icons: Record<Defined<typeof icon>, ReactNode> = {
    like: (
      <>
        <Image src={likeIcon} alt={'Like icon'} />
      </>
    ),
    gps: (
      <>
        <Image src={gpsIcon} alt={'GPS icon'} />
      </>
    ),
    bell: (
      <>
        <Image src={bellIcon} alt={'Bell icon'} />
      </>
    ),
    catalog: (
      <>
        <Image src={catalogIcon} alt={'Catalog icon'} />
      </>
    ),
  };

  return (
    <article className={cn(styles.strongSide)} {...props}>
      <div className={cn(styles.iconHolder)}>
        {!isUndefined(icon) && icons[icon]}
      </div>

      <footer className={cn(styles.sideBlockFooter)}>
        <h2>{heading}</h2>

        <p className={cn(styles.under, FuturaBookPT.className)}>{desc}</p>
      </footer>
    </article>
  );
};

export default StrongSide;
