import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: ReactNode;
  /** Stagger delay in seconds. Keep small; motion here should be barely noticed. */
  delay?: number;
  className?: string;
}

/**
 * Gentle scroll reveal: a short fade + rise, played once.
 * Reduced-motion preferences are honoured globally via <MotionConfig> in App.
 */
export default function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
