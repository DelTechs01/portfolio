import type { CSSProperties, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const gridStyle: CSSProperties = {
  backgroundImage:
    'linear-gradient(to right, color-mix(in oklch, var(--foreground) 6%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--foreground) 6%, transparent) 1px, transparent 1px)',
  backgroundSize: '56px 56px',
  maskImage: 'radial-gradient(ellipse 90% 70% at 30% 0%, black 25%, transparent 80%)',
  WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 30% 0%, black 25%, transparent 80%)',
};

/** Shared page header: faded grid backdrop + mono eyebrow + title + subtitle. */
export default function PageHeader({ eyebrow, title, subtitle, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/50">
      <div aria-hidden className="absolute inset-0 -z-10" style={gridStyle} />
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-24 h-[36rem] w-[36rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute top-10 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-14 md:pt-28 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="font-mono text-sm text-primary mb-4">{eyebrow}</p>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 max-w-3xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">{subtitle}</p>
          ) : null}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
