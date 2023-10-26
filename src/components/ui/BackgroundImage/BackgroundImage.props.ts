import { Modify, SelectivePartial } from '@xenopomp/advanced-types';
import Image from 'next/image';
import { CSSProperties, ComponentProps } from 'react';

export interface BackgroundImageProps
  extends SelectivePartial<
    Modify<
      ComponentProps<typeof Image>,
      'objectFit',
      CSSProperties['objectFit']
    >,
    'objectFit'
  > {}
