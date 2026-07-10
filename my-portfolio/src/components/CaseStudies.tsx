import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { caseStudiesData } from '@/data/caseStudies';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const CaseStudies = () => {
  useDocumentMeta({
    title: 'Projects',
    description:
      'A selection of projects I have designed and built  with links to live demos and source code.',
  });

  return (
    <div className="min-h-screen bg-background">
      <section className="py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-14 max-w-2xl"
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Projects
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Things I've built</h1>
            <p className="text-lg text-muted-foreground">
              A selection of projects, each with a live demo or source code so you can explore them
              yourself.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudiesData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(index * 0.06, 0.3), duration: 0.4 }}
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

                    {/* Access button  live link to the application */}
                    <div className="mt-auto pt-2">
                      {project.demo ? (
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
    </div>
  );
};

export default CaseStudies;
