import cn from 'classnames';
import { FC } from 'react';

import Button from '@/src/components/ui/Button/Button';
import SocialLink from '@/src/components/ui/SocialLink/SocialLink';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import styles from './Header.module.scss';
import type { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = ({ className, ...props }) => {
  return (
    <header className={cn(styles.appHeader, className)} {...props}>
      <UiContainer maxWidth={'1280px'} className={cn(styles.container)}>
        <article className={cn('flex gap-[1.3em]')}>
          <SocialLink icon={'fb'} />
          <SocialLink icon={'instagram'} />
          <SocialLink icon={'twitter'} />
          <SocialLink icon={'vk'} />
          <SocialLink icon={'ok'} />
        </article>

        <Button variant={'transparent'} className={'uppercase text-[.75em]'}>
          Стать партнером
        </Button>
      </UiContainer>
    </header>
  );
};

export default Header;
