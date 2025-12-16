import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Moon, Sun, ChevronDown, Github, Linkedin, Mail, Phone, Twitter, 
  MapPin, Send, Download, ExternalLink, Code2, Sparkles, Award, 
  Briefcase, GraduationCap, Star, Calendar, Shield, Zap, TrendingUp, 
  Users, CheckCircle2, Clock 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import AIAssistant from '@/components/AIAssistant';
import AccessibilityControls from '@/components/AccessibilityControls';
import PersonalizationEngine from '@/components/PersonalizationEngine';
import { caseStudiesData } from '@/data/caseStudies';

interface PortfolioProps {
  onSelectProject: (id: string) => void;
}

interface FormData {
  name: string;
  email: string;
  budget: string;
  timeline: string;
  message: string;
}

const Portfolio = ({ onSelectProject }: PortfolioProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    budget: '',
    timeline: '',
    message: ''
  });

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    toast.success('Message sent! I\'ll respond within 24 hours.');
    setFormData({ name: '', email: '', budget: '', timeline: '', message: '' });
  };

  const navItems = ['About', 'Skills', 'Case Studies', 'Services', 'Experience', 'Contact'];

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

  const services = [
    {
      title: 'Custom Web Development',
      description: 'Full-stack development from wireframing to deployment with ongoing maintenance.',
      features: [
        'Responsive Design (Mobile-first)',
        'SEO Optimization & Core Web Vitals',
        'Performance Tuning (95+ Lighthouse)',
        'Cloud Deployment (AWS/Azure/GCP)',
        'CI/CD Pipeline Setup',
        '3 Months Free Maintenance'
      ],
      price: 'From $5,000',
      metrics: 'Avg. 40% performance improvement'
    },
    {
      title: 'AI Integration & Consulting',
      description: 'Implement AI solutions to automate workflows and enhance user experiences.',
      features: [
        'ChatGPT/GPT-4 Integration',
        'Custom ML Model Development',
        'Data Analytics & Visualization',
        'Process Automation & RPA',
        'Natural Language Processing',
        'ROI Analysis & Optimization'
      ],
      price: 'From $8,000',
      metrics: 'Clients see avg. 35% cost reduction'
    },
    {
      title: 'Cybersecurity Audits',
      description: 'Comprehensive security assessments to protect your digital assets.',
      features: [
        'OWASP Top 10 Vulnerability Scanning',
        'Penetration Testing',
        'Security Best Practices Review',
        'Compliance Reporting (GDPR, HIPAA)',
        'Remediation Roadmap',
        'Team Security Training'
      ],
      price: 'From $3,000',
      metrics: 'Avg. 95% vulnerability reduction'
    },
  ];

  const experience = [
    {
      role: 'Senior Full-Stack Developer',
      company: 'TechCorp Inc.',
      period: '2022 - Present',
      description: 'Led AI-driven projects resulting in 30% efficiency gains.',
      achievements: [
        'Reduced infrastructure costs by 40%',
        'Implemented CI/CD reducing deployment time by 85%',
        'Mentored 5 junior developers to senior level',
        'Led migration to microservices for 2M+ users'
      ]
    },
    {
      role: 'Full-Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: 'Developed web applications serving 100K+ users with 99.9% uptime.',
      achievements: [
        'Built real-time chat for 50K concurrent users',
        'Optimized queries reducing load time by 60%',
        'Launched 12 successful projects on time',
        'Increased test coverage to 90%'
      ]
    },
    {
      role: 'Junior Developer',
      company: 'StartUp Ventures',
      period: '2018 - 2020',
      description: 'Contributed to multiple projects using modern technologies.',
      achievements: [
        'Mastered React, Node.js, and cloud deployment',
        'Deployed 8 production websites',
        'Improved code quality metrics by 45%',
        'Received "Rising Star" award'
      ]
    },
  ];

  const certifications = [
    { name: 'AWS Certified Developer - Associate', issuer: 'Amazon Web Services', year: '2023', verify: 'https://verify.aws' },
    { name: 'Google Cloud Professional Architect', issuer: 'Google Cloud', year: '2023', verify: 'https://verify.google' },
    { name: 'AI & Machine Learning Specialization', issuer: 'Coursera (Stanford)', year: '2022', verify: 'https://coursera.org' },
    { name: 'Certified Ethical Hacker (CEH)', issuer: 'EC-Council', year: '2022', verify: 'https://verify.eccouncil' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Exceptional developer who delivered ahead of schedule. The AI integration increased our revenue by 50% in Q1.',
      rating: 5,
      project: 'AI-Powered E-Commerce Platform'
    },
    {
      name: 'Michael Chen',
      role: 'CTO, DataFlow',
      content: 'Professional and knowledgeable. Solved complex real-time data problems. Our system now handles 150x more traffic.',
      rating: 5,
      project: 'Real-Time Analytics Dashboard'
    },
    {
      name: 'Emily Rodriguez',
      role: 'CISO, SecureBank',
      content: 'Essential to our security operations. We\'ve prevented multiple major breaches and improved our security posture.',
      rating: 5,
      project: 'Cybersecurity Audit Tool'
    },
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
              onClick={() => scrollToSection('hero')}
            >
              Alex Thompson
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item}
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
              <Button size="lg" className="text-lg px-8 group" onClick={() => scrollToSection('case-studies')}>
                View Case Studies
                <Code2 className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 group" onClick={() => scrollToSection('contact')}>
                Get in Touch
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
              onClick={() => scrollToSection('about')}
            >
              <ChevronDown className="w-8 h-8 mx-auto text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
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
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
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

      {/* Case Studies */}
      <section id="case-studies" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Case Studies</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real projects with measurable results and technical insights
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudiesData.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <Card className="overflow-hidden h-full group cursor-pointer" onClick={() => onSelectProject(project.id)}>
                    <div className="relative overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <Badge className="absolute top-4 right-4 bg-primary">Case Study</Badge>
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-center">
                        {project.results.slice(0, 2).map((result) => (
                          <div key={result.metric}>
                            <p className="font-bold text-primary text-sm">{result.improvement}</p>
                            <p className="text-xs text-muted-foreground">{result.metric}</p>
                          </div>
                        ))}
                      </div>
                      
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Read Full Case Study
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Services Offered</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Separator />
                      
                      <div className="bg-muted/50 rounded-lg p-3">
                        <p className="text-xs text-muted-foreground mb-1">Proven Results</p>
                        <p className="font-semibold text-sm">{service.metrics}</p>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <p className="text-2xl font-bold text-primary">{service.price}</p>
                        <Button onClick={() => scrollToSection('contact')}>Get Started</Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Experience & Education</h2>
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                            <div>
                              <h3 className="text-xl font-bold">{exp.role}</h3>
                              <p className="text-muted-foreground">{exp.company}</p>
                            </div>
                            <Badge variant="outline" className="w-fit">
                              <Clock className="w-3 h-3 mr-1" />
                              {exp.period}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mb-4">{exp.description}</p>
                          <div className="space-y-2">
                            <p className="text-sm font-semibold">Key Achievements:</p>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i} className="text-sm text-muted-foreground flex items-start">
                                  <TrendingUp className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-primary" />
                Education
              </h3>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <h4 className="text-lg font-bold">M.S. in Computer Science</h4>
                      <p className="text-muted-foreground">Stanford University</p>
                      <p className="text-sm text-muted-foreground mt-2">GPA: 3.9/4.0</p>
                      <p className="text-sm text-muted-foreground">Specialization: AI & Machine Learning</p>
                    </div>
                    <Badge variant="outline">
                      <Calendar className="w-3 h-3 mr-1" />
                      2016 - 2018
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Award className="w-6 h-6 mr-2 text-primary" />
                Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold">{cert.name}</p>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                      <Badge variant="secondary">{cert.year}</Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Client Testimonials</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                      <Separator />
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <Badge variant="outline" className="mt-2 text-xs">{testimonial.project}</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg text-muted-foreground">Let's discuss your project</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    {[
                      { icon: Mail, label: 'Email', value: 'alex@example.com', href: 'mailto:alex@example.com' },
                      { icon: Phone, label: 'Phone', value: '+1 (234) 567-890', href: 'tel:+1234567890' },
                      { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
                      { icon: Clock, label: 'Response Time', value: 'Within 24 hours' }
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <item.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="font-semibold">{item.label}</p>
                            {item.href ? (
                              <a href={item.href} className="text-muted-foreground hover:text-primary">{item.value}</a>
                            ) : (
                              <p className="text-muted-foreground">{item.value}</p>
                            )}
                          </div>
                        </div>
                        {i < 3 && <Separator className="mt-4" />}
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <div className="flex gap-4">
                  {[
                    { icon: Github, href: 'https://github.com' },
                    { icon: Linkedin, href: 'https://linkedin.com' },
                    { icon: Twitter, href: 'https://twitter.com' }
                  ].map((social, i) => (
                    <Button key={i} variant="outline" size="icon" asChild>
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="w-5 h-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>I'll respond within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input 
                        id="name"
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email"
                        type="email" 
                        placeholder="your.email@example.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required 
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                          <SelectTrigger id="budget">
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="<5k">Under $5,000</SelectItem>
                            <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                            <SelectItem value="25k+">$25,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="timeline">Timeline</Label>
                        <Select value={formData.timeline} onValueChange={(value) => setFormData({...formData, timeline: value})}>
                          <SelectTrigger id="timeline">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="urgent">ASAP (1-2 weeks)</SelectItem>
                            <SelectItem value="soon">Soon (1 month)</SelectItem>
                            <SelectItem value="flexible">Flexible (2-3 months)</SelectItem>
                            <SelectItem value="planning">Planning phase</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message"
                        placeholder="Tell me about your project..." 
                        rows={5} 
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required 
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
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
                {['About', 'Case Studies', 'Services', 'Contact'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link.toLowerCase().replace(' ', '-'))}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link}
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

      <Button className="fixed bottom-8 right-8 rounded-full shadow-lg" size="icon" onClick={() => scrollToSection('hero')}>
        <ChevronDown className="w-5 h-5 rotate-180" />
      </Button>
    </div>
  );
};

export default Portfolio;