import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Terminal from "@/components/Terminal";
import Reveal from "@/components/Reveal";
import { caseStudiesData } from "@/data/caseStudies";
import { networkWork } from "@/data/networkWork";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

// The Resume / Download CV buttons stay hidden until a CV exists.
// To enable: put the PDF at public/Kweyu_Delron__CV.pdf, then set
//   const CV_URL: string | null = "/Kweyu_Delron__CV.pdf";
const CV_URL: string | null = null;
const EMAIL = "kweyudelron37@gmail.com";

const socialLinks = [
  { icon: Github, href: "https://github.com/DelTechs01", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/delron-zynthos-labs-3a4060244",
    label: "LinkedIn",
  },
  { icon: Twitter, href: "https://x.com/BTripatakah", label: "X" },
];

// Every figure is backed by something on the site. The 224 Mbps result lives
// in the featured card beside the headline, so it is not repeated here.
const stats = [
  { value: "4+", label: "Years experience" },
  { value: String(networkWork.length), label: "Network case studies" },
  { value: String(caseStudiesData.length), label: "Software projects" },
  { value: "RouterOS 7", label: "Primary platform" },
];

const stack = [
  "MikroTik RouterOS 7",
  "Policy routing",
  "PPPoE",
  "Hotspot",
  "DHCP & NAT",
  "Packet capture",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
];

