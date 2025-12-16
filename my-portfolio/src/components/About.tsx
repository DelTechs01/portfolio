import { motion } from 'framer-motion';
import { ChevronLeft, TrendingUp, Users, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLocation } from 'wouter';

const About = () => {
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
              <h1 className="text-2xl font-bold">About Me</h1>
              <p className="text-sm text-muted-foreground">Learn more about my journey</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Me</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden glass p-1">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                    alt="Alex Thompson"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 glass rounded-2xl p-4">
                  <p className="text-4xl font-bold gradient-text">5+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate full-stack developer with over 5 years of experience crafting innovative digital solutions. My journey began with a fascination for how code solves real-world problems.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Specializing in AI integration and modern web technologies, I help businesses transform their digital presence through <strong>ethical AI development</strong> and user-centric design.
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    { value: '50+', label: 'Projects Completed' },
                    { value: '30+', label: 'Happy Clients' },
                    { value: '99.9%', label: 'Uptime Record' },
                    { value: '40%', label: 'Avg. Performance Gain' }
                  ].map((stat) => (
                    <Card key={stat.label} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-4 text-center">
                        <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Values Section */}
            <div className="mt-24">
              <h3 className="text-3xl font-bold mb-8 text-center">What I Value</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: Zap, title: 'Performance', description: 'Optimized, lightning-fast applications' },
                  { icon: Shield, title: 'Security', description: 'WCAG AA compliant, secure by design' },
                  { icon: Users, title: 'User-Centric', description: 'Intuitive experiences that delight' },
                  { icon: TrendingUp, title: 'Innovation', description: 'Cutting-edge AI integration' }
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="text-center hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <value.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                        <h4 className="font-bold mb-2">{value.title}</h4>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;