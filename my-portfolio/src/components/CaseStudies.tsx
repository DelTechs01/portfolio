import { motion } from 'framer-motion';
import { ChevronLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLocation } from 'wouter';
import { caseStudiesData } from '@/data/caseStudies';

interface CaseStudiesProps {
  onSelectProject: (id: string) => void;
}

const CaseStudies = ({ onSelectProject }: CaseStudiesProps) => {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 glass border-b border-border backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => setLocation('/')}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Case Studies</h1>
              <p className="text-sm text-muted-foreground">Real projects with measurable results</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Case Studies</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real projects with measurable results and technical insights
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudiesData.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="overflow-hidden h-full group cursor-pointer" onClick={() => onSelectProject(project.id)}>
                    <div className="relative overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <Badge className="absolute top-4 right-4 bg-primary">Case Study</Badge>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-center">
                        {project.results.slice(0, 2).map((result) => (
                          <div key={result.metric}>
                            <p className="font-bold text-primary text-sm">{result.improvement}</p>
                            <p className="text-xs text-muted-foreground">{result.metric}</p>
                          </div>
                        ))}
                      </div>
                      
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Read Full Case Study
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;