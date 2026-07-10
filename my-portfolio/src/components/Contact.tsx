import { useState } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import PageHeader from "@/components/PageHeader";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

interface FormData {
  name: string;
  email: string;
  budget: string;
  timeline: string;
  message: string;
}

// Web3Forms access key: set VITE_WEB3FORMS_ACCESS_KEY in your .env (or Vercel
// env vars). Get a free key at https://web3forms.com using kweyudelron37@gmail.com.
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "kweyudelron37@gmail.com",
    href: "mailto:kweyudelron37@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+254 (708) 821-843",
    href: "tel:+254708821843",
  },
  { icon: MapPin, label: "Location", value: "Nairobi, Kenya" },
  { icon: Clock, label: "Response time", value: "Within 24 hours" },
];

const socials = [
  { icon: Github, href: "https://github.com/DelTechs01", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/delron-zynthos-labs-3a4060244",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://x.com/BTripatakah", label: "X" },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [justSent, setJustSent] = useState(false);
  const [honeypot, setHoneypot] = useState(""); // spam trap: humans never fill this

  useDocumentMeta({
    title: "Contact",
    description: "Get in touch with Kweyu Delron . Let's discuss your project.",
  });

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot: if this hidden field is filled, it's a bot, so silently ignore.
    if (honeypot) return;

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      toast.error(
        "Contact form is not configured yet. Please email me directly at kweyudelron37@gmail.com.",
      );
      return;
    }

    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New portfolio message from ${formData.name}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          budget: formData.budget || "Not specified",
          timeline: formData.timeline || "Not specified",
          message: formData.message,
        }),
      });
      const data = await res.json();

      if (data.success) {
        toast.success("Message sent! I'll respond within 24 hours.");
        setFormData({
          name: "",
          email: "",
          budget: "",
          timeline: "",
          message: "",
        });
        setJustSent(true);
        setTimeout(() => setJustSent(false), 6000);
      } else {
        toast.error(
          data.message || "Could not send your message. Please try again.",
        );
      }
    } catch {
      toast.error("Network error. Please try again, or email me directly.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        eyebrow="// contact"
        title="Let's work together"
        subtitle="Whether it's a new project, a collaboration, or just a quick question, I'm here to help. Expect a reply within 24 hours."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 space-y-6"
            >
              <Card className="border-border/60">
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-8 flex items-center gap-4">
                    <div className="h-16 w-16 overflow-hidden rounded-full border border-border/60 flex-shrink-0">
                      <img
                        src="/Profile.jpg"
                        alt="Kweyu Delron "
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="font-bold">Kweyu Delron </p>
                      <p className="text-sm text-muted-foreground">
                        Software &amp; Network Engineer
                      </p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    {contactDetails.map((item, i) => (
                      <div key={item.label}>
                        <div className="flex items-center gap-4">
                          <span className="rounded-lg bg-primary/10 p-2.5 text-primary">
                            <item.icon className="h-5 w-5" />
                          </span>
                          <div className="flex-1">
                            <p className="text-sm font-semibold">
                              {item.label}
                            </p>
                            {item.href ? (
                              <a
                                href={item.href}
                                className="text-sm text-muted-foreground transition-colors hover:text-primary break-all"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="text-sm text-muted-foreground">
                                {item.value}
                              </p>
                            )}
                          </div>
                        </div>
                        {i < contactDetails.length - 1 && (
                          <Separator className="mt-5" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-3">
                {socials.map((social) => (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <Card className="border-border/60">
                <CardHeader>
                  <CardTitle className="text-xl">Send a message</CardTitle>
                  <CardDescription>
                    Share details about your project and I&apos;ll get back to
                    you promptly.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleContactSubmit} className="space-y-5">
                    {/* Honeypot: hidden from users, catches bots */}
                    <input
                      type="text"
                      name="botcheck"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      className="hidden"
                    />
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget range</Label>
                        <Select
                          value={formData.budget}
                          onValueChange={(value) =>
                            setFormData({ ...formData, budget: value })
                          }
                        >
                          <SelectTrigger id="budget">
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="<1k">Under $1,000</SelectItem>
                            <SelectItem value="1k-5k">
                              $1,000 - $5,000
                            </SelectItem>
                            <SelectItem value="5k-10k">
                              $5,000 - $10,000
                            </SelectItem>
                            <SelectItem value="10k+">$10,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Timeline</Label>
                        <Select
                          value={formData.timeline}
                          onValueChange={(value) =>
                            setFormData({ ...formData, timeline: value })
                          }
                        >
                          <SelectTrigger id="timeline">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="urgent">
                              ASAP (1-2 weeks)
                            </SelectItem>
                            <SelectItem value="soon">Soon (1 month)</SelectItem>
                            <SelectItem value="flexible">
                              Flexible (2-3 months)
                            </SelectItem>
                            <SelectItem value="planning">
                              Planning phase
                            </SelectItem>
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
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                      />
                    </div>
                    <Button type="submit" disabled={sending} className="w-full">
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
                        Message sent successfully. I&apos;ll get back to you
                        within 24 hours.
                      </motion.div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
