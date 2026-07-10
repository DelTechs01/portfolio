import { motion } from 'framer-motion';
import { CheckCircle2, Server, HeadphonesIcon, Network, Shield, Blocks, Tv, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLocation } from 'wouter';
import PageHeader from '@/components/PageHeader';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

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
      'Performance & Security Best Practices',
    ],
    price: 'From $3,000',
    metrics: 'Efficient, maintainable systems with 99.9% uptime',
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
      'Remote & On-Site Technical Assistance',
    ],
    price: 'From $500',
    metrics: 'Fast resolution with minimal downtime',
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
      'Bandwidth Management & QoS',
    ],
    price: 'From $1,500',
    metrics: 'Stable, high-speed connectivity for homes & offices',
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
      'Security Awareness Guidance',
    ],
    price: 'From $2,000',
    metrics: 'Significant reduction in security risks',
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
      'Integration with Existing Systems',
    ],
    price: 'From $4,000',
    metrics: 'Future-ready solutions with transparency & security',
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
      'Parental Controls & Safe Streaming',
    ],
    price: 'From $800',
    metrics: 'Buffer-free, high-quality entertainment experience',
  },
];

const Services = () => {
  const [, setLocation] = useLocation();
  useDocumentMeta({
    title: 'Services',
    description:
      'Services: backend & web development, IT support, network engineering, cybersecurity, blockchain, and home streaming setup.',
  });

  const goToContact = () => setLocation('/contact');

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        eyebrow="// services"
        title="Services"
        subtitle="From secure backend systems and robust networks to home entertainment setups, I deliver reliable, practical, and professional technical solutions."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.08, duration: 0.4 }}
              >
                <Card className="h-full flex flex-col border-border/60 hover:border-primary/40 hover:shadow-lg transition-colors">
                  <CardContent className="flex flex-col flex-1 p-6">
                    <span className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 text-primary">
                      <service.icon className="w-6 h-6" />
                    </span>
                    <h3 className="text-lg font-bold leading-snug mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <ul className="space-y-2.5 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-5 border-t border-border/60">
                      <div className="rounded-lg bg-muted/50 px-3 py-2.5 mb-4">
                        <p className="text-xs text-muted-foreground mb-0.5">Expected outcome</p>
                        <p className="text-sm font-medium text-foreground">{service.metrics}</p>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-lg font-bold text-primary">{service.price}</p>
                        <Button size="sm" variant="outline" onClick={goToContact} className="group">
                          Inquire
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 via-card to-accent/10 p-10 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Need a reliable technical partner?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-7">
              Tell me about your project or setup and I&apos;ll help you get it done right.
            </p>
            <Button size="lg" className="px-8" onClick={goToContact}>
              Get in touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
