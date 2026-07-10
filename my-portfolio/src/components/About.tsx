import { motion } from 'framer-motion';
import { Zap, Shield, Users, Globe, Code2, Brain, Lock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import PageHeader from '@/components/PageHeader';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const highlights = [
  { value: '5+', label: 'Years experience', icon: Zap },
  { value: '10+', label: 'Projects delivered', icon: Code2 },
  { value: '12+', label: 'Technologies', icon: Brain },
  { value: 'Enterprise', label: 'Security standards', icon: Lock },
];

const values = [
  {
    icon: Zap,
    title: 'Performance',
    description: 'Fast, optimized solutions with industry-leading Lighthouse scores.',
  },
  {
    icon: Shield,
    title: 'Security by design',
    description: 'Protection, encryption, and compliance built into every layer.',
  },
  {
    icon: Users,
    title: 'User-centric',
    description: 'Intuitive, accessible interfaces that prioritize real human needs.',
  },
  {
    icon: Globe,
    title: 'Ethical innovation',
    description: 'Responsible AI, blockchain, and technology that drives positive impact.',
  },
];

const About = () => {
  useDocumentMeta({
    title: 'About',
    description:
      'About Kweyu Delron Muyale - Software Engineer, IT support professional, and network engineer focused on secure, scalable systems.',
  });

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        eyebrow="// about-me"
        title="About me"
        subtitle="Software engineer, network engineer, and IT-solutions builder focused on secure, scalable, and reliable systems."
      />

      {/* Bio + portrait */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Portrait */}
            <div className="relative order-2 lg:order-1 max-w-md mx-auto lg:mx-0">
              <div className="aspect-square rounded-2xl overflow-hidden border border-border/60 shadow-xl">
                <img
                  src="/Profile.jpg"
                  alt="Kweyu Delron Muyale - Software Engineer & Network Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-4 rounded-2xl border border-border/60 bg-card px-5 py-4 shadow-lg">
                <p className="text-3xl font-extrabold text-primary leading-none">5+</p>
                <p className="text-xs text-muted-foreground mt-1">Years of hands-on experience</p>
              </div>
            </div>

            {/* Bio */}
            <div className="order-1 lg:order-2 space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground">
              <p>
                I&apos;m a <strong className="text-foreground">Software Engineer</strong>,{' '}
                <strong className="text-foreground">IT Support professional</strong>, and{' '}
                <strong className="text-foreground">Network Engineer</strong> with a passion for
                building secure, efficient, and scalable systems.
              </p>
              <p>
                I specialize in <strong className="text-foreground">backend development</strong>,{' '}
                <strong className="text-foreground">network management</strong>,{' '}
                <strong className="text-foreground">cybersecurity</strong>, and{' '}
                <strong className="text-foreground">blockchain technologies</strong>, creating
                practical, real-world solutions that prioritize performance and reliability.
              </p>
              <p>
                With a strong foundation in modern web technologies and AI integration, I help
                businesses transform their digital presence through{' '}
                <strong className="text-primary">ethical AI development</strong> and{' '}
                <strong className="text-primary">user-centric design</strong>, delivering systems
                that are innovative, accessible, and secure.
              </p>

              {/* Highlight stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {highlights.map((stat) => (
                  <Card key={stat.label} className="border-border/60">
                    <CardContent className="p-5">
                      <stat.icon className="w-6 h-6 text-primary mb-3" />
                      <p className="text-2xl font-bold text-foreground leading-none">{stat.value}</p>
                      <p className="text-sm text-muted-foreground mt-1.5">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-muted/40 border-t border-border/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
            How I work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Principles that guide my work</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <Card className="h-full border-border/60 hover:border-primary/40 hover:shadow-lg transition-colors">
                  <CardContent className="p-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                      <value.icon className="w-5 h-5" />
                    </span>
                    <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
