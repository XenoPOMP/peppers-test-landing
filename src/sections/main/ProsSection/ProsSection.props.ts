import { ComponentProps } from 'react';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

export interface ProsSectionProps
  extends Omit<ComponentProps<typeof UiContainer>, 'children'> {}
