'use client';

import { Tab } from '@headlessui/react';
import { PropsWith } from '@xenopomp/advanced-types';
import cn from 'classnames';
import Image from 'next/image';
import { FC, Fragment, useEffect, useState } from 'react';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import UiGrid from '@/src/components/ui/UiGrid/UiGrid';
import { FuturaBookPT } from '@/src/fonts/futura-font-familiy';
import promosPhoneImg from '@/task/design/images/phone2_ref_cropped.png';
import listPhoneImg from '@/task/design/images/phone_list_cropped.png';
import mapPhoneImg from '@/task/design/images/phone_map_cropped.png';
import subsPhoneImg from '@/task/design/images/phone_subscription_cropped.png';

import styles from './FavoritesSection.module.scss';
import type { FavoritesSectionProps } from './FavoritesSection.props';

const FavoritesSection: FC<FavoritesSectionProps> = ({
  className,
  ...props
}) => {
  const [currentTab, setCurrentTab] = useState<number>(0);

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
      <Tab as={'li'} className={'focus:outline-0'}>
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
              className={cn(
                styles.phone,
                currentTab === 0 ? 'opacity-100' : 'opacity-0'
              )}
            />

            <Image
              src={subsPhoneImg}
              alt={'Promos'}
              className={cn(
                styles.phone,
                currentTab === 1 ? 'opacity-100' : 'opacity-0'
              )}
            />

            <Image
              src={mapPhoneImg}
              alt={'Promos'}
              className={cn(
                styles.phone,
                currentTab === 2 ? 'opacity-100' : 'opacity-0'
              )}
            />

            <Image
              src={listPhoneImg}
              alt={'Promos'}
              className={cn(
                styles.phone,
                currentTab === 3 ? 'opacity-100' : 'opacity-0'
              )}
            />
          </div>

          <div className={cn(styles.tabControl)}>
            <Tab.Group
              onChange={index => {
                setCurrentTab(index);
              }}
            >
              <Tab.List as={'ul'} className={cn(styles.tabs)}>
                <TabHeading>Профиль акции</TabHeading>
                <TabHeading>Подписки</TabHeading>
                <TabHeading>Карта</TabHeading>
                <TabHeading>Моя лента</TabHeading>
              </Tab.List>

              <Tab.Panels className={cn(FuturaBookPT.className)}>
                <Tab.Panel as={'div'} className={cn(styles.content)}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aspernatur enim illo libero nemo sint velit.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aspernatur enim illo libero nemo sint velit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aspernatur enim illo libero nemo sint velit.
                  </p>
                </Tab.Panel>

                <Tab.Panel as={'div'} className={cn(styles.content)}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aspernatur enim illo libero nemo sint velit.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aspernatur enim illo libero nemo sint velit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aspernatur enim illo libero nemo sint velit.
                  </p>
                </Tab.Panel>

                <Tab.Panel as={'div'} className={cn(styles.content)}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aspernatur enim illo libero nemo sint velit.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aspernatur enim illo libero nemo sint velit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aspernatur enim illo libero nemo sint velit.
                  </p>
                </Tab.Panel>

                <Tab.Panel as={'div'} className={cn(styles.content)}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aspernatur enim illo libero nemo sint velit.
                  </p>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aspernatur enim illo libero nemo sint velit.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aspernatur enim illo libero nemo sint velit.
                  </p>
                </Tab.Panel>
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
