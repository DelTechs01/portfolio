import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, X, Code2, Database, Network, Shield, Blocks, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useLocation } from 'wouter';
import { useState } from 'react';

const Skills = () => {
  const [, setLocation] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const skills = {
    Programming: {
      description: 'Strong foundation in multiple languages with focus on clean, efficient, and maintainable code.',
      list: [
        { name: 'Python (Flask, Django)', level: 85 },
        { name: 'JavaScript (React, Node.js)', level: 80 },
        { name: 'PHP', level: 75 },
        { name: 'Java', level: 70 },
        { name: 'HTML & CSS', level: 90 },
        { name: 'SQL', level: 85 },
      ]
    },
    'Backend & Databases': {
      description: 'Experienced in designing robust APIs and managing data with relational databases.',
      list: [
        { name: 'RESTful API Development', level: 82 },
        { name: 'Database Design', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 78 },
        { name: 'Authentication Systems', level: 80 },
        { name: 'Server-Side Logic', level: 83 },
      ]
    },
    'Networking & IT Support': {
      description: 'Hands-on expertise in setting up, troubleshooting, and optimizing networks and systems.',
      list: [
        { name: 'Network Configuration', level: 88 },
        { name: 'WiFi & Internet Setup', level: 90 },
        { name: 'Hardware Troubleshooting', level: 85 },
        { name: 'Server Maintenance', level: 80 },
        { name: 'Network Monitoring', level: 82 },
        { name: 'Windows & Linux Admin', level: 78 },
      ]
    },
    Cybersecurity: {
      description: 'Solid understanding of security principles to protect systems and data from threats.',
      list: [
        { name: 'System & Network Security', level: 82 },
        { name: 'Vulnerability Assessment', level: 78 },
        { name: 'Secure Coding Practices', level: 80 },
        { name: 'Firewall & Encryption', level: 75 },
        { name: 'Kali Linux Tools', level: 72 },
      ]
    },
    'Emerging Technologies': {
      description: 'Exploring blockchain and AI to build innovative, future-ready solutions.',
      list: [
        { name: 'Blockchain Fundamentals', level: 75 },
        { name: 'Smart Contracts Basics', level: 70 },
        { name: 'AI-Assisted Automation', level: 72 },
        { name: 'Decentralized Systems', level: 68 },
      ]
    },
    'Tools & Platforms': {
      description: 'Proficient with modern development tools and environments for efficient workflows.',
      list: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 92 },
        { name: 'NetBeans', level: 80 },
        { name: 'Figma (UI/UX Design)', level: 75 },
        { name: 'Linux Command Line', level: 82 },
      ]
    },
  };

  const categoryIcons = {
    Programming: Code2,
    'Backend & Databases': Database,
    'Networking & IT Support': Network,
    Cybersecurity: Shield,
    'Emerging Technologies': Blocks,
    'Tools & Platforms': Wrench,
  };

  const selectedSkills = selectedCategory ? skills[selectedCategory as keyof typeof skills] : null;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-tr from-purple-500/40 to-pink-500/40 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Header */}
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
              <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Technical Skills
              </h1>
              <p className="text-muted-foreground">My expertise across development, networks, and security</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <section className="py-20 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A practical, hands-on skill set built through real projects, IT support, and continuous learning.
            </p>
          </motion.div>

          {/* Desktop: Full View */}
          <div className="hidden lg:block">
            <div className="grid lg:grid-cols-3 gap-10 relative">
              {/* Skill Cards */}
              {Object.entries(skills).map(([category, data]) => {
                const Icon = categoryIcons[category as keyof typeof categoryIcons];
                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
                        <Icon className="w-10 h-10 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{category}</h3>
                      <p className="text-muted-foreground max-w-sm mx-auto leading-relaxed">
                        {data.description}
                      </p>
                    </div>

                    <div className="space-y-5">
                      {data.list.map((skill, i) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="group relative"
                        >
                          <Card className="border border-white/10 bg-background/40 backdrop-blur-xl shadow-2xl hover:shadow-3xl hover:border-primary/30 transition-all duration-700">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <CardContent className="p-7 relative z-10">
                              <div className="flex justify-between items-start mb-5">
                                <h4 className="font-bold text-lg text-foreground drop-shadow-md">
                                  {skill.name}
                                </h4>
                                <span className="text-3xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                  {skill.level}%
                                </span>
                              </div>
                              <Progress
                                value={skill.level}
                                className="h-5 bg-white/10 border border-white/20 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-accent [&>div]:shadow-lg"
                              />
                              <p className="mt-4 text-foreground/80 font-medium drop-shadow">
                                {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Proficient'}
                              </p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile: Category Buttons + Bottom Sheet */}
          <div className="lg:hidden">
            <div className="text-center mb-10">
              <p className="text-lg text-muted-foreground">
                Tap a category below to explore my skills
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {Object.keys(skills).map((category) => {
                const Icon = categoryIcons[category as keyof typeof categoryIcons];
                return (
                  <Button
                    key={category}
                    variant="outline"
                    className="h-32 flex flex-col items-center justify-center gap-4 border-2 hover:border-primary hover:bg-primary/5 transition-all rounded-2xl"
                    onClick={() => setSelectedCategory(category)}
                  >
                    <Icon className="w-12 h-12 text-primary" />
                    <span className="text-base font-medium text-center px-3">{category}</span>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Mobile Bottom Sheet */}
          <AnimatePresence>
            {selectedCategory && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedCategory(null)}
                  className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                />

                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ type: "spring", damping: 30, stiffness: 300 }}
                  className="fixed bottom-0 left-0 right-0 bg-background rounded-t-3xl shadow-2xl z-50 lg:hidden max-h-[85vh] overflow-hidden"
                >
                  <div className="sticky top-0 bg-background/80 backdrop-blur-xl border-b border-border/40 p-5 flex items-center justify-between">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {selectedCategory}
                    </h3>
                    <Button variant="ghost" size="icon" onClick={() => setSelectedCategory(null)}>
                      <X className="w-7 h-7" />
                    </Button>
                  </div>

                  <div className="p-6 overflow-y-auto max-h-[calc(85vh-80px)]">
                    <div className="space-y-6">
                      {selectedSkills?.list.map((skill, i) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 }}
                        >
                          <Card className="border border-white/10 bg-background/50 backdrop-blur-xl">
                            <CardContent className="p-6">
                              <div className="flex justify-between items-start mb-4">
                                <h4 className="font-semibold text-lg">{skill.name}</h4>
                                <span className="text-3xl font-bold text-primary">{skill.level}%</span>
                              </div>
                              <Progress 
                                value={skill.level} 
                                className="h-4 [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-accent" 
                              />
                              <p className="mt-3 text-sm text-muted-foreground font-medium">
                                {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Proficient'}
                              </p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Summary Badge */}
          <motion.div className="mt-28 text-center">
            <div className="inline-flex flex-wrap justify-center items-center gap-4 bg-background/40 backdrop-blur-xl border border-white/20 rounded-full px-10 py-6 shadow-2xl">
              <span className="text-lg lg:text-xl font-bold text-foreground drop-shadow-md">
                Full-Stack Capable • Network Expert • Security-Minded • Hands-On Problem Solver
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;