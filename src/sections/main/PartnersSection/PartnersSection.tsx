'use client';

import cn from 'classnames';
import { type StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';
import { type FC } from 'react';
import 'swiper/css';
import 'swiper/css/bundle';
import {
  A11y,
  Autoplay,
  Manipulation,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Button from '@/src/components/ui/Button/Button';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import { FuturaBookPT, FuturaDemiC } from '@/src/fonts/futura-font-familiy';
import adidasLogo from '@/task/design/images/logos/logo_adidas.png';
import carloLogo from '@/task/design/images/logos/logo_carlo.png';
import cymLogo from '@/task/design/images/logos/logo_cym.png';
import gumLogo from '@/task/design/images/logos/logo_gum.png';
import nikeLogo from '@/task/design/images/logos/logo_nike.png';
import pradaLogo from '@/task/design/images/logos/logo_prada.png';
import zaraLogo from '@/task/design/images/logos/logo_zara.png';

import styles from './PartnersSection.module.scss';
import type { PartnersSectionProps } from './PartnersSection.props';

const PartnersSection: FC<PartnersSectionProps> = ({}) => {
  const Brand: FC<{ link: string; src: StaticImport; alt: string }> = ({
    link,
    src,
    alt,
  }) => {
    return (
      <SwiperSlide>
        <Link href={link} className={cn('flex justify-center items-center')}>
          <Image src={src} alt={alt} className={cn(styles.brand)} />
        </Link>
      </SwiperSlide>
    );
  };

  return (
    <section className={cn(styles.partners)}>
      <UiContainer as={'article'}>
        <h2 className={cn('uppercase text-center text-[1.8em] text-[#eb645a]')}>
          Наши партнеры
        </h2>
      </UiContainer>

      <div className={cn(styles.listHolder)}>
        <UiContainer as={'article'} className={cn(styles.partnersList)}>
          <Swiper
            slidesPerView={5}
            spaceBetween={50}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <Link
                href={'/'}
                className={cn('flex justify-center items-center')}
              >
                <Image
                  src={pradaLogo}
                  alt={'Prada logo'}
                  className={cn(styles.brand)}
                />
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link
                href={'/'}
                className={cn('flex justify-center items-center')}
              >
                <Image
                  src={nikeLogo}
                  alt={'Nike logo'}
                  className={cn(styles.brand)}
                />
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link
                href={'/'}
                className={cn('flex justify-center items-center')}
              >
                <Image
                  src={cymLogo}
                  alt={'Cum logo'}
                  className={cn(styles.brand)}
                />
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link
                href={'/'}
                className={cn('flex justify-center items-center')}
              >
                <Image
                  src={adidasLogo}
                  alt={'Adidas logo'}
                  className={cn(styles.brand)}
                />
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link
                href={'/'}
                className={cn('flex justify-center items-center')}
              >
                <Image
                  src={gumLogo}
                  alt={'Gum logo'}
                  className={cn(styles.brand)}
                />
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link
                href={'/'}
                className={cn('flex justify-center items-center')}
              >
                <Image
                  src={zaraLogo}
                  alt={'Zara logo'}
                  className={cn(styles.brand)}
                />
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link
                href={'/'}
                className={cn('flex justify-center items-center')}
              >
                <Image
                  src={carloLogo}
                  alt={'Carlo logo'}
                  className={cn(styles.brand)}
                />
              </Link>
            </SwiperSlide>
          </Swiper>
        </UiContainer>
      </div>

      <UiContainer
        as={'article'}
        className={cn(FuturaBookPT.className, styles.form)}
      >
        <p>Хотите стать партнером?</p>
        <p>Напишите нам и про ваши акции узнают все.</p>

        <Link href={'/'}>
          <Button
            className={cn(
              styles.confirm,
              'uppercase',
              FuturaDemiC.className,
              'text-[.909em]'
            )}
          >
            Стать партнером
          </Button>
        </Link>
      </UiContainer>
    </section>
  );
};

export default PartnersSection;
