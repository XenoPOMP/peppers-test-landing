import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import Button from '@/src/components/ui/Button/Button';
import styles from '@/src/sections/main/LogoSection/LogoSection.module.scss';
import arrowDownIcon from '@/task/design/images/arrow_down.svg';

import { ScrollDownButtonProps } from './ScrollDownButton.props';

const ScrollDownButton: FC<ScrollDownButtonProps> = ({}) => {
  return (
    <Button
      className={cn(styles.scrollDownButton, '!px-[2em]')}
      noHoverAnimation
    >
      <div className={cn(styles.inner)}>ВНИЗ</div>

      <Image src={arrowDownIcon} alt={'Down icon'} priority={true} />

      <div className={cn(styles.inner)}>ВНИЗ</div>
    </Button>
  );
};

export default ScrollDownButton;
