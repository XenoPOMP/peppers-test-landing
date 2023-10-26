import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import chatBubbleIcon from '@/public/images/icons/Comment_bubble.png';
import BackgroundImage from '@/src/components/ui/BackgroundImage/BackgroundImage';
import Button from '@/src/components/ui/Button/Button';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import { FuturaBookPT } from '@/src/fonts/futura-font-familiy';
import bgImage from '@/task/design/images/bg.jpg';

import styles from './Footer.module.scss';
import type { FooterProps } from './Footer.props';

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className={cn(styles.appFooter, FuturaBookPT.className)}>
      <UiContainer maxWidth={'1300px'} className={cn(styles.body)}>
        <nav className={cn(styles.links)}>
          <h3>2016 © ShopGuide</h3>

          <ul>
            <li>
              <Link href={'/'}>Политика конфиденциальности</Link>
            </li>

            <li>
              <Link href={'/'}>Правила пользования</Link>
            </li>
          </ul>
        </nav>

        <Link href={'/'}>
          <Button
            variant={'transparent'}
            className={cn(
              'text-[.8em] uppercase flex gap-[.75em] items-center'
            )}
          >
            <Image src={chatBubbleIcon} alt={'Chat bubble icon'} />
            Связаться с нами
          </Button>
        </Link>
      </UiContainer>

      <BackgroundImage src={bgImage} alt={'Background'} />
    </footer>
  );
};

export default Footer;
