'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Github,
  Linkedin,
  Twitter,
  Loader2,
  CheckCircle2,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

interface FormData {
  name: string;
  email: string;
  budget: string;
  timeline: string;
  message: string;
}

// Web3Forms access key — set VITE_WEB3FORMS_ACCESS_KEY in your .env (or Vercel
// env vars). Get a free key at https://web3forms.com using kweyudelron37@gmail.com.
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? '';

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    budget: '',
    timeline: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [justSent, setJustSent] = useState(false);

  useDocumentMeta({
    title: 'Contact',
    description: "Get in touch with Kweyu Delron Muyale — let's discuss your project.",
  });

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      toast.error('Contact form is not configured yet — please email me directly at kweyudelron37@gmail.com.');
      return;
    }

    setSending(true);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New portfolio message from ${formData.name}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          budget: formData.budget || 'Not specified',
          timeline: formData.timeline || 'Not specified',
          message: formData.message,
        }),
      });
      const data = await res.json();

      if (data.success) {
        toast.success("Message sent! I'll respond within 24 hours.");
        setFormData({ name: '', email: '', budget: '', timeline: '', message: '' });
        setJustSent(true);
        setTimeout(() => setJustSent(false), 6000);
      } else {
        toast.error(data.message || 'Could not send your message. Please try again.');
      }
    } catch {
      toast.error('Network error. Please try again, or email me directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Main Content */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                Get in Touch
                <span className="block text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                  Let's Build Something Amazing
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Whether it's a new project, collaboration, or just a quick question, I'm here to help.
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-8"
              >
                <Card className="overflow-hidden border-none bg-background/80 shadow-xl backdrop-blur-sm transition-shadow hover:shadow-2xl">
                  <CardContent className="p-8">
                    {/* Profile Photo */}
                    <div className="mb-8 flex justify-center">
                      <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg ring-2 ring-accent/30">
                        <img
                          src="/Profile.jpg"
                          alt="Kweyu Delron Muyale"
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <div className="space-y-6">
                      {[
                        {
                          icon: Mail,
                          label: 'Email',
                          value: 'kweyudelron37@gmail.com',
                          href: 'mailto:kweyudelron37@gmail.com',
                        },
                        {
                          icon: Phone,
                          label: 'Phone',
                          value: '+254 (708) 821-843',
                          href: 'tel:+254708821843',
                        },
                        { icon: MapPin, label: 'Location', value: 'Nairobi, Kenya' },
                        { icon: Clock, label: 'Response Time', value: 'Within 24 hours' },
                      ].map((item, i) => (
                        <div key={i}>
                          <div className="flex items-center gap-4">
                            <div className="rounded-lg bg-primary/10 p-3">
                              <item.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold">{item.label}</p>
                              {item.href ? (
                                <a
                                  href={item.href}
                                  className="text-muted-foreground transition-colors hover:text-primary"
                                >
                                  {item.value}
                                </a>
                              ) : (
                                <p className="text-muted-foreground">{item.value}</p>
                              )}
                            </div>
                          </div>
                          {i < 3 && <Separator className="mt-6" />}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Social Links */}
                <div className="flex justify-center gap-4 md:justify-start">
                  {[
                    { icon: Github, href: 'https://github.com/DelTechs01' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/kweyu-delron-3a4060244/' },
                    { icon: Twitter, href: 'https://x.com/BTripatakah' },
                  ].map((social, i) => (
                    <Button
                      key={i}
                      variant="outline"
                      size="icon"
                      className="rounded-full transition-transform hover:scale-110 hover:shadow-md"
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-5 w-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="overflow-hidden border-none bg-background/80 shadow-xl backdrop-blur-sm transition-shadow hover:shadow-2xl">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl">Send a Message</CardTitle>
                    <CardDescription className="text-base">
                      Share details about your project I'll get back to you promptly.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleContactSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="transition-shadow focus:shadow-md focus:shadow-primary/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="transition-shadow focus:shadow-md focus:shadow-primary/20"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="budget">Budget Range</Label>
                          <Select
                            value={formData.budget}
                            onValueChange={(value) => setFormData({ ...formData, budget: value })}
                          >
                            <SelectTrigger id="budget" className="transition-shadow focus:shadow-md focus:shadow-primary/20">
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
                        <div className="space-y-2">
                          <Label htmlFor="timeline">Timeline</Label>
                          <Select
                            value={formData.timeline}
                            onValueChange={(value) => setFormData({ ...formData, timeline: value })}
                          >
                            <SelectTrigger id="timeline" className="transition-shadow focus:shadow-md focus:shadow-primary/20">
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
                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell me about your project or ideas..."
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          className="transition-shadow focus:shadow-md focus:shadow-primary/20"
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={sending}
                        className="w-full transition-transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-80"
                      >
                        {sending ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>

                      {justSent && (
                        <motion.div
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm font-medium text-green-600 dark:text-green-400"
                          role="status"
                        >
                          <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                          Message sent successfully — I'll get back to you within 24 hours.
                        </motion.div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}