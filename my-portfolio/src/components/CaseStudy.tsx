import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Clock, Users, TrendingUp, Shield, Zap, CheckCircle2, AlertTriangle, Lightbulb, BarChart3, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// eslint-disable-next-line @typescript-eslint/no-require-imports


interface CaseStudyProps {
  project: {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    problem: string;
    solution: string;
    architecture: {
      description: string;
      diagram: string;
      components: string[];
    };
    techDecisions: {
      decision: string;
      rationale: string;
      impact: string;
    }[];
    results: {
      metric: string;
      before: string;
      after: string;
      improvement: string;
    }[];
    challenges: {
      challenge: string;
      solution: string;
    }[];
    improvements: string[];
    screenshots: string[];
    timeline: string;
    teamSize: string;
    role: string;
    github?: string;
    demo?: string;
    testimonial?: {
      content: string;
      author: string;
      role: string;
    };
  };
  onBack: () => void;
}

const CaseStudy = ({ project, onBack }: CaseStudyProps) => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-tr from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          {/* Back Button – Correctly returns to Case Studies list */}
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-10 text-lg hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-6 h-6 mr-3 group-hover:-translate-x-1 transition-transform" />
            Back to Case Studies
          </Button>

          {/* Hero Section */}
          <div className="mb-16">
            <div className="flex flex-wrap gap-3 mb-8">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="px-4 py-2 text-sm border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {project.title}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-4xl leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center gap-8 mb-12 text-muted-foreground">
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6" />
                <span className="font-medium">{project.timeline}</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6" />
                <span className="font-medium">Team: {project.teamSize}</span>
              </div>
              <div className="flex items-center gap-3">
                <Code2 className="w-6 h-6" />
                <Badge variant="secondary" className="text-sm px-4 py-1">
                  My Role: {project.role}
                </Badge>
              </div>
            </div>

            {/* Action Buttons */}
            {(project.github || project.demo) && (
              <div className="flex flex-wrap gap-5">
                {project.github && (
                  <Button size="lg" variant="outline" asChild className="border-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-3" />
                      View Source Code
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 mr-3" />
                      Launch Live Demo
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Hero Image */}
          <div className="mb-20 rounded-3xl overflow-hidden shadow-2xl border border-border/50">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 md:h-[600px] object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>

          {/* Problem & Solution */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <Card className="border-destructive/20 bg-destructive/5 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-destructive" />
                  The Challenge
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">{project.problem}</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5 hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Lightbulb className="w-8 h-8 text-primary" />
                  The Solution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-muted-foreground">{project.solution}</p>
              </CardContent>
            </Card>
          </div>

          {/* Results & Impact */}
          <Card className="mb-20 border-border/50 bg-background/60 backdrop-blur shadow-2xl">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-4">
                <BarChart3 className="w-10 h-10 text-primary" />
                Measurable Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {project.results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-4"
                  >
                    <p className="text-sm uppercase tracking-wider text-muted-foreground">{result.metric}</p>
                    <div className="flex items-end gap-3">
                      <span className="text-lg line-through text-muted-foreground">{result.before}</span>
                      <span className="text-4xl font-extrabold text-primary">{result.after}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-6 h-6 text-green-500" />
                      <span className="text-xl font-bold text-green-500">{result.improvement}</span>
                    </div>
                    <Progress value={parseInt(result.improvement)} className="h-3" />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Architecture */}
          <Card className="mb-20">
            <CardHeader>
              <CardTitle className="text-3xl">System Architecture</CardTitle>
            </CardHeader>
            <CardContent className="space-y-10">
              <p className="text-lg text-muted-foreground leading-relaxed">{project.architecture.description}</p>

              <div className="rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                <img
                  src={project.architecture.diagram}
                  alt="System Architecture Diagram"
                  className="w-full hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div>
                <h4 className="text-xl font-bold mb-6">Core Components</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.architecture.components.map((component, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-muted-foreground leading-relaxed">{component}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Decisions */}
          <Card className="mb-20">
            <CardHeader>
              <CardTitle className="text-3xl">Key Technical Decisions</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="0">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  {project.techDecisions.slice(0, 3).map((_, i) => (
                    <TabsTrigger key={i} value={i.toString()} className="text-base">
                      Decision {i + 1}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {project.techDecisions.map((d, i) => (
                  <TabsContent key={i} value={i.toString()} className="space-y-8">
                    <div>
                      <h4 className="font-bold text-xl mb-3">Decision</h4>
                      <p className="text-muted-foreground text-lg">{d.decision}</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-bold text-xl mb-3">Rationale</h4>
                      <p className="text-muted-foreground text-lg">{d.rationale}</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-bold text-xl mb-3 flex items-center gap-3">
                        <Zap className="w-7 h-7 text-primary" />
                        Impact
                      </h4>
                      <p className="text-muted-foreground text-lg">{d.impact}</p>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          {/* Challenges */}
          <Card className="mb-20">
            <CardHeader>
              <CardTitle className="text-3xl">Challenges & Solutions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-12">
              {project.challenges.map((item, i) => (
                <div key={i} className="space-y-8">
                  <div className="flex gap-6">
                    <div className="p-4 bg-destructive/10 rounded-2xl">
                      <AlertTriangle className="w-8 h-8 text-destructive" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-3">Challenge</h4>
                      <p className="text-lg text-muted-foreground">{item.challenge}</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="p-4 bg-primary/10 rounded-2xl">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-3">How We Overcame It</h4>
                      <p className="text-lg text-muted-foreground">{item.solution}</p>
                    </div>
                  </div>
                  {i < project.challenges.length - 1 && <Separator className="my-8" />}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Future Improvements */}
          <Card className="mb-20 border-accent/20 bg-accent/5">
            <CardHeader>
              <CardTitle className="text-3xl flex items-center gap-4">
                <Lightbulb className="w-10 h-10 text-accent" />
                Future Improvements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                {project.improvements.map((imp, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-xl font-bold text-accent flex-shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-lg text-muted-foreground pt-3">{imp}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Screenshots */}
          {project.screenshots.length > 0 && (
            <div className="mb-20">
              <h3 className="text-3xl font-bold mb-10">Project Gallery</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.screenshots.map((src, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-2xl overflow-hidden shadow-xl border border-border/50"
                  >
                    <img
                      src={src}
                      alt={`Screenshot ${i + 1}`}
                      className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Testimonial */}
          {project.testimonial && (
            <Card className="mb-20 border-primary/30 bg-gradient-to-r from-primary/5 to-accent/5 shadow-2xl">
              <CardContent className="p-12">
                <div className="max-w-4xl mx-auto text-center">
                  <p className="text-2xl md:text-3xl italic text-foreground mb-10 leading-relaxed">
                    "{project.testimonial.content}"
                  </p>
                  <div>
                    <p className="text-xl font-bold">{project.testimonial.author}</p>
                    <p className="text-muted-foreground">{project.testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Final Badges */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-2xl transition-shadow bg-gradient-to-br from-primary/10 to-transparent">
              <CardContent className="p-10">
                <Zap className="w-16 h-16 text-primary mx-auto mb-5" />
                <p className="text-5xl font-extrabold mb-2">95+</p>
                <p className="text-lg text-muted-foreground">Lighthouse Performance</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-shadow bg-gradient-to-br from-green-500/10 to-transparent">
              <CardContent className="p-10">
                <Shield className="w-16 h-16 text-green-500 mx-auto mb-5" />
                <p className="text-5xl font-extrabold mb-2">A+</p>
                <p className="text-lg text-muted-foreground">Security Rating</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-2xl transition-shadow bg-gradient-to-br from-accent/10 to-transparent">
              <CardContent className="p-10">
                <TrendingUp className="w-16 h-16 text-accent mx-auto mb-5" />
                <p className="text-5xl font-extrabold mb-2">99.9%</p>
                <p className="text-lg text-muted-foreground">System Uptime</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudy;