import { Easing } from 'framer-motion';
import { scroller } from 'react-scroll';

export const smoothScroll = (
  id: string,
  props?: {
    duration?: number;
    delay?: number;
    ease?: Easing;
    offset?: number;
  }
) => {
  if (/^.+#/i.test(id)) {
    throw new SyntaxError(`wrong format of id (expected #... or ...`);
  }

  scroller.scrollTo(id.replace(/^#/i, ''), {
    duration: props?.duration ?? 1000,
    delay: props?.delay ?? 0,
    smooth: props?.ease ?? 'easeOut',
    offset: props?.offset ?? -50,
  });
};
