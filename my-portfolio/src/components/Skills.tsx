import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

// What I lead with: every item here comes from the network work below.
const coreStack = [
  'MikroTik RouterOS 7',
  'Load balancing & failover',
  'Policy routing',
  'PPPoE',
  'Hotspot',
  'DHCP & NAT',
  'Packet capture',
];

// Each category carries one line of evidence from real work. No self-scored
// ratings: if a skill has no work behind it, it does not belong on this page.
// Order matters: the first category is how I want to be positioned.
const categories = [
  {
    name: 'Network Engineering',
    evidence:
      'Designed dual link load balancing and automatic failover on MikroTik RouterOS 7, raising usable capacity from 190 to 224 Mbps with no customer downtime.',
    skills: [
      'MikroTik RouterOS 7',
      'Dual link load balancing',
      'Automatic failover',
      'Policy routing',
      'Routing tables',
      'Mangle rules',
      'Connection marks',
      'Health check scripts',
    ],
  },
  {
    name: 'Fault Diagnosis',
    evidence:
      "Diagnosed a multi provider outage across optics, VLAN, ARP, routing and packet capture, and proved the fault was on the upstream provider's side.",
    skills: ['Optics', 'VLAN', 'ARP', 'Routing', 'Packet capture'],
  },
  {
    name: 'Internet Service Provider Operations',
    evidence:
      'Run internet service provider operations: PPPoE, hotspot, DHCP, NAT and provider escalation.',
    skills: ['PPPoE', 'Hotspot', 'DHCP', 'NAT', 'Provider escalation'],
  },
  {
    name: 'Software, Automation and AI',
    evidence:
      'Built Zynthos Orchestrator, a platform for building, deploying and running AI agents, and Cloud SMS Engine, a bulk SMS platform with a dashboard and API.',
    skills: [
      'React',
      'TypeScript',
      'Node.js',
      'Python (Flask)',
      'PostgreSQL',
      'REST APIs',
      'AI agents',
    ],
  },
];

const Skills = () => {
  useDocumentMeta({
    title: 'Skills',
    description:
      'Network engineering on MikroTik RouterOS 7, fault diagnosis, internet service provider operations, and software and automation, each backed by real work.',
  });

  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        eyebrow="// skills"
        title="Skills & expertise"
        subtitle="Grouped by the work I do. Each group is backed by something I designed, diagnosed, ran or built."
      >
        <div className="mt-10">
          <p className="label-mono mb-3">Core stack</p>
          <ul className="flex flex-wrap gap-2">
            {coreStack.map((t) => (
              <li
                key={t}
                className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-sm font-medium text-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </PageHeader>

      <section className="py-12 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="border-b border-border">
            {categories.map((category, index) => (
              <li key={category.name}>
                <Reveal delay={Math.min(index * 0.05, 0.15)}>
                  <article className="grid gap-x-16 gap-y-6 border-t border-border py-12 md:py-16 lg:grid-cols-[13rem_1fr]">
                    <p className="label-mono flex items-center gap-3 self-start lg:pt-3">
                      <span className="text-primary">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span aria-hidden className="h-px w-6 bg-border" />
                      {index === 0 ? 'Primary' : 'Supporting'}
                    </p>

                    <div className="min-w-0">
                      <h2 className="text-3xl font-medium leading-tight tracking-[-0.03em] md:text-4xl">
                        {category.name}
                      </h2>

                      <div className="mt-6 max-w-3xl border-l-2 border-primary pl-5">
                        <p className="label-mono mb-2">Evidence</p>
                        <p className="text-lg leading-relaxed text-foreground">
                          {category.evidence}
                        </p>
                      </div>

                      <ul
                        aria-label={`${category.name} skills`}
                        className="mt-8 flex flex-wrap gap-2"
                      >
                        {category.skills.map((skill) => (
                          <li
                            key={skill}
                            className="rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground"
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
};

export default Skills;
