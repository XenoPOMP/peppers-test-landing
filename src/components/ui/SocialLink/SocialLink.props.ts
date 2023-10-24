import { ComponentProps } from 'react';

import Button from '@/src/components/ui/Button/Button';

export interface SocialLinkProps
  extends Omit<ComponentProps<typeof Button>, 'children'> {
  icon: 'fb' | 'instagram' | 'twitter' | 'vk' | 'ok';
}
