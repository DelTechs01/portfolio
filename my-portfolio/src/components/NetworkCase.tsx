import { Link } from 'wouter';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/PageHeader';
import Reveal from '@/components/Reveal';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import type { NetworkCase as NetworkCaseType } from '@/data/networkWork';

const box = 'fill-[var(--card)] stroke-[var(--border)]';
const text = 'fill-[var(--foreground)] font-sans';
const sub = 'fill-[var(--muted-foreground)] font-mono';
const wire = 'stroke-[var(--muted-foreground)]';
const hot = 'stroke-[var(--primary)]';

/** Simplified view: two upstream links into one RouterOS 7 router, then customers. */
function FailoverDiagram() {
  return (
    <svg
      viewBox="0 0 720 300"
      role="img"
      aria-label="Simplified diagram: two upstream links feed one MikroTik RouterOS 7 router, which serves customers. Policy routing balances traffic across both links and fails over automatically."
      className="w-full h-auto"
    >
      <rect x="20" y="40" width="170" height="70" rx="10" strokeWidth="1" className={box} />
      <text x="105" y="72" textAnchor="middle" fontSize="15" className={text}>Upstream link A</text>
      <text x="105" y="93" textAnchor="middle" fontSize="11" className={sub}>PROVIDER</text>

      <rect x="20" y="190" width="170" height="70" rx="10" strokeWidth="1" className={box} />
      <text x="105" y="222" textAnchor="middle" fontSize="15" className={text}>Upstream link B</text>
      <text x="105" y="243" textAnchor="middle" fontSize="11" className={sub}>PROVIDER</text>

      <path d="M190 75 C 240 75, 240 135, 285 135" fill="none" strokeWidth="1.5" className={hot} />
      <path d="M190 225 C 240 225, 240 165, 285 165" fill="none" strokeWidth="1.5" className={hot} />

      <rect x="285" y="85" width="200" height="130" rx="12" strokeWidth="1.5" className="fill-[var(--card)] stroke-[var(--primary)]" />
      <text x="385" y="118" textAnchor="middle" fontSize="15" className={text}>MikroTik RouterOS 7</text>
      <text x="385" y="143" textAnchor="middle" fontSize="11" className={sub}>MANGLE RULES</text>
      <text x="385" y="161" textAnchor="middle" fontSize="11" className={sub}>CONNECTION MARKS</text>
      <text x="385" y="179" textAnchor="middle" fontSize="11" className={sub}>ROUTING TABLES</text>
      <text x="385" y="197" textAnchor="middle" fontSize="11" className={sub}>HEALTH CHECK SCRIPTS</text>

      <path d="M485 150 L 540 150" fill="none" strokeWidth="1.5" className={wire} />

      <rect x="540" y="115" width="160" height="70" rx="10" strokeWidth="1" className={box} />
      <text x="620" y="147" textAnchor="middle" fontSize="15" className={text}>Customers</text>
      <text x="620" y="168" textAnchor="middle" fontSize="11" className={sub}>NO DOWNTIME</text>
    </svg>
  );
}

/** The layers checked, in order, ending at the finding. */
function LayersDiagram({ layers }: { layers: string[] }) {
  return (
    <ol className="max-w-md">
      {layers.map((layer, i) => (
        <li key={layer} className="relative flex items-center gap-4 pb-6">
          <span
            aria-hidden
            className="absolute left-[15px] top-8 h-full w-px bg-border"
          />
          <span className="relative z-10 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-card font-mono text-xs text-muted-foreground">
            {i + 1}
          </span>
          <span className="text-lg">{layer}</span>
        </li>
      ))}
      <li className="relative flex items-center gap-4">
        <span className="relative z-10 inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
          <ArrowRight className="size-4" />
        </span>
        <span className="text-lg font-medium text-primary">
          Fault proven on the upstream provider&apos;s side
        </span>
      </li>
    </ol>
  );
}

export default function NetworkCase({ work }: { work: NetworkCaseType }) {
  useDocumentMeta({ title: work.title, description: work.summary });

  return (
    <div className="min-h-screen bg-background">
      <PageHeader eyebrow="// network-work" title={work.title} subtitle={work.summary}>
        <p className="mt-6 text-sm text-muted-foreground">{work.context}</p>
      </PageHeader>

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="label-mono mb-6">Outcome</h2>
            <dl className="grid gap-x-10 gap-y-8 border-t border-border pt-8 sm:grid-cols-3">
              {work.outcomes.map((o) => (
                <div key={o.label}>
                  <dt className="label-mono">{o.label}</dt>
                  <dd className="mt-2 text-3xl font-medium tracking-tight md:text-4xl">
                    {o.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal>
            <div className="grid gap-12 border-t border-border pt-10 lg:grid-cols-[1fr_1.6fr]">
              <div>
                <h2 className="label-mono mb-6">{work.involved.heading}</h2>
                <ul className="flex flex-wrap gap-2">
                  {work.involved.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="label-mono mb-6">
                  {work.diagram === 'failover' ? 'Simplified view' : 'Path to the finding'}
                </h2>
                {work.diagram === 'failover' ? (
                  <div
                    tabIndex={0}
                    role="group"
                    aria-label="Network diagram, scrollable on small screens"
                    className="overflow-x-auto rounded-2xl border border-border bg-card/40 p-4 sm:p-8"
                  >
                    <div className="min-w-[36rem]">
                      <FailoverDiagram />
                    </div>
                  </div>
                ) : (
                  <LayersDiagram layers={work.involved.items} />
                )}
              </div>
            </div>
          </Reveal>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
              Back to projects
            </Link>
            <Button className="h-11 rounded-full px-6" asChild>
              <Link href="/contact">Ask me about this work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
