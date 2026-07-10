import { motion } from 'framer-motion';
import { Code2, Database, Network, Shield, Blocks, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import PageHeader from '@/components/PageHeader';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const coreStack = [
  'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'Networking', 'Cybersecurity',
];

const categories = [
  {
    name: 'Programming',
    icon: Code2,
    description: 'Clean, maintainable code across multiple languages.',
    skills: [
      { name: 'HTML & CSS', level: 90 },
      { name: 'Python (Flask, Django)', level: 85 },
      { name: 'SQL', level: 85 },
      { name: 'JavaScript (React, Node.js)', level: 80 },
      { name: 'PHP', level: 75 },
      { name: 'Java', level: 70 },
    ],
  },
  {
    name: 'Backend & Databases',
    icon: Database,
    description: 'Robust APIs and well-designed relational data layers.',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'Server-Side Logic', level: 83 },
      { name: 'RESTful API Development', level: 82 },
      { name: 'Database Design', level: 80 },
      { name: 'Authentication Systems', level: 80 },
      { name: 'PostgreSQL', level: 78 },
    ],
  },
  {
    name: 'Networking & IT Support',
    icon: Network,
    description: 'Setting up, troubleshooting, and optimizing networks.',
    skills: [
      { name: 'WiFi & Internet Setup', level: 90 },
      { name: 'Network Configuration', level: 88 },
      { name: 'Hardware Troubleshooting', level: 85 },
      { name: 'Network Monitoring', level: 82 },
      { name: 'Server Maintenance', level: 80 },
      { name: 'Windows & Linux Admin', level: 78 },
    ],
  },
  {
    name: 'Cybersecurity',
    icon: Shield,
    description: 'Protecting systems and data from threats.',
    skills: [
      { name: 'System & Network Security', level: 82 },
      { name: 'Secure Coding Practices', level: 80 },
      { name: 'Vulnerability Assessment', level: 78 },
      { name: 'Firewall & Encryption', level: 75 },
      { name: 'Kali Linux Tools', level: 72 },
    ],
  },
  {
    name: 'Emerging Technologies',
    icon: Blocks,
    description: 'Blockchain and AI for future-ready solutions.',
    skills: [
      { name: 'Blockchain Fundamentals', level: 75 },
      { name: 'AI-Assisted Automation', level: 72 },
      { name: 'Smart Contracts Basics', level: 70 },
      { name: 'Decentralized Systems', level: 68 },
    ],
  },
  {
    name: 'Tools & Platforms',
    icon: Wrench,
    description: 'Modern tools for efficient workflows.',
    skills: [
      { name: 'VS Code', level: 92 },
      { name: 'Git & GitHub', level: 85 },
      { name: 'Linux Command Line', level: 82 },
      { name: 'NetBeans', level: 80 },
      { name: 'Figma (UI/UX Design)', level: 75 },
    ],
  },
];

const tier = (level: number) => (level >= 90 ? 'Expert' : level >= 80 ? 'Advanced' : 'Proficient');

function DotRating({ level }: { level: number }) {
  const filled = Math.round(level / 20);
  return (
    <span className="flex gap-1" role="img" aria-label={`${tier(level)} proficiency`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 w-1.5 rounded-full ${i < filled ? 'bg-primary' : 'bg-muted-foreground/25'}`}
        />
      ))}
    </span>
  );
}

const Skills = () => {
  useDocumentMeta({
    title: 'Skills',
    description:
      'Technical skills across programming, backend & databases, networking, cybersecurity, emerging tech, and developer tools.',
  });

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        eyebrow="// skills"
        title="Skills & expertise"
        subtitle="A practical, hands-on skill set built through real projects, IT support, and continuous learning."
      >
        {/* Core stack */}
        <div className="mt-10">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
            Core stack
          </p>
          <div className="flex flex-wrap gap-2">
            {coreStack.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-primary/30 bg-primary/5 px-3 py-1.5 text-sm font-medium text-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </PageHeader>

      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.08, duration: 0.4 }}
              >
                <Card className="h-full border-border/60 hover:border-primary/40 hover:shadow-lg transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-5">
                      <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                        <category.icon className="w-5 h-5" />
                      </span>
                      <div>
                        <h3 className="font-bold leading-tight">{category.name}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{category.description}</p>
                      </div>
                    </div>

                    <ul>
                      {category.skills.map((skill) => (
                        <li
                          key={skill.name}
                          className="flex items-center justify-between gap-3 py-2 border-b border-border/40 last:border-0"
                        >
                          <span className="text-sm">{skill.name}</span>
                          <DotRating level={skill.level} />
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Legend + summary */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-border/60 bg-card/60 px-6 py-4">
            <span className="text-sm font-medium text-muted-foreground text-center sm:text-left">
              Full-Stack Capable • Network Expert • Security-Minded • Hands-On Problem Solver
            </span>
            <span className="flex items-center gap-2 text-xs text-muted-foreground flex-shrink-0">
              <span className="flex gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/25" />
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/25" />
              </span>
              = proficiency
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
