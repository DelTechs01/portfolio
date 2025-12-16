import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Clock, Users, TrendingUp, Shield, Zap, CheckCircle2, AlertTriangle, Lightbulb, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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
    <div className="min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>

          {/* Hero Section */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{project.description}</p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">{project.timeline}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">{project.teamSize}</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">{project.role}</Badge>
              </div>
            </div>

            {(project.github || project.demo) && (
              <div className="flex gap-4">
                {project.github && (
                  <Button variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>

          {/* Main Image */}
          <div className="mb-12 rounded-2xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  The Problem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.problem}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  The Solution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.solution}</p>
              </CardContent>
            </Card>
          </div>

          {/* Results & Metrics */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Results & Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {project.results.map((result, index) => (
                  <div key={index} className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{result.metric}</p>
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-sm line-through text-muted-foreground">{result.before}</span>
                        <span className="text-2xl font-bold text-primary">{result.after}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-sm font-semibold text-green-500">{result.improvement}</span>
                      </div>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Architecture */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>System Architecture</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">{project.architecture.description}</p>
              
              <div className="bg-muted/30 rounded-lg p-8">
                <img
                  src={project.architecture.diagram}
                  alt="Architecture Diagram"
                  className="w-full"
                />
              </div>

              <div>
                <h4 className="font-semibold mb-4">Key Components</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.architecture.components.map((component, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{component}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Decisions */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Key Technical Decisions</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="0" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  {project.techDecisions.slice(0, 3).map((_, index) => (
                    <TabsTrigger key={index} value={index.toString()}>
                      Decision {index + 1}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {project.techDecisions.map((decision, index) => (
                  <TabsContent key={index} value={index.toString()} className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Decision</h4>
                      <p className="text-muted-foreground">{decision.decision}</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold mb-2">Rationale</h4>
                      <p className="text-muted-foreground">{decision.rationale}</p>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-primary" />
                        Impact
                      </h4>
                      <p className="text-muted-foreground">{decision.impact}</p>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>

          {/* Challenges & Solutions */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Challenges Faced & How We Overcame Them</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {project.challenges.map((item, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-destructive/10 rounded-lg flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-destructive" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">Challenge</h4>
                      <p className="text-muted-foreground">{item.challenge}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">Solution</h4>
                      <p className="text-muted-foreground">{item.solution}</p>
                    </div>
                  </div>
                  {index < project.challenges.length - 1 && <Separator />}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* What I'd Improve */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-accent" />
                What I'd Improve Next Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-semibold text-accent">{index + 1}</span>
                    </div>
                    <span className="text-muted-foreground">{improvement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Screenshots Gallery */}
          {project.screenshots.length > 0 && (
            <Card className="mb-12">
              <CardHeader>
                <CardTitle>Project Screenshots</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.screenshots.map((screenshot, index) => (
                    <div key={index} className="rounded-lg overflow-hidden border">
                      <img
                        src={screenshot}
                        alt={`Screenshot ${index + 1}`}
                        className="w-full h-64 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Client Testimonial */}
          {project.testimonial && (
            <Card className="mb-12 border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg italic text-muted-foreground mb-4">
                      "{project.testimonial.content}"
                    </p>
                    <div>
                      <p className="font-semibold">{project.testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{project.testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Performance & Security Badges */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold mb-1">95+</p>
                <p className="text-sm text-muted-foreground">Lighthouse Score</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-green-500 mx-auto mb-3" />
                <p className="text-3xl font-bold mb-1">A+</p>
                <p className="text-sm text-muted-foreground">Security Rating</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-accent mx-auto mb-3" />
                <p className="text-3xl font-bold mb-1">99.9%</p>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudy;