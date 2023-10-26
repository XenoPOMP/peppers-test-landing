import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import UiGrid from '@/src/components/ui/UiGrid/UiGrid';
import { FuturaBookPT } from '@/src/fonts/futura-font-familiy';
import frontPhoneImg from '@/task/design/images/phone3_1.png';
import backPhoneImg from '@/task/design/images/phone3_2.png';

import styles from './OurPromosSection.module.scss';
import type { OurPromosSectionProps } from './OurPromosSection.props';

const OurPromosSection: FC<OurPromosSectionProps> = ({
  className,
  ...props
}) => {
  return (
    <div className={cn(styles.sectionWrapper)}>
      <UiGrid className={cn(styles.ourPromos, className)} {...props}>
        <div className={cn(styles.gap, styles.left)}></div>

        <article className={cn(styles.text)}>
          <h2>Наши акции</h2>

          <div className={cn(FuturaBookPT.className)}>
            <p>Каждый день по Москве проходят распродажи.</p>

            <p>
              Каждый день в Москве проходят распродажи. В акциях и скидках дня
              могут принимать участие любые группы товаров. Особенно популярны
              распродажи одежды и обуви, распродажи мебели, распродажи сумок.
            </p>
          </div>
        </article>

        <article className={cn(styles.image, 'select-none')}>
          <Image
            src={frontPhoneImg}
            alt={'Front phone image'}
            className={cn(styles.frontPhone)}
          />

          <Image
            src={backPhoneImg}
            alt={'Front phone image'}
            className={cn(styles.backPhone)}
          />
        </article>
      </UiGrid>
    </div>
  );
};

export default OurPromosSection;
