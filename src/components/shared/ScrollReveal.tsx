import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const directionVariants = {
  up: { y: 30, x: 0 },
  down: { y: -30, x: 0 },
  left: { x: 30, y: 0 },
  right: { x: -30, y: 0 },
};

const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: ScrollRevealProps) => {
  const { ref, isInView } = useInView();
  const initialOffset = directionVariants[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...initialOffset }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
