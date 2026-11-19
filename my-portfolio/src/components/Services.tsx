import { Link } from 'wouter';
import { CheckCircle2, Server, Network, RadioTower, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

// Each service points at the work that backs it. If a service has no work
// behind it on this site, it does not belong here. Network work leads.
const services = [
  {
    title: 'Network Engineering',
    description: 'Designing resilient networks on MikroTik RouterOS 7.',
    icon: Network,
    features: [
      'Dual link load balancing and automatic failover',
      'Policy routing: routing tables, mangle rules, connection marks',
      'Health check scripts',
      'Fault diagnosis from optics to packet capture',
    ],
    proof: {
      label: 'Failover case study: 190 to 224 Mbps, no customer downtime',
      href: '/work/dual-link-failover',
    },
  },
  {
    title: 'Internet Service Provider Operations',
    description: 'Running the services an internet service provider depends on every day.',
    icon: RadioTower,
    features: [
      'PPPoE and hotspot services',
      'DHCP and NAT',
      'Outage diagnosis and provider escalation',
      'Billing with M-Pesa payments and MikroTik control (Cloud ISP Engine)',
    ],
    proof: {
      label: 'Outage case study: fault proven on the upstream side',
      href: '/work/multi-provider-outage',
    },
  },
  {
    title: 'Backend Development & Web Applications',
    description: 'Building web platforms with dashboards and APIs.',
    icon: Server,
    features: [
      'RESTful API design and development',
      'Database design',
      'Server-side logic and authentication',
      'Dashboards and integration with frontend frameworks',
    ],
    proof: {
      label: 'Live projects: AI agents, bulk SMS, hospital management',
      href: '/projects',
    },
  },
];

const Services = () => {
  useDocumentMeta({
    title: 'Services',
    description:
      'Services: network engineering on MikroTik RouterOS 7, internet service provider operations, and backend and web development.',
  });

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        eyebrow="// services"
        title="Services"
        subtitle="Three things I do, each backed by work you can read or open: resilient networks, internet service provider operations, and the software around them."
      />

      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.06} className="h-full">
                <Card className="h-full flex flex-col shadow-none hover:border-primary/40 transition-colors">
                  <CardContent className="flex flex-col flex-1 p-6">
                    <div className="flex items-center justify-between mb-5">
                      <span className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <service.icon className="w-6 h-6" />
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h2 className="text-xl font-medium tracking-tight leading-snug mb-2">
                      {service.title}
                    </h2>
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

                    <div className="mt-auto pt-5 border-t border-border">
                      <p className="label-mono mb-2">Backed by</p>
                      <Link
                        href={service.proof.href}
                        className="group flex items-start justify-between gap-3 text-sm font-medium leading-relaxed transition-colors hover:text-primary"
                      >
                        {service.proof.label}
                        <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 relative isolate overflow-hidden rounded-2xl border border-border bg-card p-10 md:p-14 text-center">
            <div aria-hidden className="hero-glow" />
            <h2 className="text-2xl md:text-4xl font-medium tracking-[-0.03em] mb-3">
              Need a reliable technical partner?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-7">
              Tell me about your project or setup and I&apos;ll help you get it done right.
            </p>
            <Button size="lg" className="h-11 rounded-full px-8" asChild>
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
