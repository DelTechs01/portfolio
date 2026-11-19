import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Sparkles, Code2, Briefcase, UserSearch, ArrowRight } from 'lucide-react';
import { useLocation } from 'wouter';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';

type VisitorType = 'developer' | 'client' | 'recruiter';

const options: {
  type: VisitorType;
  icon: typeof Code2;
  label: string;
  description: string;
  path: string;
  toast: string;
}[] = [
  {
    type: 'developer',
    icon: Code2,
    label: 'Developer',
    description: 'Exploring the tech stack & projects',
    path: '/projects',
    toast: "Here are the projects and the stack behind them.",
  },
  {
    type: 'client',
    icon: Briefcase,
    label: 'Client',
    description: 'Looking for development services',
    path: '/services',
    toast: "Here's how I can help  services and what to expect.",
  },
  {
    type: 'recruiter',
    icon: UserSearch,
    label: 'Recruiter',
    description: 'Reviewing experience & credentials',
    path: '/education',
    toast: "Here's my education, certifications, and background.",
  },
];

const PersonalizationEngine = () => {
  const [, setLocation] = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('visitorType');
    const dismissed = localStorage.getItem('personalizationDismissed') === 'true';
    if (stored || dismissed) return;

    const timer = setTimeout(() => setOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const choose = (opt: (typeof options)[number]) => {
    localStorage.setItem('visitorType', opt.type);
    setOpen(false);
    setLocation(opt.path);
    toast.success(opt.toast);
  };

  const dismiss = () => {
    localStorage.setItem('personalizationDismissed', 'true');
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:pb-5"
          role="dialog"
          aria-label="Personalize your experience"
        >
          <div className="mx-auto max-w-lg overflow-hidden rounded-2xl border border-border bg-card/95 shadow-2xl backdrop-blur-xl">
            {/* Drawer grabber */}
            <div className="flex justify-center pt-3">
              <span className="h-1.5 w-10 rounded-full bg-border" />
            </div>

            <div className="p-5 sm:p-6">
              <div className="mb-1 flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <h3 className="font-bold">Personalize your experience</h3>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={dismiss}
                  className="-mt-1 -mr-1 h-8 w-8"
                  aria-label="Dismiss"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <p className="mb-5 text-sm text-muted-foreground">
                What brings you here today? I'll take you to the most relevant page.
              </p>

              <div className="space-y-2.5">
                {options.map((opt) => (
                  <button
                    key={opt.type}
                    onClick={() => choose(opt)}
                    className="group flex w-full items-center gap-4 rounded-xl border border-border bg-background/40 px-4 py-3 text-left transition-colors hover:border-primary/50 hover:bg-primary/5"
                  >
                    <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <opt.icon className="h-5 w-5" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm font-semibold">{opt.label}</span>
                      <span className="block text-xs text-muted-foreground">{opt.description}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                  </button>
                ))}
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="mt-4 w-full text-xs text-muted-foreground"
                onClick={dismiss}
              >
                Skip for now
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PersonalizationEngine;
