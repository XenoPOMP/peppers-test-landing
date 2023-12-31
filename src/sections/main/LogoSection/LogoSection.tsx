import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import Header from '@/src/components/layout/Header/Header';
import BackgroundImage from '@/src/components/ui/BackgroundImage/BackgroundImage';
import Button from '@/src/components/ui/Button/Button';
import Logo from '@/src/components/ui/Logo/Logo';
import ScrollDownButton from '@/src/components/ui/ScrollDownButton/ScrollDownButton';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import UiGrid from '@/src/components/ui/UiGrid/UiGrid';
import iphoneImg from '@/task/design/images/_phone1_cropped.png';
import arrowDownIcon from '@/task/design/images/arrow_down.svg';
import bgImage from '@/task/design/images/bg.jpg';

import styles from './LogoSection.module.scss';
import { LogoSectionProps } from './LogoSection.props';

const LogoSection: FC<LogoSectionProps> = ({ className, ...props }) => {
  return (
    <div className={cn(styles.logoSectionWrapper)}>
      <UiContainer className={cn(styles.logoSection, className)} {...props}>
        <Header />

        <UiGrid as={'article'} className={cn(styles.body)}>
          <div className={cn(styles.gap, styles.left)}></div>

          <header className={cn(styles.logoHolder)}>
            <Logo />
          </header>

          <div className={cn(styles.gap, styles.right)}></div>

          <div className={cn(styles.imageHolder, 'select-none')}>
            <Image
              src={iphoneImg}
              alt={'Phone image'}
              className={cn(styles.iphone)}
            />
          </div>
        </UiGrid>

        <article className={cn(styles.scrollDownHolder)}>
          <ScrollDownButton />
        </article>
      </UiContainer>

      <BackgroundImage src={bgImage} alt={'Background'} priority={true} />
    </div>
  );
};

export default LogoSection;
