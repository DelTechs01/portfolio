import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

/** Shared page header: mono eyebrow + large title + subtitle over one soft glow. */
export default function PageHeader({ eyebrow, title, subtitle, children }: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <div aria-hidden className="hero-glow" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20 pb-14 md:pt-28 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-sm text-primary mb-5">{eyebrow}</p>
          <h1 className="max-w-3xl text-[clamp(2.25rem,6vw,4.25rem)] font-medium leading-[1.04] tracking-[-0.035em] mb-6">
            {title}
          </h1>
          {subtitle ? (
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
          ) : null}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
