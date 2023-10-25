'use client';

import { Tab } from '@headlessui/react';
import { PropsWith } from '@xenopomp/advanced-types';
import cn from 'classnames';
import Image from 'next/image';
import { FC, Fragment } from 'react';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import UiGrid from '@/src/components/ui/UiGrid/UiGrid';
import promosPhoneImg from '@/task/design/images/phone2_ref_cropped.png';

import styles from './FavoritesSection.module.scss';
import type { FavoritesSectionProps } from './FavoritesSection.props';

const FavoritesSection: FC<FavoritesSectionProps> = ({
  className,
  ...props
}) => {
  const Gap: FC<{ disabled?: boolean }> = ({ disabled }) => {
    return (
      <article
        className={cn(
          styles.gap,
          'flex justify-end items-start',
          disabled && 'opacity-0 pointer-events-none'
        )}
      >
        <h2 className={cn(styles.heading, styles.hidden)}>Избранное</h2>
      </article>
    );
  };

  const TabHeading: FC<PropsWith<'children', {}>> = ({ children }) => {
    return (
      <Tab as={Fragment}>
        {({ selected }) => (
          <h3
            className={cn(
              styles.heading,
              !selected && styles.hidden,
              'select-none cursor-pointer'
            )}
          >
            {children}
          </h3>
        )}
      </Tab>
    );
  };

  return (
    <div className={cn(styles.favoritesSectionHolder)}>
      <UiContainer
        className={cn(styles.favorites, className)}
        maxWidth={'1780px'}
        {...props}
      >
        <Gap />

        <UiGrid
          margin={'0px'}
          as={'article'}
          columns={18}
          className={cn(styles.grid)}
        >
          <div className={cn(styles.imageHolder)}>
            <Image
              src={promosPhoneImg}
              alt={'Promos'}
              className={cn(styles.phone)}
            />
          </div>

          <div className={cn(styles.tabControl)}>
            <Tab.Group>
              <Tab.List as={'div'} className={cn(styles.tabs)}>
                <TabHeading>Профиль акции</TabHeading>
                <TabHeading>Подписки</TabHeading>
                <TabHeading>Карта</TabHeading>
                <TabHeading>Моя лента</TabHeading>
              </Tab.List>

              <Tab.Panels>
                <Tab.Panel as={'div'}>Content 1</Tab.Panel>

                <Tab.Panel as={'div'}>Content 2</Tab.Panel>

                <Tab.Panel as={'div'}>Content 3</Tab.Panel>

                <Tab.Panel as={'div'}>Content 4</Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </UiGrid>

        <Gap disabled />
      </UiContainer>
    </div>
  );
};

export default FavoritesSection;
