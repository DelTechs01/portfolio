import { motion } from 'framer-motion';
import { ChevronLeft, TrendingUp, Users, Zap, Shield, Code2, Brain, Lock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLocation } from 'wouter';

const About = () => {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Header with Gradient Accent */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/90"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center gap-5">
            <Button variant="ghost" size="icon" onClick={() => setLocation('/')}>
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                About Me
              </h1>
              <p className="text-muted-foreground">Crafting secure and innovative digital solutions</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content Section */}
      <section className="py-28 lg:py-40 bg-muted/30 relative overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-tr from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/3 -right-10 w-64 h-64 bg-gradient-to-bl from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl font-extrabold text-center mb-20 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Kweyu Delron Muyale
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Professional Portrait */}
              <div className="relative order-2 lg:order-1">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-border/50">
                  <img
                    src="./public/Profile.jpg"
                    alt="Kweyu Delron Muyale - Software Engineer & Network Specialist"
                    className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                  />
                </div>
                
                {/* Experience Badge */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="absolute -bottom-8 -right-8 bg-gradient-to-br from-primary to-accent rounded-3xl p-8 shadow-2xl border border-border/50"
                >
                  <p className="text-6xl font-extrabold text-primary-foreground">3+</p>
                  <p className="text-lg font-semibold text-primary-foreground/90">Years of Hands-On Experience</p>
                </motion.div>
              </div>
              
              {/* Bio & Stats */}
              <div className="space-y-10 order-1 lg:order-2">
                <div className="space-y-7 text-lg md:text-xl leading-relaxed text-muted-foreground">
                  <p>
                    I am a dedicated <strong className="text-foreground">Software Engineering student</strong>, <strong className="text-foreground">IT Support professional</strong>, and <strong className="text-foreground">Network Engineer</strong> with a passion for building secure, efficient, and scalable systems.
                  </p>
                  
                  <p>
                    Specializing in <strong className="text-foreground">backend development</strong>, <strong className="text-foreground">network management</strong>, <strong className="text-foreground">cybersecurity</strong>, and <strong className="text-foreground">blockchain technologies</strong>, I create practical, real-world solutions that prioritize performance and reliability.
                  </p>
                  
                  <p>
                    With a strong foundation in modern web technologies and AI integration, I help businesses transform their digital presence through <strong className="text-primary">ethical AI development</strong> and <strong className="text-primary">user-centric design</strong>. I thrive on optimizing processes, learning emerging tools, and delivering systems that are both innovative and secure.
                  </p>
                </div>
                
                {/* Highlight Stats */}
                <div className="grid grid-cols-2 gap-8 pt-10">
                  {[
                    { value: '10+', label: 'Projects Delivered', icon: Code2 },
                    { value: '12+', label: 'Technologies Mastered', icon: Brain },
                    { value: 'Enterprise', label: 'Security Standards', icon: Lock },
                    { value: '68%+', label: 'Performance Optimized', icon: Zap }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15 + 0.4 }}
                    >
                      <Card className="hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-border/50 bg-background/70 backdrop-blur">
                        <CardContent className="p-8 text-center">
                          <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                          <p className="text-5xl font-bold text-foreground">{stat.value}</p>
                          <p className="text-muted-foreground mt-2">{stat.label}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Values Section */}
            <div className="mt-40">
              <h3 className="text-4xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Principles That Guide My Work
              </h3>
              
              <div className="grid md:grid-cols-4 gap-10">
                {[
                  { icon: Zap, title: 'Performance Excellence', description: 'Lightning-fast, optimized solutions with industry-leading Lighthouse scores' },
                  { icon: Shield, title: 'Security by Design', description: 'Robust protection, encryption, and compliance built into every layer' },
                  { icon: Users, title: 'User-Centric Focus', description: 'Intuitive, accessible interfaces that prioritize real human needs' },
                  { icon: Globe, title: 'Ethical Innovation', description: 'Responsible AI, blockchain, and tech that drives positive impact' }
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <Card className="h-full text-center hover:shadow-2xl hover:-translate-y-3 transition-all duration-700 border-border/50 bg-background/60 backdrop-blur">
                      <CardContent className="p-10">
                        <value.icon className="w-20 h-20 mx-auto mb-8 text-primary" />
                        <h4 className="text-2xl font-bold mb-4">{value.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
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