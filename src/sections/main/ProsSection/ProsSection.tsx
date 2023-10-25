import cn from 'classnames';
import { FC } from 'react';

import StrongSide from '@/src/components/ui/StrongSide/StrongSide';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import styles from './ProsSection.module.scss';
import { ProsSectionProps } from './ProsSection.props';

const ProsSection: FC<ProsSectionProps> = ({ className, ...props }) => {
  return (
    <UiContainer className={cn(styles.pros, className)} {...props}>
      <StrongSide
        heading={'Только лучшее'}
        desc={'Всегда актуальные акции и скидки у вас в телефоне'}
      />

      <StrongSide
        heading={'Все рядом'}
        desc={'Находите ближайшие акции на карте рядом с вами.'}
      />

      <StrongSide
        heading={'Уведомления'}
        desc={
          'Подписывайтесь только на то, что вас интересует и всегда будьте в курсе новых акций.'
        }
      />

      <StrongSide
        heading={'Каталог'}
        desc={
          'Огромный каталог с информацией о магазинах, брендах и ТЦ всегда под рукой.'
        }
      />
    </UiContainer>
  );
};

export default ProsSection;
