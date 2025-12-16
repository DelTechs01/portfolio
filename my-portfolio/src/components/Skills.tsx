import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLocation } from 'wouter';

const Skills = () => {
  const [, setLocation] = useLocation();

  const skills = {
    Frontend: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Next.js', level: 88 },
    ],
    Backend: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'MongoDB', level: 80 },
    ],
    Cloud: [
      { name: 'AWS', level: 88 },
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 75 },
      { name: 'CI/CD', level: 87 },
    ],
    AI: [
      { name: 'TensorFlow', level: 80 },
      { name: 'LangChain', level: 85 },
      { name: 'OpenAI API', level: 90 },
      { name: 'Hugging Face', level: 78 },
    ],
  };

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
              <h1 className="text-2xl font-bold">Skills & Tech Stack</h1>
              <p className="text-sm text-muted-foreground">My technical expertise</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Skills & Tech Stack</h2>
            
            <Tabs defaultValue="Frontend" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                {Object.keys(skills).map((category) => (
                  <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
                ))}
              </TabsList>
              
              {Object.entries(skills).map(([category, skillList]) => (
                <TabsContent key={category} value={category}>
                  <div className="grid md:grid-cols-2 gap-6">
                    {skillList.map((skill) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                      >
                        <Card className="hover:shadow-lg transition-shadow">
                          <CardContent className="p-6">
                            <div className="flex justify-between mb-2">
                              <span className="font-semibold">{skill.name}</span>
                              <span className="text-muted-foreground">{skill.level}%</span>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;