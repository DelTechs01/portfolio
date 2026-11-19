import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, ArrowUpRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose,
} from '@/components/ui/sheet';
import PageHeader from '@/components/PageHeader';
import { caseStudiesData } from '@/data/caseStudies';
import { networkWork } from '@/data/networkWork';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const CaseStudies = () => {
  const [comingSoon, setComingSoon] = useState<string | null>(null);

  useDocumentMeta({
    title: 'Projects',
    description:
      'Network engineering case studies and software projects by Kweyu Delron, with links to the live applications.',
  });

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        eyebrow="// projects"
        title="Things I've built"
        subtitle="Network engineering work first, then the software I have built. Live apps open in a new tab."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Network engineering */}
          <h2 className="label-mono mb-6">Network engineering</h2>
          <ul className="mb-20 border-b border-border">
            {networkWork.map((work) => (
              <li key={work.id}>
                <Link
                  href={`/work/${work.id}`}
                  className="group grid grid-cols-[1fr_auto] items-start gap-x-6 border-t border-border py-8"
                >
                  <span className="min-w-0">
                    <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="text-2xl font-medium tracking-tight transition-colors group-hover:text-primary md:text-3xl">
                        {work.title}
                      </span>
                      <span className="text-sm text-muted-foreground">{work.kind}</span>
                    </span>
                    <span className="mt-3 block max-w-2xl leading-relaxed text-muted-foreground">
                      {work.summary}
                    </span>
                  </span>
                  <span className="flex items-center gap-1.5 pt-2 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                    <span className="hidden sm:inline">Read case</span>
                    <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Software */}
          <h2 className="label-mono mb-6">Software</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudiesData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(index * 0.06, 0.3), duration: 0.4 }}
              >
                <Card className="group h-full flex flex-col overflow-hidden pt-0 shadow-none hover:border-primary/40 transition-colors">
                  <div className="relative h-44 overflow-hidden border-b border-border">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg leading-snug">{project.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="flex flex-col flex-1 gap-4">
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Access button: opens the live app, or a "coming soon" drawer */}
                    <div className="mt-auto pt-2">
                      {project.comingSoon ? (
                        <Button
                          size="sm"
                          className="w-full"
                          variant="outline"
                          onClick={() => setComingSoon(project.comingSoon!)}
                        >
                          Coming soon
                          <Clock className="ml-1 h-4 w-4" />
                        </Button>
                      ) : project.demo ? (
                        <Button size="sm" className="w-full" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            Open App
                            <ArrowUpRight className="ml-1 h-4 w-4" />
                          </a>
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline" className="w-full" disabled>
                          Link coming soon
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

      {/* Coming-soon drawer */}
      <Sheet open={!!comingSoon} onOpenChange={(open) => !open && setComingSoon(null)}>
        <SheetContent side="bottom" className="mx-auto max-w-md rounded-t-2xl">
          <SheetHeader className="items-center text-center pt-8">
            <span className="mx-auto mb-2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Clock className="h-6 w-6" />
            </span>
            <SheetTitle className="text-xl">{comingSoon}</SheetTitle>
            <SheetDescription>
              This app isn't quite ready for visitors yet. Please check back soon.
            </SheetDescription>
          </SheetHeader>
          <SheetFooter className="items-center pb-8">
            <SheetClose asChild>
              <Button variant="outline" className="px-8">Got it</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CaseStudies;
