import { motion } from 'framer-motion';
import { Code2, Database, Network, Shield, Blocks, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import PageHeader from '@/components/PageHeader';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const Skills = () => {
  useDocumentMeta({
    title: 'Skills',
    description:
      'Technical skills across programming, backend & databases, networking, cybersecurity, emerging tech, and developer tools.',
  });

  const skills = {
    Programming: {
      description: 'Clean, efficient, maintainable code across multiple languages.',
      list: [
        { name: 'Python (Flask, Django)', level: 85 },
        { name: 'JavaScript (React, Node.js)', level: 80 },
        { name: 'PHP', level: 75 },
        { name: 'Java', level: 70 },
        { name: 'HTML & CSS', level: 90 },
        { name: 'SQL', level: 85 },
      ],
    },
    'Backend & Databases': {
      description: 'Robust APIs and well-designed relational data layers.',
      list: [
        { name: 'RESTful API Development', level: 82 },
        { name: 'Database Design', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 78 },
        { name: 'Authentication Systems', level: 80 },
        { name: 'Server-Side Logic', level: 83 },
      ],
    },
    'Networking & IT Support': {
      description: 'Setting up, troubleshooting, and optimizing networks and systems.',
      list: [
        { name: 'Network Configuration', level: 88 },
        { name: 'WiFi & Internet Setup', level: 90 },
        { name: 'Hardware Troubleshooting', level: 85 },
        { name: 'Server Maintenance', level: 80 },
        { name: 'Network Monitoring', level: 82 },
        { name: 'Windows & Linux Admin', level: 78 },
      ],
    },
    Cybersecurity: {
      description: 'Security principles to protect systems and data from threats.',
      list: [
        { name: 'System & Network Security', level: 82 },
        { name: 'Vulnerability Assessment', level: 78 },
        { name: 'Secure Coding Practices', level: 80 },
        { name: 'Firewall & Encryption', level: 75 },
        { name: 'Kali Linux Tools', level: 72 },
      ],
    },
    'Emerging Technologies': {
      description: 'Blockchain and AI for innovative, future-ready solutions.',
      list: [
        { name: 'Blockchain Fundamentals', level: 75 },
        { name: 'Smart Contracts Basics', level: 70 },
        { name: 'AI-Assisted Automation', level: 72 },
        { name: 'Decentralized Systems', level: 68 },
      ],
    },
    'Tools & Platforms': {
      description: 'Modern tools and environments for efficient workflows.',
      list: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 92 },
        { name: 'NetBeans', level: 80 },
        { name: 'Figma (UI/UX Design)', level: 75 },
        { name: 'Linux Command Line', level: 82 },
      ],
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

  const tier = (level: number) => (level >= 90 ? 'Expert' : level >= 80 ? 'Advanced' : 'Proficient');

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        eyebrow="// skills"
        title="Skills & expertise"
        subtitle="A practical, hands-on skill set built through real projects, IT support, and continuous learning."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, data], index) => {
              const Icon = categoryIcons[category as keyof typeof categoryIcons];
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 2) * 0.08, duration: 0.4 }}
                >
                  <Card className="h-full border-border/60 hover:border-primary/40 hover:shadow-lg transition-colors">
                    <CardContent className="p-6 sm:p-7">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                          <Icon className="w-5 h-5" />
                        </span>
                        <div>
                          <h3 className="text-lg font-bold leading-tight">{category}</h3>
                          <p className="text-sm text-muted-foreground">{data.description}</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {data.list.map((skill) => (
                          <div key={skill.name}>
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-sm font-medium">{skill.name}</span>
                              <span className="text-xs font-mono text-muted-foreground">
                                {tier(skill.level)} · {skill.level}%
                              </span>
                            </div>
                            <Progress
                              value={skill.level}
                              className="h-1.5 bg-muted [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-accent"
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 flex justify-center">
            <div className="inline-flex flex-wrap justify-center items-center gap-3 rounded-full border border-border/60 bg-card/60 px-6 py-3">
              <span className="text-sm font-medium text-muted-foreground">
                Full-Stack Capable • Network Expert • Security-Minded • Hands-On Problem Solver
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
