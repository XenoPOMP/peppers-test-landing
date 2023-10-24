import cn from 'classnames';
import { FC } from 'react';

import Button from '@/src/components/ui/Button/Button';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import styles from './Header.module.scss';
import type { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = ({ className, ...props }) => {
  return (
    <header className={cn(styles.appHeader, className)} {...props}>
      <UiContainer maxWidth={'1280px'} className={cn(styles.container)}>
        <Button variant={'transparent'} className={'uppercase'}>
          Стать партнером
        </Button>
      </UiContainer>
    </header>
  );
};

export default Header;
