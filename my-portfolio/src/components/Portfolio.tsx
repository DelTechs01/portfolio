import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'wouter';
import { 
  Moon, Sun, ChevronDown, Github, Linkedin, Mail, Send, Twitter, 
  Code2, Sparkles, Zap, Shield, Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import AIAssistant from '@/components/AIAssistant';
import AccessibilityControls from '@/components/AccessibilityControls';
import PersonalizationEngine from '@/components/PersonalizationEngine';

interface PortfolioProps {
  onSelectProject: (id: string) => void;
}

const Portfolio = ({ onSelectProject }: PortfolioProps) => {
  const [, setLocation] = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true' || 
                   window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', newMode.toString());
  };

  const navigateTo = (path: string) => {
    setLocation(path);
  };

  const navItems = [
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Case Studies', path: '/case-studies' },
    { label: 'Services', path: '/services' },
    { label: 'Education', path: '/education' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <div className="min-h-screen">
      <AccessibilityControls />
      <AIAssistant />
      <PersonalizationEngine />

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 glass border-b border-border backdrop-blur-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text cursor-pointer"
              onClick={() => setLocation('/')}
            >
              Alex Thompson
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => navigateTo(item.path)}
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 px-4 py-1.5 text-sm">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              Available for Freelance Projects
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Alex Thompson
            </h1>
            
            <p className="text-2xl md:text-3xl text-muted-foreground mb-4 font-light">
              Full-Stack Developer & AI Enthusiast
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transforming complex ideas into scalable, AI-driven solutions that drive business growth
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-background/50 backdrop-blur px-4 py-2 rounded-full">
                <Zap className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold">95+ Lighthouse Score</span>
              </div>
              <div className="flex items-center gap-2 bg-background/50 backdrop-blur px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-sm font-semibold">Security First</span>
              </div>
              <div className="flex items-center gap-2 bg-background/50 backdrop-blur px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-accent" />
                <span className="text-sm font-semibold">50+ Projects</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8 group" onClick={() => navigateTo('/case-studies')}>
                View Case Studies
                <Code2 className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 group" onClick={() => navigateTo('/contact')}>
                Get in Touch
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
              onClick={() => navigateTo('/about')}
            >
              <ChevronDown className="w-8 h-8 mx-auto text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">Alex Thompson</h3>
              <p className="text-muted-foreground text-sm">Building the future, one line at a time.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => navigateTo(item.path)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                  <li key={item}><a href="#" className="hover:text-primary">{item}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-sm text-muted-foreground mb-3">Get project updates</p>
              <div className="flex gap-2">
                <Input placeholder="Your email" type="email" className="text-sm" />
                <Button size="icon"><Send className="w-4 h-4" /></Button>
              </div>
            </div>
          </div>
          
          <Separator className="mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© 2024 Alex Thompson. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="text-xs">
                <Zap className="w-3 h-3 mr-1" />
                95+ Performance
              </Badge>
              <Badge variant="outline" className="text-xs">
                <Shield className="w-3 h-3 mr-1" />
                WCAG AA
              </Badge>
            </div>
          </div>
        </div>
      </footer>

      <Button className="fixed bottom-8 right-8 rounded-full shadow-lg" size="icon" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <ChevronDown className="w-5 h-5 rotate-180" />
      </Button>
    </div>
  );
};

export default Portfolio;