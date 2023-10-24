import { FC } from 'react';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import type { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = ({ ...props }) => {
  return (
    <header {...props}>
      <UiContainer>Header</UiContainer>
    </header>
  );
};

export default Header;
