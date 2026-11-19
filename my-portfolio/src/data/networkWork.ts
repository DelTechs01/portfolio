// Network engineering work, done as an engineer at an internet service provider.
//
// Everything here is stated fact. Do not add numbers, names, timings or
// topology details that are not real: a thin, true case study beats a rich,
// invented one. Fields left out (employer, dates, subscriber counts, outage
// duration) can be added when they are ready to publish.

export interface NetworkCase {
  id: string;
  title: string;
  /** Short label shown beside the title in lists. */
  kind: string;
  summary: string;
  context: string;
  platform: string[];
  outcomes: { label: string; value: string }[];
  /** Heading + items for the "what it involved" block. */
  involved: { heading: string; items: string[] };
  diagram: 'failover' | 'layers';
}

export const networkWork: NetworkCase[] = [
  {
    id: 'dual-link-failover',
    title: 'Dual link load balancing and automatic failover',
    kind: 'Network design',
    summary:
      'Designed dual link load balancing and automatic failover on MikroTik RouterOS 7, raising usable capacity from 190 to 224 Mbps with no customer downtime.',
    context: 'Designed and built as an engineer at an internet service provider.',
    platform: ['MikroTik RouterOS 7'],
    outcomes: [
      { label: 'Usable capacity before', value: '190 Mbps' },
      { label: 'Usable capacity after', value: '224 Mbps' },
      { label: 'Customer downtime', value: 'None' },
    ],
    involved: {
      heading: 'Built on policy routing',
      items: [
        'Routing tables',
        'Mangle rules',
        'Connection marks',
        'Health check scripts',
      ],
    },
    diagram: 'failover',
  },
  {
    id: 'multi-provider-outage',
    title: 'Multi provider outage diagnosis',
    kind: 'Fault diagnosis',
    summary:
      "Diagnosed a multi provider outage across optics, VLAN, ARP, routing and packet capture, and proved the fault was on the upstream provider's side.",
    context: 'Diagnosed as an engineer at an internet service provider.',
    platform: ['Optics', 'VLAN', 'ARP', 'Routing', 'Packet capture'],
    outcomes: [
      { label: 'Areas checked', value: '5' },
      { label: 'Fault located', value: 'Upstream provider' },
    ],
    involved: {
      heading: 'Checked across',
      items: ['Optics', 'VLAN', 'ARP', 'Routing', 'Packet capture'],
    },
    diagram: 'layers',
  },
];
