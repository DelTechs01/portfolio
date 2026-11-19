import { Link } from "wouter";
import { ArrowRight, Zap, Shield, Users, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { caseStudiesData } from "@/data/caseStudies";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

// Every figure here is backed by something on the site: the failover case
// study, the projects list, or the education page. Keep it that way.
const highlights = [
  { value: "4+", label: "Years of hands-on experience" },
  { value: "224 Mbps", label: "Usable capacity, up from 190" },
  { value: "Zero", label: "Customer downtime during that change" },
  { value: String(caseStudiesData.length), label: "Software projects built" },
];

const values = [
  {
    icon: Zap,
    title: "Performance",
    description: "Fast, optimized solutions, measured rather than assumed.",
  },
  {
    icon: Shield,
    title: "Security by design",
    description: "Access control and safe defaults considered from the start.",
  },
  {
    icon: Users,
    title: "User-centric",
    description:
      "Intuitive, accessible interfaces that prioritize real human needs.",
  },
  {
    icon: Globe,
    title: "Ethical innovation",
    description:
      "Responsible use of AI and automation, with people kept in control.",
  },
];

const About = () => {
  useDocumentMeta({
    title: "About",
    description:
      "About Kweyu Delron - network engineer and software engineer working at an internet service provider, based in Nairobi, Kenya.",
  });

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        eyebrow="// about-me"
        title="About me"
        subtitle="Network engineer and software engineer, focused on reliable networks and the software that runs alongside them."
      />

      {/* Bio + portrait */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[20rem_1fr] gap-12 lg:gap-20 items-start">
            <Reveal className="max-w-xs">
              <img
                src="/Profile.jpg"
                alt="Kweyu Delron - Network & Software Engineer"
                width={640}
                height={640}
                className="aspect-square w-full rounded-2xl border border-border object-cover"
              />
              <p className="label-mono mt-4">Nairobi, Kenya</p>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="space-y-5 text-lg leading-relaxed text-muted-foreground max-w-2xl">
                <p>
                  I&apos;m a{" "}
                  <strong className="font-medium text-foreground">
                    Network Engineer
                  </strong>{" "}
                  and{" "}
                  <strong className="font-medium text-foreground">
                    Software Engineer
                  </strong>
                  . I work at an internet service provider, where I run
                  operations: PPPoE, hotspot, DHCP, NAT and provider
                  escalation.
                </p>
                <p>
                  On{" "}
                  <strong className="font-medium text-foreground">
                    MikroTik RouterOS 7
                  </strong>{" "}
                  I designed dual link load balancing and automatic failover
                  that raised usable capacity from 190 to 224 Mbps with no
                  customer downtime, built on policy routing with routing
                  tables, mangle rules, connection marks and health check
                  scripts.
                </p>
                <p>
                  I also build software: an AI agent platform, a bulk SMS
                  platform, an ISP billing system and a hospital management
                  system. I&apos;m completing a BSc in Software Engineering at
                  Kirinyaga University.
                </p>
              </div>

              <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-border pt-8 max-w-2xl">
                {highlights.map((stat) => (
                  <div key={stat.label}>
                    <dt className="label-mono">{stat.label}</dt>
                    <dd className="mt-2 text-3xl font-medium tracking-tight">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
                <Link
                  href="/work/dual-link-failover"
                  className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                >
                  Read the failover case study
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/skills"
                  className="group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
                >
                  See skills and evidence
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-card/40 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="label-mono mb-3">How I work</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.03em] mb-12">
            Principles that guide my work
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.06}>
                <Card className="h-full shadow-none hover:border-primary/40 transition-colors">
                  <CardContent className="p-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                      <value.icon className="w-5 h-5" />
                    </span>
                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
