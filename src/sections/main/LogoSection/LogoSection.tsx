import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import Button from '@/src/components/ui/Button/Button';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import arrowDownIcon from '@/task/design/images/arrow_down.svg';

import styles from './LogoSection.module.scss';
import { LogoSectionProps } from './LogoSection.props';

const LogoSection: FC<LogoSectionProps> = ({ className, ...props }) => {
  return (
    <div className={cn(styles.logoSectionWrapper)}>
      <UiContainer className={cn(styles.logoSection, className)} {...props}>
        <article className={cn(styles.scrollDownHolder)}>
          <Button className={cn(styles.scrollDownButton, 'px-[2em]')}>
            <div className={cn(styles.inner)}>ВНИЗ</div>

            <Image src={arrowDownIcon} alt={'Down icon'} priority={true} />

            <div className={cn(styles.inner)}>ВНИЗ</div>
          </Button>
        </article>
      </UiContainer>
    </div>
  );
};

export default LogoSection;
