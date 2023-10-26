import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { FuturaBookPT } from '@/src/fonts/futura-font-familiy';
import { SfUiDisplay } from '@/src/fonts/sf-ui-display';
import downloadAndroidImg from '@/task/design/images/download_android.svg';
import downloadIosImg from '@/task/design/images/download_ios.svg';
import popupBodyImg from '@/task/design/images/only_popup.svg';
import shopGuideImg from '@/task/design/images/shopguide.svg';

import styles from './Logo.module.scss';
import type { LogoProps } from './Logo.props';

const Logo: FC<LogoProps> = ({ className, ...props }) => {
  return (
    <div className={cn(styles.logoPlaceholder, className)} {...props}>
      <div className={cn(styles.label)}>
        <Image src={shopGuideImg} alt={'Logo'} priority={true} />

        <div className={cn(styles.popup)}>
          <Image
            src={popupBodyImg}
            alt={'Popup body'}
            priority={true}
            className={cn(styles.logoMain)}
          />

          <span
            className={cn(styles.text, SfUiDisplay.className, 'font-medium')}
          >
            Только лучшие акции
          </span>
        </div>

        <div className={cn(styles.downloadText, FuturaBookPT.className)}>
          <div className={cn(styles.line)}></div>

          <span>загрузить</span>

          <div className={cn(styles.line)}></div>
        </div>

        <div className={cn(styles.storesLinks)}>
          <Link href={'/'} className={cn('select-none')}>
            <Image src={downloadIosImg} alt={'App Store image'} />
          </Link>

          <Link href={'/'} className={cn('select-none')}>
            <Image src={downloadAndroidImg} alt={'Google Play Store image'} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logo;
