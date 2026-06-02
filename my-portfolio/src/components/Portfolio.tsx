import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import {
  ChevronDown, Code2, Sparkles, Zap, Shield, Users, Terminal as TerminalIcon,
  FileText, ArrowRight, Github, Linkedin, Twitter, Mail, Phone, MapPin,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Terminal from '@/components/Terminal';
import { navItems } from '@/components/Navbar';
import { caseStudiesData } from '@/data/caseStudies';

// Drop your CV at public/Kweyu_Delron_Muyale_CV.pdf to enable the download.
const CV_URL = '/Kweyu_Delron_Muyale_CV.pdf';

const socialLinks = [
  { icon: Github, href: 'https://github.com/DelTechs01', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/kweyu-delron-3a4060244/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/BTripatakah', label: 'X' },
];

const Portfolio = () => {
  const [, setLocation] = useLocation();
  const navigateTo = (path: string) => setLocation(path);
  const featured = caseStudiesData.slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease infinite;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-3.5rem)] md:min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-pink-500/10 dark:from-primary/20 dark:via-purple-600/10 dark:to-pink-600/10" />
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tr from-purple-500/40 to-pink-500/40 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-bl from-accent/30 to-primary/30 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <Badge variant="secondary" className="mb-8 px-6 py-3 text-sm font-medium backdrop-blur-md">
              <Sparkles className="w-4 h-4 mr-2" />
              Available for Freelance & Full-time Opportunities
            </Badge>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight">
              <span className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                Kweyu Delron Muyale
              </span>
            </h1>

            <p className="text-2xl md:text-3xl text-muted-foreground mb-6 font-light tracking-wide">
              Software Engineering Student • IT Solutions & Network Engineer
            </p>

            <p className="text-xl text-muted-foreground mb-10 font-medium">
              Cybersecurity • Blockchain • AI Enthusiast
            </p>

            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              Transforming complex ideas into scalable, secure, and AI-powered solutions that drive innovation and growth.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-3 bg-background/60 backdrop-blur-md px-6 py-4 rounded-full border border-border/60 shadow-lg">
                <Zap className="w-6 h-6 text-yellow-500" />
                <span className="font-bold">95+ Lighthouse Score</span>
              </div>
              <div className="flex items-center gap-3 bg-background/60 backdrop-blur-md px-6 py-4 rounded-full border border-border/60 shadow-lg">
                <Shield className="w-6 h-6 text-green-500" />
                <span className="font-bold">Security-First Mindset</span>
              </div>
              <div className="flex items-center gap-3 bg-background/60 backdrop-blur-md px-6 py-4 rounded-full border border-border/60 shadow-lg">
                <Users className="w-6 h-6 text-accent" />
                <span className="font-bold">7+ Successful Projects</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-10 py-7 shadow-xl bg-primary hover:bg-primary/90 group"
                onClick={() => navigateTo('/case-studies')}
              >
                Explore Case Studies
                <Code2 className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-7 border-2 group backdrop-blur-md"
                onClick={() => navigateTo('/contact')}
              >
                Get in Touch
                <ChevronDown className="ml-3 h-6 w-6 rotate-[-90deg] group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-lg px-10 py-7 group"
                asChild
              >
                <a href={CV_URL} download>
                  Download CV
                  <FileText className="ml-3 h-6 w-6 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-4 mt-10">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-3 rounded-full border border-border/60 bg-background/60 backdrop-blur-md text-muted-foreground hover:text-primary hover:border-primary/50 hover:scale-110 transition-all"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="mt-16 cursor-pointer"
              onClick={() => navigateTo('/about')}
            >
              <ChevronDown className="w-10 h-10 mx-auto text-muted-foreground/60" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Featured Work</p>
              <h2 className="text-4xl md:text-5xl font-bold">Selected Projects</h2>
            </div>
            <Button
              variant="outline"
              onClick={() => navigateTo('/case-studies')}
              className="group self-start md:self-auto"
            >
              View all case studies
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card
                  onClick={() => navigateTo(`/case-studies/${project.id}`)}
                  className="h-full overflow-hidden cursor-pointer border-border/50 bg-background/60 backdrop-blur shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-500"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs border-primary/30 text-foreground/70">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Terminal Section */}
      <section className="py-24 lg:py-32 bg-muted/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-center gap-5 mb-10">
              <TerminalIcon className="w-10 h-10 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold">Interactive Terminal</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
              Dive into my skills and experience through an interactive command-line interface. Type{' '}
              <code className="bg-background/80 px-3 py-1.5 rounded-lg font-mono">help</code> to begin.
            </p>
            <Terminal />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent p-12 md:p-16 text-center shadow-2xl"
          >
            <div className="absolute inset-0 opacity-20">
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-white/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-5">
                Have a project in mind?
              </h2>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
                Let's build something secure, scalable, and impactful together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-10 py-7" onClick={() => navigateTo('/contact')}>
                  Get in Touch
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-10 py-7 border-2 border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a href={CV_URL} download>
                    Download CV
                    <FileText className="ml-3 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand + socials */}
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                Kweyu Delron
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xs">
                Building the future, one secure line of code at a time.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="p-2.5 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                  >
                    <s.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold mb-5 text-lg">Navigation</h4>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => navigateTo(item.path)}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-5 text-lg">Get in Touch</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="mailto:kweyudelron37@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                    kweyudelron37@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="tel:+254708821843" className="text-muted-foreground hover:text-primary transition-colors">
                    +254 (708) 821-843
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Nairobi, Kenya</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground text-sm">© 2025 Kweyu Delron Muyale. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Badge variant="outline" className="text-sm">
                <Zap className="w-4 h-4 mr-2 text-yellow-500" />
                95+ Performance
              </Badge>
              <Badge variant="outline" className="text-sm">
                <Shield className="w-4 h-4 mr-2 text-green-500" />
                WCAG AA Compliant
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
