import { Defined } from '@xenopomp/advanced-types';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { ComponentProps, FC, ReactNode } from 'react';

import Button from '@/src/components/ui/Button/Button';
import facebookIcon from '@/task/design/images/icon_fb.svg';
import instagramIcon from '@/task/design/images/icon_ig.svg';
import okIcon from '@/task/design/images/icon_ok.svg';
import twIcon from '@/task/design/images/icon_tw.svg';
import vkIcon from '@/task/design/images/icon_vk.svg';

import styles from './SocialLink.module.scss';
import type { SocialLinkProps } from './SocialLink.props';

const SocialLink: FC<SocialLinkProps> = ({ className, icon, ...props }) => {
  const iconsRecord: Record<
    typeof icon,
    {
      element: ReactNode;
      href: ComponentProps<typeof Link>['href'];
    }
  > = (() => {
    const genericImageOptions: Partial<ComponentProps<typeof Image>> = {
      priority: true,
      height: 16,
      width: 16,
    };

    return {
      fb: {
        element: (
          <Image src={facebookIcon} alt={'FB Icon'} {...genericImageOptions} />
        ),
        href: '',
      },

      instagram: {
        element: (
          <Image
            src={instagramIcon}
            alt={'Instagram Icon'}
            {...genericImageOptions}
          />
        ),
        href: '',
      },

      twitter: {
        element: (
          <Image src={twIcon} alt={'Twitter Icon'} {...genericImageOptions} />
        ),
        href: '',
      },

      vk: {
        element: (
          <Image src={vkIcon} alt={'VK Icon'} {...genericImageOptions} />
        ),
        href: '',
      },

      ok: {
        element: (
          <Image
            src={okIcon}
            alt={'Odnoklassniki Icon'}
            {...genericImageOptions}
          />
        ),
        href: '',
      },
    };
  })();

  return (
    <Link href={iconsRecord[icon].href}>
      <Button
        className={cn(styles.socialMediaLink, className)}
        variant={'transparent'}
        isRhomboid
        {...props}
      >
        {iconsRecord[icon].element}
      </Button>
    </Link>
  );
};

export default SocialLink;
