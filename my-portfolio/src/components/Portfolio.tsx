import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { ChevronDown, Code2, Sparkles, Zap, Shield, Users, Terminal as TerminalIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Terminal from '@/components/Terminal';
import { navItems } from '@/components/Navbar';

const Portfolio = () => {
  const [, setLocation] = useLocation();
  const navigateTo = (path: string) => setLocation(path);

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

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="text-lg px-12 py-7 shadow-xl bg-primary hover:bg-primary/90 group"
                onClick={() => navigateTo('/case-studies')}
              >
                Explore Case Studies
                <Code2 className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-12 py-7 border-2 group backdrop-blur-md"
                onClick={() => navigateTo('/contact')}
              >
                Get in Touch
                <ChevronDown className="ml-3 h-6 w-6 rotate-[-90deg] group-hover:translate-x-2 transition-transform" />
              </Button>
            </div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="mt-24 cursor-pointer"
              onClick={() => navigateTo('/about')}
            >
              <ChevronDown className="w-10 h-10 mx-auto text-muted-foreground/60" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Terminal Section */}
      <section className="py-32 bg-muted/50">
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

      {/* Footer */}
      <footer className="bg-card border-t border-border py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-bold mb-5 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                Kweyu Delron
              </h3>
              <p className="text-muted-foreground">Building the future, one secure line of code at a time.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-5 text-lg">Navigation</h4>
              <ul className="space-y-4">
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

            <div>
              <h4 className="font-semibold mb-5 text-lg">Legal</h4>
              <ul className="space-y-4 text-muted-foreground">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-primary transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-5 text-lg">Stay Updated</h4>
              <p className="text-muted-foreground mb-6">Subscribe for project updates and insights.</p>
              <div className="flex gap-3">
                <Input placeholder="Your email" type="email" />
                <Button>
                  <ChevronDown className="w-5 h-5 rotate-[-90deg]" />
                </Button>
              </div>
            </div>
          </div>

          <Separator className="mb-12" />
          <div className="mb-8 p-6 bg-background/50 rounded-lg border border-border/50 backdrop-blur-sm">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:kweyudelron37@gmail.com" className="font-semibold hover:text-primary transition-colors">
                    kweyudelron37@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:+254708821843" className="font-semibold hover:text-primary transition-colors">
                    +254 (708) 821-843
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          <Separator className="mb-12" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground text-sm">© 2025 Kweyu Delron Muyale. All rights reserved.</p>
            <div className="flex items-center gap-8">
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
