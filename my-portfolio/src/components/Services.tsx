import { motion } from 'framer-motion';
import { ChevronLeft, CheckCircle2, Server, HeadphonesIcon, Network, Shield, Blocks, Wifi, Tv } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useLocation } from 'wouter';

const Services = () => {
  const [, setLocation] = useLocation();

  const services = [
    {
      title: 'Backend Development & Web Applications',
      description: 'Building secure, scalable, and high-performance server-side solutions.',
      icon: Server,
      features: [
        'RESTful API Design & Development',
        'Database Design & Optimization (SQL/NoSQL)',
        'Server-Side Logic & Authentication',
        'Scalable Backend Architecture',
        'Integration with Frontend Frameworks',
        'Performance & Security Best Practices'
      ],
      price: 'From $3,000',
      metrics: 'Efficient, maintainable systems with 99.9% uptime'
    },
    {
      title: 'IT Support & Technical Assistance',
      description: 'Reliable troubleshooting and setup for hardware, software, and systems.',
      icon: HeadphonesIcon,
      features: [
        'Hardware & Software Troubleshooting',
        'Computer & Server Setup/Maintenance',
        'Operating System Installation & Configuration',
        'Data Backup & Recovery Solutions',
        'Printer, Peripheral & Device Support',
        'Remote & On-Site Technical Assistance'
      ],
      price: 'From $500',
      metrics: 'Fast resolution with minimal downtime'
    },
    {
      title: 'Network Engineering & Management',
      description: 'Designing and maintaining robust, secure wired and wireless networks.',
      icon: Network,
      features: [
        'Network Design & Implementation',
        'Router, Switch & Firewall Configuration',
        'Internet & WiFi Installation/Optimization',
        'Network Performance Monitoring',
        'VPN Setup & Remote Access',
        'Bandwidth Management & QoS'
      ],
      price: 'From $1,500',
      metrics: 'Stable, high-speed connectivity for homes & offices'
    },
    {
      title: 'Cybersecurity Services',
      description: 'Protecting systems and data with proactive security measures.',
      icon: Shield,
      features: [
        'Vulnerability Assessments & Scans',
        'Firewall & Intrusion Detection Setup',
        'Endpoint Protection & Antivirus Management',
        'Secure Network Configuration',
        'Data Encryption & Access Control',
        'Security Awareness Guidance'
      ],
      price: 'From $2,000',
      metrics: 'Significant reduction in security risks'
    },
    {
      title: 'Blockchain & Emerging Tech Solutions',
      description: 'Exploring and implementing decentralized and innovative technologies.',
      icon: Blocks,
      features: [
        'Blockchain Application Consulting',
        'Smart Contract Development Basics',
        'Decentralized System Design',
        'Cryptocurrency Wallet Setup',
        'Proof-of-Concept Prototypes',
        'Integration with Existing Systems'
      ],
      price: 'From $4,000',
      metrics: 'Future-ready solutions with transparency & security'
    },
    {
      title: 'Home Entertainment & Streaming Setup',
      description: 'Professional setup for seamless movie and live sports streaming.',
      icon: Tv,
      features: [
        'High-Speed WiFi Optimization for Streaming',
        'Smart TV & Streaming Device Configuration',
        'IPTV / Football Streaming Setup (Legal Platforms)',
        'Multi-Device Streaming Solutions',
        '4K/HDR Optimization',
        'Parental Controls & Safe Streaming'
      ],
      price: 'From $800',
      metrics: 'Buffer-free, high-quality entertainment experience'
    },
  ];

  const scrollToContact = () => {
    setLocation('/contact');
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-gradient-to-tr from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Sticky Header */}
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
                Services
              </h1>
              <p className="text-muted-foreground">Professional solutions tailored to your needs</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <section className="py-28 lg:py-40 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              My Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From secure backend systems and robust networks to home entertainment setups — I deliver reliable, practical, and professional technical solutions.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full border-border/50 bg-background/60 backdrop-blur shadow-xl hover:shadow-2xl transition-all duration-700">
                  <CardHeader className="pb-8">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-9 h-9 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold leading-tight">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-4 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-8">
                    <ul className="space-y-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Separator className="my-6" />

                    <div className="space-y-4">
                      <div className="bg-muted/40 rounded-xl p-4">
                        <p className="text-sm text-muted-foreground mb-1">Expected Outcome</p>
                        <p className="font-bold text-foreground">{service.metrics}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-3xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          {service.price}
                        </p>
                        <Button
                          size="lg"
                          onClick={scrollToContact}
                          className="shadow-lg hover:shadow-xl transition-shadow"
                        >
                          Inquire Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-32"
          >
            <p className="text-2xl text-muted-foreground mb-8">
              Need a reliable technical partner for your project or setup?
            </p>
            <Button
              size="lg"
              className="px-12 py-8 text-xl shadow-2xl bg-primary hover:bg-primary/90"
              onClick={scrollToContact}
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;