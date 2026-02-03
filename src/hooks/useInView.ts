import { useInView as useFramerInView } from 'framer-motion';
import { useRef } from 'react';

export const useInView = (margin: `${number}px` = '-100px') => {
  const ref = useRef(null);
  const isInView = useFramerInView(ref, { once: true, margin });
  return { ref, isInView };
};
