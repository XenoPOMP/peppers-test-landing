import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import Header from '@/src/components/layout/Header/Header';
import Button from '@/src/components/ui/Button/Button';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import arrowDownIcon from '@/task/design/images/arrow_down.svg';
import bgImage from '@/task/design/images/bg.jpg';

import styles from './LogoSection.module.scss';
import { LogoSectionProps } from './LogoSection.props';

const LogoSection: FC<LogoSectionProps> = ({ className, ...props }) => {
  return (
    <div className={cn(styles.logoSectionWrapper)}>
      <UiContainer className={cn(styles.logoSection, className)} {...props}>
        <Header />

        <article className={cn(styles.scrollDownHolder)}>
          <Button className={cn(styles.scrollDownButton, '!px-[2em]')}>
            <div className={cn(styles.inner)}>ВНИЗ</div>

            <Image src={arrowDownIcon} alt={'Down icon'} priority={true} />

            <div className={cn(styles.inner)}>ВНИЗ</div>
          </Button>
        </article>
      </UiContainer>

      <Image src={bgImage} alt={'Background'} className={styles.background} />
    </div>
  );
};

export default LogoSection;
