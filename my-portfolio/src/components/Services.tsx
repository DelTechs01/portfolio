import { motion } from 'framer-motion';
import { ChevronLeft, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useLocation } from 'wouter';

const Services = () => {
  const [, setLocation] = useLocation();

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

  const scrollToContact = () => {
    setLocation('/contact');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 glass border-b border-border backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => setLocation('/')}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Services Offered</h1>
              <p className="text-sm text-muted-foreground">How I can help your business grow</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Services Offered</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
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
                        <Button onClick={scrollToContact}>Get Started</Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;