import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Clock, Users, TrendingUp, Zap, CheckCircle2, AlertTriangle, Lightbulb, BarChart3, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import type { CaseStudy as CaseStudyType } from '@/data/caseStudies';

interface CaseStudyProps {
  project: CaseStudyType;
  onBack: () => void;
}

const CaseStudy = ({ project, onBack }: CaseStudyProps) => {
  useDocumentMeta({ title: project.title, description: project.description });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-8 hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to projects
          </Button>

          {/* Hero */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-primary/30 text-foreground/80">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl md:text-6xl font-medium leading-[1.04] tracking-[-0.035em] mb-6">
              {project.title}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="font-medium">{project.timeline}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="font-medium">{project.teamSize}</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                <span className="font-medium">{project.role}</span>
              </div>
            </div>

            {/* Action Buttons */}
            {(project.github || project.demo) && (
              <div className="flex flex-wrap gap-4 mt-8">
                {project.github && (
                  <Button variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-2" />
                      View Source
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Visit Live Site
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Hero Image */}
          <div className="mb-14 rounded-2xl overflow-hidden shadow-xl border border-border">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-72 md:h-96 object-cover"
            />
          </div>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-8 mb-14">
            <Card className="border-destructive/20 bg-destructive/5">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-destructive" />
                  The Challenge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">{project.problem}</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-primary" />
                  The Solution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">{project.solution}</p>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <Card className="mb-14">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <BarChart3 className="w-7 h-7 text-primary" />
                Key Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.results.map((result, index) => (
                  <div key={index} className="space-y-2">
                    <p className="text-sm uppercase tracking-wider text-muted-foreground">{result.metric}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm line-through text-muted-foreground">{result.before}</span>
                      <span className="text-2xl font-semibold text-primary">{result.after}</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary">
                      <TrendingUp className="w-5 h-5" />
                      <span className="text-sm font-semibold">{result.improvement}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Architecture */}
          <Card className="mb-14">
            <CardHeader>
              <CardTitle className="text-2xl">How It's Built</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">{project.architecture.description}</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.architecture.components.map((component, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{component}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Technical Decisions */}
          <Card className="mb-14">
            <CardHeader>
              <CardTitle className="text-2xl">Key Technical Decisions</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="0">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  {project.techDecisions.slice(0, 3).map((_, i) => (
                    <TabsTrigger key={i} value={i.toString()}>
                      Decision {i + 1}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {project.techDecisions.map((d, i) => (
                  <TabsContent key={i} value={i.toString()} className="space-y-5">
                    <div>
                      <h4 className="font-bold mb-2">Decision</h4>
                      <p className="text-muted-foreground">{d.decision}</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-bold mb-2">Rationale</h4>
                      <p className="text-muted-foreground">{d.rationale}</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-primary" />
                        Impact
                      </h4>
                      <p className="text-muted-foreground">{d.impact}</p>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          {/* Challenges */}
          <Card className="mb-14">
            <CardHeader>
              <CardTitle className="text-2xl">Challenges & Solutions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {project.challenges.map((item, i) => (
                <div key={i} className="space-y-4">
                  <div className="flex gap-4">
                    <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Challenge</h4>
                      <p className="text-muted-foreground">{item.challenge}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-1">Solution</h4>
                      <p className="text-muted-foreground">{item.solution}</p>
                    </div>
                  </div>
                  {i < project.challenges.length - 1 && <Separator />}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Future Improvements */}
          <Card className="mb-14 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <Lightbulb className="w-7 h-7 text-primary" />
                What's Next
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid sm:grid-cols-2 gap-4">
                {project.improvements.map((imp, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center text-sm font-bold text-primary flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-muted-foreground pt-0.5">{imp}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Testimonial */}
          {project.testimonial && (
            <Card className="border-primary/30 bg-primary/5">
              <CardContent className="p-8 md:p-10 text-center">
                <p className="text-xl md:text-2xl italic text-foreground mb-6 leading-relaxed">
                  "{project.testimonial.content}"
                </p>
                <p className="font-bold">{project.testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{project.testimonial.role}</p>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudy;
