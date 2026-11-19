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
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

// Drop your CV at public/Kweyu_Delron__CV.pdf to enable the download.
const CV_URL = "/Kweyu_Delron__CV.pdf";
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

const stats = [
  { value: "5+", label: "Years experience" },
  { value: "5+", label: "Products shipped" },
  { value: "95+", label: "Lighthouse score" },
];

// Formerly the "engineer.ts" code card: same facts, now plain scannable text.
const facts = [
  { label: "Based in", value: "Nairobi, Kenya" },
  { label: "Focus", value: "Networking, ISP operations, Automation" },
  { label: "Experience", value: "5+ years" },
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
    note: "Programming, backend, networking, security, and tools",
  },
  {
    href: "/services",
    label: "Services",
    note: "What I can build, set up, or secure for you",
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
  const featured = caseStudiesData.slice(0, 3);

  useDocumentMeta({
    title: "Home",
    isHome: true,
    description:
      "Kweyu Delron  - Software Engineer, Network Engineer and IT Solutions specialist building secure, scalable, AI-powered systems.",
  });

  return (
    <div className="bg-background text-foreground">
      {/* ── Hero: who I am and what I do ─────────────────────── */}
      <section className="relative isolate overflow-hidden">
        <div aria-hidden className="hero-glow" />

        <div className="mx-auto max-w-6xl px-4 pt-20 pb-20 sm:px-6 md:pt-32 md:pb-28 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-card/50 px-3 py-1.5 backdrop-blur">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60 [animation-duration:2.5s]" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-xs tracking-wider text-muted-foreground">
                AVAILABLE FOR WORK
              </span>
            </p>

            <h1 className="max-w-5xl text-[clamp(2.5rem,7.2vw,5.25rem)] font-medium leading-[1.02] tracking-[-0.04em]">
              Kweyu Delron.{" "}
              <span className="text-muted-foreground">
                Software &amp; network engineer building secure, scalable
                systems.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              I design and build secure, scalable systems: backend services,
              network infrastructure, and AI-powered products, shipped to
              production and built to last.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button size="lg" className="group h-11 rounded-full px-6" asChild>
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-11 rounded-full px-6"
                asChild
              >
                <Link href="/contact">Contact me</Link>
              </Button>
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
          </motion.div>

          {/* Facts + stats: one quiet, scannable row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-20 md:mt-28"
          >
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border pt-8 md:grid-cols-3 lg:grid-cols-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="label-mono">{s.label}</dt>
                  <dd className="mt-2 text-3xl font-medium tracking-tight">
                    {s.value}
                  </dd>
                </div>
              ))}
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="label-mono">{f.label}</dt>
                  <dd className="mt-2 text-base leading-snug md:mt-3">
                    {f.value}
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
            Selected projects
          </h2>
        </Reveal>

        <ol className="mt-12 border-b border-border">
          {featured.map((project, i) => {
            const [name, descriptor] = project.title.split(" - ");
            const live = project.demo && !project.comingSoon;
            const body = (
              <>
                <span className="font-mono text-xs text-muted-foreground pt-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">
                  <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-2xl font-medium tracking-tight transition-colors group-hover:text-primary md:text-3xl">
                      {name}
                    </span>
                    {descriptor ? (
                      <span className="text-sm text-muted-foreground">
                        {descriptor}
                      </span>
                    ) : null}
                  </span>
                  <span className="mt-3 block max-w-2xl leading-relaxed text-muted-foreground">
                    {project.description}
                  </span>
                  <span className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted-foreground">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </span>
                </span>
                <span className="flex items-center gap-1.5 pt-1.5 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                  <span className="hidden sm:inline">
                    {live ? "Open App" : "View project"}
                  </span>
                  <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </>
            );
            const rowClass =
              "group grid grid-cols-[2rem_1fr_auto] gap-x-3 border-t border-border py-8 transition-colors sm:gap-x-6 md:py-10";

            return (
              <li key={project.id}>
                <Reveal delay={i * 0.06}>
                  {live ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={rowClass}
                    >
                      {body}
                    </a>
                  ) : (
                    <Link href="/projects" className={rowClass}>
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
            View all projects
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </Section>

      {/* ── 02 About ─────────────────────────────────────────── */}
      <Section index="02" label="About" id="about">
        <div className="grid gap-10 md:grid-cols-[1fr_15rem] md:gap-14">
          <Reveal>
            <h2 className="text-2xl font-medium leading-snug tracking-[-0.025em] md:text-4xl md:leading-[1.15]">
              I&apos;m a Software Engineer, IT Support professional, and Network
              Engineer{" "}
              <span className="text-muted-foreground">
                with a passion for building secure, efficient, and scalable
                systems.
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              I specialize in backend development, network management,
              cybersecurity, and blockchain technologies, creating practical,
              real-world solutions that prioritize performance and reliability.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="order-first md:order-none">
            <img
              src="/Profile.jpg"
              alt="Kweyu Delron  - Software Engineer & Network Specialist"
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
          </div>
        </Reveal>
      </Section>
    </div>
  );
};

export default Portfolio;
