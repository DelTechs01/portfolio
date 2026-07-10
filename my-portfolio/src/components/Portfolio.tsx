import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import {
  ArrowRight, ArrowUpRight, Download, Sparkles,
  Terminal as TerminalIcon, Github, Linkedin, Twitter,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Terminal from '@/components/Terminal';
import { caseStudiesData } from '@/data/caseStudies';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

// Drop your CV at public/Kweyu_Delron_Muyale_CV.pdf to enable the download.
const CV_URL = '/Kweyu_Delron_Muyale_CV.pdf';

const socialLinks = [
  { icon: Github, href: 'https://github.com/DelTechs01', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/kweyu-delron-3a4060244/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/BTripatakah', label: 'X' },
];

const stats = [
  { value: '5+', label: 'Years experience' },
  { value: '5+', label: 'Products shipped' },
  { value: '95+', label: 'Lighthouse score' },
];

const stack = [
  'React', 'TypeScript', 'Node.js', 'Python', 'FastAPI',
  'PostgreSQL', 'Docker', 'Networking', 'Security', 'AI / LLMs',
];

// Small helpers to keep the code-card readable
const str = 'text-emerald-600 dark:text-emerald-400';
const bool = 'text-amber-600 dark:text-amber-400';

const Portfolio = () => {
  const [, setLocation] = useLocation();
  const navigateTo = (path: string) => setLocation(path);
  const featured = caseStudiesData.slice(0, 3);

  useDocumentMeta({
    title: 'Home',
    isHome: true,
    description:
      'Kweyu Delron Muyale - Software Engineer, Network Engineer and IT Solutions specialist building secure, scalable, AI-powered systems.',
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-border/50">
        {/* Faded grid backdrop */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage:
              'linear-gradient(to right, color-mix(in oklch, var(--foreground) 6%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--foreground) 6%, transparent) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse 90% 70% at 30% 0%, black 25%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 30% 0%, black 25%, transparent 80%)',
          }}
        />
        <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 -left-20 w-[36rem] h-[36rem] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left column */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-border/70 bg-card/60 backdrop-blur px-3 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="text-xs font-mono tracking-wide text-muted-foreground">
                  AVAILABLE FOR WORK
                </span>
              </div>

              <p className="font-mono text-sm text-primary mb-4">Software &amp; Network Engineer</p>

              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-5">
                Kweyu Delron Muyale
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
                I design and build secure, scalable systems: backend services, network
                infrastructure, and AI-powered products, shipped to production and built to last.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Button size="lg" className="px-6 group" onClick={() => navigateTo('/projects')}>
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="px-6" onClick={() => navigateTo('/contact')}>
                  Contact me
                </Button>
                <Button size="lg" variant="ghost" className="px-6 group" asChild>
                  <a href={CV_URL} download>
                    Resume
                    <Download className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                  </a>
                </Button>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-bold text-foreground">{s.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-8">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="p-2.5 rounded-full border border-border/70 bg-background/60 backdrop-blur text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Right column — code card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
              className="w-full lg:justify-self-end lg:max-w-md"
            >
              <div className="rounded-xl border border-border/70 bg-card/80 backdrop-blur shadow-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/60 bg-muted/40">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                  <span className="ml-2 text-xs font-mono text-muted-foreground">engineer.ts</span>
                </div>
                <pre className="p-5 text-[13px] leading-relaxed font-mono overflow-x-auto text-muted-foreground">
                  <code>
                    <div>
                      <span className="text-fuchsia-500 dark:text-fuchsia-400">const</span>{' '}
                      <span className="text-foreground">engineer</span> = {'{'}
                    </div>
                    <div>{'  '}name: <span className={str}>{"'Kweyu Delron Muyale'"}</span>,</div>
                    <div>{'  '}title: <span className={str}>{"'Software & Network Engineer'"}</span>,</div>
                    <div>{'  '}location: <span className={str}>{"'Nairobi, Kenya'"}</span>,</div>
                    <div>{'  '}experience: <span className={str}>{"'5+ years'"}</span>,</div>
                    <div>
                      {'  '}focus: [<span className={str}>{"'Backend'"}</span>,{' '}
                      <span className={str}>{"'Security'"}</span>, <span className={str}>{"'AI'"}</span>],
                    </div>
                    <div>{'  '}available: <span className={bool}>true</span>,</div>
                    <div>{'}'};</div>
                  </code>
                </pre>
              </div>
            </motion.div>
          </div>

          {/* Tech strip */}
          <div className="mt-16 pt-8 border-t border-border/50">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
              Tools I work with
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.map((t) => (
                <Badge key={t} variant="outline" className="rounded-full font-normal text-muted-foreground">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ─────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
                Featured work
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">Selected projects</h2>
            </div>
            <Button variant="outline" onClick={() => navigateTo('/projects')} className="group self-start md:self-auto">
              View all projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <Card className="h-full flex flex-col overflow-hidden border-border/60 hover:border-primary/40 hover:shadow-lg transition-colors">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="flex flex-col flex-1 gap-4 p-5">
                    <h3 className="text-lg font-bold leading-snug">{project.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-auto pt-1">
                      {project.demo ? (
                        <Button size="sm" className="w-full" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            Open App
                            <ArrowUpRight className="ml-1 h-4 w-4" />
                          </a>
                        </Button>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full"
                          onClick={() => navigateTo('/projects')}
                        >
                          View project
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Interactive Terminal ──────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-muted/40 border-t border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <TerminalIcon className="w-5 h-5" />
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">Interactive terminal</h2>
          </div>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Explore my skills and experience through a command line. Type{' '}
            <code className="bg-background/80 px-2 py-1 rounded font-mono text-sm">help</code> to begin.
          </p>
          <Terminal />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-10 md:p-14 text-center">
            <Sparkles className="w-8 h-8 mx-auto mb-5 text-primary" />
            <h2 className="text-2xl md:text-4xl font-bold mb-4">Have a project in mind?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Let&apos;s build something secure, scalable, and genuinely useful together.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="px-7" onClick={() => navigateTo('/contact')}>
                Get in touch
              </Button>
              <Button size="lg" variant="outline" className="px-7 group" asChild>
                <a href={CV_URL} download>
                  Download CV
                  <Download className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;
