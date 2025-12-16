import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Mail, Phone, MapPin, Clock, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { useLocation } from 'wouter';

interface FormData {
  name: string;
  email: string;
  budget: string;
  timeline: string;
  message: string;
}

const Contact = () => {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    toast.success('Message sent! I\'ll respond within 24 hours.');
    setFormData({ name: '', email: '', budget: '', timeline: '', message: '' });
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
              <h1 className="text-2xl font-bold">Get in Touch</h1>
              <p className="text-sm text-muted-foreground">Let's discuss your project</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg text-muted-foreground">Let's discuss your project</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    {[
                      { icon: Mail, label: 'Email', value: 'kweyudelron37@gamil.com', href: 'mailto:kweyudelron37@gmail.com' },
                      { icon: Phone, label: 'Phone', value: '+254 (708) 821-843', href: 'tel:+254708821843' },
                      { icon: MapPin, label: 'Location', value: 'Nairobi, KE' },
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
                    { icon: Github, href: 'https://github.com/DelTechs01' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/kweyu-delron-3a4060244/' },
                    { icon: Twitter, href: 'https://x.com/BTripatakah' }
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
                            <SelectItem value="<5k">Under Ksh5,000</SelectItem>
                            <SelectItem value="5k-10k">Ksh5,000 - Ksh10,000</SelectItem>
                            <SelectItem value="10k-25k">Ksh10,000 - Ksh25,000</SelectItem>
                            <SelectItem value="25k+">Ksh25,000+</SelectItem>
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
    </div>
  );
};

export default Contact;