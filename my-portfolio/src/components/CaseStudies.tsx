import { motion } from 'framer-motion';
import { ChevronLeft, ExternalLink, Zap, Shield, TrendingUp, Clock } from 'lucide-react';
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

  const metricIcons: Record<string, React.ReactNode> = {
    Performance: <Zap className="w-5 h-5" />,
    Security: <Shield className="w-5 h-5" />,
    Growth: <TrendingUp className="w-5 h-5" />,
    Time: <Clock className="w-5 h-5" />,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Inline global styles without jsx/global */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>

      {/* Sticky Header */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/90"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-5">
            <Button variant="ghost" size="icon" onClick={() => setLocation('/')}>
              <ChevronLeft className="w-7 h-7" />
            </Button>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Case Studies
              </h1>
              <p className="text-muted-foreground mt-1">Real-world impact through secure, innovative solutions</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <section className="py-28 lg:py-40 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-tr from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Featured Projects & Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              From concept to deployment delivering measurable improvements in performance, security, and scalability using modern technologies.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {caseStudiesData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                whileHover={{ y: -12 }}
                className="group"
              >
                <Card
                  className="h-full overflow-hidden border-border/50 bg-background/60 backdrop-blur shadow-xl hover:shadow-2xl transition-all duration-700 cursor-pointer"
                  onClick={() => onSelectProject(project.id)}
                >
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    <div className="absolute inset-0 flex items-end p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                        {project.title}
                      </h3>
                    </div>

                    <Badge className="absolute top-6 right-6 bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg">
                      Case Study
                    </Badge>
                  </div>

                  <CardHeader className="pb-4">
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-primary/30 text-foreground/80 hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-4">
                      {project.results.slice(0, 3).map((result) => (
                        <div key={result.metric} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="text-primary">
                              {metricIcons[result.metric.split(' ')[0]] || <TrendingUp className="w-5 h-5" />}
                            </div>
                            <p className="text-sm text-muted-foreground">{result.metric}</p>
                          </div>
                          <p className="font-bold text-lg text-primary">{result.improvement}</p>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full border-2 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground group-hover:border-transparent transition-all duration-500"
                    >
                      View Full Case Study
                      <ExternalLink className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-32"
          >
            <p className="text-xl text-muted-foreground mb-8">
              Want to build something impactful together?
            </p>
            <Button
              size="lg"
              className="px-10 py-7 text-lg shadow-xl bg-primary hover:bg-primary/90"
              onClick={() => setLocation('/contact')}
            >
              Let's Discuss Your Project
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;