// The rest of the site, as a fast index from the About section.
const more = [
  {
    href: "/about",
    label: "About",
    note: "Background and the principles that guide my work",
  },
  {
    href: "/skills",
    label: "Skills",
    note: "Network engineering, fault diagnosis, ISP operations, and software",
  },
  {
    href: "/services",
    label: "Services",
    note: "What I can design, set up, or build for you",
  },
  {
    href: "/education",
    label: "Education",
    note: "Degree, certifications, and timeline",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

/** Home-page section: mono index + label in a narrow rail, content beside it. */
function Section({
  index,
  label,
  id,
  children,
}: {
  index: string;
  label: string;
  id: string;
  children: ReactNode;
}) {
  return (
    <section
      aria-labelledby={`${id}-label`}
      className="border-t border-border py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[13rem_1fr] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p id={`${id}-label`} className="label-mono flex items-center gap-3">
            <span className="text-primary">{index}</span>
            <span aria-hidden className="h-px w-6 bg-border" />
            {label}
          </p>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

const Portfolio = () => {
  // Network work leads; software projects follow.
  const rows = [
    ...networkWork.map((w) => ({
      key: w.id,
      name: w.title,
      descriptor: w.kind,
      description: w.summary,
      tags: w.platform.slice(0, 3),
      href: `/work/${w.id}`,
      external: false,
      cta: "Read case",
    })),
    ...caseStudiesData.slice(0, 3).map((p) => {
      const [name, descriptor] = p.title.split(" - ");
      const live = Boolean(p.demo) && !p.comingSoon;
      return {
        key: p.id,
        name,
        descriptor,
        description: p.description,
        tags: p.tags.slice(0, 3),
        href: live ? (p.demo as string) : "/projects",
        external: live,
        cta: live ? "Open App" : "View project",
      };
    }),
  ];

  useDocumentMeta({
    title: "Home",
    isHome: true,
    description:
      "Kweyu Delron - Network engineer and software engineer in Nairobi. MikroTik RouterOS 7, ISP operations, and web platforms for billing, messaging and AI agents.",
  });

  return (
    <div className="bg-background text-foreground">
      {/* ── Hero: who I am and what I do ─────────────────────── */}
      <section className="relative isolate overflow-hidden">
        <div aria-hidden className="hero-glow" />

        <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 md:pt-28 md:pb-24 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="grid gap-12 lg:grid-cols-[1fr_21rem] lg:items-end lg:gap-16"
          >
            <div className="min-w-0">
            <p className="label-mono mb-6 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="text-primary">Network &amp; Software Engineer</span>
              <span aria-hidden className="hidden h-px w-6 bg-border sm:block" />
              Nairobi, Kenya
            </p>

            <h1 className="text-[clamp(2.75rem,6.5vw,4.75rem)] font-medium leading-[1.02] tracking-[-0.04em]">
              Kweyu Delron
            </h1>

            <p className="mt-6 max-w-2xl text-2xl font-medium leading-snug tracking-[-0.02em] text-muted-foreground md:text-3xl">
              I design resilient ISP networks and build the software around
              them.
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              I run internet service provider operations, design load balancing
              and failover on MikroTik RouterOS 7, diagnose faults from optics
              to packet capture, and build web platforms for billing, messaging
              and AI agents.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button size="lg" className="group h-11 rounded-full px-6" asChild>
                <Link href="/projects">
                  View work
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-11 rounded-full px-6"
                asChild
              >
                <Link href="/contact">Get in touch</Link>
              </Button>
              {CV_URL ? (
                <Button
                  size="lg"
                  variant="ghost"
                  className="group h-11 rounded-full px-5 text-muted-foreground"
                  asChild
                >
                  <a href={CV_URL} download>
                    Resume
                    <Download className="transition-transform group-hover:translate-y-0.5" />
                  </a>
                </Button>
              ) : null}

              <span aria-hidden className="mx-1 hidden h-5 w-px bg-border sm:block" />

              <div className="flex items-center gap-1">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-primary"
                  >
                    <s.icon className="size-[18px]" />
                  </a>
                ))}
              </div>
            </div>
            </div>

            {/* Featured result: the strongest piece of evidence, above the fold */}
            <Link
              href="/work/dual-link-failover"
              className="group block rounded-2xl border border-border bg-card/60 p-6 backdrop-blur transition-colors hover:border-primary/40"
            >
              <p className="label-mono">Featured result</p>
              <p className="mt-5 flex items-baseline gap-2">
                <span className="text-5xl font-medium tracking-[-0.04em]">
                  224
                </span>
                <span className="text-lg text-muted-foreground">Mbps</span>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Usable capacity, up from 190 Mbps, with no customer downtime.
              </p>
              <p className="mt-5 border-t border-border pt-5 text-sm leading-relaxed">
                Dual link load balancing and automatic failover on MikroTik
                RouterOS 7.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium transition-colors group-hover:text-primary">
                Read the case study
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </motion.div>

          {/* Stats: one quiet, scannable row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-16 md:mt-24"
          >
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="label-mono">{s.label}</dt>
                  <dd className="mt-2 text-3xl font-medium tracking-tight">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10">
              <p className="label-mono mb-4">Tools I work with</p>
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                {stack.map((t) => (
                  <li key={t} className="flex items-center gap-5">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 01 Selected work ─────────────────────────────────── */}
      <Section index="01" label="Selected work" id="work">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
            Selected work
          </h2>
        </Reveal>

        <ol className="mt-12 border-b border-border">
          {rows.map((row, i) => {
            const body = (
              <>
                <span className="font-mono text-xs text-muted-foreground pt-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-2xl font-medium tracking-tight transition-colors group-hover:text-primary md:text-3xl">
                      {row.name}
                    </span>
                    {row.descriptor ? (
                      <span className="text-sm text-muted-foreground">
                        {row.descriptor}
                      </span>
                    ) : null}
                  </span>
                  <span className="mt-3 block max-w-2xl leading-relaxed text-muted-foreground">
                    {row.description}
                  </span>
                  <span className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground">
                    {row.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </span>
                </span>
                <span className="flex items-center gap-1.5 pt-1.5 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                  <span className="hidden sm:inline">{row.cta}</span>
                  {row.external ? (
                    <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  ) : (
                    <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  )}
                </span>
              </>
            );
            const rowClass =
              "group grid grid-cols-[2rem_1fr_auto] gap-x-3 border-t border-border py-8 transition-colors sm:gap-x-6 md:py-10";

            return (
              <li key={row.key}>
                <Reveal delay={Math.min(i * 0.05, 0.2)}>
                  {row.external ? (
                    <a
                      href={row.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={rowClass}
                    >
                      {body}
                    </a>
                  ) : (
                    <Link href={row.href} className={rowClass}>
                      {body}
                    </Link>
                  )}
                </Reveal>
              </li>
            );
          })}
        </ol>

        <Reveal className="mt-8">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            View all work
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </Section>

      {/* ── 02 About ─────────────────────────────────────────── */}
      <Section index="02" label="About" id="about">
        <div className="grid gap-10 md:grid-cols-[1fr_15rem] md:gap-14">
          <Reveal>
            <h2 className="text-2xl font-medium leading-snug tracking-[-0.025em] md:text-4xl md:leading-[1.15]">
              I&apos;m a network engineer and software engineer working at an
              internet service provider,{" "}
              <span className="text-muted-foreground">
                building reliable networks and the software that runs alongside
                them.
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              On MikroTik RouterOS 7 I designed dual link load balancing and
              automatic failover that raised usable capacity from 190 to 224
              Mbps with no customer downtime. I also build web platforms: AI
              agents, bulk SMS and ISP billing.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="order-first md:order-none">
            <img
              src="/Profile.jpg"
              alt="Kweyu Delron - Network & Software Engineer"
              width={480}
              height={480}
              loading="lazy"
              decoding="async"
              className="aspect-square w-32 rounded-2xl border border-border object-cover md:w-full"
            />
          </Reveal>
        </div>

        <ul className="mt-14 border-b border-border">
          {more.map((item, i) => (
            <li key={item.href}>
              <Reveal delay={i * 0.04}>
                <Link
                  href={item.href}
                  className="group grid grid-cols-[1fr_auto] items-baseline gap-x-6 border-t border-border py-5 sm:grid-cols-[9rem_1fr_auto]"
                >
                  <span className="text-lg font-medium tracking-tight transition-colors group-hover:text-primary">
                    {item.label}
                  </span>
                  <span className="col-span-2 row-start-2 mt-1 text-sm text-muted-foreground sm:col-span-1 sm:row-start-auto sm:mt-0">
                    {item.note}
                  </span>
                  <ArrowRight className="size-4 self-center text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-foreground" />
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── 03 Interactive terminal ──────────────────────────── */}
      <Section index="03" label="Terminal" id="terminal">
        <Reveal>
          <h2 className="text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
            Interactive terminal
          </h2>
          <p className="mt-5 mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Explore my skills and experience through a command line. Type{" "}
            <code className="rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-sm text-foreground">
              help
            </code>{" "}
            to begin.
          </p>
          <Terminal />
        </Reveal>
      </Section>

      {/* ── 04 Contact ───────────────────────────────────────── */}
      <Section index="04" label="Contact" id="contact">
        <Reveal>
          <h2 className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.035em] md:text-6xl">
            Have a project in mind?
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Let&apos;s build something secure, scalable, and genuinely useful
            together.
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="group mt-10 inline-flex max-w-full items-center gap-3 border-b border-border pb-2 text-xl font-medium tracking-tight transition-colors hover:border-primary hover:text-primary sm:text-2xl md:text-3xl"
          >
            <span className="break-all">{EMAIL}</span>
            <ArrowUpRight className="size-6 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button size="lg" className="h-11 rounded-full px-6" asChild>
              <Link href="/contact">Get in touch</Link>
            </Button>
            {CV_URL ? (
              <Button
                size="lg"
                variant="outline"
                className="group h-11 rounded-full px-6"
                asChild
              >
                <a href={CV_URL} download>
                  Download CV
                  <Download className="transition-transform group-hover:translate-y-0.5" />
                </a>
              </Button>
            ) : null}
          </div>
        </Reveal>
      </Section>
    </div>
  );
};

export default Portfolio;
